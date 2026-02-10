import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center bg-gradient-to-b from-[#050816] via-[#050816] to-[#050816] scroll-mt-[80px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-20"
      >
        <motion.h2
          className="relative mb-14 text-center text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          About{' '}
          <span className="bg-gradient-to-r from-[#915EFF] to-[#6366f1] bg-clip-text text-transparent">
            Me
          </span>
          <motion.div
            className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 transform bg-gradient-to-r from-[#915EFF] to-[#6366f1]"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] md:items-start">
          {/* Narrative */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="space-y-5 text-[15px] leading-relaxed text-secondary sm:text-[16px]"
          >
            <p>
              I&apos;m a software engineer with a strong focus on back‑end development and
              modern web applications. I enjoy translating business requirements into
              reliable APIs, clean data models, and experiences that feel fast and
              intuitive.
            </p>
            <p>
              My core strengths are in{' '}
              <span className="font-semibold text-white">
                C#/.NET, Java/Spring, SQL, and modern JavaScript/React
              </span>
              . I care deeply about code quality, observability, performance, and keeping
              systems maintainable as they grow.
            </p>
            <p>
              Beyond shipping features, I like improving development workflows with Git,
              CI/CD, and a healthy engineering culture: clear reviews, good documentation,
              and small, thoughtful iterations.
            </p>
          </motion.div>

          {/* Skills matrix */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-[#915EFF]/20 bg-tertiary/40 p-7 backdrop-blur-sm shadow-lg shadow-black/40">
              <h3 className="mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
                <span className="bg-gradient-to-r from-[#915EFF] to-[#6366f1] bg-clip-text text-transparent">
                  Skills &amp; Expertise
                </span>
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Backend */}
                <motion.div
                  initial={{ y: 22, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group rounded-xl border border-[#915EFF]/10 bg-gradient-to-b from-black-200/80 to-black-100/40 p-5 transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-lg hover:shadow-[#915EFF]/25"
                >
                  <h4 className="mb-3 flex items-center text-[15px] font-semibold text-white">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#915EFF] transition-transform group-hover:scale-125" />
                    Backend
                  </h4>
                  <ul className="space-y-2 text-[13px] text-gray-300">
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      C# (.NET 8, ASP.NET Core)
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      Java (Spring Boot, JPA)
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      PHP (Laravel)
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      Python (Django / FastAPI)
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      SQL (SQL Server, PostgreSQL)
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      Microservices &amp; REST APIs
                    </motion.li>
                  </ul>
                </motion.div>

                {/* Frontend */}
                <motion.div
                  initial={{ y: 22, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group rounded-xl border border-[#915EFF]/10 bg-gradient-to-b from-black-200/80 to-black-100/40 p-5 transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-lg hover:shadow-[#915EFF]/25"
                >
                  <h4 className="mb-3 flex items-center text-[15px] font-semibold text-white">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#915EFF] transition-transform group-hover:scale-125" />
                    Frontend
                  </h4>
                  <ul className="space-y-2 text-[13px] text-gray-300">
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      HTML5 / CSS3
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      JavaScript / TypeScript
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      React.js
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      Tailwind CSS
                    </motion.li>
                  </ul>
                </motion.div>

                {/* Tooling */}
                <motion.div
                  initial={{ y: 22, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group rounded-xl border border-[#915EFF]/10 bg-gradient-to-b from-black-200/80 to-black-100/40 p-5 transition-all duration-300 hover:border-[#915EFF]/40 hover:shadow-lg hover:shadow-[#915EFF]/25"
                >
                  <h4 className="mb-3 flex items-center text-[15px] font-semibold text-white">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#915EFF] transition-transform group-hover:scale-125" />
                    Tools &amp; Workflow
                  </h4>
                  <ul className="space-y-2 text-[13px] text-gray-300">
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      Git, GitHub, GitLab CI/CD
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      VS Code, Visual Studio
                    </motion.li>
                    <motion.li whileHover={{ x: 4 }} className="transition-colors">
                      Agile, code reviews, documentation
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;