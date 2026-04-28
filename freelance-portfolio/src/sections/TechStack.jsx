/* 
  Tech logos using Simple Icons CDN (simpleicons.org) — grayscale single-line marquee.
  CDN pattern: https://cdn.simpleicons.org/{slug}/{color}
*/

const techs = [
  { name: 'Supabase', slug: 'supabase' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Cloudflare', slug: 'cloudflare' },
  { name: 'Plesk', slug: 'plesk' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Framer', slug: 'framer' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'React', slug: 'react' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Docker', slug: 'docker' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'HTML5', slug: 'html5' },
  { name: 'CSS3', slug: 'css' },
  { name: 'Python', slug: 'python' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Postman', slug: 'postman' },
  { name: 'LangChain', slug: 'langchain' },
];

export default function TechStack() {
  return (
    <section className="py-8 overflow-hidden">
      {/* Gradient Fades */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        {/* Single-line marquee */}
        <div className="flex items-center gap-16 animate-marquee" style={{ width: 'max-content' }}>
          {[...techs, ...techs].map((tech, i) => (
            <img
              key={`${tech.slug}-${i}`}
              src={`https://cdn.simpleicons.org/${tech.slug}/9ca3af`}
              alt={tech.name}
              title={tech.name}
              className="w-8 h-8 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
