import type { AboutSectionData } from '../../types';

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section id={data.id} className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-14 pb-8 sm:gap-12 sm:px-8 sm:pt-16 sm:pb-10 lg:grid-cols-2">
      <div className="rise">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#16324f] uppercase">
          <span className="h-0.5 w-8 bg-[#128f97]" />
          {data.eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold leading-[1.15] text-[#0c2f57] sm:text-4xl lg:text-[42px]">
          {data.title}
          <span className="block text-[#128f97]">{data.title_accent}</span>
          <span className="block">{data.title_end}</span>
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5d6b7c] sm:text-base">{data.text}</p>
      </div>
      <img
        src={data.image}
        alt={data.image_alt}
        className="h-[280px] w-full rounded-[28px] object-cover shadow-sm transition duration-500 hover:scale-[1.02] sm:h-[360px] lg:h-[420px]"
        style={{ animation: 'rise 0.8s ease 0.15s both' }}
      />
    </section>
  );
}
