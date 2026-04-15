import { useEffect, useRef } from 'react';

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
  link: string | null;
  inProgress: boolean;
}

const projects: Project[] = [
  {
    title: 'API REST — Kiosco',
    category: 'Backend',
    desc: 'API REST para kiosco digital con autenticación JWT, roles de usuario, gestión de productos y pedidos.',
    image: 'https://readdy.ai/api/search-image?query=dark%20minimal%20centered%20glowing%20server%20terminal%20icon%20on%20deep%20dark%20navy%20background%2C%20abstract%20circuit%20lines%2C%20no%20text%2C%20clean%20centered%20composition%2C%20soft%20green%20glow%20emanating%20from%20center%2C%20professional%20portfolio%20card%2C%20landscape&width=600&height=400&seq=lautaro-kiosco-v6&orientation=landscape',
    tags: ['Node.js', 'Express', 'TypeScript', 'Prisma'],
    link: 'https://github.com/LautaroGonzalez1010/APIREST-Kiosco',
    inProgress: false,
  },
  {
    title: 'Argoa Digital',
    category: 'Plataforma',
    desc: 'Plataforma de cursos online con certificación, sistema de inscripción y generación de certificados digitales.',
    image: 'https://public.readdy.ai/ai/img_res/edited_9886334758c201beaaa775ac5fb8f4cf_34d77e4a.jpg',
    tags: ['React', 'Next.js', 'Node.js', 'SQL'],
    link: 'https://argoadigital.com.ar/',
    inProgress: false,
  },
  {
    title: 'Hamburguesería',
    category: 'Website',
    desc: 'Web para hamburguesería con carta digital interactiva: el cliente arma su pedido y lo envía por WhatsApp.',
    image: 'https://public.readdy.ai/ai/img_res/edited_fcd8c45906660ed47522af20c3fb2961_4e2e6b1f.jpg',
    tags: ['React', 'Next.js', 'TypeScript'],
    link: 'https://lautarogonzalez1010.github.io/BurgerHouse/',
    inProgress: false,
  },
  {
    title: 'Energy Sapiens — Redesign',
    category: 'Website',
    desc: 'Rediseño completo del sitio de ingeniería eléctrica industrial con clientes como Bridgestone y Danone.',
    image: 'https://public.readdy.ai/ai/img_res/edited_967cc6401ddbeb974b350ce2560939fe_dd169447.jpg',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    link: 'https://lautarogonzalez1010.github.io/EnergySapiens-Redesign/',
    inProgress: false,
  },
  {
    title: 'FlowMetrics',
    category: 'SaaS',
    desc: 'SaaS de analítica empresarial con insights en tiempo real, reportes automáticos y planes escalables.',
    image: 'https://public.readdy.ai/ai/img_res/edited_a986096c47c1d91361a2f27eb1b0b0de_bade5fcd.jpg',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    link: 'https://lautarogonzalez1010.github.io/FlowMetrics/',
    inProgress: false,
  },
  {
    title: 'E-Commerce Full Stack',
    category: 'E-commerce',
    desc: 'Plataforma de comercio electrónico completa: catálogo, carrito, pagos, panel admin y gestión de órdenes.',
    image: 'https://readdy.ai/api/search-image?query=dark%20minimal%20centered%20glowing%20shopping%20bag%20icon%20on%20deep%20dark%20background%2C%20abstract%20product%20grid%20silhouettes%2C%20no%20text%2C%20clean%20centered%20composition%2C%20soft%20violet%20purple%20glow%20emanating%20from%20center%2C%20professional%20portfolio%20card%2C%20landscape&width=600&height=400&seq=lautaro-ecom-v3&orientation=landscape',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    link: null,
    inProgress: true,
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="relative bg-[#06060a] py-24 md:py-40 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06b6d4]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-20 md:mb-32">
          <div className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4">Proyectos</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-[800px]">
            Nuestro{' '}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">Trabajo</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const cardClass = `bg-[#0d0d12] border overflow-hidden transition-all duration-300 ${
              project.inProgress
                ? 'border-white/5'
                : 'border-white/10 group cursor-pointer hover:border-[#8b5cf6]/50'
            }`;

            const inner = (
              <>
                {/* Top gradient line */}
                {!project.inProgress ? (
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#06b6d4]/20" />
                )}

                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/2] bg-[#06060a] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                      project.inProgress
                        ? 'grayscale opacity-25'
                        : 'group-hover:scale-105'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/40 to-transparent transition-opacity duration-300 ${
                    project.inProgress ? 'opacity-90' : 'opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* In Progress overlay */}
                  {project.inProgress && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-ping" />
                        <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <div className="border border-[#8b5cf6]/50 text-[#8b5cf6] text-xs font-mono px-4 py-2 tracking-widest">
                        EN DESARROLLO
                      </div>
                      <p className="text-white/30 text-xs font-mono">PRÓXIMAMENTE</p>
                    </div>
                  )}

                  {/* Hover overlay info — only for completed */}
                  {!project.inProgress && (
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <div className="text-white text-lg font-bold mb-2">{project.title}</div>
                        <div className="text-white/80 text-sm">{project.desc}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                      {project.category}
                    </span>
                    <span className="text-xs text-white/40 font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                    {project.title}
                    {project.inProgress && (
                      <span className="text-[#8b5cf6] text-xs animate-pulse">●</span>
                    )}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs border px-2 py-1 font-mono transition-all duration-300 ${
                          project.inProgress
                            ? 'text-white/20 border-white/10'
                            : 'text-white/50 border-white/20 group-hover:border-[#8b5cf6]/40 group-hover:text-[#c4b5fd]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.inProgress && (
                    <div className="mt-4 flex items-center gap-2 text-white/30 text-xs font-mono">
                      <i className="ri-lock-line" />
                      <span>Sin link disponible aún</span>
                    </div>
                  )}
                </div>
              </>
            );

            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <div key={project.title} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-16 md:mt-24 text-center">
          <p className="text-white/60 text-sm mb-6">¿Quieres ver más proyectos?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/20 text-white px-8 py-3 text-sm font-semibold hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 hover:shadow-lg hover:shadow-[#8b5cf6]/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Solicitar Portfolio Completo
          </button>
        </div>
      </div>
    </section>
  );
}
