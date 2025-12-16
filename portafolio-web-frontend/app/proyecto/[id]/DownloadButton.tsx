'use client';

interface DownloadButtonProps {
  href: string;
}

export default function DownloadButton({ href }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)',
        color: 'white',
        padding: '20px 50px',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '18px',
        border: '2px solid rgba(139, 92, 246, 0.5)',
        boxShadow: '0 0 50px rgba(139, 92, 246, 0.5), 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.background = 'linear-gradient(135deg, #2d1b4e 0%, #4c2a7c 50%, #2d1b4e 100%)';
        e.currentTarget.style.boxShadow = '0 0 70px rgba(139, 92, 246, 0.7), 0 15px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.background = 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)';
        e.currentTarget.style.boxShadow = '0 0 50px rgba(139, 92, 246, 0.5), 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
      }}
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Descargar APK
    </a>
  );
}
