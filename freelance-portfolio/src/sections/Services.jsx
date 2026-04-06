import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. From landing pages to complex full-stack platforms.',
    features: ['React & Next.js', 'Responsive Design', 'API Integration', 'Database Design'],
    color: 'bg-accent-green',
    iconColor: 'text-green-800',
  },
  {
    icon: 'smart_toy',
    title: 'AI & Automation',
    description: 'Intelligent automation workflows that save time and eliminate repetitive tasks using n8n, LLMs, and custom AI agents.',
    features: ['n8n Workflows', 'LLM Integration', 'Computer Vision', 'Process Automation'],
    color: 'bg-accent-blue',
    iconColor: 'text-blue-800',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Clean, intuitive interfaces that convert. Designed with user experience at the core, ensuring your product stands out.',
    features: ['Design Systems', 'Prototyping', 'Mobile-First', 'Accessibility'],
    color: 'bg-accent-pink',
    iconColor: 'text-pink-800',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-bg-dark/40 w-full" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight mb-4">
            Services<span className="text-accent-green-dark">.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            High-quality solutions tailored to your needs. From concept to deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={service.title} 
              className="reveal neo-card p-8 flex flex-col gap-6 hover:!shadow-neo-lg"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} border-2.5 border-border rounded-xl flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-2xl ${service.iconColor}`}>{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-heading font-extrabold text-2xl">{service.title}</h3>
              <p className="text-text-muted leading-relaxed flex-1">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-accent-green-dark rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
