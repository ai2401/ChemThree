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
 *     "Refactor the code below to represent [ 阿司匹林]. 
 *      Output ONLY raw valid JavaScript code. No markdown."
 * 
 *     "请参考下方代码格式，生成 [ 阿司匹林 ] 的结构数据。
 *      只返回纯 JavaScript 代码，不要使用 Markdown 格式。"
 *
 * ============================================================================
 *  [ SYSTEM INSTRUCTIONS FOR AI ]
 *  1.  Context: The code below renders Aspirin (C9H8O4).
 *  2.  Task: Replace the atoms and bonds to render the requested molecule.
 *  3.  Return Object Format:
 *       {
 *         title: string,
 *         description: string,
 *         atoms: Array<{ id, element, position: [x,y,z], color, radius }>,
 *         bonds: Array<{ id, source, target, order }>
 *       }
 *  4.  Coordinate System: Cartesian 3D (x, y, z).
 *  5.  Constraint: Do NOT wrap output in ```javascript blocks. Raw text only.
 * ============================================================================
 */

// 1. CONFIGURATION
const title = "Aspirin (Acetylsalicylic Acid)";
const description = "A widely used pain reliever and anti-inflammatory drug. Contains a benzene ring with carboxylic acid and acetyl ester functional groups.";

// 2. ATOMS DEFINITION
const atoms = [
  // Benzene ring carbons (hexagonal arrangement, radius ~1.4)
  { id: 'C1', element: 'C', position: [1.4, 0, 0], color: '#334155', radius: 0.6 },
  { id: 'C2', element: 'C', position: [0.7, 1.21, 0], color: '#334155', radius: 0.6 },
  { id: 'C3', element: 'C', position: [-0.7, 1.21, 0], color: '#334155', radius: 0.6 },
  { id: 'C4', element: 'C', position: [-1.4, 0, 0], color: '#334155', radius: 0.6 },
  { id: 'C5', element: 'C', position: [-0.7, -1.21, 0], color: '#334155', radius: 0.6 },
  { id: 'C6', element: 'C', position: [0.7, -1.21, 0], color: '#334155', radius: 0.6 },
  
  // Carboxylic acid group on C1
  { id: 'C7', element: 'C', position: [2.8, 0, 0], color: '#334155', radius: 0.6 },
  { id: 'O1', element: 'O', position: [3.5, 0.8, 0], color: '#ef4444', radius: 0.5 },
  { id: 'O2', element: 'O', position: [3.5, -0.8, 0], color: '#ef4444', radius: 0.5 },
  
  // Acetyl ester group on C6
  { id: 'C8', element: 'C', position: [1.4, -2.42, 0], color: '#334155', radius: 0.6 },
  { id: 'O3', element: 'O', position: [2.1, -2.42, 0], color: '#ef4444', radius: 0.5 },
  { id: 'C9', element: 'C', position: [2.8, -2.42, 0], color: '#334155', radius: 0.6 },
  { id: 'O4', element: 'O', position: [3.5, -1.6, 0], color: '#ef4444', radius: 0.5 },
  
  // Hydrogens on ring (substituted positions don't have H)
  { id: 'H1', element: 'H', position: [0.7, 2.1, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H2', element: 'H', position: [-1.4, 2.1, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H3', element: 'H', position: [-2.8, 0, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H4', element: 'H', position: [-1.4, -2.1, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H5', element: 'H', position: [2.8, -2.42, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H6', element: 'H', position: [3.5, -3.2, 0], color: '#f8fafc', radius: 0.35 },
  
  // Hydroxyl hydrogen on carboxylic acid
  { id: 'H7', element: 'H', position: [4.2, -0.8, 0], color: '#f8fafc', radius: 0.35 },
];

// 3. BONDS DEFINITION
const bonds = [
  // Benzene ring bonds
  { id: 'b1', source: 'C1', target: 'C2', order: 1 },
  { id: 'b2', source: 'C2', target: 'C3', order: 1 },
  { id: 'b3', source: 'C3', target: 'C4', order: 1 },
  { id: 'b4', source: 'C4', target: 'C5', order: 1 },
  { id: 'b5', source: 'C5', target: 'C6', order: 1 },
  { id: 'b6', source: 'C6', target: 'C1', order: 1 },
  
  // Carboxylic acid group
  { id: 'b7', source: 'C1', target: 'C7', order: 1 },
  { id: 'b8', source: 'C7', target: 'O1', order: 2 },
  { id: 'b9', source: 'C7', target: 'O2', order: 1 },
  { id: 'b10', source: 'O2', target: 'H7', order: 1 },
  
  // Acetyl ester group
  { id: 'b11', source: 'C6', target: 'C8', order: 1 },
  { id: 'b12', source: 'C8', target: 'O3', order: 1 },
  { id: 'b13', source: 'O3', target: 'C9', order: 1 },
  { id: 'b14', source: 'C9', target: 'O4', order: 2 },
  { id: 'b15', source: 'O4', target: 'H6', order: 1 },
  
  // Ring hydrogens
  { id: 'b16', source: 'C3', target: 'H1', order: 1 },
  { id: 'b17', source: 'C4', target: 'H2', order: 1 },
  { id: 'b18', source: 'C5', target: 'H3', order: 1 },
  { id: 'b19', source: 'C6', target: 'H4', order: 1 },
  { id: 'b20', source: 'C9', target: 'H5', order: 1 },
];

// 4. RETURN DATA
return {
  title,
  description,
  atoms,
  bonds
};