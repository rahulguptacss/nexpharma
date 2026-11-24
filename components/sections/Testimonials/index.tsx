'use client';

import { useEffect, useState } from 'react';
import type { TestimonialsSectionData } from '../../types';

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const count = data.items.length;
  const canSlide = count > 3;
  const max = canSlide ? Math.max(count - visible, 0) : 0;

  useEffect(() => {
    const pick = () => setVisible(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    pick();
    window.addEventListener('resize', pick);
    return () => window.removeEventListener('resize', pick);
  }, []);

  useEffect(() => {
    setIndex((value) => Math.min(value, Math.max(count - visible, 0)));
  }, [visible, count]);

  useEffect(() => {
    if (!canSlide) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value >= max ? 0 : value + 1));
    }, 3500);
    return () => window.clearInterval(timer);
  }, [max, canSlide]);

  const go = (next: number) => setIndex(Math.min(Math.max(next, 0), max));

  return (
    <section id={data.id} className="bg-white px-5 py-16 sm:px-8 sm:py-20">
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
        <div className="relative mt-10 sm:px-14">
          {canSlide && (
            <>
          <button
            type="button"
            aria-label={data.prev_label}
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-0 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#d7efee] bg-[#e7f7f6] text-[#128f97] shadow-sm transition duration-300 hover:scale-105 hover:border-[#128f97] hover:bg-[#128f97] hover:text-white sm:grid"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={data.next_label}
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-0 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#d7efee] bg-[#e7f7f6] text-[#128f97] shadow-sm transition duration-300 hover:scale-105 hover:border-[#128f97] hover:bg-[#128f97] hover:text-white sm:grid"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
            </>
          )}
          <div className="overflow-hidden px-1">
            <div
              className={canSlide ? 'flex transition-transform duration-700 ease-out' : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'}
              style={canSlide ? { transform: `translateX(-${index * (100 / visible)}%)` } : undefined}
            >
              {data.items.map((item) => (
                <article key={item.name} className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3">
                  <div className="flex h-full flex-col rounded-[22px] border border-[#d5e8ea] bg-white px-6 py-6 text-left">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7f7f6] text-[#128f97]" aria-hidden>
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                        <path d="M10 7H6.5C5.1 7 4 8.1 4 9.5V13h4v4H4.2C3 17 2 16 2 14.5V9.5C2 6.5 4.4 4 7.2 4H10v3zm12 0h-3.5C17.1 7 16 8.1 16 9.5V13h4v4h-3.8c-1.2 0-2.2-1-2.2-2.5V9.5C14 6.5 16.4 4 19.2 4H22v3z" />
                      </svg>
                    </span>
                    <p className="mt-5 text-[15px] leading-relaxed text-[#3d5164]">{item.quote}</p>
                    <p className="mt-4 text-lg tracking-[0.18em] text-[#14a3a8]">{data.star.repeat(item.stars)}</p>
                    <div className="mt-4 flex items-center gap-3 border-t border-[#e4eef2] pt-4">
                      <img src={item.image} alt={item.image_alt} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <p className="text-[15px] font-semibold text-[#0c2f57]">{item.name}</p>
                        <p className="text-sm text-[#7b8b9a]">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {canSlide && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button type="button" aria-label={data.prev_label} onClick={() => go(index - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-[#d7efee] bg-[#e7f7f6] text-[#128f97] sm:hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            {Array.from({ length: max + 1 }).map((_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`${dot + 1}`}
                onClick={() => go(dot)}
                className={`h-2.5 w-2.5 rounded-full transition ${dot === index ? 'bg-[#128f97]' : 'bg-[#c5e4e3]'}`}
              />
            ))}
            <button type="button" aria-label={data.next_label} onClick={() => go(index + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-[#d7efee] bg-[#e7f7f6] text-[#128f97] sm:hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
