import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white text-primary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">
                Productos Personalizados de{' '}
                <span className="text-primary">Papelería</span> y{' '}
                <span className="text-primary">Branding</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Transformamos tu marca en productos únicos que dejan una impresión duradera. 
                Libretas, cuadernos, cubos adhesivos y cintas personalizadas para tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/productos" className="btn-primary bg-primary text-white hover:bg-primary hover:shadow-lg flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold">
                  Ver Productos
                </Link>
                <Link href="/contacto" className="btn-secondary border-info text-info hover:bg-info hover:text-white hover:shadow-lg flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=500&fit=crop"
                  alt="Productos personalizados de papelería"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-gray-700 text-lg">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">1M+</div>
              <div className="text-gray-700 text-lg">Productos Entregados</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">25+</div>
              <div className="text-gray-700 text-lg">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">-24h</div>
              <div className="text-gray-700 text-lg">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Rediseñado */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra colección premium de productos personalizados diseñados para 
              fortalecer tu identidad de marca y dejar una impresión duradera
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Producto 1 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
                  alt="Libretas Personalizadas"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">
                  Libretas Personalizadas
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Libretas de alta calidad con tu marca impresa. Perfectas para eventos corporativos 
                  y regalos promocionales que dejan huella.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link 
                    href="/productos/libretas" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop"
                  alt="Cuadernos Personalizados"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">
                  Cuadernos Personalizados
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Cuadernos profesionales con espiral y portada personalizada. Ideales para uso 
                  corporativo y educativo con acabados premium.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link 
                    href="/productos/cuadernos" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
                  alt="Cubos Adhesivos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-3 font-display">
                  Cubos Adhesivos
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Cubos de notas adhesivas personalizados con tu marca. Perfectos para oficinas 
                  y espacios de trabajo con adhesivo reposicionable.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link 
                    href="/productos/cubos-adhesivos" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/productos" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Rediseñado */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Lo que dicen nuestros <span className="text-logo">clientes</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Experiencias reales de empresas que confían en nosotros para fortalecer su presencia de marca
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500 text-2xl">
                  ★★★★★
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed flex-grow">
                &ldquo;Excelente calidad y servicio. Los productos personalizados superaron nuestras expectativas. 
                NotiPromo entendió perfectamente nuestra visión de marca.&rdquo;
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">María González</div>
                  <div className="text-gray-600">CEO, TechCorp Solutions</div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500 text-2xl">
                  ★★★★★
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed flex-grow">
                &ldquo;NotiPromo nos ayudó a crear productos únicos que reflejan perfectamente nuestra marca. 
                El proceso fue fluido y los resultados excepcionales.&rdquo;
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  C
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Carlos Rodríguez</div>
                  <div className="text-gray-600">Director, Marketing Pro</div>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-500 text-2xl">
                  ★★★★★
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed flex-grow">
                &ldquo;Entrega rápida y productos de alta calidad. El equipo de NotiPromo es profesional 
                y creativo. Definitivamente los recomendamos.&rdquo;
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Martínez</div>
                  <div className="text-gray-600">Fundadora, Startup Innovate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
