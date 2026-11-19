'use client';

import { useEffect, useRef, useState } from 'react';
import type { HeroSectionData } from '../../types';

function StatIcon({ name }: { name: string }) {
  if (name === 'people') {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="9" cy="8" r="2.2" />
        <circle cx="16" cy="9" r="1.8" />
        <path d="M4.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" strokeLinecap="round" />
        <path d="M13.5 14.6c1.4-.3 2.8.2 3.6 1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="8" width="8" height="8" rx="4" />
      <rect x="11" y="8" width="10" height="8" rx="4" />
    </svg>
  );
}

function Counter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{match ? `${count}${suffix}` : value}</span>;
}

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id} className="flex flex-col bg-white md:relative md:block md:h-[calc(100svh-78px)] md:overflow-hidden md:bg-[#eef6f8]">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-8 pb-5 md:flex md:h-full md:items-center md:px-8 md:py-10">
        <div className="max-w-xl rise">
          <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] text-[#16324f] uppercase md:text-xs md:tracking-[0.16em]">
            <span className="h-0.5 w-8 bg-[#128f97]" />
            {data.eyebrow}
          </p>
          <h1 className="mt-4 text-[2rem] font-semibold leading-[1.15] text-[#0c2f57] md:mt-5 md:text-6xl md:leading-[1.05]">
            <span className="md:block">
              {data.title_line}{' '}
              <span className="text-[#128f97] md:block">{data.title_highlight}</span>
            </span>
            <span className="block">
              {data.title_mid}{' '}
              <span className="md:block">{data.title_end}</span>
            </span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4d6074] md:mt-5 md:text-base">{data.lead}</p>
          <div className="mt-5 flex gap-2 md:mt-8 md:flex-wrap md:gap-3">
            {data.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-w-0 flex-1 items-center gap-2 rounded-2xl px-2.5 py-2.5 text-white shadow-lg transition duration-300 hover:-translate-y-1 md:min-w-[180px] md:flex-none md:gap-3 md:px-4 md:py-3 ${stat.tone === 'navy' ? 'bg-[#0c2f57]' : 'bg-[#128f97]'}`}
                style={{ animation: `rise 0.7s ease ${0.15 + index * 0.12}s both` }}
              >
                <span className="hidden sm:block"><StatIcon name={stat.icon} /></span>
                <span className="sm:hidden [&_svg]:h-5 [&_svg]:w-5"><StatIcon name={stat.icon} /></span>
                <span className="h-7 w-px bg-white/35 md:h-8" />
                <span>
                  <span className="block text-base font-bold leading-none md:text-xl"><Counter value={stat.value} /></span>
                  <span className="mt-1 block text-[10px] leading-tight text-white/85 md:text-xs">{stat.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={data.image}
        alt={data.image_alt}
        className="h-[38vh] w-full object-cover object-[72%_top] md:absolute md:inset-0 md:h-full md:object-right motion-safe:md:animate-[hero-zoom_18s_ease-out_both]"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white/90 via-white/45 to-transparent md:block" />
    </section>
  );
}
