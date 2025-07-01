import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image src="/logo de tipromo3.png" alt="Logo NotiPromo" width={109} height={109} className="rounded-lg" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas en productos personalizados de papelería y branding empresarial. 
              Transformamos tu marca en productos únicos que dejan una impresión duradera.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/productos/libretas" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Libretas
                </Link>
              </li>
              <li>
                <Link href="/productos/cuadernos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cuadernos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <a href="tel:5541486660" className="hover:underline" target="_blank" rel="noopener noreferrer">Llamadas: 5541486660</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <a href="https://wa.me/5544654441" className="hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp: 5544654441</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <a href="mailto:contacto@notipromo.com" className="hover:underline">contacto@notipromo.com</a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span>
                  <a href="https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Hidalgo+111+Bis,+Col.+Miguel+Hidalgo,+Tlalnepantla,+Estado+de+M%C3%A9xico" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Av. Miguel Hidalgo 111 Bis,<br />Col. Miguel Hidalgo,<br />Tlalnepantla, Estado de México
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NotiPromo. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 