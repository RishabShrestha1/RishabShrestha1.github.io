import { memo } from "react";
import {
  Award,
  BadgeCheck,
  Briefcase,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Smartphone,
  TestTube2,
  Wrench,
} from "lucide-react";

const experience = [
  {
    role: "Mobile App Developer",
    company: "Jeewan Jyoti Digital Care",
    period: "Dec 2024 - Present",
    accent: "emerald",
    points: [
      "Develop and maintain JJD Care, a smart fitness and health-tracking app built with Kotlin and Jetpack Compose.",
      "Integrate Bluetooth SDK data for heart rate, SpO2, and activity tracking from wearable devices.",
      "Build auto-reconnect and background sync flows with lifecycle-aware ViewModels and WorkManager.",
      "Implement realtime user-to-doctor chat, Jitsi Meet video consultations, Firebase services, and Khalti subscriptions.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Void Nepal",
    period: "Apr 2024 - Aug 2024",
    accent: "cyan",
    points: [
      "Built educational apps for C and Java programming using Flutter, BLoC architecture, and API integration.",
      "Translated interface designs into responsive Android screens with reusable widgets and clean navigation.",
      "Improved loading behavior and screen structure for smoother lesson browsing on mobile devices.",
    ],
  },
];

const education = {
  degree: "BSc. CSIT",
  school: "Trinity International College",
  university: "Tribhuvan University (IOST)",
  period: "2019 - 2024",
};

const skillGroups = [
  {
    category: "Languages",
    items: ["Kotlin", "Dart", "Java", "JavaScript", "Python"],
    icon: Code2,
    accent: "text-violet-300",
    bg: "bg-violet-300/10",
  },
  {
    category: "Mobile",
    items: ["Jetpack Compose", "Flutter", "Android Studio"],
    icon: Smartphone,
    accent: "text-emerald-300",
    bg: "bg-emerald-300/10",
  },
  {
    category: "Backend & APIs",
    items: ["Firebase", "REST APIs", "WebSocket", "Bluetooth SDK"],
    icon: Database,
    accent: "text-cyan-300",
    bg: "bg-cyan-300/10",
  },
  {
    category: "Integrations",
    items: ["Khalti", "Jitsi Meet", "Firestore", "Firebase Auth"],
    icon: Wrench,
    accent: "text-amber-300",
    bg: "bg-amber-300/10",
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "MVVM", "BLoC", "Reusable UI"],
    icon: GitBranch,
    accent: "text-rose-300",
    bg: "bg-rose-300/10",
  },
  {
    category: "Quality",
    items: ["Manual testing", "Postman", "Release checks", "Git/GitHub"],
    icon: TestTube2,
    accent: "text-indigo-300",
    bg: "bg-indigo-300/10",
  },
];

const certificates = [
  {
    name: "Become a Python Master",
    issuer: "Programiz PRO",
    link: "https://programiz.pro/certificates/detail/B246B3C8F516",
  },
  { name: "Python Mastery", issuer: "Programiz" },
  { name: "CCNA Bootcamp", issuer: "Completion Certificate" },
  { name: "Mobile Development & Architecture", issuer: "Udemy" },
];

const accentMap = {
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-300/10",
    border: "border-emerald-300/20",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-300/10",
    border: "border-cyan-300/20",
  },
};

function About() {
  return (
    <>
      <section id="experience" className="border-b border-white/10 bg-zinc-950 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Experience</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Work and education</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              Practical mobile development experience across production health-tech work,
              educational apps, API integrations, and Android release workflows.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.74fr]">
            <div className="grid gap-4">
              {experience.map((item) => {
                const accent = accentMap[item.accent];
                return (
                  <article key={`${item.role}-${item.company}`} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <span className={`mt-1 rounded-lg border ${accent.border} ${accent.bg} p-3 ${accent.text}`}>
                          <Briefcase className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                          <p className={`mt-1 text-sm font-medium ${accent.text}`}>{item.company}</p>
                        </div>
                      </div>
                      <span className="w-fit rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400">
                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-zinc-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <BadgeCheck className={`mt-1 h-4 w-4 shrink-0 ${accent.text}`} aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <aside className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-4">
                <span className="rounded-lg border border-violet-300/20 bg-violet-300/10 p-3 text-violet-300">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="section-kicker">Education</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{education.degree}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{education.university}</p>
                  <p className="mt-1 text-sm text-zinc-500">{education.school}</p>
                  <p className="mt-4 w-fit rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-white/10 bg-zinc-950 p-4">
                <p className="text-sm font-semibold text-white">What I bring</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  A practical mobile engineering mindset: reliable data flows, readable app
                  structure, thoughtful UI states, and a bias toward shipping usable features.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="skills" className="border-b border-white/10 bg-zinc-950 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Skills</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Technical toolkit</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-400">
              Tools and patterns I use to turn product ideas into maintainable mobile experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.category} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-lg p-2.5 ${group.bg} ${group.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-2.5 text-amber-300">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-white">Certificates</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.map((cert) => {
                const Wrapper = cert.link ? "a" : "div";
                const linkProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Wrapper
                    key={cert.name}
                    {...linkProps}
                    className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-amber-300/35"
                  >
                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                    <p className="mt-2 text-sm text-zinc-500">{cert.issuer}</p>
                    {cert.link && <p className="mt-4 text-xs font-semibold text-amber-300">View certificate</p>}
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(About);
