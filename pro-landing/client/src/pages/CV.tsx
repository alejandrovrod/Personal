export default function CV() {
  // Calcular años de experiencia desde 1998
  const yearsSinceStart = new Date().getFullYear() - 1998

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero / Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Alejandro Valladares Rodríguez</h1>
          <p className="text-2xl md:text-3xl text-blue-200 mb-6">Full Stack Developer</p>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a href="mailto:cale2332@yahoo.com" className="hover:text-blue-200 transition-colors">
              📧 cale2332@yahoo.com
            </a>
            <a href="tel:5573391658" className="hover:text-blue-200 transition-colors">
              📞 55 73 39 16 58
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Resumen Profesional */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Resumen Profesional</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Senior Full Stack Developer con <strong>{yearsSinceStart} años de experiencia</strong> liderando el desarrollo 
            de soluciones empresariales en sectores críticos como <strong>banca, salud, construcción y logística</strong>. 
            Especializado en arquitecturas <strong>.NET/C#, Angular</strong> y tecnologías cloud, con 
            experiencia comprobada liderando equipos técnicos y entregando proyectos complejos 
            desde el análisis hasta la implementación en producción.
          </p>
        </section>

        {/* Experiencia Laboral */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">Experiencia Laboral</h2>
          
          <div className="space-y-10">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Senior Full Stack</h3>
              <p className="text-lg text-blue-600 font-semibold">Cemex - Neoris</p>
              <p className="text-gray-600 mb-3">October 2020 — April 2025 | Monterrey - Remoto</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>RMX – USA:</strong> Modificación de componentes de Angular, planeación de camiones, órdenes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>ARKIK-Terceros, Módulos de Planeación:</strong> Planeación de Camiones, Administración de Choferes, 
                Citados de Choferes, Camiones por Planta, Gráfica de Programación y Seguimiento en Mapas.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> Visual Studio 2015-2022, VS Code, SQL Management. C#, APIs, SQL Server 2016, 
                Angular, JavaScript, Bootstrap, Google Maps, Twilio, .NET Core
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Líder Técnico</h3>
              <p className="text-lg text-blue-600 font-semibold">Salud Interactiva</p>
              <p className="text-gray-600 mb-3">March 2019 — February 2020 | Ciudad de México</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Sistema de redes de Proveedores para administrar Médicos, Hospitales, Farmacias, Gabinetes y Laboratorios. 
                Configuración de productos de Servicio Médico para control de beneficios. Sistema de Programa de Ventas 
                con captura de titulares, beneficiarios, dirección, cuestionario médico y pago.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> Visual Studio 2019, VS Code, C#, Entity Framework, ASP.NET Core, Swagger, 
                APIs, Automapper, Abstract Factory, DropBox, SQL Server 2016, Angular, JavaScript, Element UI, Google Maps
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Desarrollador Sr Full Stack</h3>
              <p className="text-lg text-blue-600 font-semibold">Santander - Neoris</p>
              <p className="text-gray-600 mb-3">November 2018 — February 2019 | Santiago de Querétaro</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Optimización de aplicaciones Web (Seta, Mac y Cassmov).
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> Microservicios en Java, IntelliJ IDEA, Angular, VS Code
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Director General y Desarrollador Sr Full Stack</h3>
              <p className="text-lg text-blue-600 font-semibold">ICA - Voilatek</p>
              <p className="text-gray-600 mb-3">October 2017 — October 2018 | Ciudad de México</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>SARAI:</strong> Mini BI que consolidaba información de proyectos (carreteras) y generaba reportes PDF 
                a nivel ejecutivo enviados por correo. Aplicaciones Web y Mobile para consultas detalladas de proyectos.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Propuesta comercial completa: acuerdo de tiempo, recursos, costo y tecnología. Análisis funcional y no funcional. 
                Arquitectura, desarrollo e implementación de todas las aplicaciones.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> VS Code, Angular 4, Ionic 3, MVC, SQL Server 2016, Visual Studio 2017
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Desarrollador Sr Full Stack</h3>
              <p className="text-lg text-blue-600 font-semibold">RUV - Mobiik</p>
              <p className="text-gray-600 mb-3">November 2016 — September 2017 | Ciudad de México</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Arquitectura y desarrollo de aplicación híbrida Yellow Box para control de entrega de niños. 
                Desarrollo de módulos de aplicación bancaria para "Registro Único de Vivienda", 
                desde configuración de viviendas hasta asignación de bancos responsables de créditos.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> VS Code, Angular 4, Ionic 3, SQL Server 2016, Visual Studio 2015, Angular 2, 
                Wijmo UI, HTML5, Web API
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Desarrollador Sr Full Stack</h3>
              <p className="text-lg text-blue-600 font-semibold">CHUBB - Gonet</p>
              <p className="text-gray-600 mb-3">November 2015 — July 2016 | Ciudad de México</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Desarrollo y mantenimiento: Modificación del módulo de Proveedores en sistema IConfianza. 
                Cambios al sistema ACE Productos. Migración del Surety System.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> Visual Studio 2010-2015, ASP.NET 4.0, Oracle 12i, Kendo UI, ASP.NET MVC 4, 
                SQL Server 2014, Angular UI, HTML5, Web API
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Desarrollador Sr Frontend</h3>
              <p className="text-lg text-blue-600 font-semibold">Volaris - Linko</p>
              <p className="text-gray-600 mb-3">April 2015 — October 2015 | Ciudad de México</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Desarrollo y mantenimiento: Arquitectura Avianca. Aplicación HOME de Volaris. Pasos de Compra. 
                Servicios Web. Administración de carga de archivos.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">Líder Técnico</h3>
              <p className="text-lg text-blue-600 font-semibold">Phumware</p>
              <p className="text-gray-600 mb-3">May 2014 — March 2015 | Ciudad de México</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Aplicaciones ASP.NET: Simplikate Mobile Concierge, Reports Concierge, Handlers process, Layers Concierge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Liderazgo:</strong> Coordinación de 5 juniors y 1 senior. Delegación de tareas, revisión de código y VoBo.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Herramientas:</strong> Visual Studio 2010, ASP.NET Web Forms, Windows 4, C# 4, MySQL
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-lg font-semibold">Experiencia Adicional</h3>
              <div className="text-gray-700 space-y-2 mt-2">
                <p><strong>WalMart - Padsa</strong> (Feb 2014 - Apr 2014): Sistema Antifraudes de tarjeta</p>
                <p><strong>Bank of America Merrill Lynch - Praxis</strong> (Jul 2013 - Dec 2013): Conciliación de cuentas, Ethical Hacking</p>
                <p><strong>Prodesis</strong> (Jul 2012 - Jun 2013): Sistema SISGEC (Estados de Cuenta), Metodología CMMI y Scrum</p>
                <p><strong>Estrategysys (U. Coahuila)</strong> (Jul 2011 - Jun 2012): Sistema EDAS (Epidemiología)</p>
                <p><strong>Hildebrando</strong> (Feb 2011 - Jun 2011): Sistema HOMS</p>
                <p><strong>ADEMSA - TSB</strong> (Feb 2010 - Dec 2010): Sistema OperaOnline</p>
                <p><strong>Boehringer Ingelheim - Praxis</strong> (May 2009 - Feb 2010): Sistema Costo de Personal</p>
                <p><strong>AC-Nielsen - Interware</strong> (Dec 2008 - Apr 2009): Smart Cube</p>
                <p><strong>TMM Logistic</strong> (Aug 2007 - Dec 2008): Coordinador Web</p>
                <p><strong>TupperWare - JK</strong> (Jun 2005 - Dec 2006): Sistema TupperNet</p>
                <p><strong>Grupo Open, Sofftek, Team Solution, IDS</strong> (2004-2005): Diversos proyectos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Lenguajes & Frameworks</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• C#</li>
                <li>• .NET 7 a 9, .NET Core 1 a 3.1</li>
                <li>• .NET Framework 1 a 4.5</li>
                <li>• Angular (2-19)</li>
                <li>• React</li>
                <li>• Vue.js</li>
                <li>• Ionic</li>
                <li>• React Native</li>
                <li>• jQuery</li>
                <li>• JavaScript / TypeScript</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Bases de Datos</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• SQL Server (2005-2019)</li>
                <li>• Oracle (9-12i)</li>
                <li>• MySQL</li>
                <li>• Integration Services</li>
              </ul>

              <h3 className="text-lg font-bold mb-3 mt-6 text-blue-900">Herramientas</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Visual Studio (2015-2022)</li>
                <li>• Visual Studio Code</li>
                <li>• SQL Management</li>
                <li>• IntelliJ IDEA</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Tecnologías</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• APIs RESTful</li>
                <li>• Entity Framework</li>
                <li>• Swagger</li>
                <li>• Microservicios (Java)</li>
                <li>• Google Maps</li>
                <li>• Twilio</li>
                <li>• HTML5</li>
                <li>• Responsive Web</li>
                <li>• Wijmo UI, Kendo UI, Element UI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educación */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Educación</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Licenciatura en Matemáticas Aplicadas y Computación</h3>
              <p className="text-lg text-gray-700">Facultad de Estudios Superiores</p>
              <p className="text-gray-600">Naucalpan de Juárez | January 1995 — December 2000</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Certificaciones y Cursos</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Angular 19</strong> - UDEMY (March 2025 - April 2025)</li>
                <li>• <strong>.Net Aspire</strong> - UDEMY (April 2025)</li>
                <li>• <strong>MicroServicios .NET</strong> - LinkedIn (August 2019)</li>
                <li>• <strong>Python y Django</strong> - Udemy (July 2019)</li>
                <li>• <strong>Ionic</strong> - Udemy (August 2018)</li>
                <li>• <strong>Project Management Professional</strong> - Intersoftware (January 2007)</li>
                <li>• <strong>Visual Studio 2005</strong> - Intersoftware (January 2007)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Idiomas</h2>
          <div className="flex gap-8 text-lg">
            <div>
              <span className="font-semibold">Español:</span> Nativo
            </div>
            <div>
              <span className="font-semibold">Inglés:</span> Profesional
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mb-16 bg-gray-50 p-8 border-l-4 border-blue-600">
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:cale2332@yahoo.com" className="text-blue-600 hover:underline">
                cale2332@yahoo.com
              </a>
            </p>
            <p>
              <strong>Teléfono:</strong>{' '}
              <a href="tel:5573391658" className="text-blue-600 hover:underline">
                55 73 39 16 58
              </a>
            </p>
            <p>
              <strong>Ubicación:</strong> Lago Iseo, Ciudad de México, México
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
