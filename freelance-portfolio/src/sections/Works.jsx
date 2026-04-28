import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Lip Materials',
    category: 'Web Development',
    description: 'A complete web platform for Lip Materials — featuring product catalog, search functionality, and responsive design built for real-world business use.',
    tech: ['React', 'JavaScript', 'CSS3', 'Node.js'],
    link: 'https://github.com/LIP-MATERIALS/Lip-Materials',
    accent: 'border-l-accent-green',
    badge: 'bg-accent-green',
  },
  {
    title: 'Telegram Food Order Automation',
    category: 'n8n Automation',
    description: 'An intelligent food ordering system powered by n8n automation workflows integrated with Telegram. Automates order processing, notifications, and delivery tracking.',
    tech: ['n8n', 'Telegram API', 'Automation', 'Webhooks'],
    link: 'https://github.com/N8n-automations-works/Telegram-Food-Order-Automation',
    accent: 'border-l-accent-blue',
    badge: 'bg-accent-blue',
  },
];

export default function Works() {
  const sectionRef = useScrollReveal();

  return (
    <section id="works" className="section-padding bg-bg-dark/40" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            My Works<span className="text-accent-green-dark">.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            A selection of projects that showcase my skills in web development, AI, and automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal neo-card border-l-[6px] ${project.accent} p-8 flex flex-col gap-4`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Category Badge */}
              <span className={`inline-block w-fit px-3 py-1 ${project.badge} border-2 border-border rounded-full font-mono text-xs font-bold uppercase tracking-wider`}>
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl">{project.title}</h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed flex-1">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-bg border border-gray-300 rounded-md font-mono text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm mt-2 group"
                >
                  View on GitHub
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
