interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  statusColor: string;
  difficulty: string;
  link: string | null;
  image: string;
  inProgress?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'API REST — Kiosco',
      description: 'API REST para kiosco digital con autenticación JWT, roles de usuario, gestión de productos y pedidos.',
      tech: ['Node.js', 'Express', 'TypeScript', 'Prisma ORM', 'JWT', 'SQLite'],
      status: 'COMPLETADO',
      statusColor: '#00ff88',
      difficulty: 'HARD',
      link: 'https://github.com/LautaroGonzalez1010/APIREST-Kiosco',
      image: 'https://readdy.ai/api/search-image?query=github%20repository%20page%20for%20node%20express%20typescript%20rest%20api%20backend%20project%20with%20dark%20theme%20code%20files%20readme%20documentation%20prisma%20orm%20jwt%20authentication%20clean%20developer%20interface%20professional&width=600&height=400&seq=lautaro-kiosco-api-v4&orientation=landscape',
    },
    {
      title: 'Argoa Digital',
      description: 'Plataforma de cursos online con certificación: sistema de inscripción, visualización de materiales de estudio, panel de usuario y generación de certificados digitales.',
      tech: ['React', 'Next.js', 'Node.js', 'SQL'],
      status: 'COMPLETADO',
      statusColor: '#00ff88',
      difficulty: 'HARD',
      link: 'https://argoadigital.com.ar/',
      image: 'https://public.readdy.ai/ai/img_res/edited_83d5bc6d4d60cd3d0444f20f32343cdd_46dd3395.jpg',
    },
    {
      title: 'Hamburguesería',
      description: 'Web profesional para hamburguesería con carta digital interactiva: el cliente selecciona productos, arma su pedido y lo envía directamente por WhatsApp. Diseño responsive y atractivo.',
      tech: ['React', 'Next.js', 'TypeScript', 'CSS'],
      status: 'COMPLETADO',
      statusColor: '#00ff88',
      difficulty: 'MEDIUM',
      link: 'https://lautarogonzalez1010.github.io/BurgerHouse/',
      image: 'https://public.readdy.ai/ai/img_res/edited_fcd8c45906660ed47522af20c3fb2961_8b7c24ca.jpg',
    },
    {
      title: 'Energy Sapiens — Redesign',
      description: 'Rediseño completo del sitio web de ingeniería eléctrica industrial. Proyectos destacados, clientes corporativos como Bridgestone y Danone, y sección de servicios.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      status: 'COMPLETADO',
      statusColor: '#00ff88',
      difficulty: 'HARD',
      link: 'https://lautarogonzalez1010.github.io/EnergySapiens-Redesign/',
      image: 'https://public.readdy.ai/ai/img_res/edited_ec9be1dcca0e660cc00630b0a15a92d5_dc549f80.jpg',
    },
    {
      title: 'FlowMetrics',
      description: 'SaaS de analítica empresarial con insights en tiempo real, reportes automáticos e integraciones. Dashboard unificado con planes escalables para emprendedores.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      status: 'COMPLETADO',
      statusColor: '#00ff88',
      difficulty: 'HARD',
      link: 'https://lautarogonzalez1010.github.io/FlowMetrics/',
      image: 'https://public.readdy.ai/ai/img_res/edited_2fe808c2b833ed1ea92a3489423bdd81_3cca0dc8.jpg',
    },
    {
      title: 'E-Commerce Full Stack',
      description: 'Plataforma de comercio electrónico completa: catálogo de productos, carrito, pasarela de pagos, panel de administración y gestión de órdenes en tiempo real.',
      tech: ['React', 'Node.js', 'TypeScript', 'Prisma', 'Stripe', 'PostgreSQL'],
      status: 'EN DESARROLLO',
      statusColor: '#ff6b35',
      difficulty: 'HARD',
      link: null,
      inProgress: true,
      image: 'https://readdy.ai/api/search-image?query=modern%20ecommerce%20full%20stack%20web%20application%20dark%20background%20with%20product%20grid%20shopping%20cart%20interface%20clean%20minimal%20design%20orange%20accent%20colors%20professional%20online%20store%20dashboard%20admin%20panel&width=600&height=400&seq=lautaro-ecom-v1&orientation=landscape',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-5 bg-[#0f0f0e] relative overflow-hidden">
      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#ff6b35 1px, transparent 1px), linear-gradient(90deg, #ff6b35 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6b35] to-[#7c3aed] text-white px-4 py-1 mb-4"
               style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
            <i className="ri-trophy-line text-sm" />
            <span className="text-xs font-black tracking-wider" style={{ fontFamily: 'monospace' }}>MISIONES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'system-ui' }}>
            PROYECTOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#7c3aed] mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-[#1a1a18] border-2 overflow-hidden transition-all duration-300 relative ${
                project.inProgress
                  ? 'border-[#ff6b35]/50 hover:border-[#ff6b35]'
                  : 'border-[#2a2a28] hover:border-[#3a3a38] hover:scale-[1.02]'
              }`}
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#0f0f0e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${project.inProgress ? 'opacity-40 grayscale' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* IN PROGRESS overlay */}
                {project.inProgress && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-ping" />
                      <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-[#ff6b35] rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div
                      className="px-4 py-2 bg-[#0f0f0e]/90 border-2 border-[#ff6b35] text-[#ff6b35] text-sm font-black tracking-widest"
                      style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                    >
                      &gt; BUILDING...
                    </div>
                    <p className="text-[#a1a1aa] text-xs font-bold" style={{ fontFamily: 'monospace' }}>
                      PRÓXIMAMENTE
                    </p>
                  </div>
                )}

                {/* Status Badge */}
                <div
                  className="absolute top-3 right-3 px-3 py-1 border border-[#0f0f0e] text-[#0f0f0e] text-xs font-black"
                  style={{ backgroundColor: project.statusColor, fontFamily: 'monospace', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
                >
                  {project.inProgress && <i className="ri-loader-4-line animate-spin mr-1" />}
                  {project.status}
                </div>

                {/* Difficulty Badge */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 bg-[#0f0f0e]/80 text-white border border-[#2a2a28] text-xs font-black"
                  style={{ fontFamily: 'monospace', clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
                >
                  <i className="ri-star-fill text-[#ff6b35]" /> {project.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-black text-white mb-3 leading-tight flex items-center gap-2">
                  {project.title}
                  {project.inProgress && (
                    <span className="text-[#ff6b35] text-xs animate-pulse" style={{ fontFamily: 'monospace' }}>●</span>
                  )}
                </h3>
                <p className="text-sm text-[#a1a1aa] mb-4 leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#0f0f0e] border border-[#2a2a28] text-[#a1a1aa] text-xs font-bold"
                      style={{ fontFamily: 'monospace', clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full py-2 bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white font-black text-sm transition-all duration-300 hover:scale-105 border border-[#2a2a28] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                    style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                  >
                    <i className="ri-external-link-line" /> VER PROYECTO
                  </a>
                ) : project.inProgress ? (
                  <div
                    className="w-full py-2 bg-[#1a1a18] border-2 border-[#ff6b35]/40 text-[#ff6b35]/60 font-black text-sm flex items-center justify-center gap-2 whitespace-nowrap select-none"
                    style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                  >
                    <i className="ri-lock-line" /> EN CONSTRUCCIÓN
                  </div>
                ) : (
                  <button
                    className="w-full py-2 bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white font-black text-sm transition-all duration-300 hover:scale-105 border border-[#2a2a28] cursor-pointer whitespace-nowrap"
                    style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                  >
                    <i className="ri-eye-line" /> VER DETALLES
                  </button>
                )}
              </div>

              {/* Achievement Icon - only for completed */}
              {!project.inProgress && (
                <div className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center bg-[#00ff88] border border-[#0f0f0e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ clipPath: 'polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))' }}>
                  <i className="ri-medal-line text-[#0f0f0e] text-lg" />
                </div>
              )}

              {/* Animated border for in-progress */}
              {project.inProgress && (
                <div className="absolute inset-0 pointer-events-none"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.08), transparent)',
                       animation: 'shimmer 2s infinite',
                     }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#1a1a18] border-2 border-[#2a2a28] p-8"
               style={{ clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-[#00ff88] animate-pulse"
                   style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }}
              />
              <p className="text-lg font-black text-white" style={{ fontFamily: 'monospace' }}>
                ¿TIENES UN PROYECTO EN MENTE?
              </p>
            </div>
            <p className="text-sm text-[#a1a1aa] mb-6 font-medium">
              Trabajemos juntos para crear algo increíble
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#7c3aed] text-[#0f0f0e] font-black transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#2a2a28] cursor-pointer"
              style={{ fontFamily: 'monospace', clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
            >
              <i className="ri-message-3-line" /> INICIAR MISIÓN
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
