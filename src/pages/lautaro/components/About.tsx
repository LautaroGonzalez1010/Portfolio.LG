export default function About() {
  const attributes = [
    { icon: 'ri-code-s-slash-line', label: 'Backend', value: 'PHP • MySQL • APIs', color: '#00ff88' },
    { icon: 'ri-layout-line', label: 'Frontend', value: 'React • TypeScript • Vite', color: '#7c3aed' },
    { icon: 'ri-database-2-line', label: 'Database', value: 'MySQL • Gestión de Datos', color: '#ff6b35' },
    { icon: 'ri-tools-line', label: 'Tools', value: 'Microsoft 365 • Power BI', color: '#00ff88' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-5 bg-[#0f0f0e] relative overflow-hidden">
      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white px-4 py-1 mb-4"
               style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
            <span className="text-xs font-black tracking-wider" style={{ fontFamily: 'monospace' }}>PLAYER INFO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'system-ui' }}>
            SOBRE MÍ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#7c3aed] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Attributes Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {attributes.map((attr, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#00ff88]/50 p-5 hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-3 border-2 border-[#2a2a28]"
                       style={{
                         backgroundColor: attr.color,
                         clipPath: 'polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))'
                       }}>
                    <i className={`${attr.icon} text-white text-xl`} />
                  </div>
                  <h4 className="text-xs font-black text-white mb-1" style={{ fontFamily: 'monospace' }}>
                    {attr.label.toUpperCase()}
                  </h4>
                  <p className="text-xs text-[#a1a1aa] font-semibold leading-tight">
                    {attr.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-[#00ff88] text-[#0f0f0e] px-3 py-1 border-2 border-[#00ff88]"
                   style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                <i className="ri-trophy-line text-sm" />
                <span className="text-xs font-black" style={{ fontFamily: 'monospace' }}>FULL-STACK</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#7c3aed] text-white px-3 py-1 border-2 border-[#7c3aed]"
                   style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                <i className="ri-rocket-line text-sm" />
                <span className="text-xs font-black" style={{ fontFamily: 'monospace' }}>INNOVADOR</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#ff6b35] text-white px-3 py-1 border-2 border-[#ff6b35]"
                   style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                <i className="ri-team-line text-sm" />
                <span className="text-xs font-black" style={{ fontFamily: 'monospace' }}>COLABORATIVO</span>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div>
            <div className="bg-[#1a1a18] border-2 border-[#2a2a28] p-8 shadow-xl"
                 style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-[#00ff88] animate-pulse"
                     style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }}
                />
                <h3 className="text-lg font-black text-white" style={{ fontFamily: 'monospace' }}>
                  &gt; DESCRIPCIÓN
                </h3>
              </div>

              <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
                <p className="font-medium">
                  Soy desarrollador web en formación enfocado en la creación de sistemas y plataformas digitales que conectan tecnología con soluciones reales.
                </p>
                <p className="font-medium">
                  Actualmente me especializo en desarrollo web full-stack, participando en todas las etapas del desarrollo: desde la arquitectura backend y la gestión de bases de datos hasta la construcción de interfaces modernas y optimizadas en el frontend.
                </p>
                <p className="font-medium">
                  Trabajo con tecnologías como <strong className="text-[#7c3aed]">PHP</strong>, <strong className="text-[#7c3aed]">MySQL</strong>, <strong className="text-[#7c3aed]">JavaScript</strong>, <strong className="text-[#7c3aed]">React</strong>, <strong className="text-[#7c3aed]">TypeScript</strong> y <strong className="text-[#7c3aed]">Vite</strong>, desarrollando aplicaciones web escalables, dinámicas y orientadas a una buena experiencia de usuario.
                </p>
                <p className="font-medium">
                  Me interesa especialmente el diseño de sistemas administrativos, plataformas educativas, automatización de procesos e integración de servicios externos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
