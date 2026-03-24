import { memo, useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, Code2, Wrench, Layers, TestTube, Smartphone, Database, GitBranch } from "lucide-react";

function About() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skillTags = [
    { name: "Kotlin", color: "from-violet-500/20 to-purple-500/20" },
    { name: "Dart", color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Java", color: "from-orange-500/20 to-red-500/20" },
    { name: "JavaScript", color: "from-yellow-500/20 to-amber-500/20" },
    { name: "Python", color: "from-green-500/20 to-teal-500/20" },
    { name: "Jetpack Compose", color: "from-emerald-500/20 to-green-500/20" },
    { name: "Flutter", color: "from-cyan-500/20 to-blue-500/20" },
    { name: "Firebase", color: "from-amber-500/20 to-yellow-500/20" },
    { name: "Bluetooth SDK", color: "from-blue-500/20 to-indigo-500/20" },
    { name: "WebSocket", color: "from-purple-500/20 to-pink-500/20" },
    { name: "Khalti", color: "from-violet-500/20 to-indigo-500/20" },
    { name: "Jitsi Meet", color: "from-blue-500/20 to-sky-500/20" },
    { name: "Clean Architecture", color: "from-teal-500/20 to-emerald-500/20" },
    { name: "MVVM", color: "from-pink-500/20 to-rose-500/20" },
    { name: "BLoC", color: "from-indigo-500/20 to-violet-500/20" },
  ];

  const technicalSkills = [
    { category: "Languages", items: "Kotlin, Dart, Java, JavaScript, Python", icon: <Code2 className="w-5 h-5" />, color: "text-violet-400", bg: "bg-violet-500/10" },
    { category: "Frameworks", items: "Jetpack Compose, Flutter", icon: <Smartphone className="w-5 h-5" />, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { category: "Tools", items: "Android Studio, VS Code, Postman, Git/GitHub", icon: <Wrench className="w-5 h-5" />, color: "text-amber-400", bg: "bg-amber-500/10" },
    { category: "APIs & SDKs", items: "Firebase, Bluetooth SDK, WebSocket, Khalti, Jitsi Meet", icon: <Database className="w-5 h-5" />, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { category: "Architecture", items: "Clean Architecture, MVVM, BLoC", icon: <GitBranch className="w-5 h-5" />, color: "text-pink-400", bg: "bg-pink-500/10" },
    { category: "Testing", items: "Manual Testing, Postman API Testing", icon: <TestTube className="w-5 h-5" />, color: "text-teal-400", bg: "bg-teal-500/10" },
  ];

  const certificates = [
    { name: "Python Mastery", issuer: "Programiz", icon: "🐍" },
    { name: "Become a Python Master", issuer: "Programiz PRO", icon: "🏆", link: "https://programiz.pro/certificates/detail/B246B3C8F516" },
    { name: "CCNA Bootcamp", issuer: "Completion Certificate", icon: "🌐" },
    { name: "Mobile Development & Architecture", issuer: "Udemy", icon: "📱" },
  ];

  return (
    <>
      {/* ===== EXPERIENCE SECTION ===== */}
      <section
        id="experience"
        ref={(el) => { sectionRefs.current.experience = el; }}
        className="bg-black text-white px-4 py-24 relative"
        aria-labelledby="experience-heading"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-sm text-emerald-400 font-medium tracking-wider uppercase">Career</span>
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hands-on experience building production-grade mobile applications with modern frameworks and SDKs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* JJD Care */}
            <article className="glow-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-3 rounded-xl border border-emerald-500/20">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mobile App Developer</h3>
                  <p className="text-emerald-400 text-sm font-semibold">Jeewan Jyoti Digital Care</p>
                </div>
              </div>
              <span className="text-gray-500 text-xs bg-emerald-500/10 border border-emerald-500/20 inline-block px-3 py-1.5 rounded-full mb-6 font-medium">
                Dec 2024 – Present
              </span>
              <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {[
                  'Developed and maintained JJD Care, a smart fitness and health-tracking application using Kotlin and Jetpack Compose.',
                  'Integrated Bluetooth SDK for wearable devices to fetch real-time heart rate, SpO₂, and activity data.',
                  'Implemented auto-reconnect and disconnection handling for continuous data sync with WorkManager.',
                  'Built WebSocket-based real-time chat for user-to-doctor communication with lifecycle-aware ViewModels.',
                  'Integrated Jitsi Meet SDK for video consultations and Khalti Payment Gateway for subscriptions.',
                  'Worked with Firebase (Firestore, Auth, Storage) and managed releases on Google Play Console.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 group/item">
                    <span className="text-emerald-400 mt-0.5 shrink-0 group-hover/item:scale-125 transition-transform">▸</span>
                    <span className="group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              {/* Void Nepal */}
              <article className="glow-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 rounded-xl border border-blue-500/20">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Flutter Developer Intern</h3>
                    <p className="text-blue-400 text-sm font-semibold">Void Nepal</p>
                  </div>
                </div>
                <span className="text-gray-500 text-xs bg-blue-500/10 border border-blue-500/20 inline-block px-3 py-1.5 rounded-full mb-6 font-medium">
                  Apr 2024 – Aug 2024
                </span>
                <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  {[
                    'Built educational apps for C and Java programming with BLoC architecture and API integration.',
                    'Replicated professional UI designs and optimized responsiveness across Android devices.',
                    'Focused on reusable components and lazy loading for improved app performance.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 group/item">
                      <span className="text-blue-400 mt-0.5 shrink-0 group-hover/item:scale-125 transition-transform">▸</span>
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Education */}
              <article className="glow-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl border border-purple-500/20">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-white font-semibold text-lg">BSc. CSIT</p>
                  <p className="text-gray-400 text-sm mt-1">Tribhuvan University (IOST)</p>
                  <p className="text-gray-500 text-sm">Trinity International College</p>
                  <span className="text-gray-500 text-xs bg-purple-500/10 border border-purple-500/20 inline-block px-3 py-1.5 rounded-full mt-3 font-medium">
                    2019 – 2024
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section
        id="skills"
        ref={(el) => { sectionRefs.current.skills = el; }}
        className="bg-black text-white px-4 py-24 relative"
        aria-labelledby="skills-heading"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase">Expertise</span>
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Core technologies and tools I use to build mobile applications.
            </p>
          </div>

          {/* Animated Skill Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center" role="list">
            {skillTags.map((tag, i) => (
              <span
                key={tag.name}
                role="listitem"
                className={`skill-tag bg-gradient-to-r ${tag.color} border border-white/10 text-white text-sm px-5 py-2.5 rounded-full backdrop-blur-md cursor-default`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalSkills.map((skill) => (
              <div
                key={skill.category}
                className="glow-card shimmer-hover bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${skill.bg} p-2.5 rounded-xl ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-sm font-bold ${skill.color} uppercase tracking-wider`}>{skill.category}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="text-sm text-amber-400 font-medium tracking-wider uppercase">Achievements</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-2">
                <span className="gradient-text">Certificates</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {certificates.map((cert) => {
                const CardWrapper = cert.link ? 'a' : 'div';
                const linkProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <CardWrapper
                    key={cert.name}
                    {...linkProps}
                    className={`glow-card bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ${cert.link ? 'hover:border-amber-500/30 hover:bg-white/[0.06] cursor-pointer group' : ''}`}
                  >
                    <div className={`text-3xl mb-4 ${cert.link ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>{cert.icon}</div>
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                    {cert.link && (
                      <span className="inline-block mt-3 text-xs text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Certificate →</span>
                    )}
                  </CardWrapper>
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
