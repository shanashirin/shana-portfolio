import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(3, 5, 10, 0.78)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-glass-strong)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg), 0 0 60px rgba(99, 102, 241, 0.25)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Area */}
        <div
          style={{
            height: '220px',
            background: project.imageGradient,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1.5rem',
            overflow: 'hidden'
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
                opacity: 0.88
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(14, 18, 30, 0.95) 100%)'
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="btn-icon"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              zIndex: 10
            }}
          >
            <X size={20} />
          </button>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 0, 0, 0.65)',
                border: '1px solid var(--border-glass)',
                backdropFilter: 'blur(8px)',
                color: 'var(--text-accent)',
                marginBottom: '0.5rem',
                display: 'inline-block'
              }}
            >
              {project.category}
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                color: '#ffffff',
                lineHeight: 1.2
              }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-accent)',
              fontWeight: 500,
              marginBottom: '1rem'
            }}
          >
            {project.subtitle}
          </p>

          {project.disclaimer && (
            <div
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                color: '#f59e0b',
                fontSize: '0.85rem',
                fontWeight: 500,
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>ℹ️</span>
              <span>{project.disclaimer}</span>
            </div>
          )}

          <p
            style={{
              fontSize: '0.98rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '1.75rem'
            }}
          >
            {project.description}
          </p>

          {/* Impact Metric Callout */}
          {project.metrics && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '1.75rem'
              }}
            >
              <TrendingUp size={22} color="#10b981" />
              <div>
                <div style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                  Measurable Impact
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {project.metrics}
                </div>
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4
              style={{
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '0.85rem'
              }}
            >
              Key Engineering Highlights
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2
                    size={17}
                    color="var(--accent-cyan)"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Tags */}
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '0.85rem'
              }}
            >
              Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-glass-card)',
                    border: '1px solid var(--border-glass-strong)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-glass)'
            }}
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <span>View Live Demo</span>
              <ExternalLink size={17} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <GithubIcon size={17} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
