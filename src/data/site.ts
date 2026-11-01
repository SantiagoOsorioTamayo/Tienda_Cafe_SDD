/**
 * Sample store contact data. Replace every value before publishing.
 * The site is fully static, so orders are handed off to WhatsApp or email.
 */
export const site = {
  name: 'Cumbre',
  tagline: 'Café de origen colombiano',
  description:
    'Café de especialidad cultivado entre 1.450 y 1.950 metros en Huila, Nariño, Tolima y la Sierra Nevada. Tueste en lotes pequeños, trazabilidad de finca a taza.',
  whatsapp: '573000000000',
  email: 'hola@cumbre.example',
  city: 'Bogotá, Colombia',
  hours: 'Lunes a sábado · 8:00 a 18:00',
  shipping: 'Entrega en Bogotá en 24–48 h · envíos a todo el país en 3–5 días',
} as const;
