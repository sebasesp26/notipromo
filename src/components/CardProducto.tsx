import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Producto {
  id: string
  nombre: string
  descripcion: string
  imagen: string
  categoria: string
  caracteristicas: string[]
}

interface CardProductoProps {
  producto: Producto
}

const CardProducto = ({ producto }: CardProductoProps) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="aspect-w-16 aspect-h-12 bg-gray-200">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={400}
            height={300}
            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-info text-white px-3 py-1 rounded-full text-xs font-medium">
            {producto.categoria}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-display">
          {producto.nombre}
        </h3>
        
        <p className="text-gray-700 mb-4 line-clamp-2">
          {producto.descripcion}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Características:</h4>
          <ul className="space-y-1">
            {producto.caracteristicas.slice(0, 3).map((caracteristica, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-info-500 rounded-full mr-2"></div>
                {caracteristica}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center">
          <Link
            href={`/productos/${producto.id}`}
            className="text-primary hover:text-primary font-medium text-sm flex items-center group/link"
          >
            Ver detalles
            <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
          
          <Link
            href={`/contacto?producto=${producto.id}`}
            className="btn-primary bg-primary text-white hover:bg-primary hover:shadow-lg"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardProducto 