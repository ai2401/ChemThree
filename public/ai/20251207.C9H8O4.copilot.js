// 1. CONFIGURATION
const title = "Aspirin (Acetylsalicylic acid, C9H8O4)";
const description = "A benzene ring with a carboxyl group and an ortho acetoxy substituent. Planar aromatic core with ester and carboxyl functionalities.";

// 2. ATOMS DEFINITION
const atoms = [
  // Benzene ring (approximate hexagon, z = 0)
  { id: 'C1', element: 'C', position: [1.4, 0.0, 0.0], color: '#334155', radius: 0.6 },
  { id: 'C2', element: 'C', position: [0.7, 1.212, 0.0], color: '#334155', radius: 0.6 },
  { id: 'C3', element: 'C', position: [-0.7, 1.212, 0.0], color: '#334155', radius: 0.6 },
  { id: 'C4', element: 'C', position: [-1.4, 0.0, 0.0], color: '#334155', radius: 0.6 },
  { id: 'C5', element: 'C', position: [-0.7, -1.212, 0.0], color: '#334155', radius: 0.6 },
  { id: 'C6', element: 'C', position: [0.7, -1.212, 0.0], color: '#334155', radius: 0.6 },

  // Ring hydrogens (four, since two substituents)
  { id: 'H1', element: 'H', position: [-1.3, 2.1, 0.0], color: '#f8fafc', radius: 0.35 },   // on C3
  { id: 'H2', element: 'H', position: [-2.5, 0.0, 0.0], color: '#f8fafc', radius: 0.35 },    // on C4
  { id: 'H3', element: 'H', position: [-1.3, -2.1, 0.0], color: '#f8fafc', radius: 0.35 },  // on C5
  { id: 'H4', element: 'H', position: [1.5, -2.0, 0.0], color: '#f8fafc', radius: 0.35 },   // on C6

  // Carboxyl group at C1: -C(=O)OH
  { id: 'C7', element: 'C', position: [2.6, 0.0, 0.0], color: '#334155', radius: 0.6 },      // carbonyl carbon
  { id: 'O1', element: 'O', position: [3.4, 0.6, 0.0], color: '#ef4444', radius: 0.55 },     // carbonyl oxygen
  { id: 'O2', element: 'O', position: [3.4, -0.6, 0.0], color: '#ef4444', radius: 0.55 },    // hydroxyl oxygen
  { id: 'H5', element: 'H', position: [4.1, -1.1, 0.0], color: '#f8fafc', radius: 0.35 },    // hydroxyl hydrogen

  // Acetoxy group at C2: -O-C(=O)-CH3
  { id: 'O3', element: 'O', position: [1.5, 2.0, 0.0], color: '#ef4444', radius: 0.55 },     // linking oxygen from ring
  { id: 'C8', element: 'C', position: [2.6, 2.0, 0.0], color: '#334155', radius: 0.6 },      // ester carbonyl carbon
  { id: 'O4', element: 'O', position: [3.4, 2.7, 0.0], color: '#ef4444', radius: 0.55 },     // ester carbonyl oxygen
  { id: 'C9', element: 'C', position: [3.4, 1.3, 0.0], color: '#334155', radius: 0.6 },      // methyl carbon

  // Methyl hydrogens (3D offsets for clarity)
  { id: 'H6', element: 'H', position: [4.3, 1.3, 0.8], color: '#f8fafc', radius: 0.35 },
  { id: 'H7', element: 'H', position: [3.3, 0.4, -0.7], color: '#f8fafc', radius: 0.35 },
  { id: 'H8', element: 'H', position: [2.8, 1.9, 0.7], color: '#f8fafc', radius: 0.35 },
];

// 3. BONDS DEFINITION
const bonds = [
  // Aromatic ring (alternating double bonds)
  { id: 'b1', source: 'C1', target: 'C2', order: 2 },
  { id: 'b2', source: 'C2', target: 'C3', order: 1 },
  { id: 'b3', source: 'C3', target: 'C4', order: 2 },
  { id: 'b4', source: 'C4', target: 'C5', order: 1 },
  { id: 'b5', source: 'C5', target: 'C6', order: 2 },
  { id: 'b6', source: 'C6', target: 'C1', order: 1 },

  // Ring hydrogens
  { id: 'b7', source: 'C3', target: 'H1', order: 1 },
  { id: 'b8', source: 'C4', target: 'H2', order: 1 },
  { id: 'b9', source: 'C5', target: 'H3', order: 1 },
  { id: 'b10', source: 'C6', target: 'H4', order: 1 },

  // Carboxyl group
  { id: 'b11', source: 'C1', target: 'C7', order: 1 },
  { id: 'b12', source: 'C7', target: 'O1', order: 2 },
  { id: 'b13', source: 'C7', target: 'O2', order: 1 },
  { id: 'b14', source: 'O2', target: 'H5', order: 1 },

  // Acetoxy group
  { id: 'b15', source: 'C2', target: 'O3', order: 1 },
  { id: 'b16', source: 'O3', target: 'C8', order: 1 },
  { id: 'b17', source: 'C8', target: 'O4', order: 2 },
  { id: 'b18', source: 'C8', target: 'C9', order: 1 },

  // Methyl hydrogens
  { id: 'b19', source: 'C9', target: 'H6', order: 1 },
  { id: 'b20', source: 'C9', target: 'H7', order: 1 },
  { id: 'b21', source: 'C9', target: 'H8', order: 1 },
];

// 4. RETURN DATA
return {
  title,
  description,
  atoms,
  bonds
};