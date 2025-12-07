return {
  title: "Aspirin (Acetylsalicylic Acid)",
  description: "A common analgesic and anti-inflammatory drug. Chemical formula: C9H8O4. Contains a benzene ring with carboxylic acid and ester functional groups.",
  atoms: [
    // Benzene ring (6 carbons)
    { id: 'C1', element: 'C', position: [0.0, 0.0, 0.0], color: '#334155', radius: 0.6 },
    { id: 'C2', element: 'C', position: [1.4, 0.0, 0.0], color: '#334155', radius: 0.6 },
    { id: 'C3', element: 'C', position: [2.1, 1.2, 0.0], color: '#334155', radius: 0.6 },
    { id: 'C4', element: 'C', position: [1.4, 2.4, 0.0], color: '#334155', radius: 0.6 },
    { id: 'C5', element: 'C', position: [0.0, 2.4, 0.0], color: '#334155', radius: 0.6 },
    { id: 'C6', element: 'C', position: [-0.7, 1.2, 0.0], color: '#334155', radius: 0.6 },

    // Carboxylic acid group on C1
    { id: 'C7', element: 'C', position: [-1.4, -1.0, 0.0], color: '#334155', radius: 0.6 },
    { id: 'O1', element: 'O', position: [-2.5, -1.0, 0.0], color: '#ec4899', radius: 0.55 },
    { id: 'O2', element: 'O', position: [-1.4, -2.2, 0.0], color: '#ec4899', radius: 0.55 },
    { id: 'H1', element: 'H', position: [-1.4, -3.2, 0.0], color: '#f8fafc', radius: 0.35 },

    // Ester group on C2 (acetyl)
    { id: 'C8', element: 'C', position: [2.8, -1.0, 0.0], color: '#334155', radius: 0.6 },
    { id: 'O3', element: 'O', position: [3.8, -1.0, 0.0], color: '#ec4899', radius: 0.55 },
    { id: 'C9', element: 'C', position: [2.8, -2.2, 0.0], color: '#334155', radius: 0.6 },
    { id: 'H2', element: 'H', position: [3.5, -2.8, 0.0], color: '#f8fafc', radius: 0.35 },
    { id: 'H3', element: 'H', position: [2.1, -2.8, 0.0], color: '#f8fafc', radius: 0.35 },
    { id: 'H4', element: 'H', position: [2.8, -3.2, 0.0], color: '#f8fafc', radius: 0.35 },

    // Aromatic hydrogens
    { id: 'H5', element: 'H', position: [2.1, 2.0, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H6', element: 'H', position: [0.0, 2.0, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H7', element: 'H', position: [-1.2, 1.2, 0.8], color: '#f8fafc', radius: 0.35 }
  ],
  bonds: [
    // Benzene ring bonds (alternating double/single)
    { id: 'b1', source: 'C1', target: 'C2', order: 2 },
    { id: 'b2', source: 'C2', target: 'C3', order: 1 },
    { id: 'b3', source: 'C3', target: 'C4', order: 2 },
    { id: 'b4', source: 'C4', target: 'C5', order: 1 },
    { id: 'b5', source: 'C5', target: 'C6', order: 2 },
    { id: 'b6', source: 'C6', target: 'C1', order: 1 },

    // Carboxylic acid group
    { id: 'b7', source: 'C1', target: 'C7', order: 1 },
    { id: 'b8', source: 'C7', target: 'O1', order: 2 },
    { id: 'b9', source: 'C7', target: 'O2', order: 1 },
    { id: 'b10', source: 'O2', target: 'H1', order: 1 },

    // Ester group on C2
    { id: 'b11', source: 'C2', target: 'O3', order: 1 },
    { id: 'b12', source: 'O3', target: 'C9', order: 1 },
    { id: 'b13', source: 'C2', target: 'C8', order: 1 },
    { id: 'b14', source: 'C8', target: 'C9', order: 1 },
    { id: 'b15', source: 'C9', target: 'H2', order: 1 },
    { id: 'b16', source: 'C9', target: 'H3', order: 1 },
    { id: 'b17', source: 'C9', target: 'H4', order: 1 },

    // Aromatic hydrogens
    { id: 'b18', source: 'C4', target: 'H5', order: 1 },
    { id: 'b19', source: 'C5', target: 'H6', order: 1 },
    { id: 'b20', source: 'C6', target: 'H7', order: 1 }
  ]
}