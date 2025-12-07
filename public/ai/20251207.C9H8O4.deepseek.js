const title = "阿司匹林 (Aspirin)";
const description = "化学名：乙酰水杨酸。一种常见的非甾体抗炎药，用于缓解疼痛、发烧和炎症。其化学结构包含一个苯环，一个羧酸基团和一个酯键连接的乙酰基。";

// 2. ATOMS DEFINITION
const atoms = [
    // 苯环 (Benzene ring)
    { id: 'C1', element: 'C', position: [0.0, 0.8, 0.0], color: '#334155', radius: 0.45 },
    { id: 'C2', element: 'C', position: [0.7, 0.4, 0.0], color: '#334155', radius: 0.45 },
    { id: 'C3', element: 'C', position: [0.7, -0.4, 0.0], color: '#334155', radius: 0.45 },
    { id: 'C4', element: 'C', position: [0.0, -0.8, 0.0], color: '#334155', radius: 0.45 },
    { id: 'C5', element: 'C', position: [-0.7, -0.4, 0.0], color: '#334155', radius: 0.45 },
    { id: 'C6', element: 'C', position: [-0.7, 0.4, 0.0], color: '#334155', radius: 0.45 },

    // 羧酸基团的碳和氧 (Carboxylic acid group)
    { id: 'C7', element: 'C', position: [1.4, -0.8, 0.0], color: '#334155', radius: 0.45 },
    { id: 'O1', element: 'O', position: [1.9, -0.4, -0.2], color: '#dc2626', radius: 0.5 }, // 双键氧
    { id: 'O2', element: 'O', position: [1.9, -1.2, 0.2], color: '#dc2626', radius: 0.5 }, // 羟基氧
    { id: 'H1', element: 'H', position: [2.4, -1.4, 0.0], color: '#f8fafc', radius: 0.25 }, // 羧酸氢

    // 苯环上的氢 (Hydrogens on benzene ring)
    { id: 'H2', element: 'H', position: [0.0, 1.4, 0.0], color: '#f8fafc', radius: 0.25 },
    { id: 'H3', element: 'H', position: [1.2, 0.7, 0.0], color: '#f8fafc', radius: 0.25 },
    { id: 'H4', element: 'H', position: [0.0, -1.4, 0.0], color: '#f8fafc', radius: 0.25 },
    { id: 'H5', element: 'H', position: [-1.2, -0.7, 0.0], color: '#f8fafc', radius: 0.25 },
    { id: 'H6', element: 'H', position: [-1.2, 0.7, 0.0], color: '#f8fafc', radius: 0.25 },

    // 酯键连接的乙酰基 (Ester-linked acetyl group)
    // 酯氧连接到苯环的C6
    { id: 'O3', element: 'O', position: [-1.3, 0.8, 0.0], color: '#dc2626', radius: 0.5 },
    // 乙酰基的羰基碳和氧
    { id: 'C8', element: 'C', position: [-2.1, 1.3, 0.0], color: '#334155', radius: 0.45 },
    { id: 'O4', element: 'O', position: [-2.6, 1.8, 0.0], color: '#dc2626', radius: 0.5 },
    // 乙酰基的甲基
    { id: 'C9', element: 'C', position: [-2.8, 0.8, 0.0], color: '#334155', radius: 0.45 },
    { id: 'H7', element: 'H', position: [-3.4, 1.3, 0.0], color: '#f8fafc', radius: 0.25 },
    { id: 'H8', element: 'H', position: [-2.8, 0.1, 0.4], color: '#f8fafc', radius: 0.25 },
    { id: 'H9', element: 'H', position: [-2.8, 0.1, -0.4], color: '#f8fafc', radius: 0.25 },
];

// 3. BONDS DEFINITION
const bonds = [
    // 苯环的碳碳键 (交替单双键)
    { id: 'bb1', source: 'C1', target: 'C2', order: 1 },
    { id: 'bb2', source: 'C2', target: 'C3', order: 2 },
    { id: 'bb3', source: 'C3', target: 'C4', order: 1 },
    { id: 'bb4', source: 'C4', target: 'C5', order: 2 },
    { id: 'bb5', source: 'C5', target: 'C6', order: 1 },
    { id: 'bb6', source: 'C6', target: 'C1', order: 2 },

    // 苯环(C3)到羧酸碳(C7)的连接
    { id: 'b1', source: 'C3', target: 'C7', order: 1 },

    // 羧酸基团
    { id: 'b2', source: 'C7', target: 'O1', order: 2 },
    { id: 'b3', source: 'C7', target: 'O2', order: 1 },
    { id: 'b4', source: 'O2', target: 'H1', order: 1 },

    // 苯环上的碳氢键
    { id: 'b5', source: 'C1', target: 'H2', order: 1 },
    { id: 'b6', source: 'C2', target: 'H3', order: 1 },
    { id: 'b7', source: 'C4', target: 'H4', order: 1 },
    { id: 'b8', source: 'C5', target: 'H5', order: 1 },

    // 酯键连接：苯环(C6) - 酯氧(O3) - 乙酰基碳(C8)
    { id: 'b9', source: 'C6', target: 'O3', order: 1 },
    { id: 'b10', source: 'O3', target: 'C8', order: 1 },

    // 乙酰基的羰基
    { id: 'b11', source: 'C8', target: 'O4', order: 2 },

    // 乙酰基的甲基连接
    { id: 'b12', source: 'C8', target: 'C9', order: 1 },
    { id: 'b13', source: 'C9', target: 'H7', order: 1 },
    { id: 'b14', source: 'C9', target: 'H8', order: 1 },
    { id: 'b15', source: 'C9', target: 'H9', order: 1 },
];

// 4. RETURN DATA
return {
    title,
    description,
    atoms,
    bonds
};