export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'ri-github-fill', label: 'GitHub', color: '#00ff88' },
    { icon: 'ri-linkedin-box-fill', label: 'LinkedIn', color: '#7c3aed' },
    { icon: 'ri-twitter-x-fill', label: 'Twitter', color: '#ff6b35' },
    { icon: 'ri-mail-fill', label: 'Email', color: '#00ff88' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-5 relative overflow-hidden">
      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#7c3aed]" 
                     style={{
                       clipPath: 'polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))'
                     }}
                />
                <div className="absolute inset-[3px] bg-[#1a1a1a]" 
                     style={{
                       clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
                     }}
                />
                <i className="ri-gamepad-line text-[#00ff88] text-2xl relative z-10" />
              </div>
              <div>
                <div className="text-lg font-black" style={{ fontFamily: 'monospace' }}>
                  LAUTARO_
                </div>
                <div className="text-xs text-[#00ff88] font-bold" style={{ fontFamily: 'monospace' }}>
                  FULL-STACK DEV
                </div>
              </div>
            </div>
            <p className="text-sm text-[#a1a1aa] leading-relaxed font-medium">
              Desarrollador web especializado en crear soluciones digitales completas y escalables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-[#00ff88] mb-4 flex items-center gap-2" style={{ fontFamily: 'monospace' }}>
              <i className="ri-terminal-box-line" />
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2">
              {['Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const id = item.toLowerCase().replace(' ', '-');
                      const element = document.getElementById(id === 'sobre-mí' ? 'about' : id === 'habilidades' ? 'skills' : id === 'proyectos' ? 'projects' : 'contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-[#a1a1aa] hover:text-[#00ff88] transition-colors duration-300 font-medium cursor-pointer"
                    style={{ fontFamily: 'monospace' }}
                  >
                    &gt; {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-black text-[#00ff88] mb-4 flex items-center gap-2" style={{ fontFamily: 'monospace' }}>
              <i className="ri-code-s-slash-line" />
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'TailwindCSS', 'SQL'].map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#0f0f0e] border border-[#2a2a28] text-[#a1a1aa] text-xs font-bold"
                  style={{
                    fontFamily: 'monospace',
                    clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#52525b] mt-4 leading-relaxed" style={{ fontFamily: 'monospace' }}>
              &gt; Siempre aprendiendo, siempre construyendo.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#a1a1aa] font-medium" style={{ fontFamily: 'monospace' }}>
            © {currentYear} LAUTARO GONZÁLEZ
          </div>

          {/* Easter Egg */}
          <div className="flex items-center gap-2 text-xs text-[#52525b]" style={{ fontFamily: 'monospace' }}>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#ff6b35]"
                   style={{
                     clipPath: 'polygon(0 2px, 2px 2px, 2px 0, calc(100% - 2px) 0, calc(100% - 2px) 2px, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 100%, 2px 100%, 2px calc(100% - 2px), 0 calc(100% - 2px))'
                   }}
              />
              <div className="w-2 h-2 bg-[#7c3aed]"
                   style={{
                     clipPath: 'polygon(0 2px, 2px 2px, 2px 0, calc(100% - 2px) 0, calc(100% - 2px) 2px, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 100%, 2px 100%, 2px calc(100% - 2px), 0 calc(100% - 2px))'
                   }}
              />
              <div className="w-2 h-2 bg-[#00ff88]"
                   style={{
                     clipPath: 'polygon(0 2px, 2px 2px, 2px 0, calc(100% - 2px) 0, calc(100% - 2px) 2px, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 100%, 2px 100%, 2px calc(100% - 2px), 0 calc(100% - 2px))'
                   }}
              />
            </div>
            <span>Hecho con XP</span>
          </div>

          <div className="flex items-center gap-2 bg-[#2a2a2a] border-2 border-[#00ff88] px-3 py-1"
               style={{
                 clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
               }}>
            <div className="w-2 h-2 bg-[#00ff88] animate-pulse"
                 style={{
                   clipPath: 'polygon(0 2px, 2px 2px, 2px 0, calc(100% - 2px) 0, calc(100% - 2px) 2px, 100% 2px, 100% calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 100%, 2px 100%, 2px calc(100% - 2px), 0 calc(100% - 2px))'
                 }}
            />
            <span className="text-xs font-black text-[#00ff88]" style={{ fontFamily: 'monospace' }}>
              ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}