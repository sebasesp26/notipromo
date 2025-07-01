'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface FormularioCotizacionProps {
  productoPreSeleccionado?: string
  className?: string
}

const FormularioCotizacion = ({ productoPreSeleccionado, className = '' }: FormularioCotizacionProps) => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    producto: productoPreSeleccionado || '',
    cantidad: '',
    comentarios: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const productos = [
    { value: 'libretas', label: 'Libretas Personalizadas' },
    { value: 'cuadernos', label: 'Cuadernos Personalizados' },
    { value: 'cubos-adhesivos', label: 'Cubos con Hojas Adhesivas' },
    { value: 'cintas-adhesivas', label: 'Cintas Adhesivas Personalizadas' },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    }

    if (!formData.producto) {
      newErrors.producto = 'Selecciona un producto'
    }

    if (!formData.cantidad.trim()) {
      newErrors.cantidad = 'La cantidad es requerida'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        producto: '',
        cantidad: '',
        comentarios: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2 font-display">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-green-700">
          Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
          Solicita tu Cotización
        </h3>
        <p className="text-gray-600">
          Completa el formulario y te contactaremos con una propuesta personalizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`input-field ${errors.nombre ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="Tu nombre completo"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="input-field"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`input-field ${errors.telefono ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="+1 (234) 567-890"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="producto" className="block text-sm font-medium text-gray-700 mb-2">
              Producto de interés *
            </label>
            <select
              id="producto"
              name="producto"
              value={formData.producto}
              onChange={handleChange}
              className={`input-field ${errors.producto ? 'border-red-500 focus:ring-red-500' : ''}`}
            >
              <option value="">Selecciona un producto</option>
              {productos.map(producto => (
                <option key={producto.value} value={producto.value}>
                  {producto.label}
                </option>
              ))}
            </select>
            {errors.producto && (
              <p className="text-red-500 text-sm mt-1">{errors.producto}</p>
            )}
          </div>

          <div>
            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad aproximada *
            </label>
            <input
              type="text"
              id="cantidad"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              className={`input-field ${errors.cantidad ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="Ej: 100 unidades"
            />
            {errors.cantidad && (
              <p className="text-red-500 text-sm mt-1">{errors.cantidad}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
            Comentarios adicionales
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows={4}
            className="input-field resize-none"
            placeholder="Describe tus necesidades específicas, colores, logos, etc."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Enviar Solicitud
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default FormularioCotizacion 