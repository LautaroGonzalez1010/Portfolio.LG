import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    subtitle: 'Entendemos tu negocio',
    desc: 'Realizamos una reunión inicial para analizar en profundidad tu negocio, objetivos, audiencia objetivo y competencia. Definimos el alcance del proyecto y la estrategia digital más adecuada.',
    icon: 'ri-search-eye-line',
    duration: '1–2 días',
    color: '#8b5cf6',
    deliverables: ['Brief del proyecto', 'Análisis de competencia', 'Propuesta técnica'],
  },
  {
    number: '02',
    title: 'Diseño',
    subtitle: 'Damos forma a tu visión',
    desc: 'Creamos wireframes, prototipos interactivos y el diseño visual final. Cada pantalla es pensada para maximizar la conversión y reflejar la identidad de tu marca.',
    icon: 'ri-pencil-ruler-2-line',
    duration: '3–7 días',
    color: '#06b6d4',
    deliverables: ['Wireframes', 'Prototipo interactivo', 'Guía de estilos'],
  },
  {
    number: '03',
    title: 'Desarrollo',
    subtitle: 'Construimos con precisión',
    desc: 'Desarrollamos tu proyecto con código limpio, escalable y optimizado. Utilizamos las tecnologías más modernas del mercado garantizando rendimiento, seguridad y mantenibilidad.',
    icon: 'ri-code-s-slash-line',
    duration: '7–21 días',
    color: '#a78bfa',
    deliverables: ['Código fuente', 'Tests de calidad', 'Documentación técnica'],
  },
  {
    number: '04',
    title: 'Revisión',
    subtitle: 'Perfeccionamos cada detalle',
    desc: 'Presentamos el proyecto para tu revisión. Realizamos hasta 3 rondas de ajustes incluidas para asegurarnos de que el resultado supere tus expectativas antes del lanzamiento.',
    icon: 'ri-eye-line',
    duration: '2–4 días',
    color: '#34d399',
    deliverables: ['Demo en staging', 'Rondas de feedback', 'Ajustes finales'],
  },
  {
    number: '05',
    title: 'Lanzamiento',
    subtitle: 'Salimos al mundo',
    desc: 'Desplegamos tu proyecto en producción con configuración de dominio, SSL, optimización SEO y monitoreo. Te acompañamos en cada paso del proceso de puesta en marcha.',
    icon: 'ri-rocket-line',
    duration: '1–2 días',
    color: '#f59e0b',
    deliverables: ['Deploy en producción', 'Configuración SEO', 'Soporte post-lanzamiento'],
  },
];

export default function Process() {
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
    <section id="process" ref={sectionRef} className="relative bg-[#06060a] py-24 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8b5cf6]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4">Proceso de Trabajo</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
              Cómo{' '}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">Trabajamos</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[380px]">
            Un proceso claro y transparente, diseñado para que siempre sepas en qué etapa está tu proyecto.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8b5cf6]/40 via-[#06b6d4]/30 to-transparent" />

          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                  {/* Icon circle */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className="w-20 h-20 flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${step.color}15`,
                        borderColor: `${step.color}40`,
                        boxShadow: `0 0 30px ${step.color}15`,
                      }}
                    >
                      <i className={`${step.icon} text-2xl`} style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-[10px] font-black"
                      style={{ backgroundColor: step.color, color: '#06060a' }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 border border-white/8 bg-white/[0.03] p-6 md:p-8 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]"
                    style={{ borderLeftColor: `${step.color}50`, borderLeftWidth: '3px' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: step.color }}>
                          {step.subtitle}
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white">{step.title}</h3>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold whitespace-nowrap self-start"
                        style={{ backgroundColor: `${step.color}15`, color: step.color, border: `1px solid ${step.color}30` }}
                      >
                        <i className="ri-time-line" />
                        {step.duration}
                      </div>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-6">{step.desc}</p>

                    {/* Deliverables */}
                    <div>
                      <div className="text-xs text-white/30 uppercase tracking-[0.15em] mb-3">Entregables</div>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((d) => (
                          <span
                            key={d}
                            className="text-xs px-3 py-1 font-medium"
                            style={{
                              backgroundColor: `${step.color}10`,
                              color: `${step.color}cc`,
                              border: `1px solid ${step.color}25`,
                            }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment + Timeline summary */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment */}
          <div className="border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center bg-[#8b5cf6]/20 border border-[#8b5cf6]/40">
                <i className="ri-bank-card-line text-[#8b5cf6] text-lg" />
              </div>
              <div className="text-white font-bold text-lg">Modalidad de Pago</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-black flex-shrink-0">50%</div>
                <div className="text-white/60 text-sm">Al inicio del proyecto, para reservar el espacio en agenda y comenzar el trabajo.</div>
              </div>
              <div className="w-full h-px bg-white/8" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#06b6d4]/20 text-[#06b6d4] text-xs font-black flex-shrink-0">50%</div>
                <div className="text-white/60 text-sm">Al finalizar y aprobar el proyecto, antes del deploy en producción.</div>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-white/8 text-xs text-white/40">
              Aceptamos transferencias bancarias, Mercado Pago y pagos internacionales vía PayPal o Wise.
            </div>
          </div>

          {/* Timeline */}
          <div className="border border-[#06b6d4]/30 bg-[#06b6d4]/5 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center bg-[#06b6d4]/20 border border-[#06b6d4]/40">
                <i className="ri-calendar-check-line text-[#06b6d4] text-lg" />
              </div>
              <div className="text-white font-bold text-lg">Tiempos Estimados</div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Landing Page', time: '5–10 días', color: '#8b5cf6' },
                { label: 'Sitio Web Corporativo', time: '10–20 días', color: '#06b6d4' },
                { label: 'E-commerce', time: '20–35 días', color: '#a78bfa' },
                { label: 'Aplicación Web', time: '30–60 días', color: '#34d399' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{item.label}</span>
                  <span className="text-xs font-bold px-2 py-1" style={{ color: item.color, backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/8 text-xs text-white/40">
              Los tiempos varían según la complejidad y los requerimientos específicos de cada proyecto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
