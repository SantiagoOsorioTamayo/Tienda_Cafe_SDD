export type Product = {
  slug: string;
  name: string;
  region: string;
  farm: string;
  process: string;
  altitude: number;
  varietal: string;
  notes: string[];
  price: number;
  weight: string;
  roast: string;
  swatch: [string, string];
};

export const products: Product[] = [
  {
    slug: 'cumbre-clasica',
    name: 'Cumbre Clásica',
    region: 'Pitalito, Huila',
    farm: 'Finca La Esperanza',
    process: 'Lavado',
    altitude: 1750,
    varietal: 'Caturra · Castillo',
    notes: ['Panela', 'Naranja', 'Cacao'],
    price: 58000,
    weight: '500 g',
    roast: 'Tueste medio',
    swatch: ['#b04a28', '#7d2f16'],
  },
  {
    slug: 'geisha-de-altura',
    name: 'Geisha de Altura',
    region: 'La Unión, Nariño',
    farm: 'Finca El Mirador',
    process: 'Lavado',
    altitude: 1950,
    varietal: 'Geisha',
    notes: ['Jazmín', 'Durazno', 'Miel'],
    price: 92000,
    weight: '250 g',
    roast: 'Tueste claro',
    swatch: ['#c08a34', '#8a5c1c'],
  },
  {
    slug: 'tolima-natural',
    name: 'Tolima Natural',
    region: 'Planadas, Tolima',
    farm: 'Finca La Palma',
    process: 'Natural',
    altitude: 1680,
    varietal: 'Bourbon · Colombia',
    notes: ['Mora', 'Chocolate', 'Vino'],
    price: 64000,
    weight: '500 g',
    roast: 'Tueste medio',
    swatch: ['#6d3b4e', '#3f2130'],
  },
  {
    slug: 'sierra-descafeinado',
    name: 'Sierra Descafeinado',
    region: 'Santa Marta, Magdalena',
    farm: 'Cooperativa Sierra',
    process: 'Descafeinado EA',
    altitude: 1450,
    varietal: 'Castillo',
    notes: ['Caramelo', 'Almendra', 'Cítricos'],
    price: 56000,
    weight: '500 g',
    roast: 'Tueste medio',
    swatch: ['#58603f', '#353b26'],
  },
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value);
}
