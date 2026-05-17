'use client';

import Link from 'next/link';

export default function BookingCtaBanner() {
    return (
        <section
            style={{
                padding: '5rem 2rem',
                background: 'linear-gradient(135deg, var(--champagne-gold) 0%, #A8853E 100%)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative circles */}
            <div style={{
                position: 'absolute', top: '-30%', right: '-8%',
                width: 380, height: 380, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '-30%', left: '-6%',
                width: 280, height: 280, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
                <div
                    className="section-label"
                    style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.75)' }}
                >
                    Book Your Experience
                </div>
                <h2
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: 500,
                        color: 'var(--soft-black)',
                        lineHeight: 1.25,
                        marginBottom: '0.85rem',
                    }}
                >
                    Ready to Book Your HAVAKU Experience?
                </h2>
                <p
                    style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '0.9rem',
                        color: 'rgba(26,26,26,0.72)',
                        marginBottom: '2.25rem',
                        lineHeight: 1.8,
                    }}
                >
                    Walk-ins welcome. Appointments preferred. Bridal bookings open now.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        href="/book-appointment"
                        style={{
                            background: 'var(--soft-black)',
                            color: 'var(--warm-white)',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            padding: '0.9rem 2.25rem',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1.5px solid var(--soft-black)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--soft-black)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--soft-black)';
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--warm-white)';
                        }}
                    >
                        {/* Calendar icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Book Appointment
                    </Link>
                    <a
                        href="https://wa.me/916303890435?text=Hi%20HAVAKU%2C%20I%27d%20like%20to%20book%20an%20appointment!"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'transparent',
                            color: 'var(--soft-black)',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            padding: '0.9rem 2.25rem',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1.5px solid var(--soft-black)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--soft-black)';
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--warm-white)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--soft-black)';
                        }}
                    >
                        {/* WhatsApp icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                        </svg>
                        Message on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
