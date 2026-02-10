import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Demo only – connect to EmailJS / SendGrid / API for production
    // eslint-disable-next-line no-console
    console.log('Contact form submitted:', form);

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-primary via-[#050816] to-primary scroll-mt-[80px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#915EFF]/26 via-transparent to-transparent opacity-80" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse gap-10 px-4 py-20 xl:mt-6 xl:flex-row"
      >
        {/* Form side */}
        <motion.div
          initial={{ x: -160, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="flex-[0.75] rounded-2xl border border-[#915EFF]/24 bg-tertiary/50 p-8 shadow-lg shadow-black/40 backdrop-blur-sm hover:border-[#915EFF]/40 hover:shadow-[#915EFF]/25"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[15px] font-medium text-secondary sm:text-[16px]"
          >
            Get in touch
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative inline-block text-[30px] font-black text-white xs:text-[36px] sm:text-[44px] md:text-[50px]"
          >
            Contact
            <motion.div
              className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#915EFF] to-[#6366f1]"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h3>

          <p className="mt-4 text-sm text-secondary sm:text-[15px]">
            Share a bit about the role, your team, or the project you have in mind. I&apos;ll
            get back to you as soon as I can.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-7"
          >
            <label className="flex flex-col text-sm">
              <span className="mb-2 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="rounded-lg border border-white/5 bg-black-200 py-3.5 px-4 font-medium text-white outline-none placeholder:text-secondary focus:border-accent/70"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-2 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="rounded-lg border border-white/5 bg-black-200 py-3.5 px-4 font-medium text-white outline-none placeholder:text-secondary focus:border-accent/70"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-2 font-medium text-white">Your Message</span>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="resize-none rounded-lg border border-white/5 bg-black-200 py-3.5 px-4 font-medium text-white outline-none placeholder:text-secondary focus:border-accent/70"
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 inline-flex w-fit items-center justify-center rounded-xl bg-gradient-to-r from-[#915EFF] to-[#6366f1] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/55"
            >
              {loading ? 'Sending...' : 'Send message'}
            </motion.button>

            <p className="text-xs text-secondary/80">
              🚧 This contact form is still under development.
              Please check back later or reach me through my social links.
            </p>
          </form>
        </motion.div>

        {/* Direct contact side */}
        <motion.div
          initial={{ x: 160, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="h-[320px] flex-1 md:h-[420px] xl:h-auto"
        >
          <div className="flex h-full items-center justify-center rounded-2xl bg-tertiary/80 p-8 shadow-lg shadow-black/50 backdrop-blur-sm">
            <div className="flex w-full max-w-sm flex-col gap-6 text-left">
              <h4 className="text-xl font-semibold text-white sm:text-2xl">
                Prefer reaching out directly?
              </h4>
              <p className="text-sm text-secondary sm:text-[15px]">
                You can contact me via email or connect through LinkedIn and GitHub.
              </p>

              <div className="space-y-4 text-sm text-secondary">
                <a
                  href="mailto:jhony.tegal26@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-black-200/70 px-4 py-3 text-left transition-colors hover:border-accent/60 hover:text-white"
                  aria-label="Send email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7A2.5 2.5 0 0 0 18.5 6h-13A2.5 2.5 0 0 0 3 8.5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.5l-9 6-9-6"
                    />
                  </svg>
                  <span className="break-all text-sm text-white">
                    jhony.tegal26@gmail.com
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jhonysamosir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-black-200/70 px-4 py-3 text-left transition-colors hover:border-accent/60 hover:text-white"
                  aria-label="LinkedIn profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.98h4.56V24H.2V8.98zM8.98 8.98h4.37v1.99h.06c.61-1.16 2.12-2.39 4.37-2.39 4.68 0 5.54 3.08 5.54 7.08V24h-4.56v-7.5c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.95V24H8.98V8.98z" />
                  </svg>
                  <span className="text-sm text-white">
                    linkedin.com/in/jhonysamosir
                  </span>
                </a>

                <a
                  href="https://github.com/jhony-samosir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-black-200/70 px-4 py-3 text-left transition-colors hover:border-accent/60 hover:text-white"
                  aria-label="GitHub profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm text-white">github.com/jhony-samosir</span>
                </a>
              </div>

              <p className="mt-2 text-xs text-secondary/70">
                Typical response time: within 24–48 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

