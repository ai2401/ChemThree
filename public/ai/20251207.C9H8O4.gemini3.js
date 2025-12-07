// 1. CONFIGURATION
const title = "Aspirin (C9H8O4)";
const description = "Acetylsalicylic acid. Consists of a benzene ring substituted with a carboxylic acid group and an ester group.";

// 2. ATOMS DEFINITION
const atoms = [
  // -- Benzene Ring (C1-C6) --
  { id: 'C1', element: 'C', position: [0, 1.4, 0], color: '#334155', radius: 0.6 },
  { id: 'C2', element: 'C', position: [1.2, 0.7, 0], color: '#334155', radius: 0.6 },
  { id: 'C3', element: 'C', position: [1.2, -0.7, 0], color: '#334155', radius: 0.6 },
  { id: 'C4', element: 'C', position: [0, -1.4, 0], color: '#334155', radius: 0.6 },
  { id: 'C5', element: 'C', position: [-1.2, -0.7, 0], color: '#334155', radius: 0.6 },
  { id: 'C6', element: 'C', position: [-1.2, 0.7, 0], color: '#334155', radius: 0.6 },

  // -- Carboxylic Acid Group (-COOH) attached to C1 --
  { id: 'C7', element: 'C', position: [-0.1, 2.9, 0.1], color: '#334155', radius: 0.6 },
  { id: 'O1', element: 'O', position: [1.0, 3.6, 0.2], color: '#ef4444', radius: 0.5 }, // Double bond O
  { id: 'O2', element: 'O', position: [-1.3, 3.4, 0.0], color: '#ef4444', radius: 0.5 }, // Single bond OH
  { id: 'H1', element: 'H', position: [-1.3, 4.3, 0.0], color: '#f8fafc', radius: 0.35 },

  // -- Acetyl/Ester Group (-O-CO-CH3) attached to C2 --
  { id: 'O3', element: 'O', position: [2.4, 1.4, -0.2], color: '#ef4444', radius: 0.5 }, // Bridge Oxygen
  { id: 'C8', element: 'C', position: [3.6, 1.0, -0.1], color: '#334155', radius: 0.6 }, // Carbonyl Carbon
  { id: 'O4', element: 'O', position: [3.9, -0.1, 0.1], color: '#ef4444', radius: 0.5 }, // Double bond O
  { id: 'C9', element: 'C', position: [4.6, 2.2, -0.3], color: '#334155', radius: 0.6 }, // Methyl Carbon

  // -- Methyl Hydrogens (on C9) --
  { id: 'H2', element: 'H', position: [4.4, 2.9, 0.5], color: '#f8fafc', radius: 0.35 },
  { id: 'H3', element: 'H', position: [5.6, 1.8, -0.3], color: '#f8fafc', radius: 0.35 },
  { id: 'H4', element: 'H', position: [4.5, 2.7, -1.2], color: '#f8fafc', radius: 0.35 },

  // -- Ring Hydrogens --
  { id: 'H5', element: 'H', position: [2.1, -1.2, 0], color: '#f8fafc', radius: 0.35 }, // on C3
  { id: 'H6', element: 'H', position: [0, -2.5, 0], color: '#f8fafc', radius: 0.35 },    // on C4
  { id: 'H7', element: 'H', position: [-2.1, -1.2, 0], color: '#f8fafc', radius: 0.35 }, // on C5
  { id: 'H8', element: 'H', position: [-2.1, 1.2, 0], color: '#f8fafc', radius: 0.35 },  // on C6
];

// 3. BONDS DEFINITION
const bonds = [
  // Benzene Ring (Alternating double bonds for visualization)
  { id: 'b1', source: 'C1', target: 'C2', order: 1 },
  { id: 'b2', source: 'C2', target: 'C3', order: 2 },
  { id: 'b3', source: 'C3', target: 'C4', order: 1 },
  { id: 'b4', source: 'C4', target: 'C5', order: 2 },
  { id: 'b5', source: 'C5', target: 'C6', order: 1 },
  { id: 'b6', source: 'C6', target: 'C1', order: 2 },

  // Carboxylic Acid Group
  { id: 'b7', source: 'C1', target: 'C7', order: 1 },
  { id: 'b8', source: 'C7', target: 'O1', order: 2 }, // C=O
  { id: 'b9', source: 'C7', target: 'O2', order: 1 }, // C-OH
  { id: 'b10', source: 'O2', target: 'H1', order: 1 },

  // Ester Group
  { id: 'b11', source: 'C2', target: 'O3', order: 1 },
  { id: 'b12', source: 'O3', target: 'C8', order: 1 },
  { id: 'b13', source: 'C8', target: 'O4', order: 2 }, // C=O
  { id: 'b14', source: 'C8', target: 'C9', order: 1 },
  
  // Methyl Hydrogens
  { id: 'b15', source: 'C9', target: 'H2', order: 1 },
  { id: 'b16', source: 'C9', target: 'H3', order: 1 },
  { id: 'b17', source: 'C9', target: 'H4', order: 1 },

  // Ring Hydrogens
  { id: 'b18', source: 'C3', target: 'H5', order: 1 },
  { id: 'b19', source: 'C4', target: 'H6', order: 1 },
  { id: 'b20', source: 'C5', target: 'H7', order: 1 },
  { id: 'b21', source: 'C6', target: 'H8', order: 1 },
];

// 4. RETURN DATA
return {
  title,
  description,
  atoms,
  bonds
};