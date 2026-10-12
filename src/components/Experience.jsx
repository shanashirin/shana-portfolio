import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';

export function Experience({ experience }) {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            <span>Journey</span>
          </span>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A track record of driving technical impact, architecting scalable systems, and elevating developer teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Central / Left Connecting Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-purple) 0%, var(--accent-cyan) 60%, transparent 100%)',
              opacity: 0.4
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experience.map((item, index) => {
              const isEducation = item.role.includes('B.S.') || item.role.includes('Degree');

              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.75rem',
                    position: 'relative'
                  }}
                >
                  {/* Timeline Bullet Node */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--bg-secondary)',
                      border: '2px solid var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: '0 0 16px rgba(139, 92, 246, 0.4)',
                      color: '#ffffff'
                    }}
                  >
                    {isEducation ? (
                      <GraduationCap size={18} color="var(--accent-cyan)" />
                    ) : (
                      <Briefcase size={18} color="var(--accent-purple)" />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                      borderRadius: 'var(--radius-lg)'
                    }}
                  >
                    {/* Period & Location Metadata */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: 'var(--text-accent)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(99, 102, 241, 0.1)',
                          border: '1px solid rgba(99, 102, 241, 0.2)'
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <h3
                      style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                        fontWeight: 700,
                        marginBottom: '0.25rem'
                      }}
                    >
                      {item.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-accent)',
                        marginBottom: '1rem'
                      }}
                    >
                      {item.company}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.94rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Achievements Bullet Points */}
                    {item.achievements && (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.6rem',
                          marginBottom: '1.5rem'
                        }}
                      >
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.6rem',
                              fontSize: '0.9rem',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              color="var(--accent-emerald)"
                              style={{ flexShrink: 0, marginTop: '3px' }}
                            />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 500,
                            padding: '0.2rem 0.65rem',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-glass)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
