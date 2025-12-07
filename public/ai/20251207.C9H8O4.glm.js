const title = "Aspirin (C9H8O4)";
const description = "A salicylate drug, often used as an analgesic to relieve minor aches and pains, as an antipyretic to reduce fever, and as an anti-inflammatory medication.";

// 2. ATOMS DEFINITION
const atoms = [
  // Benzene Ring Carbons
  { id: 'C1', element: 'C', position: [0, 1.2, 0], color: '#334155', radius: 0.6 },
  { id: 'C2', element: 'C', position: [1.04, 0.6, 0], color: '#334155', radius: 0.6 },
  { id: 'C3', element: 'C', position: [1.04, -0.6, 0], color: '#334155', radius: 0.6 },
  { id: 'C4', element: 'C', position: [0, -1.2, 0], color: '#334155', radius: 0.6 },
  { id: 'C5', element: 'C', position: [-1.04, -0.6, 0], color: '#334155', radius: 0.6 },
  { id: 'C6', element: 'C', position: [-1.04, 0.6, 0], color: '#334155', radius: 0.6 },

  // Benzene Ring Hydrogens (on positions not substituted)
  { id: 'H3', element: 'H', position: [1.99, -1.15, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H4', element: 'H', position: [0, -2.3, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H5', element: 'H', position: [-1.99, -1.15, 0], color: '#f8fafc', radius: 0.35 },
  { id: 'H6', element: 'H', position: [-1.99, 1.15, 0], color: '#f8fafc', radius: 0.35 },

  // Carboxylic Acid Group (-COOH) at position 1
  { id: 'C7', element: 'C', position: [0, 2.7, 0], color: '#334155', radius: 0.6 },
  { id: 'O1', element: 'O', position: [0, 2.7, 1.2], color: '#ef4444', radius: 0.6 },
  { id: 'O2', element: 'O', position: [0, 4.0, 0], color: '#ef4444', radius: 0.6 },
  { id: 'H_OH', element: 'H', position: [0, 5.0, 0], color: '#f8fafc', radius: 0.35 },

  // Ester Group (-O-C(=O)-CH3) at position 2
  { id: 'O3', element: 'O', position: [2.44, 0.6, 0.2], color: '#ef4444', radius: 0.6 },
  { id: 'C8', element: 'C', position: [1.74, 1.8, 0], color: '#334155', radius: 0.6 },
  { id: 'O4', element: 'O', position: [1.74, 1.8, 1.2], color: '#ef4444', radius: 0.6 },
  { id: 'C9', element: 'C', position: [2.44, 0.6, -0.2], color: '#334155', radius: 0.6 },

  // Methyl Group (-CH3) Hydrogens
  { id: 'H_CH3_1', element: 'H', position: [3.54, 0.6, -0.2], color: '#f8fafc', radius: 0.35 },
  { id: 'H_CH3_2', element: 'H', position: [1.89, 1.55, -0.2], color: '#f8fafc', radius: 0.35 },
  { id: 'H_CH3_3', element: 'H', position: [1.89, -0.35, -0.2], color: '#f8fafc', radius: 0.35 },
];

// 3. BONDS DEFINITION
const bonds = [
  // Benzene Ring Bonds
  { id: 'b1', source: 'C1', target: 'C2', order: 1 },
  { id: 'b2', source: 'C2', target: 'C3', order: 1 },
  { id: 'b3', source: 'C3', target: 'C4', order: 1 },
  { id: 'b4', source: 'C4', target: 'C5', order: 1 },
  { id: 'b5', source: 'C5', target: 'C6', order: 1 },
  { id: 'b6', source: 'C6', target: 'C1', order: 1 },

  // Benzene to Hydrogen Bonds
  { id: 'b7', source: 'C3', target: 'H3', order: 1 },
  { id: 'b8', source: 'C4', target: 'H4', order: 1 },
  { id: 'b9', source: 'C5', target: 'H5', order: 1 },
  { id: 'b10', source: 'C6', target: 'H6', order: 1 },

  // Carboxylic Acid Group Bonds
  { id: 'b11', source: 'C1', target: 'C7', order: 1 },
  { id: 'b12', source: 'C7', target: 'O1', order: 2 },
  { id: 'b13', source: 'C7', target: 'O2', order: 1 },
  { id: 'b14', source: 'O2', target: 'H_OH', order: 1 },

  // Ester Group Bonds
  { id: 'b15', source: 'C2', target: 'O3', order: 1 },
  { id: 'b16', source: 'O3', target: 'C8', order: 1 },
  { id: 'b17', source: 'C8', target: 'O4', order: 2 },
  { id: 'b18', source: 'C8', target: 'C9', order: 1 },

  // Methyl Group Bonds
  { id: 'b19', source: 'C9', target: 'H_CH3_1', order: 1 },
  { id: 'b20', source: 'C9', target: 'H_CH3_2', order: 1 },
  { id: 'b21', source: 'C9', target: 'H_CH3_3', order: 1 },
];

// 4. RETURN DATA
return {
  title,
  description,
  atoms,
  bonds
};