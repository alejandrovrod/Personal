export default function Home() {
  // Calcular años de experiencia desde 1998
  const yearsSinceStart = new Date().getFullYear() - 1998

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
          Alejandro Valladares
        </h1>
        <h2 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-8">
          Senior Full Stack Developer
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
          {yearsSinceStart} años desarrollando soluciones empresariales críticas para <strong>banca</strong>, 
          <strong> salud</strong>, <strong>construcción</strong> y <strong>logística</strong>. 
          Especializado en arquitecturas <strong>.NET</strong>, <strong>Angular</strong>, 
          <strong>React</strong> y tecnologías cloud.
        </p>
        <div className="flex flex-wrap gap-4 mt-12">
          <a 
            href="mailto:cale2332@yahoo.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Contactar
            <span>→</span>
          </a>
          <a 
            href="/cv"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black font-medium hover:bg-gray-50 transition-colors"
          >
            Ver CV completo
          </a>
        </div>
      </section>

      {/* Empresas / Clientes */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-600">He trabajado con</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">Cemex</p>
              <p className="text-xs text-gray-500">2020-2025</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">Santander</p>
              <p className="text-xs text-gray-500">2018-2019</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">ICA</p>
              <p className="text-xs text-gray-500">2017-2018</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">CHUBB</p>
              <p className="text-xs text-gray-500">2015-2016</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">Volaris</p>
              <p className="text-xs text-gray-500">2015</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">WalMart</p>
              <p className="text-xs text-gray-500">2014</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">Bank of America</p>
              <p className="text-xs text-gray-500">2013</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">Salud Interactiva</p>
              <p className="text-xs text-gray-500">2019-2020</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">TMM Logistic</p>
              <p className="text-xs text-gray-500">2007-2008</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">TupperWare</p>
              <p className="text-xs text-gray-500">2005-2006</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg">Boehringer</p>
              <p className="text-xs text-gray-500">2009-2010</p>
            </div>
            <div className="p-4 bg-white border border-gray-200">
              <p className="font-bold text-lg text-gray-400">+10 más</p>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas Tecnologías */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Stack Tecnológico Actual</h2>
        <p className="text-lg text-gray-600 mb-12">Tecnologías que uso actualmente en proyectos de producción</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                FE
              </div>
              <h3 className="text-2xl font-bold">Frontend Moderno</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg">Angular 19 <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Último</span></p>
                <p className="text-gray-600 text-sm">Usado en Cemex 2020-2025 para módulos de planeación y mapas</p>
              </div>
              <div>
                <p className="font-semibold text-lg">React + TypeScript</p>
                <p className="text-gray-600 text-sm">SPAs modernas, componentes reutilizables</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Vue, Ionic, React Native</p>
                <p className="text-gray-600 text-sm">Apps híbridas y móviles multiplataforma</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                BE
              </div>
              <h3 className="text-2xl font-bold">Backend Robusto</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-lg">.NET Aspire <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">2025</span></p>
                <p className="text-gray-600 text-sm">Microservicios cloud-native, observabilidad integrada</p>
              </div>
              <div>
                <p className="font-semibold text-lg">.NET 7-9 + C# 12</p>
                <p className="text-gray-600 text-sm">Minimal APIs, Entity Framework Core, Dapper</p>
              </div>
              <div>
                <p className="font-semibold text-lg">Microservicios Java</p>
                <p className="text-gray-600 text-sm">IntelliJ IDEA, arquitecturas distribuidas</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI & Herramientas Modernas */}
        <div className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
              AI
            </div>
            <h3 className="text-2xl font-bold">Desarrollo Asistido por IA</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-lg flex items-center gap-2">
                Cursor AI Editor 
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Actualmente</span>
              </p>
              <p className="text-gray-600 text-sm">Desarrollo acelerado con AI pair programming, autocompletado inteligente y generación de código contextual</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Modelos de IA</p>
              <p className="text-gray-600 text-sm">Claude, GPT-4, Copilot para optimización de código, arquitectura y resolución de problemas complejos</p>
            </div>
          </div>
        </div>

        {/* Tecnologías Complementarias */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border-2 border-gray-200 hover:border-gray-400 transition-colors">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">🗄️</span>
              Bases de Datos
            </h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• SQL Server 2019</li>
              <li>• Oracle 12i</li>
              <li>• MySQL</li>
              <li>• Integration Services (ETL)</li>
            </ul>
          </div>

          <div className="p-6 border-2 border-gray-200 hover:border-gray-400 transition-colors">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">🔌</span>
              Integraciones
            </h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• APIs RESTful</li>
              <li>• Google Maps API</li>
              <li>• Twilio (SMS/Voice)</li>
              <li>• Swagger/OpenAPI</li>
            </ul>
          </div>

          <div className="p-6 border-2 border-gray-200 hover:border-gray-400 transition-colors">
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              Herramientas
            </h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Cursor AI Editor</li>
              <li>• Visual Studio 2022</li>
              <li>• VS Code</li>
              <li>• IntelliJ IDEA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Proyectos Destacados</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">RMS & ARKIK - Cemex</h3>
                  <p className="text-gray-600">Neoris | 2020-2025</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded">Angular</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Módulos de planeación de camiones, administración de choferes, citados y seguimiento en mapas en tiempo real. 
                Componentes Angular avanzados con integración de Google Maps y Twilio para notificaciones.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Angular</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">C#</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">.NET Core</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Google Maps</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Twilio</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">SQL Server</span>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Red de Proveedores Médicos</h3>
                  <p className="text-gray-600">Salud Interactiva | 2019-2020</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">Líder Técnico</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sistema completo de gestión de red de médicos, hospitales, farmacias y laboratorios. 
                Configuración de productos médicos, programa de ventas con titulares y beneficiarios. 
                Arquitectura con patrones Abstract Factory y Automapper.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">ASP.NET Core</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Angular</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Entity Framework</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Element UI</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Swagger</span>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-orange-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">SARAI - Business Intelligence</h3>
                  <p className="text-gray-600">ICA (Voilatek) | 2017-2018</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded">Director General</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mini BI consolidando información de proyectos carreteros. Generación automática de reportes PDF ejecutivos 
                enviados por correo. Aplicaciones Web y Mobile (Ionic) para consultas detalladas de proyectos.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Angular 4</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Ionic 3</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">MVC</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Windows Service</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">SQL Server</span>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-red-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Optimización Apps Bancarias</h3>
                  <p className="text-gray-600">Santander (Neoris) | 2018-2019</p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded">Microservicios</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Optimización de aplicaciones Web críticas (Seta, Mac, Cassmov) para operaciones bancarias. 
                Arquitectura de microservicios en Java con frontend Angular.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Java Microservicios</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">IntelliJ IDEA</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded">Angular</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Recientes y Próximos */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Aprendizaje Continuo</h2>
        <p className="text-lg text-gray-600 mb-12">Manteniéndome actualizado con las últimas tecnologías</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cursos Recientes */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">✅</span>
              Cursos Recientes
            </h3>
            <div className="space-y-4">
              <div className="p-6 bg-blue-50 border-2 border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-lg">Angular 19</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2025</span>
                </div>
                <p className="text-sm text-gray-600">UDEMY • Mar-Abr 2025</p>
              </div>
              <div className="p-6 bg-purple-50 border-2 border-purple-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-lg">.NET Aspire</h4>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">2025</span>
                </div>
                <p className="text-sm text-gray-600">UDEMY • Abr 2025</p>
              </div>
              <div className="p-6 bg-green-50 border-2 border-green-200">
                <h4 className="font-bold text-lg">Microservicios .NET</h4>
                <p className="text-sm text-gray-600">LinkedIn Learning • Ago 2019</p>
              </div>
              <div className="p-6 bg-orange-50 border-2 border-orange-200">
                <h4 className="font-bold text-lg">Ionic + Python & Django</h4>
                <p className="text-sm text-gray-600">Udemy • 2018-2019</p>
              </div>
            </div>
          </div>

          {/* Próximas Metas */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              Próximas Metas
            </h3>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 hover:border-emerald-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-xl">Spring Boot</h4>
                  <span className="text-2xl">🍃</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Profundizar en microservicios Java con Spring Boot, Spring Cloud y arquitecturas reactivas. 
                  Complementar experiencia actual en microservicios.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-300 hover:border-yellow-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-xl">Python</h4>
                  <span className="text-2xl">🐍</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Expandir conocimientos en Python para desarrollo backend con FastAPI, automatización 
                  y scripting. Integrar con ecosistema .NET existente.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-xl">IA para Desarrollo</h4>
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  LangChain, LangFlow, integración de modelos de lenguaje (GPT, Claude, Ollama) y agentes inteligentes 
                  para automatización y asistencia en aplicaciones empresariales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section id="contacto" className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ¿Necesitas un desarrollador senior?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {yearsSinceStart} años de experiencia en proyectos críticos. Disponible para proyectos fullstack, 
            liderazgo técnico y arquitectura de soluciones empresariales.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
            <a href="mailto:cale2332@yahoo.com" className="hover:text-gray-300 transition-colors">
              📧 cale2332@yahoo.com
            </a>
            <a 
              href="tel:5573391658" 
              className="hover:text-gray-300 transition-colors"
            >
              📞 Teléfono disponible
            </a>
            <a 
              href="/cv"
              className="hover:text-gray-300 transition-colors"
            >
              📄 Ver CV completo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
