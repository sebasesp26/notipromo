# NotiPromo - Sitio Web de Productos Personalizados

Un sitio web moderno y profesional para una empresa de productos personalizados de papelería y branding empresarial, construido con Next.js 14, TypeScript y TailwindCSS.

## 🚀 Características

- **Diseño Moderno y Responsive**: Interfaz limpia y profesional que se adapta a todos los dispositivos
- **SEO Optimizado**: Metadatos completos, Open Graph, Twitter Cards y estructura semántica
- **Componentes Reutilizables**: Header, Footer, CardProducto, FormularioCotizacion
- **Rutas Dinámicas**: Páginas individuales para cada producto
- **Formularios Interactivos**: Validación en tiempo real y estados de carga
- **Tipografía Profesional**: Inter y Lato de Google Fonts
- **Iconos Modernos**: Lucide React para iconografía consistente
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Colores Institucionales**: Paleta de colores personalizable

## 📋 Páginas Incluidas

1. **Home** (`/`) - Página principal con hero section, estadísticas, productos destacados y testimonios
2. **Productos** (`/productos`) - Catálogo completo de productos
3. **Producto Individual** (`/productos/[id]`) - Detalles completos de cada producto
4. **Contacto** (`/contacto`) - Formularios de contacto y cotización

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para mayor robustez
- **TailwindCSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos y ligeros
- **Google Fonts** - Tipografías Inter y Lato

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd pagina-web
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── productos/         # Páginas de productos
│   │   ├── page.tsx       # Catálogo de productos
│   │   └── [id]/          # Páginas dinámicas de productos
│   │       └── page.tsx
│   └── contacto/          # Página de contacto
│       └── page.tsx
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   ├── Footer.tsx         # Pie de página
│   ├── CardProducto.tsx   # Tarjeta de producto
│   └── FormularioCotizacion.tsx # Formulario de cotización
└── data/                  # Datos estáticos
    └── productos.ts       # Información de productos
```

## 🎨 Personalización

### Colores Institucionales

Los colores se pueden personalizar en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... más tonos
    900: '#0c4a6e',
  },
  secondary: {
    // ... configuración de colores secundarios
  },
  accent: {
    // ... configuración de colores de acento
  }
}
```

### Productos

Los productos se configuran en `src/data/productos.ts`. Cada producto incluye:

- Información básica (nombre, descripción, imagen)
- Características y especificaciones técnicas
- Opciones de personalización
- Materiales y colores disponibles
- Tiempos de entrega y cantidades mínimas

### Imágenes

Las imágenes deben colocarse en la carpeta `public/images/` con los siguientes nombres:

- `hero-products.jpg` - Imagen principal del hero
- `about-us.jpg` - Imagen de la sección "Acerca de"
- `libretas-hero.jpg`, `libretas-1.jpg`, etc. - Imágenes de productos
- `og-image.jpg` - Imagen para redes sociales

## 📱 Responsive Design

El sitio está completamente optimizado para:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Verificar código con ESLint
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar el repositorio a Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 SEO y Performance

- **Lighthouse Score**: Optimizado para 90+ en todas las métricas
- **Core Web Vitals**: Cumple con los estándares de Google
- **SEO**: Metadatos completos, sitemap, robots.txt
- **Accesibilidad**: Cumple con estándares WCAG 2.1

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- Email: info@notipromo.com
- Teléfono: +1 (234) 567-890
- Sitio web: https://notipromo.com

---

**NotiPromo** - Transformando marcas en productos únicos desde 2024.
