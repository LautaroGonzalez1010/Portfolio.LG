import { useState } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d7fo5bsq2rhf4jj5qpi0';
const WHATSAPP_URL = 'https://wa.me/541124615381';
const CONTACT_EMAIL = 'gonzalezlautaro03@gmail.com';

export default function CTAFinal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative bg-[#06060a] py-24 md:py-40 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Animated orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#8b5cf6]/12 rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/12 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="text-xs text-white/40 uppercase tracking-[0.2em] mb-6">Contacto</div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
              ¿Listo para llevar tu negocio al{' '}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">siguiente nivel</span>?
            </h2>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Cuéntanos tu proyecto y te enviaremos una propuesta personalizada en menos de 48 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white px-10 py-4 text-sm font-bold hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-[#8b5cf6]/30"
              >
                <i className="ri-file-list-3-line text-lg" />
                Solicitar Presupuesto
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/20 text-white px-8 py-4 text-sm font-semibold hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 hover:shadow-lg hover:shadow-[#06b6d4]/20 transition-all duration-300 whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <i className="ri-whatsapp-line text-lg" />
                WhatsApp
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Email</div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white text-sm font-semibold hover:text-[#8b5cf6] transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2">WhatsApp</div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:text-[#06b6d4] transition-colors">
                  +54 11 2461-5381
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Ubicación</div>
                <div className="text-white text-sm font-semibold">Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal box */}
          <div className="relative w-full max-w-[680px] bg-[#0d0d12] border border-white/15 shadow-2xl shadow-black/60 overflow-hidden">
            {/* Top accent line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]" />

            {/* Header */}
            <div className="flex items-start justify-between p-8 pb-6">
              <div>
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] mb-2">Primer paso</div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  Iniciemos tu{' '}
                  <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">proyecto</span>
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer flex-shrink-0 ml-4"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 pb-8 space-y-5">
              {/* Intro */}
              <p className="text-white/60 text-sm leading-relaxed">
                Para poder prepararte una propuesta detallada y ajustada a tus necesidades, necesitamos que completes nuestro formulario de presupuesto. Es rápido, claro y nos permite entender exactamente qué necesitás.
              </p>

              {/* Card 1 — Formulario */}
              <div className="border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex-shrink-0">
                    <i className="ri-file-list-3-line text-[#8b5cf6] text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-base mb-1">Formulario de Presupuesto</div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      Completá el formulario con los detalles de tu proyecto: tipo de sitio, funcionalidades, plazos y presupuesto estimado. Con esa información preparamos una propuesta personalizada en menos de 48 hs.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Tipo de proyecto', 'Funcionalidades', 'Plazo estimado', 'Presupuesto'].map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-[#8b5cf6]/10 text-[#c4b5fd] border border-[#8b5cf6]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-external-link-line" />
                      Completar Formulario
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 — PDF Condiciones */}
              <div className="border border-[#06b6d4]/30 bg-[#06b6d4]/5 p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex-shrink-0">
                    <i className="ri-file-pdf-line text-[#06b6d4] text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-base mb-1">Condiciones de Trabajo</div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      Antes de comenzar, te recomendamos leer nuestras condiciones de trabajo. Ahí encontrarás todo sobre plazos, revisiones incluidas, propiedad del código, confidencialidad y política de pagos.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Revisiones', 'Propiedad del código', 'Confidencialidad', 'Política de pagos'].map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-[#06b6d4]/10 text-[#67e8f9] border border-[#06b6d4]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#06b6d4]/50 text-[#06b6d4] px-5 py-2.5 text-sm font-bold hover:bg-[#06b6d4]/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-download-line" />
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="flex items-start gap-3 pt-2">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-information-line text-white/30 text-base" />
                </div>
                <p className="text-white/35 text-xs leading-relaxed">
                  Una vez que recibamos tu formulario, nos pondremos en contacto dentro de las próximas 48 horas hábiles con una propuesta detallada. También podés escribirnos directamente a{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 hover:text-[#8b5cf6] transition-colors">{CONTACT_EMAIL}</a> si tenés alguna consulta previa.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}