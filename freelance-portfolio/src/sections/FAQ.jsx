import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in Full-Stack Development with React, Node.js, Python, and FastAPI. For automation, I work extensively with n8n workflows and LLM-powered AI agents. I also have experience with cloud platforms like AWS, Google Cloud, Firebase, and Supabase.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'A landing page typically takes 3-5 business days. A standard multi-page website takes 1-2 weeks. More complex projects with custom features, AI integrations, or automation workflows can take 2-4 weeks depending on scope.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Pricing depends on the scope of the project. A simple landing page starts at ₹2,999, while a multi-page site with custom features starts at ₹5,999. Complex full-stack applications are priced based on requirements.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes! I offer monthly maintenance packages that include bug fixes, content updates, performance monitoring, and security patches. We can discuss this during our initial call.',
  },
  {
    question: 'Can you work with my existing codebase?',
    answer: "Absolutely! I'm comfortable diving into existing projects built with React, Next.js, Python, Node.js, and other modern frameworks. I can refactor, add features, fix bugs, or optimize performance.",
  },
  {
    question: 'Do you build automation solutions?',
    answer: "Yes, automation is one of my core specialties! I build custom n8n workflows, Telegram bots, AI-powered agents, and automated pipelines that can handle everything from HR tasks to data processing.",
  },
  {
    question: 'Do you offer n8n automations?',
    answer: "Yes! I specialize in building n8n automation workflows for various use cases — from Telegram bots and order processing systems to data pipelines and AI-powered agents. If it's repetitive, I can automate it.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="bg-surface rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
      >
        <span className="font-heading font-semibold text-base">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-text-muted ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useScrollReveal();

  return (
    <section id="faq" className="section-padding" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-8 lg:px-16">

        {/* Header — matching reference: big bold left + subtitle right */}
        <div className="reveal flex flex-col md:flex-row md:items-end gap-4 mb-10">
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight">
            FAQ<span className="text-accent-green-dark">.</span>
          </h2>
          <p className="text-text-muted text-base md:border-l-2 md:border-gray-300 md:pl-4">
            Straight answers to your questions.
          </p>
        </div>

        {/* Subtitle */}
        <p className="reveal font-heading font-bold text-xl mb-6">Good to know</p>

        {/* FAQ Items — clean minimal accordion */}
        <div className="reveal space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom Cards — Global Reach + Custom Project */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="bg-surface rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-accent-green-dark rounded-full" />
              <span className="font-heading font-bold text-base">Global Reach</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Personal contact is irreplaceable. No anonymous call center — a direct contact person for your project.
            </p>
          </div>
          <div className="bg-text text-surface rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🚀</span>
              <span className="font-heading font-bold text-base">Custom project?</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              For shops or complex software, I'm happy to create a custom quote.
            </p>
            <a href="#contact" className="font-heading font-bold text-sm hover:underline">
              REQUEST QUOTE →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
