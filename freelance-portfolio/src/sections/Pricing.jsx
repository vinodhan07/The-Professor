import useScrollReveal from '../hooks/useScrollReveal';

const plans = [
  {
    name: 'Landing Page',
    description: 'A professional page with contact form and automatic emails. Quickly online.',
    type: 'SINGLE PAYMENT',
    price: '₹2,999',
    features: [
      '1 page (landing page)',
      'Contact form',
      'Automatic emails',
      'Mobile optimized',
    ],
    accent: 'border-accent-green',
    btnClass: 'neo-btn neo-btn-primary',
    popular: false,
  },
  {
    name: 'Standard',
    description: 'The perfect start for professional demands. Ideal for established websites.',
    type: 'SINGLE PAYMENT',
    price: '₹5,999',
    features: [
      '3 pages',
      'Contact form',
      'Automatic emails',
      'Mobile optimized',
    ],
    accent: 'border-accent-blue',
    btnClass: 'neo-btn neo-btn-dark',
    popular: true,
  },
  {
    name: 'Custom',
    description: 'For complex projects that need a tailored approach. Full-stack web apps, AI integrations, and more.',
    type: 'CUSTOM QUOTE',
    price: "Let's Talk",
    features: [
      'Unlimited pages',
      'Custom features',
      'AI & automation',
      'Priority support',
      'Full-stack development',
    ],
    accent: 'border-accent-pink',
    btnClass: 'neo-btn neo-btn-primary',
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useScrollReveal();

  return (
    <section id="pricing" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <div className="flex items-baseline gap-6 flex-wrap">
            <h2 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight">
              Pricing<span className="text-accent-green-dark">.</span>
            </h2>
            <p className="text-lg text-text-muted">
              Transparent costs. High quality approach.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal neo-card p-8 flex flex-col border-t-[5px] ${plan.accent} relative ${plan.popular ? 'md:-translate-y-4' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-6 bg-accent-blue border-2 border-border rounded-full px-4 py-1 shadow-neo-sm">
                  <span className="font-mono text-xs font-bold uppercase">Popular</span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-heading font-extrabold text-2xl mb-2">{plan.name}</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <p className="font-mono text-[0.625rem] uppercase tracking-widest text-text-muted mb-1">{plan.type}</p>
                <p className="font-heading font-extrabold text-4xl">{plan.price}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-accent-green-dark text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact" className={`${plan.btnClass} justify-center w-full`}>
                Get Started
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
