import { MessageSquareQuote, Star } from 'lucide-react';

export function Testimonials({ testimonials }) {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <MessageSquareQuote size={14} />
            <span>Testimonials</span>
          </span>
          <h2 className="section-title">
            Endorsements & <span className="gradient-text">Kind Words</span>
          </h2>
          <p className="section-subtitle">
            Feedback from engineering leaders, product managers, and founders I've had the pleasure of building with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div>
                {/* 5-star rating row */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '0.96rem',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    marginBottom: '1.75rem'
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-glass)'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'var(--gradient-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.35)'
                  }}
                >
                  {item.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.role} · <span style={{ color: 'var(--text-accent)' }}>{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
