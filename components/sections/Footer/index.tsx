import type { FooterData } from '../../types';

function Mark({ name }: { name: string }) {
  const props = {
    viewBox: '0 0 24 24',
    className: 'h-4 w-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'phone') {
    return (
      <svg {...props}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
      </svg>
    );
  }
  if (name === 'mail') {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Social({ name }: { name: string }) {
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M6.5 9H4v11h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.4-1.8 3.4-1.8 2.4 0 4.2 1.6 4.2 5V20z" />
    </svg>
  );
}

export default function Footer({ data }: { data: FooterData }) {
  const mid = Math.ceil(data.links.length / 2);
  const columns = [data.links.slice(0, mid), data.links.slice(mid)];
  const contacts = [
    { icon: 'pin', value: data.address, href: '' },
    { icon: 'phone', value: data.phone, href: data.phone_href },
    { icon: 'mail', value: data.email, href: data.email_href },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071a33] text-white">
      <svg viewBox="0 0 200 200" className="pointer-events-none absolute top-6 right-8 h-40 w-40 text-white/5" aria-hidden>
        <path d="M80 20h40v160H80zM20 80h160v40H20z" fill="currentColor" />
      </svg>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rise">
          <img src={data.logo} alt={data.logo_alt} className="-mt-6 h-28 w-auto sm:-mt-8 sm:h-32" />
          <p className="-mt-3 max-w-xs text-sm leading-relaxed text-white/75">{data.description}</p>
        </div>
        <div className="lg:border-l lg:border-white/15 lg:pl-8" style={{ animation: 'rise 0.7s ease 0.1s both' }}>
          <h3 className="text-lg font-semibold">{data.links_title}</h3>
          <span className="mt-2 block h-0.5 w-10 bg-[#128f97]" />
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {columns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-2">
                {column.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/75 transition hover:text-[#7fe3ea]">
                      {data.link_mark} {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="lg:border-l lg:border-white/15 lg:pl-8" style={{ animation: 'rise 0.7s ease 0.18s both' }}>
          <h3 className="text-lg font-semibold">{data.contact_title}</h3>
          <span className="mt-2 block h-0.5 w-10 bg-[#128f97]" />
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {contacts.map((item) => (
              <li key={item.icon} className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#128f97] text-white">
                  <Mark name={item.icon} />
                </span>
                {item.href ? <a href={item.href} className="hover:text-white">{item.value}</a> : <span>{item.value}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-2 px-5 py-2 sm:flex-row sm:px-8">
          <p className="text-xs text-white/70">{data.copyright}</p>
          <div className="flex gap-2">
            {data.socials.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name} className="grid h-8 w-8 place-items-center rounded-full border border-white/30 text-white transition hover:-translate-y-0.5 hover:bg-[#128f97]">
                <Social name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
