import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'blush';
  className?: string;
  style?: React.CSSProperties;
  fontSize?: string;
  showIcon?: boolean;
  layout?: 'stacked' | 'horizontal';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '', 
  style = {}, 
  fontSize = '1.8rem',
  showIcon = false,
  layout = 'stacked'
}) => {
  const baseColor = variant === 'dark' ? 'var(--soft-black)' : 'var(--warm-white)';
  const highlightColor = variant === 'blush' ? 'var(--rose-gold)' : 'var(--champagne-gold)';
  const subtextColor = variant === 'dark' ? 'rgba(125,107,94,0.5)' : 'rgba(201,169,110,0.5)';
  const ruleColor = variant === 'dark' ? 'rgba(125,107,94,0.3)' : 'rgba(201,169,110,0.3)';

  if (layout === 'horizontal') {
    return (
      <div
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1.25rem',
          ...style,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44" style={{ flexShrink: 0 }}>
          <circle cx="22" cy="22" r="9" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.9" opacity="0.9"/>
          <circle cx="22" cy="22" r="3.5" fill="var(--champagne-gold)" opacity="0.75"/>
          <ellipse cx="22" cy="8" rx="3" ry="7" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.6" opacity="0.5"/>
          <ellipse cx="22" cy="36" rx="3" ry="7" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.6" opacity="0.5"/>
          <ellipse cx="8" cy="22" rx="7" ry="3" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.6" opacity="0.5"/>
          <ellipse cx="36" cy="22" rx="7" ry="3" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.6" opacity="0.5"/>
          <ellipse cx="11" cy="11" rx="4" ry="6.5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.32" transform="rotate(-45,11,11)"/>
          <ellipse cx="33" cy="11" rx="4" ry="6.5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.32" transform="rotate(45,33,11)"/>
          <ellipse cx="11" cy="33" rx="4" ry="6.5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.32" transform="rotate(45,11,33)"/>
          <ellipse cx="33" cy="33" rx="4" ry="6.5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.32" transform="rotate(-45,33,33)"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: `calc(${fontSize} * 0.9)`,
              fontWeight: 300,
              fontStyle: 'italic',
              color: baseColor,
              letterSpacing: '0.12em',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            H<span style={{ color: highlightColor }}>A</span>V<span style={{ color: highlightColor }}>A</span>KU
          </span>
          <div style={{ width: '100%', height: '0.5px', background: ruleColor }} />
          <span
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.45rem',
              fontWeight: 200,
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: subtextColor,
            }}
          >
            Beauty & Bridal
          </span>
        </div>
      </div>
    );
  }

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        ...style,
      }}
    >
      {showIcon && (
        <svg  width="320" height="30" viewBox="0 0 320 30" style={{ marginBottom: '-8px', maxWidth: '100%', height: 'auto' }}>
          {/* left branch */}
          <path d="M8,15 C30,6 55,18 75,15" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.6" opacity="0.45"/>
          <path d="M25,15 C32,7 42,8 50,13" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.45" opacity="0.35"/>
          <ellipse cx="22" cy="10" rx="5" ry="2.8" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.45" opacity="0.3" transform="rotate(-28,22,10)"/>
          <ellipse cx="58" cy="10" rx="5" ry="2.8" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.45" opacity="0.3" transform="rotate(18,58,10)"/>
          {/* connecting lines to center */}
          <line x1="75" y1="15" x2="133" y2="15" stroke="var(--champagne-gold)" strokeWidth="0.4" opacity="0.2"/>
          {/* center bloom (8-petal lotus) */}
          <circle cx="160" cy="15" r="4" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.7" opacity="0.8"/>
          <circle cx="160" cy="15" r="1.8" fill="var(--champagne-gold)" opacity="0.6"/>
          <ellipse cx="160" cy="7" rx="2" ry="4.5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.5"/>
          <ellipse cx="160" cy="23" rx="2" ry="4.5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.5"/>
          <ellipse cx="152" cy="15" rx="4.5" ry="2" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.5"/>
          <ellipse cx="168" cy="15" rx="4.5" ry="2" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.5" opacity="0.5"/>
          <ellipse cx="154" cy="9" rx="3" ry="5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.4" opacity="0.35" transform="rotate(-45,154,9)"/>
          <ellipse cx="166" cy="9" rx="3" ry="5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.4" opacity="0.35" transform="rotate(45,166,9)"/>
          <ellipse cx="154" cy="21" rx="3" ry="5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.4" opacity="0.35" transform="rotate(45,154,21)"/>
          <ellipse cx="166" cy="21" rx="3" ry="5" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.4" opacity="0.35" transform="rotate(-45,166,21)"/>
          {/* right */}
          <line x1="187" y1="15" x2="245" y2="15" stroke="var(--champagne-gold)" strokeWidth="0.4" opacity="0.2"/>
          <path d="M245,15 C265,6 290,18 312,15" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.6" opacity="0.45"/>
          <path d="M270,15 C278,7 288,8 295,13" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.45" opacity="0.35"/>
          <ellipse cx="262" cy="10" rx="5" ry="2.8" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.45" opacity="0.3" transform="rotate(-18,262,10)"/>
          <ellipse cx="298" cy="10" rx="5" ry="2.8" fill="none" stroke="var(--champagne-gold)" strokeWidth="0.45" opacity="0.3" transform="rotate(28,298,10)"/>
        </svg>
      )}
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: fontSize,
          fontWeight: 300,
          fontStyle: 'italic',
          color: baseColor,
          letterSpacing: '0.12em',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        H<span style={{ color: highlightColor }}>A</span>V<span style={{ color: highlightColor }}>A</span>KU
      </span>
    </span>
  );
};

export default Logo;
