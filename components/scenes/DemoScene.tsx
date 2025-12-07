
import React, { useState, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MoleculeStructure } from '../../types';
import { MoleculeRenderer } from '../MoleculeRenderer';

/**
 * Default template code that appears in the editor.
 * Designed to be self-describing for AI agents.
 */
const DEFAULT_CODE = `
/**
 * ============================================================================
 *  🧪 AI GENERATION TEMPLATE (AI 生成模版)
 * ============================================================================
 *  
 *  [ HOW TO USE / 使用方法 ]
 *  1. Copy ALL the code below. (复制下方所有代码)
 *  2. Send it to an AI (ChatGPT, Gemini, Claude) with this request:
 *     (发送给 AI，并附带以下指令)
 *  
 *     "Refactor the code below to represent [ MOLECULE_NAME ]. 
 *      Output ONLY raw valid JavaScript code. No markdown."
 * 
 *     "请参考下方代码格式，生成 [ 分子名称 ] 的结构数据。
 *      只返回纯 JavaScript 代码，不要使用 Markdown 格式。"
 *
 *  ============================================================================
 *  [ SYSTEM INSTRUCTIONS FOR AI ]
 *  1.  Context: The code below renders Methane (CH4).
 *  2.  Task: Replace the atoms and bonds to render the requested molecule.
 *  3.  Return Object Format:
 *      {
 *        title: string,
 *        description: string,
 *        atoms: Array<{ id, element, position: [x,y,z], color, radius }>,
 *        bonds: Array<{ id, source, target, order }>
 *      }
 *  4.  Coordinate System: Cartesian 3D (x, y, z).
 *  5.  Constraint: Do NOT wrap output in \`\`\`javascript blocks. Raw text only.
 * ============================================================================
 */

// 1. CONFIGURATION
const title = "Methane (CH4)";
const description = "The simplest alkane. A central carbon atom bonded to four hydrogen atoms in a tetrahedral geometry.";

// 2. ATOMS DEFINITION
const atoms = [
  // Center Carbon
  { id: 'C1', element: 'C', position: [0, 0, 0], color: '#334155', radius: 0.6 },
  
  // 4 Hydrogens (Tetrahedral arrangement approx +/- 0.8 distance)
  { id: 'H1', element: 'H', position: [0.8, 0.8, 0.8], color: '#f8fafc', radius: 0.35 },
  { id: 'H2', element: 'H', position: [-0.8, -0.8, 0.8], color: '#f8fafc', radius: 0.35 },
  { id: 'H3', element: 'H', position: [-0.8, 0.8, -0.8], color: '#f8fafc', radius: 0.35 },
  { id: 'H4', element: 'H', position: [0.8, -0.8, -0.8], color: '#f8fafc', radius: 0.35 },
];

// 3. BONDS DEFINITION
const bonds = [
  { id: 'b1', source: 'C1', target: 'H1', order: 1 },
  { id: 'b2', source: 'C1', target: 'H2', order: 1 },
  { id: 'b3', source: 'C1', target: 'H3', order: 1 },
  { id: 'b4', source: 'C1', target: 'H4', order: 1 },
];

// 4. RETURN DATA
return {
  title,
  description,
  atoms,
  bonds
};
`;

export const DemoScene: React.FC = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<MoleculeStructure | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const bodyRef = useRef(document.body);
  const groupRef = useRef<THREE.Group>(null);

  // Function to compile and execute the string code
  const compileCode = (codeString: string) => {
    try {
      const func = new Function('THREE', codeString);
      const result = func(THREE);

      if (!result || !Array.isArray(result.atoms) || !Array.isArray(result.bonds)) {
        throw new Error("Return object must contain 'atoms' and 'bonds' arrays.");
      }

      setData(result);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Syntax Error");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      compileCode(code);
    }, 500);
    return () => clearTimeout(timer);
  }, [code]);

  // Smoothly shift the model to the right when the editor is open
  useFrame((state, delta) => {
    if (groupRef.current) {
        // Shift 3D model to the right so it's not hidden by the UI
        const targetX = isOpen ? 2.5 : 0;
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, delta * 4);
    }
  });

  // Helper to prevent 3D controls from hijacking events inside the UI
  const stopPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* 3D Content Container */}
      <group ref={groupRef}>
        {data ? (
            <MoleculeRenderer data={data} scale={1.2} />
        ) : (
            <mesh>
                <boxGeometry args={[1,1,1]} />
                <meshStandardMaterial color="red" wireframe />
            </mesh>
        )}
      </group>

      {/* 
         Editor Interface
         We use 'fixed' positioning and override calculatePosition to ensure the UI 
         is completely detached from the 3D scene's camera movement (panning).
      */}
      <Html 
        portal={bodyRef} 
        calculatePosition={() => [0, 0]} // Force 3D projection to always return 0,0
        style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            pointerEvents: 'none', 
            zIndex: 100 
        }}
      >
        <div className="w-full h-full relative pointer-events-none font-sans">
            
            {/* Reopen Button (Floating on Left) */}
            <div className={`absolute left-0 top-32 transition-all duration-300 ${!isOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                 <button 
                    onClick={() => setIsOpen(true)}
                    onPointerDown={stopPropagation}
                    className="bg-slate-900/90 text-slate-200 p-3 pr-4 rounded-r-xl shadow-xl border border-white/10 hover:bg-indigo-600 hover:text-white transition-allQX flex items-center gap-3 group backdrop-blur-md"
                    title="Open Code Editor"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    <span className="text-xs font-bold tracking-wider">EDITOR</span>
                </button>
            </div>

            {/* The Editor Panel - Fixed Left Sidebar */}
            <div 
                className={`absolute left-0 top-0 bottom-0 w-full md:w-[480px] bg-[#0f172a] border-r border-white/10 flex flex-col pointer-events-auto shadow-2xl transition-transform duration-500 cubic-bezier(0.19, 1, 0.22, 1) ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                // Crucial: Stop event propagation so clicking here doesn't rotate the 3D scene
                onPointerDown={stopPropagation}
                onPointerUp={stopPropagation}
                onPointerMove={stopPropagation}
                onWheel={stopPropagation}
                onKeyDown={stopPropagation}
            >
                
                {/* Toolbar */}
                <div className="flex items-center justify-between p-4 pl-6 border-b border-white/10 bg-slate-900/50">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                        <h3 className="text-sm font-bold text-slate-100 tracking-widest font-mono">LIVE EDITOR</h3>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => setCode(DEFAULT_CODE)}
                            className="text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-indigo-400 transition-colors px-2 py-1 rounded hover:bg-white/5"
                        >
                        Reset
                        </button>

                        <div className="w-px h-4 bg-white/10 mx-1"></div>

                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 border border-transparent transition-all p-1.5 rounded-lg"
                            title="Close Editor"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>
                </div>

                {/* Code Area */}
                <div className="flex-1 relative group bg-[#0b1121]">
                    <div className="absolute inset-0 overflow-hidden">
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full h-full bg-transparent text-xs md:text-sm font-mono text-slate-300 p-6 resize-none focus:outline-none focus:ring-0 leading-relaxed selection:bg-indigo-500/30 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                            spellCheck={false}
                            autoCapitalize="off"
                            autoComplete="off"
                            autoCorrect="off"
                        />
                    </div>
                </div>

                {/* Status Bar */}
                <div className={`px-4 py-3 text-xs font-mono border-t border-white/5 flex items-center justify-between bg-slate-900/80`}>
                    <div className="flex items-center gap-2">
                         <div className={`w-1.5 h-1.5 rounded-full ${error ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
                         <span className={error ? 'text-red-400' : 'text-emerald-400'}>
                            {error ? 'SYNTAX ERROR' : 'Cc: COMPILED'}
                         </span>
                    </div>
                    <div className="text-slate-600">JS</div>
                </div>

                 {/* Error Detail (if any) */}
                 {error && (
                    <div className="px-4 py-2 bg-red-900/20 border-t border-red-500/20 text-red-300 text-[10px] font-mono whitespace-pre-wrap break-words">
                        {error}
                    </div>
                 )}
                
                {/* Helper Hint */}
                <div className="p-5 bg-slate-900 border-t border-white/10 text-slate-400 text-xs leading-5">
                   <p className="mb-2 text-indigo-300 font-semibold">AI Assistant Workflow:</p>
                   <ul className="list-disc pl-4 space-y-1 opacity-70 italic">
                      <li>Copy the code above.</li>
                      <li>Prompt AI: "Refactor this for [Molecule Name]".</li>
                      <li>Paste the result back here.</li>
                   </ul>
                </div>
            </div>
        </div>
      </Html>
    </>
  );
};
