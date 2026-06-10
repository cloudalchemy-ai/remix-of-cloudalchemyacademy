import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logoAsset from "@/assets/cloud-alchemy-logo.png";
import courseCopilot from "@/assets/courses/copilot.jpeg";
import courseFoundry from "@/assets/courses/foundry.jpeg";
import courseMaf from "@/assets/courses/maf.jpeg";
import courseGenai from "@/assets/courses/genai.jpeg";
import courseMcp from "@/assets/courses/mcp.jpeg";
import courseOllama from "@/assets/courses/ollama.jpeg";
import {
  GraduationCap,
  Shield,
  Layers,
  Compass,
  Code2,
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  Monitor,
  PlayCircle,
  Building2,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Alchemy Academy — Enterprise Agentic AI Training" },
      {
        name: "description",
        content:
          "Hands-on Agentic AI training for enterprises: strategy, development, architecture, and security. Live, virtual, or on-site — worldwide.",
      },
      { property: "og:title", content: "Cloud Alchemy Academy — Enterprise Agentic AI Training" },
      {
        property: "og:description",
        content:
          "Train your teams to build, secure, and ship Enterprise AI Agents. 60,000+ engineers trained across 6 continents.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Compass,
    title: "AI & Agent Strategy",
    body: "Executive workshops that align AI investment with business outcomes, risk posture, and operating model.",
    bullets: [
      "Use-case discovery and ROI modeling",
      "Build vs buy, vendor & platform selection",
      "Operating model, talent, and adoption",
    ],
  },
  {
    icon: Code2,
    title: "AI & Agent Development",
    body: "Hands-on engineering tracks from prompt fundamentals to production-grade autonomous agents.",
    bullets: [
      "OpenAI, Azure OpenAI, Claude, Gemini",
      "Tool calling, MCP, A2A, memory, evals",
      "Reference architectures on your stack",
    ],
  },
  {
    icon: Layers,
    title: "End-to-End Architectures",
    body: "Deep engagements covering multi-agent design, orchestration, integration, and operations.",
    bullets: [
      "Multi-agent orchestration patterns",
      "MCP, RAG, knowledge graphs, data",
      "Production runtime, scaling, SRE",
    ],
  },
  {
    icon: Shield,
    title: "Security & Governance",
    body: "Red-team, blue-team, and governance training for LLM and agentic systems in regulated enterprises.",
    bullets: [
      "Prompt injection, jailbreaks, tool abuse",
      "Identity, secrets, least-privilege",
      "EU AI Act, DORA, NIST AI RMF",
    ],
  },
];

const courses = [
  {
    badge: "Bestseller",
    title: "Copilot Studio: Build Real-World Agents",
    desc: "No-code AI agent building with 8 hands-on projects across Azure SQL, REST, RAG, Dataverse, Flows, and MCP.",
    rating: "4.5",
    reviews: "4,451",
    hours: "6.5h",
    lectures: "128",
    level: "All Levels",
    image: courseCopilot,
  },
  {
    badge: null,
    title: "AI Agents — Azure AI Foundry Agent Service",
    desc: "AI Foundry, Function Calling, Code Interpreter, Bing & AI Search, OpenAPI, Logic Apps, Semantic Kernel.",
    rating: "4.4",
    reviews: "1,458",
    hours: "12h",
    lectures: "225",
    level: "Beginner",
    image: courseFoundry,
  },
  {
    badge: "Hot & New",
    title: "Microsoft Agent Framework (MAF)",
    desc: "Master MAF with Python — observability, MCP, A2A, RAG, and real-world agents with OpenAI, Claude, Foundry.",
    rating: "5.0",
    reviews: "7",
    hours: "5.5h",
    lectures: "90",
    level: "Intermediate",
    image: courseMaf,
  },
  {
    badge: "Bestseller",
    title: "Generative AI with OpenAI & Azure OpenAI",
    desc: "Gen-AI basics, OpenAI, AI Search, RAG, fine tuning, tools, LangChain, AI Foundry, AI Agents, MCP.",
    rating: "4.5",
    reviews: "1,377",
    hours: "16.5h",
    lectures: "260",
    level: "Beginner",
    image: courseGenai,
  },
  {
    badge: null,
    title: "Mastering MCP: Beginner to Pro",
    desc: "LangChain, LlamaIndex, OpenAI SDK, Google ADK, Claude, Azure OpenAI & Gemini. Build MCP servers with Docker.",
    rating: "4.6",
    reviews: "264",
    hours: "7h",
    lectures: "122",
    level: "Intermediate",
    image: courseMcp,
  },
  {
    badge: null,
    title: "Run Local LLMs with Ollama",
    desc: "Meta Llama 3, Ollama CLI, OpenWebUI, Multimodal, LangChain, OpenAI Compatibility, LlamaIndex & tools.",
    rating: "4.6",
    reviews: "86",
    hours: "7h",
    lectures: "130",
    level: "Beginner",
    image: courseOllama,
  },
];

const delivery = [
  {
    icon: Monitor,
    title: "Live Online",
    body: "Live, instructor-led sessions delivered globally to distributed teams.",
    bullets: ["Live Q&A and labs", "Recorded for replay", "Any timezone"],
  },
  {
    icon: PlayCircle,
    title: "Online (Self-Paced)",
    body: "On-demand course catalog with hands-on labs and assessments.",
    bullets: ["Always available", "Lab sandboxes", "Progress tracking"],
  },
  {
    icon: Users,
    title: "Virtual Cohort",
    body: "Private cohort programs with curated curriculum and live coaching.",
    bullets: ["Custom syllabus", "Office hours", "Capstone project"],
  },
  {
    icon: Building2,
    title: "On-Site",
    body: "Immersive workshops at your office or offsite, fully tailored to your stack.",
    bullets: ["Worldwide travel", "Executive briefings", "Team-wide enablement"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" aria-label="Cloud Alchemy Academy" className="flex items-center">
            <img
              src={logoAsset}
              alt="Cloud Alchemy Academy"
              className="h-16 w-16 object-contain drop-shadow-[0_4px_12px_oklch(0.18_0.08_240/0.5)] md:h-20 md:w-20"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#pillars" className="hover:text-white">
              Services
            </a>
            <a href="#courses" className="hover:text-white">
              Courses
            </a>
            <a href="#delivery" className="hover:text-white">
              Delivery
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-teal)] px-4 py-2 text-sm font-medium text-[oklch(0.16_0.03_230)] shadow-sm transition hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            Book Training
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative isolate overflow-hidden pb-32 pt-32"
        style={{
          backgroundImage: `var(--hero-overlay), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-teal)]/40 bg-white/5 px-4 py-1.5 text-xs font-medium text-[color:var(--brand-teal)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Enterprise AI &amp; Agentic AI Training
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            Train your teams to <span className="text-[color:var(--brand-teal)]">build, secure, and ship</span>{" "}
            Enterprise AI Agents.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Cloud Alchemy Agentic AI Academy delivers hands-on training for corporations and enterprises across agent
            development, security, strategy, and end-to-end agentic architectures — remote, virtual, or on-site.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-teal)] px-6 py-3 text-sm font-semibold text-[oklch(0.16_0.03_230)] shadow-lg transition hover:brightness-110"
            >
              Book a training <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore course catalog
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-teal)]" /> Production-grade labs
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-teal)]" /> Customized to your stack
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-teal)]" /> Delivered worldwide
            </span>
          </div>
        </div>

        {/* Stats card */}
        <div className="relative mx-auto mt-16 max-w-6xl px-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-[var(--shadow-card)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.18_25)]" />
              <span className="h-3 w-3 rounded-full bg-[oklch(0.85_0.16_85)]" />
              <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.15_155)]" />
              <span className="ml-3 text-xs text-muted-foreground">cloudalchemy.ai</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              {[
                { to: 60, prefix: "", suffix: "K+", decimals: 0, l: "Engineers trained", sub: "Udemy + Coursera" },
                { to: 25, prefix: "", suffix: "+", decimals: 0, l: "Enterprise programs", sub: "Private cohorts" },
                { to: 6, prefix: "", suffix: "", decimals: 0, l: "Continents delivered", sub: "Global delivery" },
                { to: 4.6, prefix: "", suffix: "★", decimals: 1, l: "Average rating", sub: "Across all courses" },
              ].map((s) => (
                <div key={s.l} className="bg-card p-6">
                  <div className="text-3xl font-bold tracking-tight text-foreground md:text-4xl tabular-nums">
                    <AnimatedCounter to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.l}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>What we deliver</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Four pillars covering the full Agentic AI lifecycle
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Choose a single pillar or combine them into a multi-quarter program tailored to your organization.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--brand-teal)]/15 text-[color:var(--brand-teal-dark)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-teal)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-secondary/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Course catalog</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Hands-on training across the Agentic AI stack
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Each course can be delivered as a private cohort for your team, customized to your stack and use cases.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-44 overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {c.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-foreground shadow">
                      {c.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold leading-snug tracking-tight">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs">
                    <span className="font-semibold text-foreground">{c.rating}</span>
                    <span className="inline-flex items-center text-[oklch(0.78_0.16_65)]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </span>
                    <span className="text-muted-foreground">({c.reviews})</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>{c.hours}</span>
                    <span>{c.lectures} lectures</span>
                    <span>{c.level}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Delivery</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Train your way — anywhere in the world
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Pick the format that fits your team. Every mode is delivered by the same expert instructors with the same
            hands-on labs.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {delivery.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--brand-teal)]/15 text-[color:var(--brand-teal-dark)]">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                <ul className="mt-4 space-y-1.5">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-teal)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-[oklch(0.16_0.03_230)] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel light>Meet your team</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Transforming careers through technology education
            </h2>
            <div className="mt-6 space-y-4 text-white/75">
              <p>
                We're Cloud Alchemy Academy — founded by Kshitij Joy, a Gen AI Architect with over 20 years building and
                securing enterprise systems for some of the world's most regulated financial institutions, including
                Deutsche Bank, the Bank of England, and JP Morgan.
              </p>
              <p>
                We teach the agentic AI stack the way it actually has to work in production: observable, secure, and
                compliant. Multi-agent orchestration, MCP, RAG, and real deployment patterns — not toy demos, but the
                architecture that survives an audit and scales under load.
              </p>
              <p>
                As a member of the invitation-only Udemy Instructor Partner Program, we've taught these patterns to
                60,000+ professionals across Udemy and Coursera. Credentials include Oracle Certified Master, Oracle ACE
                Pro, and Microsoft certifications in AI and Azure.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Users, k: "60,000+", l: "Professionals trained", s: "Udemy + Coursera reach" },
              { icon: Building2, k: "20+ yrs", l: "Enterprise experience", s: "Banking, fintech, regulated" },
              { icon: Sparkles, k: "Mission", l: "Enterprise-grade AI for all", s: "Accessible worldwide" },
              { icon: Globe, k: "6 continents", l: "Global reach", s: "Students everywhere" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <s.icon className="h-5 w-5 text-[color:var(--brand-teal)]" />
                <div className="mt-4 text-2xl font-bold tracking-tight">{s.k}</div>
                <div className="mt-1 text-sm font-medium text-white/90">{s.l}</div>
                <div className="mt-1 text-xs text-white/60">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)] md:p-16">
          <SectionLabel>Get started</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to enable your team for the Agentic era?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us about your team, your stack, and your timeline. We'll design a program that fits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@cloudalchemy.academy"
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-teal)] px-6 py-3 text-sm font-semibold text-[oklch(0.16_0.03_230)] shadow-lg transition hover:brightness-110"
            >
              Book a training <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              Browse courses
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logoAsset} alt="" className="h-6 w-6 object-contain" />
            <span>© {new Date().getFullYear()} Cloud Alchemy Academy</span>
          </div>
          <div className="flex gap-6">
            <a href="#pillars" className="hover:text-foreground">
              Services
            </a>
            <a href="#courses" className="hover:text-foreground">
              Courses
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-[color:var(--brand-teal)]" : "text-[color:var(--brand-teal-dark)]"}`}
    >
      {children}
    </span>
  );
}

function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(to * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
