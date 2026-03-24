'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, MapPin, Mail, Phone, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    'Mobile Application Developer',
    'Kotlin & Jetpack Compose',
    'Flutter Developer',
    'Health-Tech Enthusiast',
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const projects = [
    {
      title: 'News & Weather App',
      tech: 'Flutter · Firebase',
      description: 'Full-featured news and weather app with Firebase authentication, BLoC pattern state management, and RESTful API integration.',
      color: 'from-blue-500/20 to-cyan-500/5',
      borderColor: 'hover:border-blue-500/30',
      icon: '📰',
      tags: ['BLoC', 'REST API', 'Auth'],
    },
    {
      title: 'E-Commerce App',
      tech: 'Flutter · REST API',
      description: 'Custom store app using Fake Store API with product search, category filters, and local caching for offline browsing.',
      color: 'from-purple-500/20 to-pink-500/5',
      borderColor: 'hover:border-purple-500/30',
      icon: '🛒',
      tags: ['Caching', 'Search', 'Filters'],
    },
    {
      title: 'Expense Tracker',
      tech: 'Flutter',
      description: 'Multi-input expense tracker with gesture controls, responsive layout, and data visualization for personal finance management.',
      color: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'hover:border-amber-500/30',
      icon: '💰',
      tags: ['Gestures', 'Charts', 'Responsive'],
    },
    {
      title: 'Loan Eligibility Prediction',
      tech: 'Python · HTML/CSS/JS',
      description: 'ML-based project predicting loan approval probability with a web frontend and Python backend for model serving.',
      color: 'from-rose-500/20 to-red-500/5',
      borderColor: 'hover:border-rose-500/30',
      icon: '🏦',
      tags: ['Machine Learning', 'Web App'],
    },
  ];

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '5+', label: 'Projects Built' },
    { value: '4', label: 'Certifications' },
    { value: '5+', label: 'Technologies' },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full noise-bg">
      {/* ===== HEADER ===== */}
      <header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   bg-white/5 backdrop-blur-xl text-white px-6 md:px-8 py-3 
                   rounded-full shadow-2xl flex items-center justify-between gap-6 
                   w-[90%] max-w-6xl border border-white/10"
      >
        <Link href="/" aria-label="Home" className="flex items-center gap-2 font-semibold text-lg">
          <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
            <span className="gradient-text font-semibold">Rishab</span>
            <span className="text-gray-400 font-light ml-1">Portfolio</span>
          </h2>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-gray-400" aria-label="Primary navigation">
          {[
            { label: 'Experience', href: '#experience' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-white transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <button
          onClick={handleMenuToggle}
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-6 h-6 text-white" aria-hidden="true" />
        </button>

        <a
          href="mailto:rishabshrestha92@gmail.com"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 
                     px-5 py-2.5 rounded-full font-medium text-white
                     hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 text-sm"
        >
          Hire Me
        </a>
      </header>

      {/* ===== MOBILE SIDEBAR ===== */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" onClick={closeMenu} aria-hidden="true" />
          <aside
            className="fixed top-0 left-0 h-full w-72 bg-black/95 backdrop-blur-xl z-50 p-6 
                       border-r border-white/10 transform transition-transform duration-300 ease-in-out translate-x-0"
            role="dialog"
            aria-modal="true"
          >
            <div className="mt-5 flex justify-between items-center">
              <h2 className="text-xl font-light tracking-tight leading-tight">
                <span className="gradient-text font-semibold">Rishab</span>
                <span className="text-gray-400 font-light ml-1">Portfolio</span>
              </h2>
              <button onClick={closeMenu} className="text-white p-2 hover:bg-white/10 rounded-lg transition" aria-label="Close menu">
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-12" aria-label="Mobile navigation">
              {[
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-white transition px-4 py-3 rounded-xl hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:rishabshrestha92@gmail.com"
                className="mt-4 bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-3 
                           rounded-full font-medium text-sm text-center
                           hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                Hire Me
              </a>
            </nav>
          </aside>
        </>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 md:pt-44 pb-20 px-6 overflow-hidden grid-bg relative">
        {/* Ambient glow blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Column */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 
                            rounded-full text-sm text-gray-300 backdrop-blur-md w-fit 
                            border border-white/10 gradient-border"
            >
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span key={roleIndex} className="inline-block animate-fadeInUp">
                {roles[roleIndex]}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1]">
              Hi, I&apos;m{' '}
              <span className="gradient-text font-bold">
                Rishab
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-400 font-light">
                Shrestha
              </span>
              <span className="inline-block ml-3 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 p-2 border border-white/10 hover:scale-110 transition-transform cursor-pointer">
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Building <span className="text-white font-medium">smart, user-centric mobile applications</span> with 
              Kotlin, Jetpack Compose, and Flutter. Passionate about 
              <span className="text-emerald-400"> health-tech</span>, wearable integrations, and clean architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#projects"
                className="group bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-7 py-3.5 
                           rounded-full font-medium hover:shadow-xl hover:shadow-violet-500/25 
                           transition-all duration-300 text-sm flex items-center gap-2"
              >
                View Projects
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="mailto:rishabshrestha92@gmail.com"
                className="bg-white/5 backdrop-blur-md text-white px-7 py-3.5 
                           border border-white/10 rounded-full font-medium 
                           hover:bg-white/10 transition-all duration-300 text-sm gradient-border"
              >
                Contact Me
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className={`flex flex-col gap-5 w-full max-w-sm mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="float-slow glow-card bg-white/5 backdrop-blur-xl
                         border border-white/10 text-base text-white p-6 rounded-2xl 
                         shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm text-gray-500">Location</span>
              </div>
              <p className="font-medium text-lg">Bagbazar, Kathmandu</p>
              <p className="text-xs text-gray-500 mt-1">Nepal 🇳🇵</p>
            </div>

            <div className="float-medium glow-card bg-white/5 backdrop-blur-xl
                         border border-white/10 text-base text-white p-6 rounded-2xl 
                         shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm text-gray-500">Email</span>
              </div>
              <p className="font-medium">rishabshrestha92@gmail.com</p>
            </div>

            <div className="float-fast glow-card bg-white/5 backdrop-blur-xl
                         border border-white/10 text-base text-white p-6 rounded-2xl 
                         shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm text-gray-500">Phone</span>
              </div>
              <p className="font-medium text-lg">+977-9849868684</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="bg-black py-24 px-4 relative">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm text-violet-400 font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="text-white text-4xl md:text-5xl font-bold mt-2 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A selection of projects showcasing my skills in mobile development, API integration, and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group glow-card shimmer-hover bg-gradient-to-br ${project.color} 
                           border border-white/10 rounded-2xl p-6 
                           ${project.borderColor} transition-all duration-500 
                           backdrop-blur-md`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-violet-400 font-medium mb-3">{project.tech}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/5 border border-white/10 text-gray-400 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
