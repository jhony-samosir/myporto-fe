import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
  {
    title: 'NewPMO',
    role: 'Backend Engineer',
    company: 'Energy Sector Client',
    period: '2025',
    description:
      'Led backend re-architecture of enterprise PMO system into scalable .NET microservices supporting project governance, budgeting, and reporting across multiple business units.',
    impactPoints: [
      'Designed microservice APIs for project lifecycle, cost tracking, and reporting',
      'Implemented RabbitMQ event-driven communication between services',
      'Optimised PostgreSQL queries for high-volume dashboard reporting',
      'Collaborated with frontend and QA teams for stable delivery',
    ],
    tags: ['.NET 8', 'Microservices', 'PostgreSQL', 'RabbitMQ'],

    caseStudy: {
      overview:
        'The PMO platform manages project planning, budgeting, approval workflows, and executive reporting across multiple departments. The system previously ran as a monolithic ASP.NET application with performance and deployment limitations.',

      problem:
        'The legacy monolithic architecture caused slow deployments, difficult maintenance, and performance bottlenecks in reporting dashboards. Large SQL queries for executive dashboards were slow and tightly coupled to business logic. Any update required redeploying the entire system.',

      responsibilities: [
        'Designed microservice boundaries for Project, Budget, Reporting, and User modules',
        'Built REST APIs using .NET 8 with clean architecture principles',
        'Implemented RabbitMQ for async event communication between services',
        'Optimised PostgreSQL queries and indexing for reporting dashboards',
        'Worked closely with frontend (Vue/React) teams on API contracts',
        'Debugged production issues and ensured stable releases',
      ],

      solution:
        'Migrated the monolith into modular microservices. Each service owned its own database schema and communicated via RabbitMQ events. Implemented structured logging, retry handling, and background job processing for reporting. Refactored slow SQL queries into optimised indexed queries.',

      architecture:
        'API Gateway → Auth Service → Project Service → Budget Service → Reporting Service → RabbitMQ → PostgreSQL',

      result:
        'Improved deployment speed and reduced risk of system-wide downtime. Dashboard performance improved significantly, and modules can now be deployed independently without affecting other services.',

      tech: [
        '.NET 8',
        'RabbitMQ',
        'PostgreSQL',
        'N-Layer Architecture',
        'Hangfire',
        'REST API'
      ],
    },
  },

  {
    title: 'NewERBAS',
    role: 'Backend Engineer',
    company: 'Energy Sector Client',
    period: '2024',
    description:
      'Developed backend services for enterprise reporting system used by multiple departments to access project and financial data securely.',
    impactPoints: [
      'Built modular Spring Boot APIs for reporting and data access',
      'Designed database schema and JPA mappings',
      'Collaborated with Vue.js frontend teams',
      'Ensured safe integration across multiple teams',
    ],
    tags: ['Spring Boot', 'REST APIs', 'PostgreSQL', 'Vue.js'],

    caseStudy: {
      overview:
        'NewERBAS is an internal reporting platform used by project managers, finance teams, and executives to monitor project progress, budgets, and performance metrics across business units.',

      problem:
        'Multiple teams needed access to shared business data while maintaining data consistency and security. The existing system lacked clear API contracts and had duplicated business logic across modules.',

      responsibilities: [
        'Developed REST APIs using Spring Boot with layered architecture',
        'Designed PostgreSQL schema for reporting data',
        'Created validation and data access layers',
        'Collaborated with frontend teams on API contracts',
        'Handled integration testing and bug fixes',
      ],

      solution:
        'Built modular backend services with clear domain boundaries. Introduced consistent API response formats, validation layers, and logging. Ensured safe data access across multiple teams using structured endpoints.',

      architecture:
        'Vue.js Frontend → Spring Boot APIs → PostgreSQL',

      result:
        'Enabled multiple teams to safely access shared data through stable APIs. Reduced data inconsistencies and improved reliability of reporting workflows.',

      tech: [
        'Spring Boot',
        'PostgreSQL',
        'JPA',
        'REST API',
        'Vue.js',
      ],
    },
  },

  {
    title: 'PMO (Project Management Office)',
    role: 'Daily Support Engineer',
    company: 'Energy Sector Client',
    period: '2023',
    description:
      'Provided daily production support and enhancements for legacy ASP.NET PMO applications used by project and finance teams.',
    impactPoints: [
      'Resolved production issues across backend, database, and UI',
      'Optimised SQL Server stored procedures and queries',
      'Implemented small feature improvements',
      'Worked directly with business users',
    ],
    tags: ['ASP.NET', 'SQL Server', 'jQuery', 'Production Support'],

    caseStudy: {
      overview:
        'Maintained legacy PMO systems handling project approvals, budgeting workflows, and reporting for internal teams. Applications were heavily used daily and required stable operations.',

      problem:
        'Frequent production issues occurred due to complex SQL queries, unclear edge cases, and legacy code. Performance issues in reporting modules affected business users.',

      responsibilities: [
        'Debugged production issues across backend and database',
        'Optimised SQL Server queries and stored procedures',
        'Worked with business users to clarify requirements',
        'Implemented small feature enhancements',
        'Ensured minimal downtime during fixes',
      ],

      solution:
        'Improved system stability by identifying root causes of bugs, optimising SQL queries, and refining validation logic. Introduced safer update patterns to reduce risk in production.',

      architecture:
        'ASP.NET MVC → SQL Server → jQuery frontend',

      result:
        'Reduced recurring production issues and improved reliability of daily PMO operations. Improved performance for reporting and approval workflows.',

      tech: [
        'ASP.NET',
        'SQL Server',
        'jQuery',
        'Debugging',
        'Production Support',
      ],
    },
  },
];

  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary via-[#050816] to-primary py-20 scroll-mt-[80px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#915EFF]/16 via-transparent to-transparent opacity-80" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-4 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Experience &amp; Projects
          <motion.div
            className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform bg-gradient-to-r from-[#915EFF] to-[#6366f1]"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <p className="mb-12 text-center text-sm text-secondary sm:text-[15px]">
          A selection of work that highlights my experience building and supporting
          back-end systems and internal tools.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#915EFF]/14 bg-black-200/70 backdrop-blur-sm shadow-[0_22px_60px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:border-[#915EFF]/40 hover:shadow-[0_28px_80px_rgba(145,94,255,0.45)]"
            >
              {/* HEADER */}
              <div className="relative h-[170px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#151030] to-[#050816]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(145,94,255,0.7),transparent_60%)] opacity-60" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 flex h-full flex-col justify-between p-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
                      {project.period} · {project.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-secondary">
                      {project.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-secondary">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black-100/80 px-2 py-0.5 text-[11px] text-white/80 ring-1 ring-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BODY */}
              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="text-sm text-secondary">{project.description}</p>
                <ul className="space-y-1.5 text-xs text-secondary/90">
                  {project.impactPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[6px] h-1 w-1 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black-100 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER BUTTON */}
              <div className="border-t border-white/5 bg-black-100/80 px-5 py-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-light hover:text-white"
                >
                  Case study
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0b13] p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute right-5 top-5 text-white text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-white mb-2">
                {activeProject.title}
              </h2>

              <p className="text-secondary mb-6">
                {activeProject.description}
              </p>

              <h3 className="text-white font-semibold mb-2">Overview</h3>
              <p className="text-secondary mb-4">
                {activeProject.caseStudy.overview}
              </p>

              <h3 className="text-white font-semibold mb-2">Problem</h3>
              <p className="text-secondary mb-4">
                {activeProject.caseStudy.problem}
              </p>

              <h3 className="text-white font-semibold mb-2">Solution</h3>
              <p className="text-secondary mb-4">
                {activeProject.caseStudy.solution}
              </p>

              <h3 className="text-white font-semibold mb-2">Impact</h3>
              <p className="text-secondary mb-4">
                {activeProject.caseStudy.result}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
