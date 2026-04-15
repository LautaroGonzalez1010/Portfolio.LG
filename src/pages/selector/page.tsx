import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectorPage() {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'akidev' | 'lautaro' | null>(null);

  return (
    <div className="relative h-screen flex flex-col md:flex-row overflow-hidden">

      {/* AKIDEV Side - Left */}
      <div
        onMouseEnter={() => setHoveredSide('akidev')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate('/akidev')}
        className="relative w-full h-1/2 md:w-1/2 md:h-full bg-[#06060a] flex items-center justify-center px-4 sm:px-8 md:px-12 cursor-pointer group transition-all duration-500"
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/20 blur-[100px] transition-opacity duration-700 ${hoveredSide === 'akidev' ? 'opacity-100' : 'opacity-50'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#06b6d4]/15 blur-[90px] transition-opacity duration-700 ${hoveredSide === 'akidev' ? 'opacity-100' : 'opacity-50'}`} />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-[420px] flex flex-col items-center">
          {/* Logo */}
          <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
            <img
              src="https://public.readdy.ai/ai/img_res/2cd0c191-aebb-4b38-afcd-7d1056843499.png"
              alt="AKIDEV"
              className="h-10 sm:h-14 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#a78bfa] px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8b5cf6] rounded-full animate-pulse" />
            <span className="hidden sm:inline">Estudio Profesional</span>
            <span className="sm:hidden">Estudio</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 sm:mb-4 tracking-tight">
            AKIDEV
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Studio
            </span>
          </h2>

          {/* Description - hidden on very small */}
          <p className="hidden sm:block text-sm md:text-base text-[#a1a1aa] leading-relaxed mb-6 md:mb-8 max-w-[340px]">
            Desarrollo web profesional para empresas. Sitios modernos que impulsan negocios.
          </p>

          {/* Arrow */}
          <div className={`inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] transition-all duration-500 mb-4 sm:mb-8 ${hoveredSide === 'akidev' ? 'scale-110 shadow-lg shadow-[#8b5cf6]/40' : 'scale-100'}`}>
            <i className="ri-arrow-right-line text-white text-base sm:text-xl" />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Supabase'].map((tech) => (
              <span key={tech} className="text-[9px] sm:text-xs text-white/50 border border-white/10 bg-white/5 px-2 sm:px-3 py-0.5 sm:py-1 font-mono whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow */}
        <div className={`absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 to-transparent transition-opacity duration-500 pointer-events-none ${hoveredSide === 'akidev' ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* LAUTARO Side - Right */}
      <div
        onMouseEnter={() => setHoveredSide('lautaro')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate('/lautaro')}
        className="relative w-full h-1/2 md:w-1/2 md:h-full bg-gradient-to-b from-[#0f0f0e] to-[#1a1a18] flex items-center justify-center px-4 sm:px-8 md:px-12 cursor-pointer group transition-all duration-500"
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${hoveredSide === 'lautaro' ? 'opacity-[0.08]' : 'opacity-[0.04]'}`}
            style={{
              backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className={`absolute top-1/3 right-1/3 w-[350px] h-[350px] rounded-full bg-[#00ff88]/15 blur-[90px] transition-opacity duration-700 ${hoveredSide === 'lautaro' ? 'opacity-100' : 'opacity-50'}`} />
          <div className={`absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#7c3aed]/10 blur-[80px] transition-opacity duration-700 ${hoveredSide === 'lautaro' ? 'opacity-100' : 'opacity-50'}`} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-[420px] flex flex-col items-center">
          {/* Badge Player Ready */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#1a1a18]/80 border-2 border-[#00ff88] px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-8 shadow-lg shadow-[#00ff88]/20"
               style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#00ff88] animate-pulse"
                 style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }}
            />
            <span className="text-[#00ff88] text-[9px] sm:text-xs font-black uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
              ● PLAYER 1
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight relative" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <span className="relative inline-block">
              LAUTARO
              <span className="absolute inset-0 text-[#00ff88] opacity-60 animate-pulse" style={{ transform: 'translate(1px, 1px)' }}>
                LAUTARO
              </span>
            </span>
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'monospace' }}>
            <span className="bg-gradient-to-r from-[#00ff88] via-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">
              GONZÁLEZ
            </span>
          </h3>

          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white px-3 py-1 mb-4 sm:mb-6"
               style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
            <span className="text-[9px] sm:text-xs font-black tracking-wider" style={{ fontFamily: 'monospace' }}>
              FULL-STACK
            </span>
          </div>

          {/* Description - hidden on very small */}
          <p className="hidden sm:block text-sm md:text-base text-[#a1a1aa] leading-relaxed mb-6 md:mb-8 max-w-[340px]">
            Sistemas y plataformas digitales. Backend, frontend y bases de datos en producción.
          </p>

          {/* Arrow */}
          <div className={`inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] transition-all duration-500 mb-4 sm:mb-8 ${hoveredSide === 'lautaro' ? 'scale-110 shadow-lg shadow-[#00ff88]/40' : 'scale-100'}`}
               style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
            <i className="ri-arrow-right-line text-[#0f0f0e] text-base sm:text-xl font-black" />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {['PHP', 'MySQL', 'React', 'TypeScript'].map((tech) => (
              <span key={tech} className="text-[9px] sm:text-xs text-[#00ff88] border border-[#00ff88]/30 bg-[#00ff88]/5 px-2 sm:px-3 py-0.5 sm:py-1 font-black whitespace-nowrap" style={{ fontFamily: 'monospace' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow */}
        <div className={`absolute inset-0 bg-gradient-to-l from-[#00ff88]/5 to-transparent transition-opacity duration-500 pointer-events-none ${hoveredSide === 'lautaro' ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Divider line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block pointer-events-none" />
    </div>
  );
}
