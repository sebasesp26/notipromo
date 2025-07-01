import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NotiPromo - Productos Personalizados',
    short_name: 'NotiPromo',
    description: 'Especialistas en productos personalizados de papelería y branding empresarial',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1F3B4D',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
} 