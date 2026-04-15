import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Desarrollo Web Completo',
    desc: 'Sitios web modernos, rápidos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas.',
    tags: ['React', 'Next.js', 'TypeScript'],
    icon: 'ri-global-line',
    color: '#8b5cf6',
  },
  {
    title: 'Aplicaciones Web Personalizadas',
    desc: 'Sistemas a medida para tu negocio. Dashboards, CRMs, plataformas de gestión y más.',
    tags: ['Full-Stack', 'APIs', 'Bases de Datos'],
    icon: 'ri-apps-line',
    color: '#06b6d4',
  },
  {
    title: 'E-commerce & Tiendas Online',
    desc: 'Tiendas online completas con pasarelas de pago, gestión de inventario y panel administrativo.',
    tags: ['Shopify', 'Stripe', 'Supabase'],
    icon: 'ri-shopping-bag-line',
    color: '#a78bfa',
  },
  {
    title: 'Diseño UI/UX',
    desc: 'Interfaces modernas y funcionales que convierten visitantes en clientes. Diseño centrado en el usuario.',
    tags: ['Figma', 'Prototipos', 'Responsive'],
    icon: 'ri-palette-line',
    color: '#67e8f9',
  },
  {
    title: 'Optimización & Performance',
    desc: 'Mejoramos la velocidad y rendimiento de tu sitio web existente. Auditorías y optimización SEO.',
    tags: ['SEO', 'Core Web Vitals', 'Analytics'],
    icon: 'ri-speed-line',
    color: '#8b5cf6',
  },
  {
    title: 'Mantenimiento & Soporte',
    desc: 'Soporte continuo, actualizaciones de seguridad y mejoras constantes para tu proyecto.',
    tags: ['24/7', 'Updates', 'Backups'],
    icon: 'ri-customer-service-2-line',
    color: '#06b6d4',
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="relative bg-[#06060a] py-24 md:py-40 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#8b5cf6]/6 blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 border border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#67e8f9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <i className="ri-briefcase-line" />
            Servicios
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-[800px]">
            Capacidades{' '}
            <span className="bg-gradient-to-r from-[#06b6d4] to-[#67e8f9] bg-clip-text text-transparent">Corporativas</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative p-8 border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group overflow-hidden cursor-default"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300 font-mono select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
              >
                <i className={`${service.icon} text-xl`} style={{ color: service.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{service.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 border transition-all duration-300"
                    style={{
                      color: `${service.color}cc`,
                      borderColor: `${service.color}30`,
                      backgroundColor: `${service.color}10`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-16 md:mt-20 text-center">
          <p className="text-white/50 text-sm mb-6">¿No encuentras lo que buscas?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-[#8b5cf6]/50 text-[#c4b5fd] px-8 py-3 text-sm font-semibold hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6] transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Consultar Proyecto Personalizado →
          </button>
        </div>
      </div>
    </section>
  );
}
