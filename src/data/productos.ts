export interface Producto {
  id: string
  nombre: string
  descripcion: string
  descripcionLarga: string
  imagen: string
  imagenes: string[]
  categoria: string
  caracteristicas: string[]
  especificaciones: {
    [key: string]: string
  }
  opcionesPersonalizacion: string[]
  materiales: string[]
  coloresDisponibles: string[]
  tiempoEntrega: string
  cantidadMinima: string
}

export const productos: Producto[] = [
  {
    id: 'libretas',
    nombre: 'Libretas Personalizadas',
    descripcion: 'Libretas de alta calidad con tu marca impresa. Perfectas para eventos corporativos y regalos promocionales.',
    descripcionLarga: 'Nuestras libretas personalizadas son la solución perfecta para empresas que buscan dejar una impresión duradera. Fabricadas con materiales premium y acabados profesionales, cada libreta se convierte en una herramienta de marketing efectiva que acompaña a tus clientes en su día a día.',
    imagen: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    ],
    categoria: 'Libretas',
    caracteristicas: [
      'Papel de alta calidad 80g',
      'Encuadernación cosida',
      'Portada personalizada',
      'Múltiples tamaños disponibles',
      'Impresión a todo color',
      'Acabados premium'
    ],
    especificaciones: {
      'Tamaños': 'A5, A6, A7, Personalizado',
      'Páginas': '50, 80, 100, 120',
      'Papel': 'Bond 80g, Couche 90g',
      'Encuadernación': 'Cosida, Espiral, Engrapada',
      'Impresión': 'Offset, Digital, Serigrafía'
    },
    opcionesPersonalizacion: [
      'Logo de empresa',
      'Colores corporativos',
      'Información de contacto',
      'Mensajes personalizados',
      'Diseños exclusivos',
      'Texturas especiales'
    ],
    materiales: [
      'Papel bond premium',
      'Cartulina couche',
      'Hilos de encuadernación',
      'Espirales metálicos',
      'Pegamentos especiales'
    ],
    coloresDisponibles: [
      'Blanco', 'Negro', 'Azul', 'Rojo', 'Verde', 'Amarillo', 'Gris', 'Personalizado'
    ],
    tiempoEntrega: '7-10 días hábiles',
    cantidadMinima: '50 unidades'
  },
  {
    id: 'cuadernos',
    nombre: 'Cuadernos Personalizados',
    descripcion: 'Cuadernos profesionales con espiral y portada personalizada. Ideales para uso corporativo y educativo.',
    descripcionLarga: 'Los cuadernos personalizados son una excelente manera de mantener tu marca visible en el entorno educativo y corporativo. Con espirales duraderos y papel de calidad, estos cuadernos combinan funcionalidad con marketing efectivo.',
    imagen: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop'
    ],
    categoria: 'Cuadernos',
    caracteristicas: [
      'Espiral metálico resistente',
      'Papel rayado o cuadriculado',
      'Portada personalizada',
      'Tamaños estándar',
      'Impresión de alta calidad',
      'Diseño profesional'
    ],
    especificaciones: {
      'Tamaños': 'A4, A5, Carta, Oficio',
      'Páginas': '100, 150, 200',
      'Papel': 'Bond 75g, Cuadriculado',
      'Espiral': 'Metálico, Plástico',
      'Impresión': 'Offset, Digital'
    },
    opcionesPersonalizacion: [
      'Logo corporativo',
      'Información de la empresa',
      'Colores institucionales',
      'Mensajes motivacionales',
      'Diseños temáticos',
      'Fechas y eventos'
    ],
    materiales: [
      'Papel bond 75g',
      'Espirales metálicos',
      'Cartulina couche',
      'Pegamentos especiales'
    ],
    coloresDisponibles: [
      'Blanco', 'Azul', 'Verde', 'Rojo', 'Negro', 'Gris', 'Amarillo', 'Personalizado'
    ],
    tiempoEntrega: '5-8 días hábiles',
    cantidadMinima: '100 unidades'
  },
  {
    id: 'cubos-adhesivos',
    nombre: 'Cubos con Hojas Adhesivas',
    descripcion: 'Cubos de notas adhesivas personalizados con tu marca. Perfectos para oficinas y espacios de trabajo.',
    descripcionLarga: 'Los cubos de notas adhesivas personalizados son una herramienta esencial en cualquier oficina moderna. Cada nota lleva tu marca, convirtiendo una herramienta cotidiana en un elemento de marketing sutil pero efectivo.',
    imagen: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop'
    ],
    categoria: 'Cubos Adhesivos',
    caracteristicas: [
      'Hojas adhesivas de calidad',
      'Cubo de plástico resistente',
      'Impresión personalizada',
      'Múltiples colores',
      'Adhesivo reposicionable',
      'Tamaños estándar'
    ],
    especificaciones: {
      'Tamaño de notas': '3x3", 4x4", 5x5"',
      'Cantidad por cubo': '100, 200, 500 hojas',
      'Papel': 'Bond 70g',
      'Adhesivo': 'Reposicionable',
      'Cubo': 'Plástico ABS'
    },
    opcionesPersonalizacion: [
      'Logo en cada nota',
      'Colores corporativos',
      'Información de contacto',
      'Mensajes personalizados',
      'Diseños exclusivos',
      'Formas especiales'
    ],
    materiales: [
      'Papel bond 70g',
      'Adhesivo reposicionable',
      'Plástico ABS',
      'Tintas especiales'
    ],
    coloresDisponibles: [
      'Amarillo', 'Rosa', 'Verde', 'Azul', 'Naranja', 'Blanco', 'Personalizado'
    ],
    tiempoEntrega: '10-12 días hábiles',
    cantidadMinima: '25 cubos'
  },
  {
    id: 'cintas-adhesivas',
    nombre: 'Cintas Adhesivas Personalizadas',
    descripcion: 'Cintas adhesivas con tu marca impresa. Ideales para embalaje, decoración y uso promocional.',
    descripcionLarga: 'Las cintas adhesivas personalizadas son versátiles y efectivas para múltiples aplicaciones. Desde embalaje hasta decoración, cada uso de la cinta refuerza tu marca de manera sutil pero constante.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    ],
    categoria: 'Cintas Adhesivas',
    caracteristicas: [
      'Adhesivo de alta calidad',
      'Impresión personalizada',
      'Múltiples anchos',
      'Resistente al agua',
      'Fácil de cortar',
      'Larga duración'
    ],
    especificaciones: {
      'Anchos': '1", 2", 3", 4"',
      'Longitud': '50m, 100m, 200m',
      'Material': 'PP, PVC',
      'Adhesivo': 'Acrílico, Caucho',
      'Impresión': 'Flexografía, Digital'
    },
    opcionesPersonalizacion: [
      'Logo repetido',
      'Mensajes promocionales',
      'Colores corporativos',
      'Patrones personalizados',
      'Información de contacto',
      'Diseños exclusivos'
    ],
    materiales: [
      'Polipropileno (PP)',
      'Cloruro de polivinilo (PVC)',
      'Adhesivo acrílico',
      'Adhesivo de caucho'
    ],
    coloresDisponibles: [
      'Transparente', 'Blanco', 'Negro', 'Azul', 'Rojo', 'Verde', 'Amarillo', 'Personalizado'
    ],
    tiempoEntrega: '12-15 días hábiles',
    cantidadMinima: '100 rollos'
  }
]

export const getProductoById = (id: string): Producto | undefined => {
  return productos.find(producto => producto.id === id)
}

export const getProductosByCategoria = (categoria: string): Producto[] => {
  return productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase())
} 