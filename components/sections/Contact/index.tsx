'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import type { ContactSectionData } from '../../types';

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
  if (name === 'phone') {
    return (
      <svg {...props}>
        <path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" />
      </svg>
    );
  }
  if (name === 'mail') {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    );
  }
  if (name === 'user') {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 19a7 7 0 0 1 14 0" />
      </svg>
    );
  }
  if (name === 'pill') {
    return (
      <svg {...props}>
        <rect x="8" y="3" width="8" height="8" rx="4" />
        <rect x="8" y="11" width="8" height="10" rx="4" />
      </svg>
    );
  }
  if (name === 'qty') {
    return (
      <svg {...props}>
        <path d="M4 7h16l-1.5 12H5.5L4 7z" />
        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      </svg>
    );
  }
  if (name === 'chat') {
    return (
      <svg {...props}>
        <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

const field = 'w-full rounded-xl border border-[#e1eaf1] bg-white py-3 pr-3 pl-10 text-sm text-[#16324f] outline-none transition focus:border-[#128f97]';

export default function Contact({ data }: { data: ContactSectionData }) {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!menu.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    setCategory('');
    setOpen(false);
    event.currentTarget.reset();
  };

  const rows = [
    { icon: 'pin', label: data.address_label, value: data.address, href: '' },
    { icon: 'phone', label: data.phone_label, value: data.phone, href: data.phone_href },
    { icon: 'mail', label: data.email_label, value: data.email, href: data.email_href },
  ];

  return (
    <section id={data.id} className="overflow-hidden bg-[#f7fbfd] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
        <div className="rise">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#16324f] uppercase">
            <span className="h-0.5 w-8 bg-[#128f97]" />
            {data.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#0c2f57] sm:text-5xl">
            {data.title}
            <span className="block text-[#128f97]">{data.title_accent}</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5d6b7c] sm:text-base">{data.lead}</p>
          <ul className="mt-6">
            {rows.map((row) => (
              <li key={row.label} className="flex gap-4 border-b border-[#e6eef3] py-3 last:border-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e7f7f6] text-[#128f97]">
                  <Icon name={row.icon} />
                </span>
                <span>
                  <span className="block font-semibold text-[#0c2f57]">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="text-sm text-[#5d6b7c]">{row.value}</a>
                  ) : (
                    <span className="text-sm text-[#5d6b7c]">{row.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <form
            onSubmit={submit}
            className="rise rounded-[24px] bg-white p-5 shadow-[0_20px_50px_rgba(12,47,87,0.08)] sm:p-6"
          >
            <h3 className="text-xl font-semibold text-[#0c2f57]">{data.form_title}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <label className="relative">
                <span className="pointer-events-none absolute top-3 left-3 text-[#128f97]"><Icon name="user" /></span>
                <input required placeholder={data.name_placeholder} className={field} />
              </label>
              <label className="relative">
                <span className="pointer-events-none absolute top-3 left-3 text-[#128f97]"><Icon name="mail" /></span>
                <input required type="email" placeholder={data.email_placeholder} className={field} />
              </label>
            </div>
            <label className="relative mt-3 block">
              <span className="pointer-events-none absolute top-3 left-3 text-[#128f97]"><Icon name="phone" /></span>
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={data.phone_placeholder}
                className={field}
                onChange={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '');
                }}
              />
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="relative">
                <span className="pointer-events-none absolute top-3 left-3 text-[#128f97]"><Icon name="pill" /></span>
                <input required placeholder={data.subject_placeholder} className={field} />
              </label>
              <label className="relative">
                <span className="pointer-events-none absolute top-3 left-3 text-[#128f97]"><Icon name="qty" /></span>
                <input placeholder={data.company_placeholder} className={field} />
              </label>
            </div>
            <div ref={menu} className="relative mt-3">
              <input type="text" required value={category} readOnly className="sr-only" tabIndex={-1} />
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-xl border border-[#e1eaf1] bg-white py-3 pr-3 pl-4 text-left text-sm transition focus:border-[#128f97]"
              >
                <span className={category ? 'text-[#16324f]' : 'text-[#8aa0b3]'}>{category || data.category_placeholder}</span>
                <svg viewBox="0 0 24 24" className={`h-4 w-4 text-[#128f97] transition ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                </svg>
              </button>
              {open && (
                <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-[#e1eaf1] bg-white py-1 shadow-lg">
                  {data.categories.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => { setCategory(item); setOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-[#e7f7f6] ${category === item ? 'bg-[#128f97] text-white hover:bg-[#128f97]' : 'text-[#16324f]'}`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <label className="relative mt-3 block">
              <span className="pointer-events-none absolute top-3 left-3 text-[#128f97]"><Icon name="chat" /></span>
              <textarea required rows={4} placeholder={data.message_placeholder} className={`${field} resize-none`} />
            </label>
            <button type="submit" className="mt-4 w-full rounded-xl bg-[#128f97] py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0e7c83]">{data.button_text}</button>
            {sent && <p className="mt-3 text-sm text-[#0c2f57]">{data.success_message}</p>}
          </form>
      </div>
    </section>
  );
}
