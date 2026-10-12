import { Code2, Layout, Server, Zap, Check, ArrowRight } from 'lucide-react';

export function Services({ services }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={26} color="var(--accent-purple)" />;
      case 'Layout':
        return <Layout size={26} color="var(--accent-cyan)" />;
      case 'Server':
        return <Server size={26} color="var(--accent-pink)" />;
      case 'Zap':
        return <Zap size={26} color="var(--accent-amber)" />;
      default:
        return <Code2 size={26} color="var(--accent-purple)" />;
    }
  };

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Zap size={14} />
            <span>Specializations</span>
          </span>
          <h2 className="section-title">
            What I <span className="gradient-text">Bring to the Table</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive full-lifecycle engineering services designed to turn ambitious concepts into reliable production systems.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(99, 102, 241, 0.12)',
                      color: 'var(--text-accent)',
                      border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem'
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-accent)',
                  marginTop: '1rem',
                  transition: 'gap 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '0.7rem')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '0.4rem')}
              >
                <span>Discuss a project</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
