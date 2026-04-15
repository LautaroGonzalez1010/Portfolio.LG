import { useState } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d7fo5b4q2rhf4jj5qphg';
const WHATSAPP_URL = 'https://wa.me/541124615381';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    setIsSubmitting(true);

    try {
      const body = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: 'ri-mail-line',
      label: 'EMAIL',
      value: 'gonzalezlautaro03@gmail.com',
      color: '#00ff88',
      href: 'mailto:gonzalezlautaro03@gmail.com',
    },
    {
      icon: 'ri-whatsapp-line',
      label: 'WHATSAPP',
      value: '+54 11 2461-5381',
      color: '#00ff88',
      href: WHATSAPP_URL,
    },
    {
      icon: 'ri-linkedin-box-line',
      label: 'LINKEDIN',
      value: 'lau-gonzalez-dev',
      color: '#7c3aed',
      href: 'https://www.linkedin.com/in/lau-gonzalez-dev/',
    },
    {
      icon: 'ri-github-line',
      label: 'GITHUB',
      value: 'LautaroGonzalez1010',
      color: '#ff6b35',
      href: 'https://github.com/LautaroGonzalez1010',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-5 bg-[#0f0f0e] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] text-[#0f0f0e] px-4 py-1 mb-4"
               style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
            <i className="ri-chat-3-line text-sm" />
            <span className="text-xs font-black tracking-wider" style={{ fontFamily: 'monospace' }}>CONNECT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'system-ui' }}>
            CONTACTO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Methods */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-[#1a1a18] border-2 border-[#2a2a28] p-6"
                 style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'monospace' }}>
                <i className="ri-terminal-box-line text-[#7c3aed]" />
                &gt; CANALES
              </h3>

              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer nofollow"
                    className="block bg-[#0f0f0e] border border-[#2a2a28] hover:border-[#3a3a38] p-3 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                    style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 flex items-center justify-center border border-[#2a2a28] flex-shrink-0"
                        style={{
                          backgroundColor: method.color,
                          clipPath: 'polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))',
                        }}
                      >
                        <i className={`${method.icon} text-[#0f0f0e] text-lg`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-black text-[#a1a1aa] mb-0.5" style={{ fontFamily: 'monospace' }}>
                          {method.label}
                        </div>
                        <div className="text-xs font-bold text-white truncate">
                          {method.value}
                        </div>
                      </div>
                      <i className="ri-external-link-line text-[#a1a1aa] text-sm flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-[#2a2a28]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00ff88] animate-pulse"
                       style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }}
                  />
                  <span className="text-xs font-black text-[#a1a1aa]" style={{ fontFamily: 'monospace' }}>
                    DISPONIBLE PARA PROYECTOS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Form */}
          <div className="md:col-span-3">
            <div className="bg-[#111110] border-2 border-[#2a2a28] overflow-hidden shadow-2xl"
                 style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
              <div className="bg-[#1a1a18] px-4 py-3 flex items-center gap-2 border-b border-[#00ff88]/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#ff6b35]" style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }} />
                  <div className="w-3 h-3 bg-[#7c3aed]" style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }} />
                  <div className="w-3 h-3 bg-[#00ff88]" style={{ clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))' }} />
                </div>
                <span className="text-[#00ff88] text-xs font-black ml-2" style={{ fontFamily: 'monospace' }}>
                  contact_terminal.exe
                </span>
              </div>

              <div className="p-6" style={{ fontFamily: 'monospace' }}>
                <div className="text-[#00ff88] text-sm mb-4">
                  <span className="text-[#7c3aed]">lautaro@dev</span>:<span className="text-[#ff6b35]">~</span>$ send_message
                </div>

                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-[#00ff88] text-xs font-bold mb-2 block">&gt; NOMBRE:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-[#00ff88]/50 focus:border-[#00ff88] text-white px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                      placeholder="Tu nombre..."
                    />
                  </div>

                  <div>
                    <label className="text-[#00ff88] text-xs font-bold mb-2 block">&gt; EMAIL:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-[#00ff88]/50 focus:border-[#00ff88] text-white px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-[#00ff88] text-xs font-bold mb-2 block">&gt; MENSAJE:</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full bg-[#0a0a0a] border border-[#00ff88]/50 focus:border-[#00ff88] text-white px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    <div className="text-[#52525b] text-xs mt-1 text-right">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full py-3 bg-gradient-to-r from-[#00ff88] to-[#7c3aed] text-[#0f0f0e] font-black text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    style={{ fontFamily: 'monospace', clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line animate-spin" /> ENVIANDO...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-send-plane-fill" /> ENVIAR MENSAJE
                      </span>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-[#00ff88]/10 border border-[#00ff88] text-[#00ff88] px-4 py-3 text-sm"
                         style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
                      <i className="ri-checkbox-circle-fill" /> ¡Mensaje enviado! Te respondo pronto.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-[#ff6b35]/10 border border-[#ff6b35] text-[#ff6b35] px-4 py-3 text-sm"
                         style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}>
                      <i className="ri-error-warning-fill" /> Error al enviar. Intentá por WhatsApp.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
