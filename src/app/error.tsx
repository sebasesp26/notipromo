'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="section-padding bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">Error</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-info mb-4 font-display">
              Algo salió mal
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Ha ocurrido un error inesperado. Por favor, intenta de nuevo o regresa al inicio.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary bg-primary text-white hover:bg-primary hover:shadow-lg flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
            >
              Intentar de nuevo
            </button>
            <Link href="/" className="btn-secondary flex items-center justify-center">
              <Home className="w-4 h-4 mr-2" />
              Ir al Inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 