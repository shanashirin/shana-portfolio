import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: 'var(--bg-secondary)',
        padding: '3.5rem 0 2rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-glass)'
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontWeight: 800,
                fontSize: '1.25rem',
                marginBottom: '0.5rem'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1rem'
                }}
              >
                {personal.initials}
              </div>
              <span>{personal.name}</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '320px' }}>
              Building ultra-responsive, beautiful web applications with modern engineering excellence.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem' }}>
            <a href="#home" style={{ color: 'var(--text-secondary)' }}>Home</a>
            <a href="#about" style={{ color: 'var(--text-secondary)' }}>About</a>
            <a href="#services" style={{ color: 'var(--text-secondary)' }}>Services</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)' }}>Experience</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a>
          </div>

          {/* Social Icons & Back-to-Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="GitHub"
              style={{ width: '40px', height: '40px' }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
              style={{ width: '40px', height: '40px' }}
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personal.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="btn-icon"
              aria-label="Twitter"
              style={{ width: '40px', height: '40px' }}
            >
              <TwitterIcon size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="btn btn-primary"
              aria-label="Scroll to top"
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Engineered with React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
