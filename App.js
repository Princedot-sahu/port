import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, MapPin, Terminal, Code2, ShieldCheck, 
  Cpu, Database, ExternalLink, ChevronRight, Award, User, BookOpen, 
  Send, CheckCircle, Menu, X, Lock, Server, Layers, Sparkles
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setContactSubmitted(true);
      setTimeout(() => setContactSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: "CipherVault",
      subtitle: "Multi-Platform File Encryption Application",
      description: "A high-security, low-latency encryption utility built with cross-platform optimization in mind. Transitioned core architecture from custom bitwise XOR logic to enterprise-grade AES-256-GCM encryption.",
      tags: ["C++", "JavaScript", "AES-256-GCM", "FileReader API", "HTML/CSS", "Security"],
      highlights: [
        "Migrated encryption protocols to AES-256-GCM for strong cryptographic guarantees",
        "Implemented high-performance asynchronous client-side file reading with zero external dependencies",
        "Engineered low-memory high-contrast UI focused on accessibility and operational simplicity"
      ],
      icon: <ShieldCheck className="w-8 h-8 text-sky-400" />
    },
    {
      title: "Relational DB & Cryptographic Modules",
      subtitle: "Database Architecture & Performance Benchmarks",
      description: "A comprehensive suite of optimized relational database schemas and micro-algorithmic performance testing benchmarks designed at MITS Gwalior.",
      tags: ["SQL", "Python", "Database Design", "Algorithm Analysis", "Benchmarking"],
      highlights: [
        "Designed and optimized relational schemas supporting complex query execution plans",
        "Programmed cryptographic micro-routines in Python to analyze algorithmic execution overhead",
        "Benchmarked low-level memory usage and throughput across data structures"
      ],
      icon: <Database className="w-8 h-8 text-indigo-400" />
    }
  ];

  const skills = [
    { category: "Languages", items: ["C++", "Python", "SQL", "JavaScript (ES6+)", "HTML5 / CSS3"] },
    { category: "Security & Cryptography", items: ["AES-256-GCM", "Bitwise XOR Logic", "FileReader API", "Data Integrity", "Secure Architecture"] },
    { category: "Core Fundamentals", items: ["Data Structures & Algorithms", "Relational DBMS", "Systems Engineering", "UI/UX Principles", "OOP"] },
    { category: "Developer Tools", items: ["Git & GitHub", "Linux/Unix Shell", "VS Code", "Node.js (Basic)", "React.js"] }
  ];

  return (
    <div style={{ backgroundColor: '#0a0d14', color: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10, 13, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#hero" style={{ textDecoration: 'none', color: '#f8fafc', fontWeight: 800, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal style={{ color: '#38bdf8' }} size={24} />
            <span>PRINCE<span style={{ color: '#38bdf8' }}>.SAHU</span></span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: activeSection === item.id ? '#38bdf8' : '#94a3b8',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                {activeSection === item.id && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }}></span>}
                {item.label}
              </a>
            ))}
            <a 
              href="mailto:prince814954@gmail.com"
              style={{
                textDecoration: 'none',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '0.4rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 1.5rem 4rem 1.5rem' }}>
        
        {/* HERO SECTION */}
        <section id="hero" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '350px',
            height: '350px',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            filter: 'blur(100px)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '2rem',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#38bdf8',
            fontSize: '0.85rem',
            fontWeight: 500,
            width: 'fit-content',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={16} /> Computer Science & Design Student @ MITS Gwalior
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Engineering Secure Systems <br />
            <span className="gradient-text">& Intelligent Analytics</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '680px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Hi, I'm <strong style={{ color: '#f8fafc' }}>Prince Sahu</strong>. I specialize in software development, core data structures, cryptographic systems, and UI design. Passionate about building robust, high-performance applications.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a 
              href="#projects"
              style={{
                textDecoration: 'none',
                backgroundColor: '#38bdf8',
                color: '#0a0d14',
                fontWeight: 700,
                padding: '0.85rem 1.75rem',
                borderRadius: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)'
              }}
            >
              View Work <ChevronRight size={18} />
            </a>

            <a 
              href="#contact"
              style={{
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#f8fafc',
                fontWeight: 600,
                padding: '0.85rem 1.75rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem'
              }}
            >
              Contact Me
            </a>

            <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '1rem' }}>
              <a href="mailto:prince814954@gmail.com" style={{ color: '#94a3b8', padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem' }} title="Email"><Mail size={20} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem' }} title="GitHub"><Github size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', padding: '0.6rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem' }} title="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>3rd Sem</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>CSD at MITS Gwalior</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '2.5rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#818cf8' }}>AES-256</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Cryptographic Integration</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '2.5rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#34d399' }}>Gwalior</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Madhya Pradesh, India</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" style={{ padding: '5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <User size={18} /> ABOUT ME
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '2rem' }}>Combining Software Logic with UI Design</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                I am a third-semester Computer Science and Design (CSD) undergraduate at <strong style={{ color: '#f8fafc' }}>Madhav Institute of Technology & Science (MITS), Gwalior</strong>. My academic trajectory balances rigorous core CS fundamentals with intuitive software design principles.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8 }}>
                I have developed a strong practical foundation in C++, Python, JavaScript, and SQL through micro-projects and lab implementations. My current focus centers on system engineering, cryptographically secure applications, and data analytics.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', color: '#38bdf8' }}><Code2 size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Core Software Development</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Building clean, maintainable logic using C++, Python & JS</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(129, 140, 248, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', color: '#818cf8' }}><Lock size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Cryptographic Protection</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Symmetric encryption algorithms & secure file handling</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(52, 211, 153, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', color: '#34d399' }}><Layers size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>CS + Design Synergy</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Fusing database efficiency with responsive user experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" style={{ padding: '5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <Cpu size={18} /> TECHNICAL CAPABILITIES
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '2.5rem' }}>Skills & Technical Domains</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', borderRadius: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#38bdf8', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
                  {skillGroup.category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.925rem' }}>
                      <span style={{ color: '#38bdf8' }}>▹</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" style={{ padding: '5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <Code2 size={18} /> FEATURED WORK
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '2.5rem' }}>Featured Engineering Projects</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.25rem', borderRadius: '1rem', borderLeft: '4px solid #38bdf8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {proj.icon}
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{proj.title}</h3>
                    </div>
                    <div style={{ color: '#38bdf8', fontSize: '0.925rem', fontWeight: 500, marginTop: '0.25rem' }}>
                      {proj.subtitle}
                    </div>
                  </div>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '1.025rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  {proj.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.5rem' }}>Key Architectural Achievements:</div>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {proj.highlights.map((h, i) => (
                      <li key={i} style={{ color: '#cbd5e1', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#34d399', marginTop: '2px' }}>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {proj.tags.map((tag, i) => (
                    <span key={i} style={{
                      backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      color: '#38bdf8',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" style={{ padding: '5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <BookOpen size={18} /> ACADEMICS
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight 700, marginBottom: '2.5rem' }}>Education & Background</h2>

          <div className="glass-card" style={{ padding: '2.25rem', borderRadius: '1rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Bachelor of Technology (B.Tech)</h3>
                <div style={{ color: '#38bdf8', fontSize: '1.05rem', fontWeight: 600 }}>Computer Science & Design (CSD)</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 600, color: '#f8fafc' }}>Madhav Institute of Technology & Science (MITS)</div>
                <div style={{ color: '#64748b', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'flex-end' }}>
                  <MapPin size={14} /> Gwalior, Madhya Pradesh
                </div>
              </div>
            </div>

            <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', backgroundColor: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              Current Level: 3rd Semester
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Coursework emphasizes theoretical computer science, object-oriented software engineering, relational database normalization, and human-centered design principles.
            </p>

            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.5rem' }}>Relevant Course Modules:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Data Structures & Algorithms", "Database Management Systems (DBMS)", "Systems Engineering", "Object-Oriented Programming", "Web Technologies", "Computer Networks"].map((course, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.04)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.06)', padding: '0.3rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.825rem' }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={{ padding: '5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#38bdf8', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <Mail size={18} /> GET IN TOUCH
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '2.5rem' }}>Let's Connect</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                I am actively seeking software engineering, systems development, and research internship opportunities. Feel free to reach out for project collaborations or technical discussions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '0.75rem', borderRadius: '0.5rem' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Direct Email</div>
                    <a href="mailto:prince814954@gmail.com" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 600 }}>prince814954@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', padding: '0.75rem', borderRadius: '0.5rem' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Location</div>
                    <div style={{ color: '#f8fafc', fontWeight: 600 }}>Gwalior, Madhya Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactSubmitted && (
                <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.15)', border: '1px solid #34d399', color: '#34d399', padding: '0.75rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle size={18} /> Message sent successfully! I will reply shortly.
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(10, 13, 20, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    color: '#f8fafc',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>Your Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(10, 13, 20, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    color: '#f8fafc',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>Message</label>
                <textarea 
                  required
                  rows="4" 
                  placeholder="Hello Prince, I'd like to discuss..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(10, 13, 20, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    color: '#f8fafc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button 
                type="submit"
                style={{
                  backgroundColor: '#38bdf8',
                  color: '#0a0d14',
                  fontWeight: 700,
                  padding: '0.85rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.975rem',
                  transition: 'opacity 0.2s'
                }}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '2rem 1.5rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Prince Sahu. Crafted with React & modern design principles.</p>
      </footer>

    </div>
  );
}
