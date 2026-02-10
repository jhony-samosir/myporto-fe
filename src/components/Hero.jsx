import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import profile from '../assets/profile.png';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const [replayAnim, setReplayAnim] = useState(false);

  useEffect(() => {
    if (inView) {
      setReplayAnim(false);
      const timer = setTimeout(() => setReplayAnim(true), 80);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative mx-auto flex w-full items-center justify-center pb-20 pt-10 sm:pt-16 lg:pt-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Intro & recruiter narrative */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/50 to-accent-light/20 blur-3xl" />

          <div className="flex items-start gap-5">
            <div className="mt-3 hidden flex-col items-center sm:flex">
              {replayAnim && (
                <>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="h-4 w-4 rounded-full bg-gradient-to-r from-accent to-accent-light shadow-[0_0_20px_rgba(145,94,255,0.8)]"
                  />
                  <motion.div
                    key="line"
                    initial={{ height: 0 }}
                    animate={{ height: '180px' }}
                    transition={{
                      duration: 1.4,
                      ease: 'easeInOut',
                    }}
                    className="mt-2 w-[2px] bg-gradient-to-b from-accent to-transparent"
                  />
                </>
              )}
            </div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full bg-black-200/60 px-3 py-1 text-xs font-medium text-secondary ring-1 ring-white/5 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Open to backend & full‑stack roles
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-balance font-black tracking-tight text-white xs:text-[40px] xs:leading-[1.1] sm:text-[46px] md:text-[54px] lg:text-[60px]"
              >
                <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  Software Engineer
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="max-w-xl text-pretty text-[15px] leading-relaxed text-secondary sm:text-[16px]"
              >
                I design and build reliable APIs, distributed back‑end systems, and modern
                web experiences. Strong in{' '}
                <span className="font-semibold text-white">
                  .NET, Java, SQL, and React
                </span>
                , with a focus on clean architecture, performance, and maintainability.
              </motion.p>

              {/* Recruiter friendly highlights */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="grid max-w-xl grid-cols-2 gap-3 text-xs sm:text-[13px]"
              >
                <div className="rounded-2xl border border-white/5 bg-black-100/60 px-4 py-3 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-secondary">
                    Core stack
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    .NET · Java · SQL · React
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-black-100/60 px-4 py-3 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-secondary">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Back‑end systems & web apps
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-black-100/60 px-4 py-3 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-secondary">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Based in West Jakarta, Indonesia
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-black-100/60 px-4 py-3 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-secondary">
                    Looking for
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Backend / Full‑stack engineer roles
                  </p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="https://drive.google.com/file/d/17sYvQrzRl2hEtLHVEL5xOpQ4wZVhD9cn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-light px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/40 transition hover:shadow-accent/70"
                >
                  <span>Download CV</span>
                </a>
                <a
                  href="mailto:jhony.tegal26@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black-100/70 px-5 py-2.5 text-sm font-medium text-secondary backdrop-blur hover:border-accent/50 hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  <span>Let&apos;s talk about a role</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: Profile / visual identity */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-1 items-center justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative h-[260px] w-[260px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-black-100/60 to-black-200/80 shadow-[0_24px_80px_rgba(0,0,0,0.8)] sm:h-[290px] sm:w-[290px] md:h-[320px] md:w-[320px]"
            >
              <div className="pointer-events-none absolute -inset-[1px] rounded-[1.6rem] bg-gradient-to-br from-accent/40 via-transparent to-accent-light/20 opacity-70 blur-xl" />
              <div className="relative z-10 h-full w-full">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="relative z-20 flex flex-col gap-1 p-4 text-left text-xs sm:text-[13px]">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
                  Featured engineer · 2026
                </p>
                <p className="text-sm font-semibold text-white">
                  Building reliable back‑end systems & modern web interfaces.
                </p>
              </div>
            </motion.div>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pointer-events-none absolute -left-6 top-6 hidden flex-col gap-3 text-xs sm:flex"
            >
              <div className="rounded-full border border-white/10 bg-black-200/80 px-3 py-1.5 text-[11px] text-secondary backdrop-blur">
                API design · Clean architecture
              </div>
              <div className="rounded-full border border-white/10 bg-black-200/80 px-3 py-1.5 text-[11px] text-secondary backdrop-blur">
                SQL performance · Observability
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-0 right-0 flex w-full items-center justify-center xs:bottom-10">
        <a
          href="#about"
          className="pointer-events-auto flex items-center justify-center"
        >
          <div className="flex h-[60px] w-[34px] items-start justify-center rounded-3xl border border-secondary/60 bg-black-200/60 p-1.5 backdrop-blur">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-2.5 w-2.5 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
