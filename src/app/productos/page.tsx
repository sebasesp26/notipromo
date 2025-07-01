import { productos } from '@/data/productos'
import CardProducto from '@/components/CardProducto'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Productos Personalizados - NotiPromo',
  description: 'Descubre nuestra línea completa de productos personalizados: libretas, cuadernos, cubos adhesivos y cintas adhesivas con tu marca.',
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Descubre nuestra línea completa de productos personalizados diseñados para 
            fortalecer tu presencia de marca y dejar una impresión duradera.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productos.map((producto) => (
              <CardProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
              ¿Por qué elegir nuestros productos?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Cada producto está diseñado pensando en la calidad, durabilidad y 
              efectividad de tu estrategia de branding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-display">
                Calidad Premium
              </h3>
              <p className="text-gray-700">
                Materiales de primera calidad y acabados profesionales que garantizan 
                la durabilidad de tus productos personalizados.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-display">
                Diseño Personalizado
              </h3>
              <p className="text-gray-700">
                Cada producto se adapta perfectamente a tu identidad visual, 
                colores corporativos y mensaje de marca.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-display">
                Entrega Rápida
              </h3>
              <p className="text-gray-700">
                Cumplimos con los tiempos de entrega acordados, garantizando que 
                recibas tus productos cuando los necesites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-info text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            ¿Listo para personalizar tu marca?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Solicita una cotización gratuita y descubre cómo podemos ayudarte a crear 
            productos únicos que fortalezcan tu presencia de marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary bg-primary text-white hover:bg-primary hover:shadow-lg flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold">
              Solicitar Cotización
            </a>
            <a href="tel:+1234567890" className="btn-secondary border-info text-info hover:bg-info hover:text-white hover:shadow-lg flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 