import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
          transformOrigin: "0%",
          zIndex: 100
        }}
      />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.5rem 0',
        zIndex: 50,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '800' }} className="gradient-text">AA.</div>
          <ul style={{ display: 'flex', gap: '2rem', display: window.innerWidth < 768 ? 'none' : 'flex' }}>
            <li><a href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>About</a></li>
            <li><a href="#skills" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Skills</a></li>
            <li><a href="#projects" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Projects</a></li>
            <li><a href="#experience" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Experience</a></li>
          </ul>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <FadeIn>
              <h2 style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Hello, I'm</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                Ahmad Asad. <br />
                <span className="gradient-text">I build mobile apps & robust backends.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                A passionate Flutter and Full-Stack Developer based in Lahore, Pakistan. I specialize in building beautiful, high-performance applications with Firebase and modern web technologies.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-secondary">Let's Talk</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title">About Me</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <FadeIn direction="right">
              <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', borderTop: '4px solid var(--accent-primary)', borderLeft: '4px solid var(--accent-primary)' }}></div>
                <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: '4px solid var(--accent-secondary)', borderRight: '4px solid var(--accent-secondary)' }}></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={24} color="var(--accent-primary)" /> My Journey</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Originally from Nankana Sahib, I hold a BS in Information Technology from Baba Guru Nanak University. I relocated to Lahore to immerse myself in the tech ecosystem and pursue my goal of building my own software company.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Beyond coding, I'm deeply interested in AI, startups, and productivity. I'm constantly learning new technologies to deliver cutting-edge solutions for international clients on platforms like Upwork and Fiverr.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin size={32} color="var(--accent-secondary)" />
                  <div>
                    <h4 style={{ fontWeight: '600' }}>Location</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Briefcase size={32} color="var(--accent-primary)" />
                  <div>
                    <h4 style={{ fontWeight: '600' }}>Goal</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Successful Freelancer & Founder</p>
                  </div>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Code2 size={32} color="var(--accent-secondary)" />
                  <div>
                    <h4 style={{ fontWeight: '600' }}>Focus</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Flutter & Full-Stack</p>
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
            <h2 className="section-title">Technical Expertise</h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            <FadeIn delay={0.1}>
              <div className="glass-panel" style={{ padding: '2rem', height: '100%', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-10px)'} onMouseOut={e=>e.currentTarget.style.transform='none'}>
                <Smartphone size={40} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Mobile Development</h3>
                <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> Flutter</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> Dart</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> Responsive UI</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-panel" style={{ padding: '2rem', height: '100%', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-10px)'} onMouseOut={e=>e.currentTarget.style.transform='none'}>
                <Database size={40} color="var(--accent-secondary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Backend & Cloud</h3>
                <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-secondary)'}}></div> Firebase Authentication</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-secondary)'}}></div> Cloud Firestore</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-secondary)'}}></div> Firebase Storage</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-secondary)'}}></div> Cloud Messaging</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-panel" style={{ padding: '2rem', height: '100%', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-10px)'} onMouseOut={e=>e.currentTarget.style.transform='none'}>
                <Terminal size={40} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Other Technologies</h3>
                <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> REST APIs</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> Git & GitHub</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> UI/UX Design Basics</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent-primary)'}}></div> Basic Laravel & WordPress</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Featured Projects</h2>
          </FadeIn>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* Project 1 */}
            <FadeIn>
              <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(45deg, #1e1e1e, #2a2a2a)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   {/* Placeholder for project image */}
                   <Smartphone size={80} color="rgba(255,255,255,0.1)" />
                </div>
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hyper Local Chat App</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    A location-based social application where users nearby can discover each other and chat seamlessly without sharing phone numbers.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.85rem' }}>Flutter</span>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '20px', fontSize: '0.85rem' }}>Firebase</span>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255, 255, 255, 0.1)', color: '#fff', borderRadius: '20px', fontSize: '0.85rem' }}>Geolocation</span>
                  </div>
                  <div>
                    <a href="#" className="btn-secondary">View Details</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Project 2 */}
            <FadeIn>
              <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', overflow: 'hidden' }}>
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Digital Ghalla Mandi</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    A comprehensive agricultural marketplace application connecting farmers with buyers to easily trade crops.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.85rem' }}>Flutter</span>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(0, 0, 0, 0.05)', color: 'var(--text-primary)', borderRadius: '20px', fontSize: '0.85rem' }}>REST API</span>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '20px', fontSize: '0.85rem' }}>E-commerce</span>
                  </div>
                  <div>
                    <a href="#" className="btn-secondary">View Details</a>
                  </div>
                </div>
                <div style={{ background: '#f0f0f0', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                   <img src="/dgm-logo.jpeg" alt="Digital Ghalla Mandi Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </FadeIn>

            {/* Project 3 */}
            <FadeIn>
              <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(45deg, #1e1e1e, #2a2a2a)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   {/* Placeholder for project image */}
                   <Smartphone size={80} color="rgba(255,255,255,0.1)" />
                </div>
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>My Pakistan</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    A Flutter application connected with Firebase designed for local audiences with real-time updates and interactive features.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '20px', fontSize: '0.85rem' }}>Flutter</span>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '20px', fontSize: '0.85rem' }}>Firebase</span>
                  </div>
                  <div>
                    <a href="#" className="btn-secondary">View Details</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Work Experience</h2>
          </FadeIn>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <FadeIn direction="up">
              <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem' }}>State Life Insurance Sales</h3>
                    <p style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>State Life Insurance</p>
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.2rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>2 Years</span>
                </div>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Met with clients to understand their needs and explain complex insurance products.</li>
                  <li>Successfully sold policies and built long-lasting customer relationships.</li>
                  <li>Developed strong communication and negotiation skills crucial for freelancing and consulting.</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem' }}>Customer Service Representative</h3>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: '500' }}>Pak E Services</p>
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.2rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>6 Months</span>
                </div>
                <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Handled customer requests and provided comprehensive online services.</li>
                  <li>Resolved general customer support issues efficiently and professionally.</li>
                  <li>Gained practical experience in client interaction and problem-solving.</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="section-title">Let's Work Together</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
              I'm currently looking for a stable software job, remote freelancing work, and exciting new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="mailto:ahmadasad@example.com" className="btn-primary" style={{ padding: '1rem 2rem' }}>
                <Mail size={20} /> Say Hello
              </a>
              <a href="https://github.com/asad-arch" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem' }}>
                <Code2 size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ahmad-asad-6079b9358" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem' }}>
                <Briefcase size={20} /> LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Ahmad Asad. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
