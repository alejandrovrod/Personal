import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isCV = location.pathname === '/cv'

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
            <Link to="/" className="text-xl font-bold hover:opacity-70 transition-opacity">
              Alejandro Valladares
            </Link>
            
            {/* Mostrar contacto solo en página de inicio */}
            {!isCV && (
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <a href="mailto:cale2332@yahoo.com" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                  📧 cale2332@yahoo.com
                </a>
                <a href="tel:5573391658" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                  📞 55 73 39 16 58
                </a>
              </div>
            )}
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link 
              to="/" 
              className={`hover:opacity-70 transition-opacity ${!isCV ? 'font-semibold' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/cv" 
              className={`hover:opacity-70 transition-opacity ${isCV ? 'font-semibold' : ''}`}
            >
              CV
            </Link>
            <a href="#contacto" className="hover:opacity-70 transition-opacity">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
