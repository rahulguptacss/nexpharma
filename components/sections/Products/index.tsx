import type { ProductsSectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const props = {
    viewBox: '0 0 24 24',
    className: 'h-5 w-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'capsule') {
    return (
      <svg {...props}>
        <rect x="7" y="3" width="10" height="18" rx="5" transform="rotate(40 12 12)" />
        <path d="M9.2 9.2l5.6 5.6" />
      </svg>
    );
  }
  if (name === 'vial') {
    return (
      <svg {...props}>
        <path d="M9 3h6" />
        <path d="M10 3v3.2L7.2 12.2A4.2 4.2 0 0 0 11 19h2a4.2 4.2 0 0 0 3.8-6.8L14 6.2V3" />
        <path d="M9.2 13h5.6" />
      </svg>
    );
  }
  if (name === 'drop') {
    return (
      <svg {...props}>
        <path d="M12 3s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <rect x="8" y="3" width="8" height="8" rx="4" />
      <rect x="8" y="11" width="8" height="10" rx="4" />
    </svg>
  );
}

export default function Products({ data }: { data: ProductsSectionData }) {
  return (
    <section id={data.id} className="bg-white px-5 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.14em] text-[#16324f] uppercase">
          <span className="h-0.5 w-8 bg-[#128f97]" />
          {data.eyebrow}
        </p>
        <h2 className="rise mt-4 text-3xl font-semibold leading-tight text-[#0c2f57] sm:text-5xl">
          {data.title}
          <span className="block text-[#128f97]">{data.title_accent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#5d6b7c] sm:text-base">{data.lead}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[22px] border border-[#d5ebea] bg-white p-3 text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(12,47,87,0.08)]"
              style={{ animation: `rise 0.7s ease ${index * 0.1}s both` }}
            >
              <img src={item.image} alt={item.image_alt} className="h-36 w-full rounded-2xl object-cover sm:h-40" />
              <div className="flex items-center justify-center gap-2 px-2 pt-4 text-[#0c2f57]">
                <span className="text-[#128f97]">
                  <Icon name={item.icon} />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mx-auto mt-2 max-w-[200px] pb-3 text-sm leading-relaxed text-[#5d6b7c]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
