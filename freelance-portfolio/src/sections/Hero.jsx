import heroImg from '../assets/vinodhan-nobg.webp';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center pt-4 pb-0 relative -mb-8">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* ===== Left Content — pushed more left ===== */}
          <div className="w-full lg:w-[50%] lg:pl-4 space-y-5 order-2 lg:order-1 text-center lg:text-left">
            
            <p className="text-text-muted text-sm md:text-base">
              Vinodhan is on a mission to build the future of automation
            </p>
            
            <h1 className="font-heading font-extrabold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] tracking-tight">
              <span className="whitespace-nowrap">Development. Automation.</span><br />
              Innovation.
            </h1>
            
            <div className="pt-2 flex justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-accent-green border-2 border-border rounded-lg px-6 py-3.5 font-heading font-bold text-base shadow-[4px_4px_0px_#000] transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px]"
              >
                Book a Call
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* ===== Right — Photo inside card with shadow on right ===== */}
          <div className="w-full lg:w-[42%] flex justify-center lg:justify-end order-1 lg:order-2 lg:pr-8">
            <div className="relative group cursor-pointer" style={{ width: '320px', height: '440px' }}>
              {/* Blue card — person is placed INSIDE this */}
              <div 
                className="absolute rounded-[1.6rem] bg-gradient-to-br from-[#74C0FC] via-[#93d4fc] to-[#b3e0fd] border-border shadow-[3px_3px_0px_#000] flex items-end justify-center transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-[3px] hover:-translate-y-[3px] cursor-pointer"
                style={{ width: '270px', height: '290px', top: '30px', left: '15px' }}
              >
                <img
                  src={heroImg}
                  alt="Vinodhan V.A"
                  className="w-full h-full object-cover object-top rounded-[1.5rem]"
                />
              </div>
                

              {/* Floating Icon — Laptop (top-left, overlapping card edge) */}
              <div 
                className="absolute z-20 w-14 h-14 bg-accent-pink border-[3px] border-border rounded-2xl shadow-[3px_3px_0px_#000] flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-[3px] hover:-translate-y-[3px] cursor-pointer"
                style={{ top: '30px', left: '-5px', animationDelay: '0s' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="2" y1="20" x2="22" y2="20"/>
                </svg>
              </div>

              {/* Floating Icon — Code </> (right, mid-height) */}
              <div 
                className="absolute z-20 w-14 h-14 bg-accent-yellow border-[3px] border-border rounded-full shadow-[3px_3px_0px_#000] flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-[3px] hover:-translate-y-[3px] cursor-pointer"
                style={{ top: '180px', right: '-15px', animationDelay: '1.5s' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>

              {/* "Hey! I'm Vinodhan" badge — at bottom of card */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 z-20 bg-accent-green border-[3px] border-border rounded-full px-5 py-2.5 shadow-[3px_3px_0px_#000] whitespace-nowrap flex items-center gap-2.5 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-[3px]"
                style={{ bottom: '50px' }}
              >
                <span className="w-6 h-6 bg-surface border-2 border-border rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </span>
                <span className="font-heading font-bold text-sm">Hey! I'm Vinodhan</span>
                <span className="text-sm">🌍</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] border-2 border-border rounded-full shadow-[4px_4px_0px_#000] flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px]"
        aria-label="Contact on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </section>
  );
}