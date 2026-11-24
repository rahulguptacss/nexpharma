'use client';

import { useState } from 'react';
import type { FaqSectionData } from '../../types';

export default function Faq({ data }: { data: FaqSectionData }) {
  const [open, setOpen] = useState(0);

  return (
    <section id={data.id} className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.14em] text-[#16324f] uppercase">
            <span className="h-0.5 w-8 bg-[#128f97]" />
            {data.eyebrow}
          </p>
          <h2 className="rise mt-4 text-3xl font-semibold text-[#0c2f57] sm:text-5xl">
            {data.title} <span className="text-[#128f97]">{data.title_accent}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5d6b7c] sm:text-base">{data.lead}</p>
        </div>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <img
            src={data.image}
            alt={data.image_alt}
            className="h-64 w-full rounded-[24px] object-cover shadow-sm sm:h-80 lg:h-full lg:min-h-[420px]"
            style={{ animation: 'rise 0.8s ease both' }}
          />
          <div className="space-y-3">
            {data.items.map((item, index) => {
              const active = open === index;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-[#e3eef3] bg-white"
                  style={{ animation: `rise 0.6s ease ${index * 0.08}s both` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition sm:text-base ${active ? 'bg-[#0c2f57] text-white' : 'text-[#128f97] hover:bg-[#f4fbfb]'}`}
                  >
                    {item.question}
                    <span className="text-xl leading-none">{active ? data.close_icon : data.open_icon}</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="bg-[#f3fbfb] px-5 py-4 text-sm leading-relaxed text-[#4d6074]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
