import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Download, Sparkles, Terminal, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export function Hero({ personal }) {
  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personal.roles || [personal.role];
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 95;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < targetText.length) {
          setDisplayedText(targetText.slice(0, displayedText.length + 1));
        } else {
          // Pause at end of word before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(targetText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, personal.roles, personal.role]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '4rem',
        position: 'relative'
      }}
    >
      {/* Background ambient lighting */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Info & Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-glass-card)',
                border: '1px solid var(--border-glass-strong)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  display: 'inline-block'
                }}
                className="animate-pulse-glow"
              />
              <span>{personal.status}</span>
            </div>

            {/* Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '0.85rem'
              }}
            >
              Hi, I'm <span className="gradient-text">{personal.name}</span>.
            </h1>

            {/* Sub-headline */}
            <div
              style={{
                fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)',
                fontWeight: 700,
                color: 'var(--text-accent)',
                marginBottom: '1rem',
                letterSpacing: '-0.01em'
              }}
            >
              MCA Graduate | Aspiring Software & AI Engineer
            </div>

            {/* Dynamic Typewriter Role */}
            <div
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                minHeight: '2.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '1.25rem'
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>Specializing in </span>
              <span style={{ borderBottom: '2px solid var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                {displayedText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.2em',
                  background: 'var(--accent-purple)',
                  marginLeft: '2px',
                  animation: 'pulseGlow 0.9s infinite'
                }}
              />
            </div>

            {/* Brief Introduction */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.12rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '1rem'
              }}
            >
              I build intelligent applications by combining software development, machine learning, and data analytics to solve real-world problems.
            </p>

            {/* Tagline highlight */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.98rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '2.25rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.25)'
              }}
            >
              <Sparkles size={16} color="var(--accent-cyan)" />
              <span className="gradient-text">Turning ideas into intelligent solutions.</span>
            </div>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
                width: '100%'
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.9rem 1.8rem' }}>
                <Sparkles size={18} />
                <span>Explore 5 Projects</span>
              </a>

              <a href="#contact" className="btn btn-secondary" style={{ padding: '0.9rem 1.8rem' }}>
                <span>Get In Touch</span>
              </a>

              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.4rem' }}
                title="View GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Social Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect directly:
              </span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  aria-label="LinkedIn"
                  style={{ width: '38px', height: '38px' }}
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href={personal.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  aria-label="Twitter / X"
                  style={{ width: '38px', height: '38px' }}
                >
                  <TwitterIcon size={17} />
                </a>
                <a
                  href={personal.social.email}
                  className="btn-icon"
                  aria-label="Email"
                  style={{ width: '38px', height: '38px' }}
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Showcase Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Main Interactive Code Card */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '480px',
                padding: '1.75rem',
                border: '1px solid var(--border-glass-strong)',
                background: 'var(--bg-glass-card)',
                boxShadow: 'var(--shadow-lg), 0 0 50px rgba(99, 102, 241, 0.15)'
              }}
            >
              {/* Window Titlebar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-glass)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', gap: '7px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'monospace'
                  }}
                >
                  <Terminal size={13} />
                  <span>shana.config.py</span>
                </div>
                <div style={{ width: '36px' }} />
              </div>

              {/* Code Snippet Box */}
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}
              >
                <p>
                  <span style={{ color: 'var(--accent-pink)' }}>class</span>{' '}
                  <span style={{ color: 'var(--accent-cyan)' }}>ShanaShirin</span>:
                </p>
                <p style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>degree</span> ={' '}
                  <span style={{ color: '#a7f3d0' }}>"MCA Graduate"</span>
                </p>
                <p style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>core_domains</span> = [
                  <span style={{ color: 'var(--accent-purple)' }}>"AI & ML"</span>,{' '}
                  <span style={{ color: 'var(--accent-purple)' }}>"Software Dev"</span>,{' '}
                  <span style={{ color: 'var(--accent-purple)' }}>"Data Analytics"</span>
                  ]
                </p>
                <p style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>stack</span> = &#123;
                </p>
                <p style={{ paddingLeft: '3rem' }}>
                  <span style={{ color: '#fde047' }}>"ai"</span>: [<span style={{ color: '#a7f3d0' }}>"TensorFlow"</span>, <span style={{ color: '#a7f3d0' }}>"Scikit-learn"</span>],
                </p>
                <p style={{ paddingLeft: '3rem' }}>
                  <span style={{ color: '#fde047' }}>"web"</span>: [<span style={{ color: '#a7f3d0' }}>"Python/Flask"</span>, <span style={{ color: '#a7f3d0' }}>"React"</span>, <span style={{ color: '#a7f3d0' }}>"Node"</span>]
                </p>
                <p style={{ paddingLeft: '1.5rem' }}>
                  &#125;
                </p>
                <p style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>mission</span> ={' '}
                  <span style={{ color: '#86efac' }}>"Turning ideas into solutions"</span>
                </p>

                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '0.9rem',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Code2 size={16} color="var(--accent-cyan)" />
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                      Focus: AI + Practical Engineering
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}
                  >
                    Open to Hire
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around Card */}
            <div
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                padding: '0.6rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                background: 'var(--bg-glass-card)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <Sparkles size={16} color="#d946ef" />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Machine Learning & AI
              </span>
            </div>

            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-15px',
                padding: '0.75rem 1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                background: 'var(--bg-glass-card)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Terminal size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Background</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  MCA Graduate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Grid Responsive Styles */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
