import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Mail, Code2, Smartphone, Database, Terminal, Briefcase, User, MapPin } from 'lucide-react';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const projectsData = [
  {
    id: 'hyperchat',
    title: 'HyperChat',
    shortDesc: 'A Flutter-based hyper-local messaging application that enables users to discover and communicate with nearby people through real-time chat, voice notes, and location-based services using Firebase.',
    image: '/hyperchat-logo.png',
    tags: ['Flutter', 'Firebase'],
    problem: 'Most messaging apps require users to know each other\'s phone numbers or usernames. HyperChat allows users to communicate with people nearby instantly based on their location.',
    features: [
      'Real-time nearby user discovery (1–3 km radius)',
      'User registration and authentication',
      'Real-time text messaging',
      'Voice note & image sharing',
      'Audio and video calling',
      'Location-based matching'
    ],
    role: [
      'Designed the complete application architecture',
      'Developed the frontend using Flutter',
      'Integrated Firebase backend services',
      'Designed the UI/UX'
    ],
    tagColors: ['var(--color-blue)', 'var(--color-purple)'],
    buttonColor: 'var(--color-yellow)'
  },
  {
    id: 'dgm',
    title: 'Digital Ghalla Mandi',
    shortDesc: 'A digital agricultural marketplace built with Flutter and Firebase that connects farmers and buyers, enabling online crop listings, price discovery, and direct communication.',
    image: '/dgm-logo.jpeg',
    tags: ['Flutter', 'Firebase'],
    problem: 'Traditional grain markets rely on physical visits and middlemen. Farmers often struggle to reach buyers and compare prices. Digital Ghalla Mandi helps bring transparency and wider market access.',
    features: [
      'Farmer & Buyer registration',
      'Product and Price listings',
      'Crop categories & search',
      'Direct buyer-seller communication',
      'Favorites/Wishlist'
    ],
    role: [
      'Designed and developed the mobile application',
      'Built the complete Flutter frontend',
      'Designed the database structure',
      'Implemented product management'
    ],
    tagColors: ['var(--color-blue)', 'var(--color-yellow)'],
    buttonColor: 'var(--color-purple)'
  },
  {
    id: 'mypakistan',
    title: 'My Pakistan',
    shortDesc: 'A Flutter mobile application that centralizes government information, emergency contacts, and public services, providing Pakistani citizens with easy access to essential resources.',
    image: '/mypakistan-logo.jpg',
    tags: ['Flutter', 'Firebase'],
    problem: 'Government information is often spread across multiple websites, making it difficult for users to find the right service quickly. My Pakistan aims to provide a centralized and user-friendly platform.',
    features: [
      'Government department information',
      'Emergency contact numbers',
      'Public service information',
      'User-friendly navigation',
      'Secure user authentication'
    ],
    role: [
      'Planned the application concept',
      'Developed the complete Flutter application',
      'Designed the user interface',
      'Integrated Firebase backend'
    ],
    tagColors: ['var(--color-blue)', 'var(--color-purple)'],
    buttonColor: 'var(--color-pink)'
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(26, 26, 26, 0.8)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
      backdropFilter: 'blur(4px)'
    }} onClick={onClose}>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="brutalist-card"
        style={{
          background: 'var(--bg-primary)',
          width: '100%', maxWidth: '800px',
          maxHeight: '90vh', overflowY: 'auto',
          position: 'relative',
          padding: 0
        }}
      >
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'var(--color-pink)', border: 'var(--border-thick)',
          width: '40px', height: '40px', borderRadius: '50%',
          fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer',
          boxShadow: '2px 2px 0 #1A1A1A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10
        }}>X</button>
        
        <div style={{ height: '300px', borderBottom: 'var(--border-thick)', background: '#fff' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div style={{ padding: '3rem' }}>
          <h2 className="shrikhand" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-purple)' }}>{project.title}</h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{ padding: '0.5rem 1rem', background: project.tagColors[i % project.tagColors.length], color: project.tagColors[i % project.tagColors.length] === 'var(--color-purple)' ? '#fff' : '#1A1A1A', border: 'var(--border-thick)', borderRadius: '8px', fontWeight: '800', boxShadow: '2px 2px 0 #1A1A1A' }}>{tag}</span>
            ))}
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>The Problem</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{project.problem}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', borderBottom: '4px solid var(--color-yellow)', display: 'inline-block' }}>Key Features</h3>
              <ul style={{ paddingLeft: '1.5rem', fontWeight: '600' }}>
                {project.features.map((f, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{f}</li>)}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', borderBottom: '4px solid var(--color-blue)', display: 'inline-block' }}>My Role</h3>
              <ul style={{ paddingLeft: '1.5rem', fontWeight: '600' }}>
                {project.role.map((r, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{r}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [selectedProject, setSelectedProject] = useState(null);
  
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="app-container">
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "var(--color-pink)",
          transformOrigin: "0%",
          zIndex: 100,
          borderBottom: "3px solid #1A1A1A"
        }}
      />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1rem 0',
        zIndex: 50,
        background: 'var(--color-yellow)',
        borderBottom: 'var(--border-thick)',
        boxShadow: '0 4px 0 #1A1A1A'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A' }} className="shrikhand">AA.</div>
          <ul className="nav-links">
            <li><a href="#about" style={{ fontWeight: '700', textTransform: 'uppercase', transition: 'transform 0.2s' }} onMouseOver={e=>e.target.style.transform='translateY(-2px)'} onMouseOut={e=>e.target.style.transform='none'}>About</a></li>
            <li><a href="#skills" style={{ fontWeight: '700', textTransform: 'uppercase', transition: 'transform 0.2s' }} onMouseOver={e=>e.target.style.transform='translateY(-2px)'} onMouseOut={e=>e.target.style.transform='none'}>Skills</a></li>
            <li><a href="#projects" style={{ fontWeight: '700', textTransform: 'uppercase', transition: 'transform 0.2s' }} onMouseOver={e=>e.target.style.transform='translateY(-2px)'} onMouseOut={e=>e.target.style.transform='none'}>Projects</a></li>
            <li><a href="#experience" style={{ fontWeight: '700', textTransform: 'uppercase', transition: 'transform 0.2s' }} onMouseOver={e=>e.target.style.transform='translateY(-2px)'} onMouseOut={e=>e.target.style.transform='none'}>Experience</a></li>
          </ul>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <FadeIn>
              <h2 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '1rem', letterSpacing: '4px', textTransform: 'uppercase', background: 'var(--color-yellow)', display: 'inline-block', padding: '0.5rem 1rem', border: 'var(--border-thick)', boxShadow: '4px 4px 0 #1A1A1A', transform: 'rotate(-2deg)' }}>Hello, I'm</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: '1', margin: '2rem 0', color: 'var(--color-pink)', textShadow: '6px 6px 0px #1A1A1A' }} className="shrikhand">
                Ahmad Asad.
              </h1>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '2rem' }}>
                I build mobile apps & <span style={{ background: 'var(--color-blue)', padding: '0 1rem', border: 'var(--border-thick)', boxShadow: '6px 6px 0 #1A1A1A' }}>robust backends.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', borderLeft: 'var(--border-thick)', paddingLeft: '1.5rem', borderColor: 'var(--color-purple)' }}>
                A passionate Flutter and Full-Stack Developer based in Lahore, Pakistan. I specialize in building beautiful, high-performance applications with Firebase and modern web technologies.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-secondary">Let's Talk</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ background: 'var(--color-blue)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title" style={{ color: '#fff' }}>About Me</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <FadeIn direction="right">
              <div className="brutalist-card" style={{ padding: '3rem', position: 'relative', background: 'var(--color-yellow)' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', background: 'var(--color-pink)', padding: '1rem', border: 'var(--border-thick)', borderRadius: '50%', boxShadow: '4px 4px 0 #1A1A1A' }}>
                  <User size={32} color="#1A1A1A" />
                </div>
                <h3 className="shrikhand" style={{ fontSize: '2rem', marginBottom: '1.5rem', marginTop: '1rem' }}>My Journey</h3>
                <p style={{ fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  Originally from Nankana Sahib, I hold a BS in Information Technology from Baba Guru Nanak University. I relocated to Lahore to immerse myself in the tech ecosystem and pursue my goal of building my own software company.
                </p>
                <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                  Beyond coding, I'm deeply interested in AI, startups, and productivity. I'm constantly learning new technologies to deliver cutting-edge solutions for international clients on platforms like Upwork and Fiverr.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="brutalist-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#fff' }}>
                  <div style={{ background: 'var(--color-pink)', padding: '1rem', border: 'var(--border-thick)', borderRadius: '12px', boxShadow: '4px 4px 0 #1A1A1A' }}>
                    <MapPin size={32} color="#1A1A1A" />
                  </div>
                  <div>
                    <h4 className="shrikhand" style={{ fontSize: '1.5rem' }}>Location</h4>
                    <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="brutalist-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#fff' }}>
                  <div style={{ background: 'var(--color-yellow)', padding: '1rem', border: 'var(--border-thick)', borderRadius: '12px', boxShadow: '4px 4px 0 #1A1A1A' }}>
                    <Briefcase size={32} color="#1A1A1A" />
                  </div>
                  <div>
                    <h4 className="shrikhand" style={{ fontSize: '1.5rem' }}>Goal</h4>
                    <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>Successful Freelancer & Founder</p>
                  </div>
                </div>
                <div className="brutalist-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#fff' }}>
                  <div style={{ background: 'var(--color-purple)', padding: '1rem', border: 'var(--border-thick)', borderRadius: '12px', boxShadow: '4px 4px 0 #1A1A1A' }}>
                    <Code2 size={32} color="#fff" />
                  </div>
                  <div>
                    <h4 className="shrikhand" style={{ fontSize: '1.5rem' }}>Focus</h4>
                    <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>Flutter & Full-Stack</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <FadeIn>
            <h2 className="section-title" style={{ color: 'var(--color-purple)' }}>Technical Expertise</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <FadeIn delay={0.1}>
              <div className="brutalist-card" style={{ padding: '3rem', height: '100%', background: 'var(--color-pink)' }}>
                <div style={{ background: '#fff', display: 'inline-block', padding: '1rem', border: 'var(--border-thick)', borderRadius: '12px', boxShadow: '4px 4px 0 #1A1A1A', marginBottom: '2rem', transform: 'rotate(-5deg)' }}>
                  <Smartphone size={48} color="#1A1A1A" />
                </div>
                <h3 className="shrikhand" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', textShadow: '2px 2px 0 #1A1A1A' }}>Mobile Dev</h3>
                <ul style={{ fontWeight: '700', fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#1A1A1A' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Flutter</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Dart</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Responsive UI</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="brutalist-card" style={{ padding: '3rem', height: '100%', background: 'var(--color-yellow)' }}>
                <div style={{ background: '#fff', display: 'inline-block', padding: '1rem', border: 'var(--border-thick)', borderRadius: '12px', boxShadow: '4px 4px 0 #1A1A1A', marginBottom: '2rem', transform: 'rotate(5deg)' }}>
                  <Database size={48} color="#1A1A1A" />
                </div>
                <h3 className="shrikhand" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1A1A1A', textShadow: '2px 2px 0 #fff' }}>Backend & Cloud</h3>
                <ul style={{ fontWeight: '700', fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#1A1A1A' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Firebase Auth</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Cloud Firestore</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Firebase Storage</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'#fff'}}></div> Cloud Messaging</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="brutalist-card" style={{ padding: '3rem', height: '100%', background: 'var(--color-purple)' }}>
                <div style={{ background: '#fff', display: 'inline-block', padding: '1rem', border: 'var(--border-thick)', borderRadius: '12px', boxShadow: '4px 4px 0 #1A1A1A', marginBottom: '2rem', transform: 'rotate(-5deg)' }}>
                  <Terminal size={48} color="#1A1A1A" />
                </div>
                <h3 className="shrikhand" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', textShadow: '2px 2px 0 #1A1A1A' }}>Other Tech</h3>
                <ul style={{ fontWeight: '700', fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#fff' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'var(--color-yellow)'}}></div> REST APIs</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'var(--color-yellow)'}}></div> Git & GitHub</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'var(--color-yellow)'}}></div> UI/UX Basics</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{width:'12px',height:'12px',border:'2px solid #1A1A1A',background:'var(--color-yellow)'}}></div> Laravel & WP</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ background: 'var(--color-pink)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title" style={{ color: '#fff' }}>Featured Projects</h2>
          </FadeIn>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {projectsData.map((project, index) => (
              <FadeIn key={project.id}>
                <div className="brutalist-card project-grid">
                  <div style={{ background: '#fff', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: 'var(--border-thick)' }}>
                     <img src={project.image} alt={`${project.title} Logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
                    <h3 className="shrikhand" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                    <p style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '2rem' }}>{project.shortDesc}</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                      {project.tags.map((tag, i) => (
                        <span key={i} style={{ padding: '0.5rem 1rem', background: project.tagColors[i % project.tagColors.length], color: project.tagColors[i % project.tagColors.length] === 'var(--color-purple)' ? 'white' : '#1A1A1A', border: 'var(--border-thick)', borderRadius: '8px', fontWeight: '800', boxShadow: '2px 2px 0 #1A1A1A' }}>{tag}</span>
                      ))}
                    </div>
                    <div>
                      <button onClick={(e) => { e.preventDefault(); setSelectedProject(project); }} className="btn-primary" style={{ background: project.buttonColor, color: project.buttonColor === 'var(--color-yellow)' ? '#1A1A1A' : '#fff' }}>View Details</button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Work Experience</h2>
          </FadeIn>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <FadeIn direction="up">
              <div className="brutalist-card" style={{ padding: '3rem', background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <div>
                    <h3 className="shrikhand" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>State Life Insurance Sales</h3>
                    <p style={{ color: 'var(--color-purple)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase' }}>State Life Insurance</p>
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '1rem', padding: '0.5rem 1rem', background: 'var(--color-yellow)', border: 'var(--border-thick)', borderRadius: '8px', boxShadow: '2px 2px 0 #1A1A1A' }}>2 Years</span>
                </div>
                <ul style={{ fontWeight: '600', fontSize: '1.1rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ listStyleType: 'square' }}>Met with clients to understand their needs and explain complex insurance products.</li>
                  <li style={{ listStyleType: 'square' }}>Successfully sold policies and built long-lasting customer relationships.</li>
                  <li style={{ listStyleType: 'square' }}>Developed strong communication and negotiation skills crucial for freelancing and consulting.</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="brutalist-card" style={{ padding: '3rem', background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <div>
                    <h3 className="shrikhand" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Customer Service Rep</h3>
                    <p style={{ color: 'var(--color-pink)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase' }}>Pak E Services</p>
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '1rem', padding: '0.5rem 1rem', background: 'var(--color-blue)', border: 'var(--border-thick)', borderRadius: '8px', boxShadow: '2px 2px 0 #1A1A1A' }}>6 Months</span>
                </div>
                <ul style={{ fontWeight: '600', fontSize: '1.1rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ listStyleType: 'square' }}>Handled customer requests and provided comprehensive online services.</li>
                  <li style={{ listStyleType: 'square' }}>Resolved general customer support issues efficiently and professionally.</li>
                  <li style={{ listStyleType: 'square' }}>Gained practical experience in client interaction and problem-solving.</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: 'var(--color-yellow)', borderTop: 'var(--border-thick)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="section-title" style={{ color: '#1A1A1A', textShadow: '4px 4px 0 #fff' }}>Let's Work Together</h2>
            <p style={{ fontWeight: '700', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.3rem' }}>
              I'm currently looking for a stable software job, remote freelancing work, and exciting new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="mailto:yar515165@gmail.com" className="btn-primary" style={{ padding: '1.5rem 3rem', background: 'var(--color-pink)', color: '#fff' }}>
                <Mail size={24} /> Say Hello
              </a>
              <a href="https://github.com/asad-arch" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1.5rem 3rem' }}>
                <Code2 size={24} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ahmad-asad-6079b9358" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1.5rem 3rem' }}>
                <Briefcase size={24} /> LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', textAlign: 'center', background: '#1A1A1A', color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>
        <p>© {new Date().getFullYear()} Ahmad Asad. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
