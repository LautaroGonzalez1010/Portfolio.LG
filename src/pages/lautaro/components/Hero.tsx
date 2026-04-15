import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cubes: Array<{
      x: number; y: number; z: number;
      rotX: number; rotY: number;
      size: number; speed: number; color: string;
    }> = [];

    const colors = ['#00ff88', '#7c3aed', '#ff6b35'];

    for (let i = 0; i < 8; i++) {
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 500,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        size: 40 + Math.random() * 60,
        speed: 0.3 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cubes.forEach((cube) => {
        cube.y += cube.speed;
        if (cube.y > canvas.height + 100) {
          cube.y = -100;
          cube.x = Math.random() * canvas.width;
        }
        const scale = 1 - cube.z / 1000;
        const size = cube.size * scale;
        ctx.save();
        ctx.translate(cube.x, cube.y);
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = cube.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(-size / 2, -size / 2, size, size);
        const io = size * 0.3;
        ctx.strokeRect(-size / 2 + io, -size / 2 + io, size - io * 2, size - io * 2);
        ctx.beginPath();
        ctx.moveTo(-size / 2, -size / 2); ctx.lineTo(-size / 2 + io, -size / 2 + io);
        ctx.moveTo(size / 2, -size / 2); ctx.lineTo(size / 2 - io, -size / 2 + io);
        ctx.moveTo(-size / 2, size / 2); ctx.lineTo(-size / 2 + io, size / 2 - io);
        ctx.moveTo(size / 2, size / 2); ctx.lineTo(size / 2 - io, size / 2 - io);
        ctx.stroke();
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px] md:pt-[80px] px-5 bg-gradient-to-b from-[#0f0f0e] to-[#1a1a18]">
      <style>{`
        @keyframes hero-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes hero-bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-7px); }
        }
      `}</style>

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* ── LEFT: text ── */}
        <div className="flex-1 text-center lg:text-left">

          <div
            className="inline-flex items-center gap-3 bg-[#1a1a18]/80 border-2 border-[#00ff88] px-5 py-2 mb-8"
            style={{ clipPath: 'polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)' }}
          >
            <div className="w-3 h-3 bg-[#00ff88] animate-pulse" />
            <span className="text-[#00ff88] text-xs font-black uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
              ● PLAYER 1 READY
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            <span className="relative inline-block">
              LAUTARO
              <span className="absolute inset-0 text-[#00ff88] opacity-60 animate-pulse" style={{ transform: 'translate(2px,2px)' }}>LAUTARO</span>
              <span className="absolute inset-0 text-[#ff6b35] opacity-40 animate-pulse" style={{ transform: 'translate(-2px,-2px)', animationDelay: '0.1s' }}>LAUTARO</span>
            </span>
            <br />
            <span className="relative inline-block">
              GONZÁLEZ
              <span className="absolute inset-0 text-[#7c3aed] opacity-60 animate-pulse" style={{ transform: 'translate(2px,2px)', animationDelay: '0.05s' }}>GONZÁLEZ</span>
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 tracking-tight" style={{ fontFamily: 'monospace' }}>
            <span className="bg-gradient-to-r from-[#00ff88] via-[#7c3aed] to-[#ff6b35] bg-clip-text text-transparent">
              &gt; DESARROLLADOR WEB
            </span>
            <br />
            <span className="text-[#a1a1aa] text-xl sm:text-2xl md:text-3xl">FULL-STACK</span>
          </h2>

          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#ff6b35] text-white px-4 py-1 mb-8"
            style={{ clipPath: 'polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)' }}
          >
            <i className="ri-star-fill text-sm" />
            <span className="text-xs font-black tracking-wider" style={{ fontFamily: 'monospace' }}>LVL 99 • EN FORMACIÓN</span>
          </div>

          <p className="text-base md:text-lg text-[#a1a1aa] max-w-[580px] mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Creo sistemas y plataformas digitales que conectan tecnología con soluciones reales.
            Especializado en desarrollo full-stack, desde la arquitectura backend hasta interfaces modernas y optimizadas.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-[#0f0f0e] font-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00ff88]/40 whitespace-nowrap cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: 'monospace', clipPath: 'polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)' }}
            >
              <span className="flex items-center justify-center gap-2 text-base">
                &gt; VER PROYECTOS
                <i className="ri-arrow-right-line text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-transparent border-2 border-[#a1a1aa] text-[#a1a1aa] font-black transition-all duration-300 hover:border-white hover:text-white hover:scale-105 whitespace-nowrap cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: 'monospace', clipPath: 'polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)' }}
            >
              <span className="flex items-center justify-center gap-2 text-base">
                CONTACTAR <i className="ri-mail-line text-lg" />
              </span>
            </button>
          </div>
        </div>

        {/* ── RIGHT: gaming avatar ── */}
        <div className="flex-shrink-0 flex flex-col items-center gap-8">

          {/* circle + badge row */}
          <div className="flex items-center gap-6">

            {/* floating badge */}
            <div style={{ animation: 'hero-float 3s ease-in-out infinite' }} className="flex flex-col items-end gap-2">
              <div
                className="relative bg-[#1a1a18] border-2 border-[#00ff88] px-4 py-2"
                style={{ clipPath: 'polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)' }}
              >
                <p className="text-[#00ff88] text-xs font-black leading-snug" style={{ fontFamily: 'monospace' }}>¡MI CV</p>
                <p className="text-[#00ff88] text-xs font-black leading-snug" style={{ fontFamily: 'monospace' }}>TOCÁNDOME!</p>
                {/* triangle tail */}
                <div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ right: '-9px', width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '9px solid #00ff88' }}
                />
              </div>
              <div style={{ animation: 'hero-bounce-x 0.9s ease-in-out infinite' }} className="w-5 h-5 flex items-center justify-center text-[#00ff88] self-end mr-1">
                <i className="ri-arrow-right-line text-lg" />
              </div>
            </div>

            {/* avatar circle */}
            <a
              href="https://storage.readdy-site.link/project_files/9d009864-faca-44df-91df-050e5b1564bb/26e6c3ae-05af-460b-a467-8e3ee5ab98b0_CV_LautaroGonzalez_Final.pdf?v=e861dfd22cfc890d1600e0fa7fea0abf"
              download="CV-Lautaro-Gonzalez.pdf"
              className="relative block cursor-pointer group"
              title="Descargar mi CV"
            >
              {/* spinning dashed ring */}
              <div
                className="absolute rounded-full border border-dashed border-[#00ff88]/40"
                style={{ inset: '-14px', animation: 'hero-spin 14s linear infinite' }}
              />

              {/* photo circle */}
              <div
                className="relative w-[210px] h-[210px] rounded-full overflow-hidden border-[3px] border-[#00ff88] transition-transform duration-300 group-hover:scale-[1.04]"
                style={{ boxShadow: '0 0 24px #00ff8840' }}
              >
                <img
                  src="https://static.readdy.ai/image/ab17182f417c466948e14369eb91773d/cc51bed342dbdd51c1bd157862ba5a62.png"
                  alt="Lautaro González"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#00ff88]/15 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <i className="ri-download-2-line text-3xl text-white" />
                    <p className="text-white text-[10px] font-black mt-1" style={{ fontFamily: 'monospace' }}>DESCARGAR CV</p>
                  </div>
                </div>
              </div>

              {/* corner brackets */}
              <div className="absolute top-[-16px] left-[-16px] w-5 h-5 border-t-2 border-l-2 border-[#00ff88]" />
              <div className="absolute top-[-16px] right-[-16px] w-5 h-5 border-t-2 border-r-2 border-[#00ff88]" />
              <div className="absolute bottom-[-16px] left-[-16px] w-5 h-5 border-b-2 border-l-2 border-[#00ff88]" />
              <div className="absolute bottom-[-16px] right-[-16px] w-5 h-5 border-b-2 border-r-2 border-[#00ff88]" />

              {/* online badge */}
              <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0a0a0a] border border-[#00ff88] px-3 py-[3px] whitespace-nowrap"
                style={{ bottom: '-22px', clipPath: 'polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)', fontFamily: 'monospace' }}
              >
                <div className="w-[6px] h-[6px] bg-[#00ff88] rounded-full animate-pulse" />
                <span className="text-[#00ff88] text-[9px] font-black tracking-widest">ONLINE</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
