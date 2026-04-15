interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  description: string;
  skills: Skill[];
}

function SkillBadge({ skill, accentColor }: { skill: Skill; accentColor: string }) {
  return (
    <div
      className="flex items-center gap-3 bg-[#0f0f0e] border border-[#2a2a28] hover:border-[#3a3a38] px-4 py-3 rounded-sm transition-all duration-200 group cursor-default"
    >
      <div className="w-7 h-7 flex items-center justify-center flex-shrink-0" style={{ color: accentColor }}>
        <i className={`${skill.icon} text-base`} />
      </div>
      <span className="text-sm font-bold text-white" style={{ fontFamily: 'monospace' }}>
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: 'BACKEND',
      icon: 'ri-server-line',
      color: '#00ff88',
      description: 'Lógica de servidor, bases de datos y APIs',
      skills: [
        { name: 'PHP',      icon: 'ri-code-s-slash-line' },
        { name: 'MySQL',    icon: 'ri-database-2-line' },
        { name: 'API REST', icon: 'ri-links-line' },
        { name: 'Node.js',  icon: 'ri-terminal-box-line' },
      ],
    },
    {
      category: 'FRONTEND',
      icon: 'ri-palette-line',
      color: '#a855f7',
      description: 'Interfaces modernas y experiencia de usuario',
      skills: [
        { name: 'JavaScript',   icon: 'ri-javascript-line' },
        { name: 'React',        icon: 'ri-reactjs-line' },
        { name: 'TypeScript',   icon: 'ri-code-box-line' },
        { name: 'Tailwind CSS', icon: 'ri-brush-line' },
      ],
    },
    {
      category: 'HERRAMIENTAS',
      icon: 'ri-tools-line',
      color: '#ff6b35',
      description: 'Entorno de trabajo y productividad',
      skills: [
        { name: 'Vite',          icon: 'ri-flashlight-line' },
        { name: 'Git',           icon: 'ri-git-branch-line' },
        { name: 'Power BI',      icon: 'ri-bar-chart-box-line' },
        { name: 'Microsoft 365', icon: 'ri-microsoft-line' },
        { name: 'ServiceNow',    icon: 'ri-customer-service-2-line' },
      ],
    },
    {
      category: 'ESPECIALIDADES',
      icon: 'ri-magic-line',
      color: '#00ff88',
      description: 'Áreas de enfoque y desarrollo',
      skills: [
        { name: 'Sistemas Administrativos', icon: 'ri-settings-3-line' },
        { name: 'Plataformas Educativas',   icon: 'ri-book-open-line' },
        { name: 'Automatización',           icon: 'ri-robot-line' },
        { name: 'Integración de APIs',      icon: 'ri-plug-line' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-5 bg-[#0f0f0e] relative overflow-hidden">
      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ff88] to-[#a855f7] text-[#0f0f0e] px-4 py-1 mb-4"
            style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
          >
            <i className="ri-sword-line text-sm" />
            <span className="text-xs font-black tracking-wider" style={{ fontFamily: 'monospace' }}>TECH STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'system-ui' }}>
            TECNOLOGÍAS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] mx-auto mb-4" />
          <p className="text-[#a1a1aa] text-sm max-w-[480px] mx-auto" style={{ fontFamily: 'monospace' }}>
            Tecnologías que uso activamente en proyectos reales y en producción
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#3a3a38] p-6 shadow-xl transition-all duration-300"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-11 h-11 flex items-center justify-center border-2 border-[#2a2a28]"
                  style={{
                    backgroundColor: category.color,
                    clipPath: 'polygon(0 8px, 8px 8px, 8px 0, calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px))',
                  }}
                >
                  <i className={`${category.icon} text-[#0f0f0e] text-xl`} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white" style={{ fontFamily: 'monospace' }}>
                    {category.category}
                  </h3>
                  <span className="text-[10px] text-[#a1a1aa]" style={{ fontFamily: 'monospace' }}>
                    {category.description}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#2a2a28] mb-5 mt-4" />

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} skill={skill} accentColor={category.color} />
                ))}
              </div>

              {/* Category footer */}
              <div className="mt-5 pt-4 border-t border-[#2a2a28] flex items-center justify-between">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 border border-[#2a2a28]"
                  style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
                >
                  <i className="ri-checkbox-circle-fill text-xs" style={{ color: category.color }} />
                  <span className="text-[10px] font-black text-[#a1a1aa]" style={{ fontFamily: 'monospace' }}>
                    EN PRODUCCIÓN
                  </span>
                </div>
                <span className="text-[10px] text-[#3a3a38] font-black" style={{ fontFamily: 'monospace' }}>
                  {category.skills.length} TECHS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'PROYECTOS',    value: '6+',      icon: 'ri-folder-line',      color: '#00ff88' },
            { label: 'TECNOLOGÍAS',  value: '13+',     icon: 'ri-code-box-line',    color: '#a855f7' },
            { label: 'FORMACIÓN',    value: 'EN CURSO', icon: 'ri-time-line',       color: '#ff6b35' },
            { label: 'COMMITS',      value: '200+',    icon: 'ri-git-commit-line',  color: '#00ff88' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#3a3a38] p-4 text-center hover:scale-105 transition-all duration-300"
              style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mx-auto mb-2 border-2 border-[#2a2a28]"
                style={{
                  backgroundColor: stat.color,
                  clipPath: 'polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))',
                }}
              >
                <i className={`${stat.icon} text-[#0f0f0e] text-xl`} />
              </div>
              <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'monospace' }}>
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#a1a1aa]" style={{ fontFamily: 'monospace' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
