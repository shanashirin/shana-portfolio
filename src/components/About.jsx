import { User, MapPin, Briefcase, Award, CheckCircle, Code, Heart, Coffee } from 'lucide-react';

export function About({ personal, stats }) {
  const quickFacts = [
    { icon: <MapPin size={18} color="var(--accent-cyan)" />, label: 'Based in', value: personal.location },
    { icon: <Briefcase size={18} color="var(--accent-purple)" />, label: 'Experience', value: '1+ Year' },
    { icon: <Award size={18} color="var(--accent-pink)" />, label: 'Education', value: 'Master of Computer Applications (MCA)' },
    { icon: <CheckCircle size={18} color="var(--accent-emerald)" />, label: 'Status', value: 'Open to Software & AI Roles' },
    { icon: <Coffee size={18} color="var(--accent-amber)" />, label: 'Fuel', value: 'Curiosity & Continuous Learning' },
    { icon: <Heart size={18} color="#f43f5e" />, label: 'Passion', value: 'AI, ML & Practical Problem Solving' }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </span>
          <h2 className="section-title">
            Engineering with <span className="gradient-text">Precision</span> & Empathy
          </h2>
          <p className="section-subtitle">
            A developer who bridges the gap between deep infrastructure systems and modern human-centered interfaces.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
          className="about-grid"
        >
          {/* Narrative & Story Card */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <Code size={22} color="var(--accent-cyan)" />
                <span>My Journey</span>
              </h3>
              {personal.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.8,
                    marginBottom: '1.25rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Metrics Banner */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                marginTop: '2rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border-glass)'
              }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: 'center',
                    padding: '1rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      marginTop: '0.4rem'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts & Values Card */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <Award size={22} color="var(--accent-purple)" />
                <span>Quick Snapshot</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {quickFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.9rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-glass)',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'var(--bg-glass-card)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {fact.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {fact.label}
                      </div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                        {fact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom mini-CTA */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(6, 182, 212, 0.1))',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Want to work together?</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  I'm available for freelance & full-time roles
                </div>
              </div>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
