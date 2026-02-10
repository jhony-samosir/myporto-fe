import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'work', title: 'Experience' },
    { id: 'contact', title: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 w-full transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-primary/80 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <button
          type="button"
          onClick={() => {
            setActive('');
            scrollToSection('hero');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActive('');
              scrollToSection('hero');
            }
          }}
          className="flex items-center gap-3 bg-transparent p-0 text-left text-white outline-none focus:outline-none"
          aria-label="Go to top"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light text-sm font-bold shadow-md shadow-accent/40">
            JS
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight">
              Jhony Samosir
            </span>
            <span className="text-xs font-medium text-secondary">
              Software Engineer
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex list-none flex-row gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(link.title);
                    scrollToSection(link.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setActive(link.title);
                      scrollToSection(link.id);
                    }
                  }}
                  className={`relative bg-transparent p-0 text-[14px] font-medium outline-none transition-colors ${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } hover:text-white`}
                >
                  {link.title}
                  {active === link.title && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-accent to-accent-light" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Primary recruiter CTA */}
          <a
            href="https://drive.google.com/file/d/17sYvQrzRl2hEtLHVEL5xOpQ4wZVhD9cn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-light px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-accent/30 transition hover:shadow-accent/60"
          >
            <span>Download CV</span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/80">
              PDF
            </span>
          </a>
        </div>

        {/* Mobile menu */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <div
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black-200/60"
            onClick={() => setToggle(!toggle)}
          >
            <div className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-white transition-all ${
                  toggle ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-white transition-all ${
                  toggle ? 'opacity-0' : 'top-1.5'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-white transition-all ${
                  toggle ? 'bottom-1.5 -rotate-45' : 'bottom-0'
                }`}
              />
            </div>
          </div>

          <motion.div
            className={`absolute right-4 top-16 z-10 min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black-200/95 shadow-2xl ${
              !toggle ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
            }`}
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{
              opacity: toggle ? 1 : 0,
              scale: toggle ? 1 : 0.97,
              y: toggle ? 0 : -8,
            }}
            transition={{ duration: 0.18 }}
          >
            <ul className="flex list-none flex-col gap-2 p-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className={`w-full rounded-xl px-3 py-2 text-left text-[14px] font-medium transition-colors ${
                      active === link.title
                        ? 'bg-accent/15 text-white'
                        : 'text-secondary hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                      // small timeout to allow menu close animation then scroll
                      setTimeout(() => scrollToSection(link.id), 60);
                    }}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
              <li className="mt-1 border-t border-white/5 pt-3">
                <a
                  href="https://drive.google.com/file/d/17sYvQrzRl2hEtLHVEL5xOpQ4wZVhD9cn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-light px-3 py-2 text-xs font-semibold text-white shadow-md shadow-accent/40"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;