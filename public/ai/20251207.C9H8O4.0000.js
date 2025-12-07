
/**
 * ============================================================================
 *  🧪 AI GENERATION TEMPLATE (AI 生成模版)
 * ============================================================================
 *  
 *  [ HOW TO USE / 使用方法 ]
 *  1. Copy ALL the code below. (复制下方所有代码)
 *  2. Send it to an AI (ChatGPT, Gemini, Claude) with this request:
 *     (发送给 AI，并附带以下指令)
 *  
 *     "Refactor the code below to represent [ 阿司匹林]. 
 *      Output ONLY raw valid JavaScript code. No markdown."
 * 
 *     "请参考下方代码格式，生成 [ 阿司匹林 ] 的结构数据。
 *      只返回纯 JavaScript 代码，不要使用 Markdown 格式。"
 *
 *  ============================================================================
 *  [ SYSTEM INSTRUCTIONS FOR AI ]
 *  1.  Context: The code below renders Methane (CH4).
 *  2.  Task: Replace the atoms and bonds to render the requested molecule.
 *  3.  Return Object Format:
 *      {
 *        title: string,
 *        description: string,
 *        atoms: Array<{ id, element, position: [x,y,z], color, radius }>,
 *        bonds: Array<{ id, source, target, order }>
 *      }
 *  4.  Coordinate System: Cartesian 3D (x, y, z).
 *  5.  Constraint: Do NOT wrap output in ```javascript blocks. Raw text only.
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