import type { ResearchSectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const props = {
    viewBox: '0 0 24 24',
    className: 'h-6 w-6',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'scope') {
    return (
      <svg {...props}>
        <path d="M6 18h8" />
        <path d="M8 22h4" />
        <path d="M14 2l4 4" />
        <circle cx="10" cy="12" r="4" />
        <path d="M14 12h6l2 8" />
      </svg>
    );
  }
  if (name === 'leaf') {
    return (
      <svg {...props}>
        <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" />
        <path d="M8 16c2-3 5-6 9-8" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v5L6.5 16a3.5 3.5 0 0 0 3.2 5h4.6a3.5 3.5 0 0 0 3.2-5L14 8V3" />
      <path d="M8.5 13h7" />
    </svg>
  );
}

export default function Research({ data }: { data: ResearchSectionData }) {
  return (
    <section id={data.id} className="relative min-h-[520px] overflow-hidden bg-[#e7f3f6]">
      <img
        src={data.image}
        alt={data.image_alt}
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] motion-safe:animate-[hero-zoom_16s_ease-out_both]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-5 py-14 sm:px-8">
        <div className="max-w-xl rise">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#16324f] uppercase">
            <span className="h-0.5 w-8 bg-[#128f97]" />
            {data.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-[#0c2f57] sm:text-5xl">
            {data.title}
            <span className="mt-1 block text-[#128f97]">{data.title_accent}</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#4d6074] sm:text-base">{data.text}</p>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-6">
            {data.points.map((point, index) => (
              <div key={point.title} className="flex min-w-0 flex-col gap-2" style={{ animation: `rise 0.7s ease ${0.15 + index * 0.1}s both` }}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e7f6f6] text-[#128f97] sm:h-12 sm:w-12">
                  <Icon name={point.icon} />
                </span>
                <p className="text-xs font-semibold leading-snug text-[#0c2f57] sm:text-sm">{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
