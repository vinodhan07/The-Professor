import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero', shadowColor: 'hover:shadow-[5px_5px_0px_#74C0FC]' },
  { label: 'About', href: '#about', shadowColor: 'hover:shadow-[5px_5px_0px_#B4F481]' },
  { label: 'Services', href: '#services', shadowColor: 'hover:shadow-[5px_5px_0px_#FF90E8]' },
  { label: 'Works', href: '#works', shadowColor: 'hover:shadow-[5px_5px_0px_#74C0FC]' },
  { label: 'Pricing', href: '#pricing', shadowColor: 'hover:shadow-[5px_5px_0px_#B4F481]' },
  { label: 'FAQ', href: '#faq', shadowColor: 'hover:shadow-[5px_5px_0px_#FF90E8]' },
];

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <>
      <nav className="w-full bg-bg z-50">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between h-20 md:h-24">
          
          {/* Logo — Blue & Bigger */}
          <a href="#hero" className="font-logo text-3xl md:text-5xl text-[#74C0FC] tracking-wide select-none">
            VINODHAN
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-lg border-2 border-transparent bg-transparent text-text transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-surface hover:border-border ${link.shadowColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-border rounded-lg bg-surface"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Divider line — full width under header */}
        <div className="w-full border-b border-gray-300" />
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 flex flex-col items-center justify-center gap-6 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={handleLinkClick}
            className="font-heading font-extrabold text-3xl hover:text-accent-pink transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a 
          href="#contact" 
          onClick={handleLinkClick}
          className="neo-btn neo-btn-primary text-lg mt-4"
        >
          ✨ Hire Me ✨
        </a>
      </div>
    </>
  );
}
