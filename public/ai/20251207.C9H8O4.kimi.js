return {
  title: "Aspirin (C9H8O4)",
  description: "A common non-steroidal anti-inflammatory drug (NSAID) composed of a benzene ring, a carboxylic acid group, and an ester-linked acetyl group.",
  atoms: [
    // Benzene ring carbons
    { id: 'C1', element: 'C', position: [1.2, 0, 0], color: '#334155', radius: 0.6 },
    { id: 'C2', element: 'C', position: [0.6, 1.04, 0], color: '#334155', radius: 0.6 },
    { id: 'C3', element: 'C', position: [-0.6, 1.04, 0], color: '#334155', radius: 0.6 },
    { id: 'C4', element: 'C', position: [-1.2, 0, 0], color: '#334155', radius: 0.6 },
    { id: 'C5', element: 'C', position: [-0.6, -1.04, 0], color: '#334155', radius: 0.6 },
    { id: 'C6', element: 'C', position: [0.6, -1.04, 0], color: '#334155', radius: 0.6 },

    // Carboxylic acid group
    { id: 'C7', element: 'C', position: [2.7, 0, 0], color: '#334155', radius: 0.6 },
    { id: 'O1', element: 'O', position: [3.3, 1.04, 0], color: '#dc2626', radius: 0.55 },
    { id: 'O2', element: 'O', position: [3.3, -1.04, 0], color: '#dc2626', radius: 0.55 },

    // Ester oxygen and acetyl group
    { id: 'O3', element: 'O', position: [-2.5, 0, 0], color: '#dc2626', radius: 0.55 },
    { id: 'C8', element: 'C', position: [-3.1, 1.04, 0], color: '#334155', radius: 0.6 },
    { id: 'C9', element: 'C', position: [-4.5, 1.04, 0], color: '#334155', radius: 0.6 },
    { id: 'O4', element: 'O', position: [-5.1, 0, 0], color: '#dc2626', radius: 0.55 },

    // Hydrogens on benzene ring
    { id: 'H1', element: 'H', position: [0.6, 1.04, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H2', element: 'H', position: [-0.6, 1.04, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H3', element: 'H', position: [-0.6, -1.04, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H4', element: 'H', position: [0.6, -1.04, 0.8], color: '#f8fafc', radius: 0.35 },

    // Hydrogens on methyl and acetyl
    { id: 'H5', element: 'H', position: [3.9, 1.04, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H6', element: 'H', position: [-2.5, 1.84, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H7', element: 'H', position: [-4.5, 1.84, 0.8], color: '#f8fafc', radius: 0.35 },
    { id: 'H8', element: 'H', position: [-6.1, 0, 0.8], color: '#f8fafc', radius: 0.35 }
  ],
  bonds: [
    // Benzene ring
    { id: 'b1', source: 'C1', target: 'C2', order: 1.5 },
    { id: 'b2', source: 'C2', target: 'C3', order: 1.5 },
    { id: 'b3', source: 'C3', target: 'C4', order: 1.5 },
    { id: 'b4', source: 'C4', target: 'C5', order: 1.5 },
    { id: 'b5', source: 'C5', target: 'C6', order: 1.5 },
    { id: 'b6', source: 'C6', target: 'C1', order: 1.5 },

    // Carboxylic acid
    { id: 'b7', source: 'C1', target: 'C7', order: 1 },
    { id: 'b8', source: 'C7', target: 'O1', order: 2 },
    { id: 'b9', source: 'C7', target: 'O2', order: 1 },
    { id: 'b10', source: 'O2', target: 'H5', order: 1 },

    // Ester and acetyl
    { id: 'b11', source: 'C4', target: 'O3', order: 1 },
    { id: 'b12', source: 'O3', target: 'C8', order: 1 },
    { id: 'b13', source: 'C8', target: 'C9', order: 1 },
    { id: 'b14', source: 'C9', target: 'O4', order: 2 },
    { id: 'b15', source: 'C8', target: 'H6', order: 1 },
    { id: 'b16', source: 'C9', target: 'H7', order: 1 },
    { id: 'b17', source: 'O4', target: 'H8', order: 1 },

    // Benzene hydrogens
    { id: 'b18', source: 'C2', target: 'H1', order: 1 },
    { id: 'b19', source: 'C3', target: 'H2', order: 1 },
    { id: 'b20', source: 'C5', target: 'H3', order: 1 },
    { id: 'b21', source: 'C6', target: 'H4', order: 1 }
  ]
}