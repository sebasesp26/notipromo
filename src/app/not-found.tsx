import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
              Página no encontrada
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Lo sentimos, la página que buscas no existe o ha sido movida. 
              Puedes regresar al inicio o explorar nuestros productos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary bg-primary text-white hover:bg-primary hover:shadow-lg flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold">
              <Home className="w-4 h-4 mr-2" />
              Ir al Inicio
            </Link>
            <Link href="/productos" className="btn-secondary flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 