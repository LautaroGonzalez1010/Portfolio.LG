export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06060a]">
      {/* Top gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#8b5cf6]" />
      
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1 — Brand */}
            <div>
              <div className="h-10 mb-6">
                <img
                  src="https://public.readdy.ai/ai/img_res/2cd0c191-aebb-4b38-afcd-7d1056843499.png"
                  alt="AKIDEV"
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Estudio de desarrollo web especializado en crear productos digitales de alto impacto.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/lau-gonzalez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-linkedin-line text-lg" />
                </a>
                <a
                  href="https://github.com/LautaroGonzalez1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-github-line text-lg" />
                </a>
                <a
                  href="https://wa.me/541124615381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-lg" />
                </a>
              </div>
            </div>

            {/* Column 2 — Servicios */}
            <div>
              <div className="text-white text-sm font-bold uppercase tracking-wider mb-6">Servicios</div>
              <ul className="space-y-3">
                {['Desarrollo Web', 'Aplicaciones Web', 'E-commerce', 'Diseño UI/UX', 'Optimización', 'Mantenimiento'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-white/60 text-sm hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Empresa */}
            <div>
              <div className="text-white text-sm font-bold uppercase tracking-wider mb-6">Empresa</div>
              <ul className="space-y-3">
                {[
                  { label: 'Sobre Nosotros', id: 'about' },
                  { label: 'Proceso', id: 'process' },
                  { label: 'Proyectos', id: 'projects' },
                  { label: 'Contacto', id: 'contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/60 text-sm hover:text-[#06b6d4] transition-colors duration-300 cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contacto */}
            <div>
              <div className="text-white text-sm font-bold uppercase tracking-wider mb-6">Contacto</div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:gonzalezlautaro03@gmail.com"
                    className="text-white/60 text-sm hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer"
                  >
                    gonzalezlautaro03@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/541124615381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-[#06b6d4] transition-colors duration-300 cursor-pointer"
                  >
                    +54 11 2461-5381
                  </a>
                </li>
                <li className="text-white/60 text-sm">Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-xs">
              © {new Date().getFullYear()} AKIDEV. 
            </div>
            <div className="flex gap-6">
              <button className="text-white/40 text-xs hover:text-[#8b5cf6] transition-colors duration-300 cursor-pointer">
                Términos y Condiciones
              </button>
              <button className="text-white/40 text-xs hover:text-[#06b6d4] transition-colors duration-300 cursor-pointer">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}