import type { ExpertiseSectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const props = {
    viewBox: '0 0 24 24',
    className: 'h-7 w-7',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'dna') {
    return (
      <svg {...props}>
        <path d="M2 15c6.667-6 13.333 0 20-6" />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <path d="m17 6-2.5-2.5" />
        <path d="m14 8-1-1" />
        <path d="m7 18 2.5 2.5" />
        <path d="m3.5 14.5.5.5" />
        <path d="m20 9 .5.5" />
        <path d="m6.5 12.5 1 1" />
        <path d="m16.5 10.5 1 1" />
        <path d="m10 16 1.5 1.5" />
      </svg>
    );
  }
  if (name === 'portal') {
    return (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
        <path d="M7 6h.01" />
        <path d="M12 11v5" />
        <path d="M9.5 13.5h5" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function Expertise({ data }: { data: ExpertiseSectionData }) {
  return (
    <section id={data.id} className="bg-white px-5 pt-8 pb-8 sm:px-8 sm:pt-10 sm:pb-10">
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
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#d7ebea] bg-white px-3 py-8 text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(12,47,87,0.08)] sm:px-4"
              style={{ animation: `rise 0.7s ease ${index * 0.12}s both` }}
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#e7f6f6] text-[#128f97]">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#0c2f57]">{item.title}</h3>
              <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-[#128f97]" />
              <p className="mx-auto mt-3 max-w-[240px] text-[15px] leading-relaxed text-[#5d6b7c]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
