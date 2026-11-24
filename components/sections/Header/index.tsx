'use client';

import { useEffect, useState } from 'react';
import type { HeaderData } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(data.links[0]?.href ?? '#home');

  useEffect(() => {
    const onScroll = () => {
      const line = 100;
      let current = data.links[0]?.href ?? '#home';
      [data.button_href, ...data.links.map((link) => link.href)].forEach((href) => {
        const section = document.getElementById(href.replace('#', ''));
        if (!section) return;
        const box = section.getBoundingClientRect();
        if (box.top <= line && box.bottom > line) current = href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [data.links]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7eef5] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center gap-4 overflow-hidden px-4 sm:px-6">
        <a href="#home" className="flex h-full shrink-0 items-center">
          <img src={data.logo} alt={data.logo_alt} className="h-[84px] w-auto max-w-none object-contain sm:h-[98px]" />
        </a>
        <span className="hidden h-10 w-px bg-[#d5e0ea] xl:block" aria-hidden />
        <nav className="ml-auto hidden items-center gap-5 text-[15px] text-[#24384d] xl:flex">
          {data.links.map((link) => {
            const on = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative py-2 transition duration-300 hover:text-[#128f97] ${on ? 'font-semibold text-[#128f97]' : ''}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#128f97] transition-all duration-300 ${on ? 'w-full' : 'w-0'}`} />
              </a>
            );
          })}
        </nav>
        <a
          href={data.button_href}
          onClick={() => setActive(data.button_href)}
          className="group ml-auto hidden items-center gap-2 rounded-full bg-[#128f97] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#0e7c83] xl:ml-2 xl:inline-flex"
        >
          {data.button_text}
          <span className="transition duration-300 group-hover:translate-x-1">{data.button_icon}</span>
        </a>
        <button
          type="button"
          className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-[#d7e2ec] xl:hidden"
          aria-label={open ? data.close_label : data.menu_label}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-0.5 w-5 bg-[#0c2f57] transition ${open ? 'shadow-none' : 'shadow-[0_6px_0_#0c2f57,0_-6px_0_#0c2f57]'}`} />
        </button>
      </div>
      <nav className={`grid overflow-hidden border-[#e8eef4] bg-white transition-all duration-300 xl:hidden ${open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {data.links.map((link) => {
              const on = active === link.href;
              return (
                <a key={link.href} href={link.href} onClick={() => { setActive(link.href); setOpen(false); }} className={`rounded-lg px-2 py-2 text-sm font-medium hover:bg-[#f3fbfb] hover:text-[#128f97] ${on ? 'bg-[#f3fbfb] font-semibold text-[#128f97]' : ''}`}>
                  {link.name}
                </a>
              );
            })}
            <a href={data.button_href} onClick={() => { setActive(data.button_href); setOpen(false); }} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#128f97] px-5 py-2.5 text-sm font-semibold text-white">
              {data.button_text} {data.button_icon}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
