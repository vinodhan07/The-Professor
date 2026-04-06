export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="font-logo text-2xl text-accent-pink">
            VINODHAN
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors">About</a>
            <a href="#services" className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors">Services</a>
            <a href="#works" className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors">Works</a>
            <a href="#pricing" className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors">Pricing</a>
            <a href="#contact" className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
