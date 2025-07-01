import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProductoById, productos } from '@/data/productos'
import FormularioCotizacion from '@/components/FormularioCotizacion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Clock, Package, Palette, Settings } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const producto = getProductoById(params.id)
  
  if (!producto) {
    return {
      title: 'Producto no encontrado - NotiPromo',
    }
  }

  return {
    title: `${producto.nombre} - NotiPromo`,
    description: producto.descripcion,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductoPage({ params }: any) {
  const producto = getProductoById(params.id)

  if (!producto) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
                {producto.nombre}
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                {producto.descripcionLarga}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Entrega: {producto.tiempoEntrega}</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-4 h-4 mr-2" />
                  <span>Mínimo: {producto.cantidadMinima}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Gallery */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
                  Galería de Imágenes
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {producto.imagenes.map((imagen, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <Image
                        src={imagen}
                        alt={`${producto.nombre} - Imagen ${index + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
                  Características Principales
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {producto.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
                  Especificaciones Técnicas
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(producto.especificaciones).map(([key, value]) => (
                      <div key={key}>
                        <h3 className="font-semibold text-gray-900 mb-2">{key}</h3>
                        <p className="text-gray-700">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customization Options */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
                  Opciones de Personalización
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {producto.opcionesPersonalizacion.map((opcion, index) => (
                    <div key={index} className="flex items-start">
                      <Settings className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{opcion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
                  Materiales Utilizados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {producto.materiales.map((material, index) => (
                    <div key={index} className="flex items-start">
                      <Package className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Colors */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
                  Colores Disponibles
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {producto.coloresDisponibles.map((color, index) => (
                    <div key={index} className="flex items-center">
                      <Palette className="w-5 h-5 text-primary mr-3" />
                      <span className="text-gray-700">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Quote Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <FormularioCotizacion productoPreSeleccionado={producto.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-info mb-4 font-display">
              Otros Productos que te pueden interesar
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubre nuestra línea completa de productos personalizados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productos
              .filter(p => p.id !== producto.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="card group">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={relatedProduct.imagen}
                      alt={relatedProduct.nombre}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-info mb-2 font-display">
                      {relatedProduct.nombre}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {relatedProduct.descripcion}
                    </p>
                    <a
                      href={`/productos/${relatedProduct.id}`}
                      className="btn-primary bg-primary text-white hover:bg-primary hover:shadow-lg"
                    >
                      Ver detalles →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 