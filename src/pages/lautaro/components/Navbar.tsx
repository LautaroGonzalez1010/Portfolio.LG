import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['about', 'skills', 'projects', 'contact'];
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] md:h-[80px] ${
        isScrolled ? 'bg-[#0f0f0e]/95 backdrop-blur-lg border-b border-[#00ff88]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 h-full flex items-center justify-between">
        {/* Logo - Left */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group cursor-pointer h-9 md:h-11"
        >
          <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center relative">
            {/* Pixel art border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#7c3aed]" 
                 style={{
                   clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
                 }}
            />
            <div className="absolute inset-[3px] bg-[#0f0f0e]" 
                 style={{
                   clipPath: 'polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))'
                 }}
            />
            <i className="ri-gamepad-line text-[#00ff88] text-xl md:text-2xl relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-base md:text-lg leading-tight tracking-tight" style={{ fontFamily: 'monospace' }}>
              LAUTARO_
            </span>
            <span className="text-[#00ff88] text-[10px] md:text-xs font-bold leading-tight tracking-wider" style={{ fontFamily: 'monospace' }}>
              &gt; FULL-STACK
            </span>
          </div>
        </button>

        {/* Desktop Navigation - Center/Right */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeSection === link.id 
                  ? 'text-[#00ff88]' 
                  : 'text-[#a1a1aa] hover:text-white'
              }`}
              style={{ fontFamily: 'monospace' }}
            >
              {activeSection === link.id && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[#00ff88] animate-pulse text-xs">
                  &gt;
                </span>
              )}
              {link.label.toUpperCase()}
              {activeSection === link.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00ff88] via-[#7c3aed] to-[#ff6b35]" />
              )}
            </button>
          ))}
        </div>

        {/* Back Button - Desktop */}
        <button
          onClick={() => navigate('/')}
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b35]/30 whitespace-nowrap cursor-pointer"
          style={{ 
            fontFamily: 'monospace',
            clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
          }}
        >
          <i className="ri-arrow-left-line text-base" />
          VOLVER
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
        >
          <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f0f0e]/98 backdrop-blur-lg border-b border-[#00ff88]/10">
          <div className="px-5 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-base font-bold transition-colors duration-300 text-left cursor-pointer ${
                  activeSection === link.id ? 'text-[#00ff88]' : 'text-[#a1a1aa] hover:text-white'
                }`}
                style={{ fontFamily: 'monospace' }}
              >
                {activeSection === link.id && '> '}{link.label.toUpperCase()}
              </button>
            ))}
            <div className="h-px bg-[#00ff88]/20 my-2" />
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#ff6b35] text-base font-bold transition-colors duration-300 hover:text-[#ff8c42] cursor-pointer"
              style={{ fontFamily: 'monospace' }}
            >
              <i className="ri-arrow-left-line" />
              VOLVER AL SELECTOR
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}