import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#06060a] py-24 md:py-40 overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#06b6d4]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 text-[#c4b5fd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <i className="ri-team-line" />
            Sobre Nosotros
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-[800px]">
            Somos un equipo apasionado por la{' '}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">tecnología</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-24 md:mb-28">
          {/* Left */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
              En AKIDEV transformamos ideas en productos digitales de alto impacto, combinando diseño moderno con tecnología de vanguardia.
            </p>
            <p className="text-base text-white/55 leading-relaxed mb-8">
              Somos un estudio especializado en desarrollo web que combina diseño de alto nivel con ingeniería sólida. Cada proyecto que tomamos es tratado como si fuera nuestro propio negocio.
            </p>
            <p className="text-base text-white/55 leading-relaxed mb-14">
              Trabajamos con startups, pymes y empresas consolidadas para crear presencias digitales que generan resultados reales: más visitas, más conversiones y más clientes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
               
                { value: '100%', label: 'Clientes satisfechos', color: '#06b6d4' },
                { value: '3+', label: 'Años de experiencia', color: '#a78bfa' },
                { value: '24/7', label: 'Soporte disponible', color: '#67e8f9' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative p-5 border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
                  />
                  <div className="text-3xl md:text-4xl font-black text-white mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 relative">
            <div className="relative overflow-hidden border border-white/10">
              <img
                src="https://public.readdy.ai/ai/img_res/edited_3782bf18e67e17aacd4fda153b1826a8_e45fef94.jpg"
                alt="Equipo AKIDEV"
                className="w-full h-[400px] md:h-[560px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/20 to-transparent" />
              {/* Accent border */}
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 2px rgba(139,92,246,0.5)' }} />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 px-4 py-2 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
                  <span className="text-white/90 text-sm font-semibold">AKIDEV Studio</span>
                  <span className="text-white/50 text-xs">— Desarrollo Web Profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <div className="inline-flex items-center gap-2 border border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#67e8f9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <i className="ri-shield-star-line" />
            Nuestros Valores
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Código de Calidad',
                desc: 'Escribimos código limpio, escalable y mantenible siguiendo las mejores prácticas del sector.',
                icon: 'ri-code-s-slash-line',
                color: '#8b5cf6',
              },
              {
                title: 'Rendimiento Máximo',
                desc: 'Optimizamos cada proyecto para lograr tiempos de carga mínimos y experiencias fluidas.',
                icon: 'ri-speed-line',
                color: '#06b6d4',
              },
              {
                title: 'Seguridad Primero',
                desc: 'Implementamos las mejores prácticas de seguridad para proteger tu negocio y tus usuarios.',
                icon: 'ri-shield-check-line',
                color: '#a78bfa',
              },
              {
                title: 'Diseño Responsive',
                desc: 'Cada proyecto se adapta perfectamente a cualquier dispositivo, desde móvil hasta escritorio.',
                icon: 'ri-device-line',
                color: '#67e8f9',
              },
            ].map((value, idx) => (
              <div
                key={value.title}
                className="relative p-7 border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-[3px] h-full"
                  style={{ background: `linear-gradient(180deg, ${value.color}, transparent)` }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: `${value.color}20`, border: `1px solid ${value.color}40` }}
                  >
                    <i className={`${value.icon} text-lg`} style={{ color: value.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-mono mb-1">0{idx + 1}</div>
                    <div className="text-white text-base font-bold mb-2">{value.title}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{value.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
