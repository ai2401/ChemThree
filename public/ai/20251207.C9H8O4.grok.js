return {
  title: "Aspirin (Acetylsalicylic acid)",
  description: "2-(Acetyloxy)benzoic acid, commonly known as aspirin. A widely used analgesic, antipyretic, and anti-inflammatory drug.",
  atoms: [
    // Benzene ring carbons
    { id: 'C1', element: 'C', position: [0.00, 1.40, 0.00], color: '#334155', radius: 0.6 },
    { id: 'C2', element: 'C', position: [1.20, 0.70, 0.00], color: '#334155', radius: 0.6 },
    { id: 'C3', element: 'C', position: [1.20, -0.70, 0.00], color: '#334155', radius: 0.6 },
    { id: 'C4', element: 'C', position: [0.00, -1.40, 0.00], color: '#334155', radius: 0.6 },
    { id: 'C5', element: 'C', position: [-1.20, -0.70, 0.00], color: '#334155', radius: 0.6 },
    { id: 'C6', element: 'C', position: [-1.20, 0.70, 0.00], color: '#334155', radius: 0.6 },

    // Carboxylic acid group
    { id: 'C7', element: 'C', position: [0.00, 2.80, 0.00], color: '#334155', radius: 0.6 }, // carbonyl C
    { id: 'O8', element: 'O', position: [1.20, 3.30, 0.00], color: '#ef4444', radius: 0.55 }, // hydroxyl O
    { id: 'O9', element: 'O', position: [-1.00, 3.40, 0.00], color: '#ef4444', radius: 0.55 }, // carbonyl O

    // Ester group (acetyl)
    { id: 'C10', element: 'C', position: [2.40, 1.40, 0.00], color: '#334155', radius: 0.6 }, // ester carbonyl C
    { id: 'O11', element: 'O', position: [2.40, 0.00, 0.00], color: '#ef4444', radius: 0.55 }, // ester oxygen
    { id: 'O12', element: 'O', position: [3.60, 2.00, 0.00], color: '#ef4444', radius: 0.55 }, // acetyl carbonyl O
    { id: 'C13', element: 'C', position: [4.90, 1.20, 0.00], color: '#334155', radius: 0.6 }, // methyl carbon

    // Hydrogens
    { id: 'H1', element: 'H', position: [-2.15, 1.25, 0.00], color: '#f8fafc', radius: 0.35 },
    { id: 'H2', element: 'H', position: [-2.15, -1.25, 0.00], color: '#f8fafc', radius: 0.35 },
    { id: 'H3', element: 'H', position: [2.15, -1.25, 0.00], color: '#f8fafc', radius: 0.35 },
    { id: 'H4', element: 'H', position: [2.15, 0.70, 0.00], color: '#f8fafc', radius: 0.35 },
    { id: 'H5', element: 'H', position: [1.20, 4.00, 0.00], color: '#f8fafc', radius: 0.35 }, // carboxylic OH
    { id: 'H6', element: 'H', position: [4.90, 0.20, 0.00], color: '#f8fafc', radius: 0.35 },
    { id: 'H7', element: 'H', position: [5.70, 1.60, 0.80], color: '#f8fafc', radius: 0.35 },
    { id: 'H8', element: 'H', position: [5.70, 1.60, -0.80], color: '#f8fafc', radius: 0.35 }
  ],
  bonds: [
    // Benzene ring (alternating double bonds shown as 1.5 for visualization)
    { id: 'b1', source: 'C1', target: 'C2', order: 1.5 },
    { id: 'b2', source: 'C2', target: 'C3', order: 1 },
    { id: 'b3', source: 'C3', target: 'C4', order: 1.5 },
    { id: 'b4', source: 'C4', target: 'C5', order: 1 },
    { id: 'b5', source: 'C5', target: 'C6', order: 1.5 },
    { id: 'b6', source: 'C6', target: 'C1', order: 1 },

    // Carboxylic acid at C1
    { id: 'b7', source: 'C1', target: 'C7', order: 1 },
    { id: 'b8', source: 'C7', target: 'O8', order: 1 },
    { id: 'b9', source: 'C7', target: 'O9', order: 2 },
    { id: 'b10', source: 'O8', target: 'H5', order: 1 },

    // Ester group at C2
    { id: 'b11', source: 'C2', target: 'O11', order: 1 },
    { id: 'b12', source: 'O11', target: 'C10', order: 1 },
    { id: 'b13', source: 'C10', target: 'O12', order: 2 },
    { id: 'b14', source: 'C10', target: 'C13', order: 1 },

    // Aromatic H
    { id: 'b15', source: 'C3', target: 'H4', order: 1 },
    { id: 'b16', source: 'C4', target: 'H3', order: 1 },
    { id: 'b17', source: 'C5', target: 'H2', order: 1 },
    { id: 'b18', source: 'C6', target: 'H1', order: 1 },

    // Methyl group H
    { id: 'b19', source: 'C13', target: 'H6', order: 1 },
    { id: 'b20', source: 'C13', target: 'H7', order: 1 },
    { id: 'b21', source: 'C13', target: 'H8', order: 1 }
  ]
}