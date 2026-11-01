export type Stage = {
  step: string;
  title: string;
  text: string;
};

export type Farm = {
  name: string;
  producer: string;
  region: string;
  varietal: string;
  altitude: number;
  lot: string;
};

export const stages: Stage[] = [
  {
    step: '01',
    title: 'Cosecha selectiva',
    text: 'Recogemos solo cerezas en su punto exacto de madurez, en dos pasadas por lote y a mano.',
  },
  {
    step: '02',
    title: 'Fermentación controlada',
    text: 'Cada productor registra tiempo, temperatura y azúcares. Ajustamos el perfil lote por lote.',
  },
  {
    step: '03',
    title: 'Secado lento',
    text: 'Camas elevadas y marquesinas durante 12 a 18 días, hasta alcanzar entre 10,5 % y 11,5 % de humedad.',
  },
  {
    step: '04',
    title: 'Tueste en lotes pequeños',
    text: 'Tostamos cada semana en tandas de 12 kg y reposamos el café entre 7 y 10 días antes de empacar.',
  },
];

export const farms: Farm[] = [
  {
    name: 'La Esperanza',
    producer: 'Familia Chávez',
    region: 'Pitalito, Huila',
    varietal: 'Caturra · Castillo',
    altitude: 1750,
    lot: 'HU-114',
  },
  {
    name: 'El Mirador',
    producer: 'Marta Benavides',
    region: 'La Unión, Nariño',
    varietal: 'Geisha',
    altitude: 1950,
    lot: 'NA-207',
  },
  {
    name: 'La Palma',
    producer: 'Asociación Planadas',
    region: 'Planadas, Tolima',
    varietal: 'Bourbon · Colombia',
    altitude: 1680,
    lot: 'TO-089',
  },
];

export const altitudeMarks = [1400, 1600, 1800, 2000] as const;
