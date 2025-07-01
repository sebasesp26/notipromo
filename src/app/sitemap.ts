import { MetadataRoute } from 'next'
import { productos } from '@/data/productos'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://notipromo.com'
  
  // Rutas estáticas
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Rutas dinámicas de productos
  const productRoutes = productos.map((producto) => ({
    url: `${baseUrl}/productos/${producto.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
} 