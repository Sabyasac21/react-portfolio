import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaChevronDown,
  FaCodeBranch,
  FaDocker,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaLinkedin,
  FaServer,
} from "react-icons/fa";
import {
  ACHIEVEMENTS,
  ARCHITECTURE_FLOW,
  CONTACT,
  EXPERIENCE,
  HERO_STATS,
  IMPACT_CARDS,
  NAV_LINKS,
  PROJECTS,
  TECH_GROUPS,
} from "./constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sectionViewport = { once: true, amount: 0.2 };
const IMPACT_SIGNAL_DURATION = 3200;
const IMPACT_SIGNAL_START_DELAY = 180;

function App() {
  const [activeExperience, setActiveExperience] = useState(EXPERIENCE[0].company);
  const [activeImpact, setActiveImpact] = useState(null);
  const initialTech = `${TECH_GROUPS[0].title}:${TECH_GROUPS[0].items[0].name}`;
  const [activeTech, setActiveTech] = useState(initialTech);
  const impactStoryRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        width: 2 + (index % 3),
        height: 2 + (index % 3),
        left: `${8 + ((index * 7) % 84)}%`,
        top: `${6 + ((index * 11) % 82)}%`,
        duration: 8 + (index % 5),
        delay: index * 0.3,
      })),
    []
  );

  const selectedTech =
    TECH_GROUPS.flatMap((group) =>
      group.items.map((item) => ({
        key: `${group.title}:${item.name}`,
        title: group.title,
        ...item,
      }))
    ).find((item) => item.key === activeTech) ?? {
      title: TECH_GROUPS[0].title,
      ...TECH_GROUPS[0].items[0],
    };

  const selectedImpact = IMPACT_CARDS.find((card) => card.id === activeImpact);

  useEffect(() => {
    if (!selectedImpact?.storySteps || !impactStoryRef.current) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      impactStoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, IMPACT_SIGNAL_START_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [selectedImpact]);

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100 antialiased selection:bg-indigo-400 selection:text-slate-950"
    >
      <div className="site-shell">
        <div className="ambient ambient-primary" />
        <div className="ambient ambient-secondary" />
        <div className="grid-overlay" />
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-indigo-200 shadow-[0_0_30px_rgba(99,102,241,0.18)]">
                SN
              </span>
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] text-white">SABYASACHI</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Full Stack Engineer
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="icon-button"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-button"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <section className="relative flex min-h-[calc(100vh-88px)] items-center py-20 lg:py-28">
            <div className="pointer-events-none absolute inset-0">
              {particles.map((particle) => (
                <motion.span
                  key={particle.id}
                  className="particle"
                  style={{
                    width: particle.width * 4,
                    height: particle.height * 4,
                    left: particle.left,
                    top: particle.top,
                  }}
                  animate={{ y: [0, -24, 0], opacity: [0.15, 0.6, 0.15] }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="grid w-full gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <motion.h1
                  custom={0.1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                >
                  Sabyasachi <span className="gradient-text inline-block">Nishant</span>
                </motion.h1>
                <motion.p
                  custom={0.2}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
                >
                  Full Stack Engineer building scalable platforms using React, FastAPI and
                  Docker.
                </motion.p>
                <motion.p
                  custom={0.3}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 max-w-2xl text-base leading-7 text-slate-400"
                >
                  I design product experiences with the same rigor I bring to APIs,
                  observability, authentication, and deployment. The throughline is simple:
                  ship systems that feel polished for users and legible for engineers.
                </motion.p>

                <motion.div
                  custom={0.4}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <a href="#projects" className="primary-button">
                    View Work
                    <FaArrowRight className="text-sm" />
                  </a>
                  <a href={CONTACT.resume} className="secondary-button">
                    Resume
                  </a>
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    Github
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    LinkedIn
                  </a>
                </motion.div>

                <motion.div
                  custom={0.5}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
                >
                  {HERO_STATS.map((stat) => (
                    <div key={stat.label} className="glass-panel p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                custom={0.35}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative mx-auto w-full max-w-xl"
              >
                <div className="hero-card">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-2xl font-semibold text-white">
                        Product UI meets systems thinking
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                      <FaCodeBranch />
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        icon: <FaLayerGroup />,
                        label: "Frontend",
                        text: "React interfaces designed for clarity, speed, and repeatable patterns.",
                      },
                      {
                        icon: <FaServer />,
                        label: "Backend",
                        text: "FastAPI and Node.js services built around practical API contracts.",
                      },
                      {
                        icon: <FaDocker />,
                        label: "Operations",
                        text: "Dockerized services with ELK-based observability and production debugging discipline.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-indigo-200">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block"
          >
            <div className="section-header">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Shipping product improvements with measurable operational impact
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6">
              {EXPERIENCE.map((item, index) => {
                const isOpen = activeExperience === item.company;

                return (
                  <motion.article
                    key={item.company}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={sectionViewport}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={`timeline-card ${isOpen ? "timeline-card-active" : ""}`}
                  >
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => setActiveExperience(isOpen ? "" : item.company)}
                    >
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl">
                          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300/80">
                            {item.duration}
                          </p>
                          <h3 className="mt-4 text-2xl font-semibold text-white">
                            {item.role}
                          </h3>
                          <p className="mt-2 text-lg text-slate-300">{item.company}</p>
                          <p className="mt-4 text-base leading-7 text-slate-400">{item.summary}</p>
                        </div>

                        <div className="flex items-center gap-3 self-start">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200"
                          >
                            <FaChevronDown />
                          </motion.div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                              <div className="mt-5 space-y-4">
                                {item.metrics.map((metric) => (
                                  <div
                                    key={metric}
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
                                  >
                                    {metric}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                                <p className="text-lg font-semibold text-white">
                                  {item.architecture.headline}
                                </p>
                                <div className="mt-5 space-y-4">
                                  {item.architecture.points.map((point) => (
                                    <p key={point} className="text-sm leading-6 text-slate-300">
                                      {point}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            id="impact"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block"
          >
            <div className="section-header">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Impact Delivered
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {IMPACT_CARDS.map((card, index) => (
                <motion.button
                  key={card.title}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={sectionViewport}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  onClick={() =>
                    setActiveImpact(activeImpact === card.id ? null : card.storySteps ? card.id : null)
                  }
                  className={`impact-card bg-gradient-to-br text-left ${card.accent} ${
                    activeImpact === card.id ? "impact-card-active" : ""
                  } ${card.storySteps ? "cursor-pointer" : "cursor-default"}`}
                >
                  {card.storySteps ? (
                    <div className="impact-card-indicator" aria-hidden="true">
                      <span className="impact-card-indicator-label">Trace</span>
                      <div className="impact-card-indicator-ring">
                        <span className="impact-card-indicator-dot" />
                      </div>
                      <motion.div
                        animate={{ x: activeImpact === card.id ? 4 : 0 }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        className="impact-card-indicator-arrow"
                      >
                        <FaArrowRight />
                      </motion.div>
                    </div>
                  ) : null}
                  <p className="text-5xl font-semibold text-white">{card.value}</p>
                  <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                  {card.storySteps ? <div className="impact-card-rail" aria-hidden="true" /> : null}
                </motion.button>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {selectedImpact?.storySteps ? (
                <motion.div
                  key={selectedImpact.id}
                  ref={impactStoryRef}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="impact-story-flow-wrap">
                    <div className="impact-story-intro">
                      <p className="text-sm uppercase tracking-[0.32em] text-indigo-300/80">
                        {selectedImpact.value} impact story
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {selectedImpact.storyTitle}
                      </h3>
                    </div>

                    <div className="impact-branch-flow">
                      <motion.div
                        className="impact-branch-spine"
                        initial={{ scaleY: 0, opacity: 0.55 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <motion.div
                        key={selectedImpact.id}
                        className="impact-branch-signal"
                        initial={{ top: "0%", opacity: 0 }}
                        animate={{ top: "100%", opacity: [0, 1, 1, 0.9] }}
                        transition={{
                          delay: IMPACT_SIGNAL_START_DELAY / 1000,
                          duration: IMPACT_SIGNAL_DURATION / 1000,
                          ease: "easeInOut",
                        }}
                      />
                      {selectedImpact.storySteps.map((step, index) => (
                        <motion.article
                          key={step.title}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay:
                              IMPACT_SIGNAL_START_DELAY / 1000 + 0.55 + index * 0.42,
                          }}
                          className={`impact-branch-node-card ${
                            index % 2 === 0 ? "impact-branch-node-left" : "impact-branch-node-right"
                          }`}
                        >
                          <div className="impact-branch-node">
                            <span className="impact-branch-dot" />
                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-200/80">
                              Step {index + 1}
                            </span>
                          </div>
                          <h4 className="mt-5 text-2xl font-semibold text-white">{step.title}</h4>
                          <p className="mt-4 text-base leading-8 text-slate-300">{step.detail}</p>
                        </motion.article>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.section>

          <motion.section
            id="stack"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block"
          >
            <div className="section-header">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  A capability map across frontend, backend, data, and delivery
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_42%)]" />
                <div className="relative grid gap-6 md:grid-cols-2">
                  {TECH_GROUPS.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-3xl border border-white/10 bg-slate-950/80 p-5"
                    >
                      <p className="text-sm uppercase tracking-[0.28em] text-indigo-300/80">
                        {group.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{group.description}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {group.items.map((item) => {
                          const techKey = `${group.title}:${item.name}`;
                          const isActive = activeTech === techKey;

                          return (
                            <button
                              key={techKey}
                              type="button"
                              onMouseEnter={() => setActiveTech(techKey)}
                              onFocus={() => setActiveTech(techKey)}
                              onClick={() => setActiveTech(techKey)}
                              className={`tech-node ${isActive ? "tech-node-active" : ""}`}
                            >
                              {item.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-8">
                <h3 className="text-3xl font-semibold text-white">{selectedTech.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-indigo-300/80">
                  {selectedTech.title}
                </p>
                <p className="mt-6 text-base leading-7 text-slate-300">{selectedTech.detail}</p>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                      <p className="text-sm font-medium text-white">Production delivery</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Used where performance, maintainability, and fast iteration all matter at
                        once.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                      <p className="text-sm font-medium text-white">System fit</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Selected based on its role in the architecture rather than as a generic
                        checklist item.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block"
          >
            <div className="section-header">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Projects presented as products and systems, not thumbnails
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-8">
              {PROJECTS.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={sectionViewport}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="project-card"
                >
                  <div className="h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 sm:h-[320px] lg:h-[420px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="block h-full w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-300">{project.summary}</p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                        Architecture summary
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {project.architecture}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                        Key features
                      </p>
                      <div className="mt-4 grid gap-3">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button"
                      >
                        Github
                        <FaGithub />
                      </a>
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="primary-button"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="architecture"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block"
          >
            <div className="section-header">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  A technical view of how the stack fits together in production
                </h2>
              </div>
            </div>

            <div className="mt-12 rounded-[32px] border border-white/10 bg-slate-950/80 p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-5">
                {ARCHITECTURE_FLOW.map((item, index) => (
                  <div key={item.title} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={sectionViewport}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="architecture-node"
                    >
                      <div className="flex items-center justify-between">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(34,197,94,0.75)]" />
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                    </motion.div>

                    {index < ARCHITECTURE_FLOW.length - 1 ? (
                      <div className="architecture-connector">
                        <div className="architecture-line" />
                        <motion.div
                          className="architecture-pulse"
                          animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                          transition={{
                            duration: 2.4,
                            delay: index * 0.2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block"
          >
            <div className="section-header">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  The pattern across the work is ownership, leverage, and technical range
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={sectionViewport}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-panel p-6"
                >
                  <p className="text-sm leading-7 text-slate-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            className="section-block pb-0"
          >
            <div className="contact-panel">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Available for product engineering roles where execution quality is visible
                </h2>
                <p className="mt-6 text-base leading-7 text-slate-300">
                  If you are hiring for frontend-heavy full stack work, internal platform tooling,
                  or product engineering roles that need strong system instincts, this portfolio is
                  the starting point.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`mailto:${CONTACT.email}`} className="primary-button">
                  <FaEnvelope />
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <FaGithub />
                  Github
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>

              <div className="mt-10 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <p>{CONTACT.location}</p>
                <p>Built with React, Vite, TailwindCSS, and Framer Motion.</p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default App;
