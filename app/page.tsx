import type { ReactNode } from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Expertise from '../components/sections/Expertise';
import Products from '../components/sections/Products';
import Research from '../components/sections/Research';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Faq from '../components/sections/Faq';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections } from '../components/types';

const sectionMap: Record<string, ReactNode> = {
  Hero: <Hero data={sections.hero} />,
  About: <About data={sections.about} />,
  Expertise: <Expertise data={sections.expertise} />,
  Products: <Products data={sections.products} />,
  Research: <Research data={sections.research} />,
  Testimonials: <Testimonials data={sections.testimonials} />,
  Contact: <Contact data={sections.contact} />,
  Faq: <Faq data={sections.faq} />,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#16324f]">
      <Header data={common.Header} />
      <main className="flex-1">
        {pages.home.components.map((block) => (
          <div key={block.key}>{sectionMap[block.component]}</div>
        ))}
      </main>
      <Footer data={common.Footer} />
      <BackToTop data={common.BackToTop} />
    </div>
  );
}
