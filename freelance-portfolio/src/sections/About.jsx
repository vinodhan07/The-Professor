import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight mb-4">
            About Me<span className="text-accent-green-dark">.</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            Turning intelligence into automation. Turning automation into impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Story */}
          <div className="reveal space-y-6">
            <p className="text-lg leading-relaxed text-text-muted">
              I'm a <strong className="text-text">pre-final year Computer Science student</strong> based in Salem, India, 
              passionate about building <strong className="text-text">AI-driven software systems</strong> that scale. 
              From LLM-powered automation agents to full-stack web applications, I love bridging 
              the gap between cutting-edge research and real-world solutions.
            </p>
            <p className="text-lg leading-relaxed text-text-muted">
              My journey started with curiosity about how things work — and quickly evolved into 
              building <strong className="text-text">intelligent workflows with n8n</strong>, crafting 
              <strong className="text-text"> computer vision tools</strong>, and developing 
              <strong className="text-text"> full-stack applications</strong> for real clients. I've won hackathons, 
              published research at IEEE, and delivered automation solutions that save teams hours of manual work.
            </p>
            <p className="text-lg leading-relaxed text-text-muted">
              When I'm not coding, I'm either exploring new AI models, mentoring fellow students, 
              or finding creative ways to automate everyday problems.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.2s' }}>
            <div className="neo-card p-6 text-center">
              <p className="font-heading font-extrabold text-3xl text-accent-green-dark">5+</p>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted mt-2">Projects Built</p>
            </div>
            <div className="neo-card p-6 text-center">
              <p className="font-heading font-extrabold text-3xl text-accent-pink">🏆</p>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted mt-2">Hackathon Winner</p>
            </div>
            <div className="neo-card p-6 text-center">
              <p className="font-heading font-extrabold text-3xl text-accent-blue">📄</p>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted mt-2">IEEE Published</p>
            </div>
            <div className="neo-card p-6 text-center">
              <p className="font-heading font-extrabold text-3xl text-accent-purple">🎓</p>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted mt-2">Google Ambassador</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
