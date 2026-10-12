import { useState } from 'react';
import { Cpu, CheckCircle2, Sparkles } from 'lucide-react';

export function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills.list
      : skills.list.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Cpu size={14} />
            <span>Technical Skills</span>
          </span>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested stack spanning frontend interfaces, scalable backends, cloud architectures, and modern developer tooling.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {skills.categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  border: isSelected
                    ? '1px solid var(--accent-purple)'
                    : '1px solid var(--border-glass)',
                  background: isSelected ? 'var(--gradient-primary)' : 'var(--bg-glass-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isSelected ? '0 4px 16px rgba(139, 92, 246, 0.35)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      color: 'var(--text-accent)'
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Meter Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    marginBottom: '0.75rem'
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--gradient-primary)',
                      borderRadius: '999px',
                      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span>{skill.category}</span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  <CheckCircle2 size={12} />
                  <span>Production Ready</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
