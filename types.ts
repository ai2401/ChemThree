

export interface AtomData {
  id: string;
  element: string;
  position: [number, number, number];
  color: string;
  radius: number;
}

export interface BondData {
  id: string;
  source: string; // Atom ID
  target: string; // Atom ID
  order: number; // 1, 2, 3
}

export interface MoleculeStructure {
  atoms: AtomData[];
  bonds: BondData[];
  title: string;
  description: string;
}

export enum SceneType {
  CRYSTAL_LATTICE = 'CRYSTAL_LATTICE',
  ORGANIC_MACRO = 'ORGANIC_MACRO',
  NANO_TUBE = 'NANO_TUBE',
  DNA_HELIX = 'DNA_HELIX',
  CAFFEINE = 'CAFFEINE',
  GRAPHENE = 'GRAPHENE',
  BUCKYBALL = 'BUCKYBALL',
  RBC = 'RBC'
}

export interface SceneConfig {
  id: SceneType;
  label: string;
  label_cn: string;
  description: string;
  description_cn: string;
}
