import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['about', 'services', 'process', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'process', label: 'Proceso' },
    { id: 'projects', label: 'Proyectos' },
  ];

  return (
    <section className="relative min-h-screen bg-[#06060a] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20technology%20background%20with%20glowing%20purple%20and%20cyan%20neon%20light%20trails%2C%20digital%20network%20nodes%2C%20futuristic%20corporate%20atmosphere%2C%20deep%20space%20aesthetic%2C%20ultra%20high%20quality%20render%2C%20cinematic%20lighting%2C%208k%20resolution&width=1400&height=900&seq=akidev-hero-bg01&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#06060a]/90 via-[#06060a]/70 to-[#0d0520]/80" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06b6d4]/10 blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] md:h-[80px] ${scrolled ? 'bg-[#06060a]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* Logo - Left */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 group cursor-pointer h-9 md:h-10"
          >
            <div className="h-9 md:h-10 flex items-center">
              <img
                src="https://public.readdy.ai/ai/img_res/2cd0c191-aebb-4b38-afcd-7d1056843499.png"
                alt="AKIDEV"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]" />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-3 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white px-6 py-2 text-sm font-bold hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Contactar
            </button>
          </div>

          {/* Back Button - Desktop */}
          <button
            onClick={() => navigate('/')}
            className="hidden md:flex items-center justify-center w-10 h-10 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
            title="Volver al selector"
          >
            <i className="ri-arrow-left-line text-xl" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
          >
            <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#06060a]/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-base font-medium transition-colors duration-300 text-left cursor-pointer ${
                  activeSection === id ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white px-6 py-3 text-sm font-bold whitespace-nowrap cursor-pointer text-center"
            >
              Contactar
            </button>
            <div className="h-px bg-white/10 my-2" />
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/60 text-base font-medium transition-colors duration-300 hover:text-white cursor-pointer"
            >
              <i className="ri-arrow-left-line" />
              Volver al Selector
            </button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 text-[#c4b5fd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
              Estudio de Desarrollo Web
            </div>

            <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] font-black text-white leading-[0.95] mb-6 tracking-tight">
              Desarrollo<br />
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">Web</span>{' '}
              <span className="bg-gradient-to-r from-[#06b6d4] to-[#67e8f9] bg-clip-text text-transparent">Profesional</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-[580px]">
              Transformamos ideas en productos digitales de alto impacto. Código limpio, diseño moderno y resultados medibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white px-8 py-4 text-sm font-bold hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg shadow-[#8b5cf6]/30"
              >
                Solicitar Presupuesto
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border-2 border-white/20 text-white px-8 py-4 text-sm font-semibold hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Ver Proyectos →
              </button>
            </div>

            {/* Tech strip */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">Tecnologías que dominamos</div>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Supabase'].map((tech) => (
                  <span key={tech} className="text-xs text-white/60 border border-white/10 bg-white/5 px-3 py-1 font-mono hover:border-[#8b5cf6]/50 hover:text-white/90 transition-all duration-200 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Value cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              {
                icon: 'ri-code-s-slash-line',
                color: '#8b5cf6',
                glow: 'shadow-[#8b5cf6]/20',
                title: 'Código de Calidad',
                desc: 'Arquitectura limpia, escalable y mantenible. Nada de parches.',
              },
              {
                icon: 'ri-layout-masonry-line',
                color: '#06b6d4',
                glow: 'shadow-[#06b6d4]/20',
                title: 'Diseño Moderno',
                desc: 'Interfaces cuidadas al detalle, atractivas y 100% responsivas.',
              },
              {
                icon: 'ri-focus-3-line',
                color: '#a78bfa',
                glow: 'shadow-[#a78bfa]/20',
                title: 'Atención Personalizada',
                desc: 'Cada proyecto es único. Trabajamos codo a codo con el cliente.',
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 p-6 transition-all duration-300 hover:bg-white/8 shadow-xl ${card.glow} group`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${card.color}20`, border: `1px solid ${card.color}40` }}
                  >
                    <i className={`${card.icon} text-xl`} style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white mb-1">{card.title}</div>
                    <div className="text-sm text-white/50 leading-relaxed">{card.desc}</div>
                  </div>
                </div>
                <div className="mt-4 h-[1px] w-full bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}