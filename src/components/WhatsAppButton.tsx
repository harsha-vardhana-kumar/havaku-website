'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);
    const [waTooltip, setWaTooltip] = useState(false);
    const [calTooltip, setCalTooltip] = useState(false);

    useEffect(() => {
        // Fade-up entrance after short delay
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
    }, []);

    const fabBase: React.CSSProperties = {
        width: 54,
        height: 54,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        position: 'relative',
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.65rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
            className="floating-fabs-container"
        >
            <style jsx>{`
                @media (max-width: 768px) {
                    .floating-fabs-container {
                        display: none !important;
                    }
                }
            `}</style>
            {/* ── Calendar / Book Appointment FAB ── */}
            <div style={{ position: 'relative' }}>
                {calTooltip && (
                    <div
                        style={{
                            position: 'absolute',
                            right: '110%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--soft-black)',
                            color: 'var(--warm-white)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            letterSpacing: '0.06em',
                            whiteSpace: 'nowrap',
                            padding: '0.35rem 0.8rem',
                            borderRadius: '3px',
                            pointerEvents: 'none',
                        }}
                    >
                        Book Appointment
                        <span style={{
                            position: 'absolute', left: '100%', top: '50%',
                            transform: 'translateY(-50%)',
                            borderWidth: '5px',
                            borderStyle: 'solid',
                            borderColor: 'transparent transparent transparent var(--soft-black)',
                        }} />
                    </div>
                )}
                <Link
                    href="/book-appointment"
                    aria-label="Book Appointment"
                    style={{
                        ...fabBase,
                        backgroundColor: 'var(--champagne-gold)',
                        boxShadow: '0 4px 18px rgba(201,169,110,0.45)',
                    }}
                    onMouseEnter={(e) => {
                        setCalTooltip(true);
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        setCalTooltip(false);
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                    }}
                >
                    {/* Calendar icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </Link>
            </div>

            {/* ── WhatsApp FAB ── */}
            <div style={{ position: 'relative' }}>
                {waTooltip && (
                    <div
                        style={{
                            position: 'absolute',
                            right: '110%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--soft-black)',
                            color: 'var(--warm-white)',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            letterSpacing: '0.06em',
                            whiteSpace: 'nowrap',
                            padding: '0.35rem 0.8rem',
                            borderRadius: '3px',
                            pointerEvents: 'none',
                        }}
                    >
                        WhatsApp Us
                        <span style={{
                            position: 'absolute', left: '100%', top: '50%',
                            transform: 'translateY(-50%)',
                            borderWidth: '5px',
                            borderStyle: 'solid',
                            borderColor: 'transparent transparent transparent var(--soft-black)',
                        }} />
                    </div>
                )}
                <a
                    href="https://wa.me/917386797648?text=Hi%20HAVAKU%2C%20I%27d%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="whatsapp-pulse"
                    style={{
                        ...fabBase,
                        backgroundColor: '#25D366',
                        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                    }}
                    onMouseEnter={(e) => {
                        setWaTooltip(true);
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        setWaTooltip(false);
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
