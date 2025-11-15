import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isCV = location.pathname === '/cv'

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:opacity-70 transition-opacity">
            Alejandro Valladares
          </Link>
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

