import { useCallback, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Github,
  GraduationCap,
  HeartPulse,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  WalletCards,
  X,
} from "lucide-react";

const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "1+", label: "year building apps" },
  { value: "6", label: "featured projects" },
  { value: "4", label: "certifications" },
  { value: "2", label: "mobile stacks" },
];

const currentWork = [
  {
    label: "Live health sync",
    detail: "Bluetooth wearables, WorkManager, Firebase",
    icon: Activity,
  },
  {
    label: "Consultation flows",
    detail: "Chat, video calls, subscriptions, payments",
    icon: Stethoscope,
  },
  {
    label: "Clean mobile UI",
    detail: "Compose screens, Flutter layouts, responsive states",
    icon: Smartphone,
  },
];

const projects = [
  {
    title: "JJD Care",
    type: "Production health-tech app",
    tech: "Kotlin, Jetpack Compose, Firebase, Bluetooth SDK",
    description:
      "Smart fitness and healthcare app with wearable data sync, user-to-doctor chat, video consultation, and subscription payments.",
    icon: HeartPulse,
    accent: "emerald",
    highlights: ["Wearable vitals", "Realtime chat", "Khalti payments"],
  },
  {
    title: "Programming Tutor Apps",
    type: "Educational mobile apps",
    tech: "Flutter, BLoC, REST APIs",
    description:
      "Learning apps for C and Java programming with reusable lessons, API-driven content, and Android-friendly responsive layouts.",
    icon: GraduationCap,
    accent: "cyan",
    highlights: ["BLoC state", "Lazy loading", "Reusable UI"],
  },
  {
    title: "News & Weather App",
    type: "API-integrated mobile app",
    tech: "Flutter, Firebase, REST APIs",
    description:
      "Authenticated app combining news and weather data with structured state management and a polished mobile reading experience.",
    icon: MessageCircle,
    accent: "violet",
    highlights: ["Firebase auth", "API feeds", "Clean states"],
  },
  {
    title: "E-Commerce Store",
    type: "Shopping experience",
    tech: "Flutter, Fake Store API, local cache",
    description:
      "Storefront prototype with product search, category filters, local caching, and detail views built for fast browsing.",
    icon: ShoppingBag,
    accent: "amber",
    highlights: ["Search", "Filters", "Offline cache"],
  },
  {
    title: "Expense Tracker",
    type: "Personal finance tool",
    tech: "Flutter, charts, gestures",
    description:
      "Expense manager with quick entry flows, gesture controls, responsive screens, and simple spending visualization.",
    icon: WalletCards,
    accent: "rose",
    highlights: ["Gestures", "Charts", "Responsive UI"],
  },
  {
    title: "Loan Eligibility Prediction",
    type: "ML web project",
    tech: "Python, HTML, CSS, JavaScript",
    description:
      "Machine-learning project that predicts loan approval probability through a lightweight browser-facing interface.",
    icon: ShieldCheck,
    accent: "indigo",
    highlights: ["ML model", "Web UI", "Prediction flow"],
  },
];

const accentClasses = {
  emerald: {
    icon: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "hover:border-emerald-300/45",
    text: "text-emerald-300",
    bar: "bg-emerald-300",
  },
  cyan: {
    icon: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "hover:border-cyan-300/45",
    text: "text-cyan-300",
    bar: "bg-cyan-300",
  },
  violet: {
    icon: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "hover:border-violet-300/45",
    text: "text-violet-300",
    bar: "bg-violet-300",
  },
  amber: {
    icon: "text-amber-300",
    bg: "bg-amber-400/10",
    border: "hover:border-amber-300/45",
    text: "text-amber-300",
    bar: "bg-amber-300",
  },
  rose: {
    icon: "text-rose-300",
    bg: "bg-rose-400/10",
    border: "hover:border-rose-300/45",
    text: "text-rose-300",
    bar: "bg-rose-300",
  },
  indigo: {
    icon: "text-indigo-300",
    bg: "bg-indigo-400/10",
    border: "hover:border-indigo-300/45",
    text: "text-indigo-300",
    bar: "bg-indigo-300",
  },
};

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((value) => !value), []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Rishab Shrestha home">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.12] bg-white/[0.04] text-sm font-semibold text-emerald-200">
              RS
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-white">Rishab Shrestha</span>
              <span className="block text-xs text-zinc-400">Mobile App Developer</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/RishabShrestha1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.08]"
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:rishabshrestha92@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-300 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Hire me
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-zinc-950 px-4 py-4 md:hidden">
            <nav className="mx-auto grid max-w-6xl gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-sm text-zinc-200 transition hover:bg-white/[0.06]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:rishabshrestha92@gmail.com"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-zinc-950"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Hire me
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-32">
        <div className="absolute inset-0 site-grid opacity-70" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              Available for mobile development roles
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I build dependable mobile apps for health, education, and everyday tools.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              I am a Kathmandu-based Mobile Application Developer focused on Kotlin, Jetpack Compose,
              Flutter, Firebase, wearable integrations, and clean app architecture.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                View projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="mailto:rishabshrestha92@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact me
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <dt className="text-xs leading-5 text-zinc-500">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative z-10">
            <div className="rounded-lg border border-white/10 bg-zinc-900/80 p-4 shadow-2xl shadow-black/30">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-white">JJD Care mobile workspace</p>
                  <p className="text-xs text-zinc-500">Wearables, doctors, patients, payments</p>
                </div>
                <span className="rounded-md bg-emerald-300/10 px-2 py-1 text-xs font-medium text-emerald-200">
                  In production
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.78fr_1fr]">
                <div className="rounded-lg border border-white/10 bg-zinc-950 p-3">
                  <div className="mx-auto max-w-[220px] rounded-[28px] border border-white/[0.12] bg-black p-3">
                    <div className="rounded-[20px] bg-zinc-950 p-4">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs text-zinc-500">Today</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      </div>
                      <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
                        <HeartPulse className="h-7 w-7 text-emerald-200" aria-hidden="true" />
                        <p className="mt-4 text-3xl font-semibold text-white">74</p>
                        <p className="text-xs text-zinc-400">heart rate bpm</p>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                          <p className="text-lg font-semibold text-cyan-200">98%</p>
                          <p className="text-[11px] text-zinc-500">SpO2</p>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                          <p className="text-lg font-semibold text-amber-200">6.2k</p>
                          <p className="text-[11px] text-zinc-500">steps</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        {[72, 88, 54, 78, 64, 96, 70].map((height, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                            <span
                              className="h-1.5 rounded-full bg-emerald-300/70"
                              style={{ width: `${height}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid content-between gap-3">
                  {currentWork.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                        <div className="flex items-start gap-3">
                          <span className="rounded-lg bg-white/[0.06] p-2 text-emerald-200">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <h2 className="text-sm font-semibold text-white">{item.label}</h2>
                            <p className="mt-1 text-sm leading-6 text-zinc-400">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                      <CalendarClock className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                      Current focus
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      Building app flows that stay reliable through flaky networks, background sync,
                      and real user device constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-zinc-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Portfolio</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Featured projects</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              A focused set of apps and experiments showing mobile UI, API integration, realtime
              features, and machine-learning fundamentals.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              const accent = accentClasses[project.accent];

              return (
                <article
                  key={project.title}
                  className={`group rounded-lg border border-white/10 bg-white/[0.035] p-5 transition ${accent.border}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`rounded-lg ${accent.bg} p-3 ${accent.icon}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className={`h-1.5 w-12 rounded-full ${accent.bar}`} />
                  </div>
                  <div className="mt-6">
                    <p className={`text-xs font-semibold uppercase tracking-wider ${accent.text}`}>
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500">{project.tech}</p>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
