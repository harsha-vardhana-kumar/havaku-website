'use client';

import { useState } from 'react';

const ADMIN_PASSWORD = 'havaku2025';

const templates = [
    {
        category: 'Pricing Inquiry',
        icon: '₹',
        message: `Hi! Thank you for reaching out to HAVAKU 🌸 Our service prices vary based on your requirements. Could you please let us know which service you're interested in? We'll share the details right away!`,
    },
    {
        category: 'Appointment Booking',
        icon: '📅',
        message: `Hi! We'd love to have you at HAVAKU ✨ Please share your preferred date, time, and service, and we'll confirm your appointment shortly.`,
    },
    {
        category: 'Bridal Package Inquiry',
        icon: '💛',
        message: `Congratulations on your upcoming celebration! 💛 We offer complete bridal packages for weddings, engagements, and receptions. Please share your event date and we'll get in touch with our full bridal package details.`,
    },
    {
        category: 'Product Inquiry (Jewelry / Handmade)',
        icon: '🌿',
        message: `Thank you for your interest in HAVAKU's collections! 🌿 Please let us know which product you're looking for and we'll share details, photos, and pricing with you.`,
    },
    {
        category: 'Availability Check',
        icon: '🌸',
        message: `Hi! Thank you for contacting HAVAKU 🌸 Could you share your preferred date and service? We'll check our availability and confirm with you as soon as possible.`,
    },
    {
        category: 'General Follow-up',
        icon: '✨',
        message: `Hi! Just checking in from HAVAKU ✨ Have you had a chance to go through our services? We'd love to help you book your next beauty experience. Feel free to reach out anytime!`,
    },
];

function TemplateCard({ category, icon, message }: { category: string; icon: string; message: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(message).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div style={{
            background: 'var(--warm-white)', borderRadius: '4px',
            border: '1px solid rgba(201,169,110,0.2)',
            boxShadow: '0 2px 16px rgba(26,26,26,0.05)',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s ease',
        }}>
            {/* Card header */}
            <div style={{
                background: 'rgba(201,169,110,0.07)',
                borderBottom: '1px solid rgba(201,169,110,0.15)',
                padding: '1rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
                <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem',
                    fontWeight: 600, color: 'var(--soft-black)',
                }}>
                    {category}
                </h3>
            </div>
            {/* Card body */}
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{
                    fontFamily: 'Manrope, sans-serif', fontSize: '0.87rem',
                    color: 'var(--taupe)', lineHeight: 1.85,
                    background: 'var(--ivory)', padding: '1rem',
                    borderRadius: '3px', border: '1px solid rgba(201,169,110,0.12)',
                    fontStyle: 'italic',
                }}>
                    &ldquo;{message}&rdquo;
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        onClick={handleCopy}
                        style={{
                            background: copied ? 'rgba(201,169,110,0.15)' : 'var(--champagne-gold)',
                            color: copied ? 'var(--champagne-gold)' : 'var(--soft-black)',
                            border: `1.5px solid ${copied ? 'var(--champagne-gold)' : 'var(--champagne-gold)'}`,
                            borderRadius: '2px',
                            padding: '0.5rem 1.25rem',
                            fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600,
                            letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                        }}
                    >
                        {copied ? (
                            <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                                Copy
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function WhatsAppTemplatesPage() {
    const [password, setPassword] = useState('');
    const [authed, setAuthed] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthed(true);
            setError(false);
        } else {
            setError(true);
            setPassword('');
        }
    };

    // ── Password Gate ──
    if (!authed) {
        return (
            <div style={{
                minHeight: '100vh', background: 'var(--soft-black)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem',
            }}>
                <div style={{
                    background: 'rgba(255,253,249,0.04)', border: '1px solid rgba(201,169,110,0.25)',
                    borderRadius: '6px', padding: '3.5rem 3rem', maxWidth: '420px', width: '100%',
                    textAlign: 'center',
                }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--champagne-gold)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                        HAVAKU
                    </div>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', marginBottom: '2.5rem' }}>
                        Admin Access
                    </div>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{
                                fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 600,
                                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.7)',
                                display: 'block', marginBottom: '0.5rem', textAlign: 'left',
                            }}>
                                Password
                            </label>
                            <input
                                type="password" required autoFocus
                                placeholder="Enter admin password"
                                value={password}
                                onChange={e => { setPassword(e.target.value); setError(false); }}
                                style={{
                                    width: '100%', padding: '0.85rem 1rem',
                                    background: 'rgba(255,253,249,0.06)', color: 'var(--warm-white)',
                                    border: `1.5px solid ${error ? '#E57373' : 'rgba(201,169,110,0.3)'}`,
                                    borderRadius: '2px', fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem',
                                    outline: 'none', transition: 'border-color 0.25s ease',
                                }}
                                onFocus={e => { if (!error) e.target.style.borderColor = 'var(--champagne-gold)'; }}
                                onBlur={e => { if (!error) e.target.style.borderColor = 'rgba(201,169,110,0.3)'; }}
                            />
                            {error && (
                                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#E57373', marginTop: '0.4rem', textAlign: 'left' }}>
                                    Incorrect password. Please try again.
                                </p>
                            )}
                        </div>
                        <button type="submit" style={{
                            background: 'var(--champagne-gold)', color: 'var(--soft-black)',
                            fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                            letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem',
                            borderRadius: '2px', border: 'none', cursor: 'pointer',
                            transition: 'opacity 0.2s ease',
                        }}>
                            Access Templates
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ── Templates Page ──
    return (
        <div style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '0' }}>
            {/* Admin Header */}
            <header style={{
                background: 'var(--soft-black)', padding: '0 2rem',
                height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                position: 'sticky', top: 0, zIndex: 50,
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--champagne-gold)', letterSpacing: '0.12em' }}>
                        HAVAKU
                    </span>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', borderLeft: '1px solid rgba(201,169,110,0.2)', paddingLeft: '1rem' }}>
                        Admin · WhatsApp Templates
                    </span>
                </div>
                <button
                    onClick={() => setAuthed(false)}
                    style={{
                        background: 'none', border: '1px solid rgba(201,169,110,0.3)',
                        color: 'var(--taupe)', fontFamily: 'Manrope, sans-serif',
                        fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em',
                        textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '2px',
                        cursor: 'pointer', transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--champagne-gold)';
                        (e.currentTarget as HTMLButtonElement).style.color = 'var(--champagne-gold)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,169,110,0.3)';
                        (e.currentTarget as HTMLButtonElement).style.color = 'var(--taupe)';
                    }}
                >
                    Log out
                </button>
            </header>

            {/* Content */}
            <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3.5rem 2rem 6rem' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div className="section-label" style={{ marginBottom: '0.5rem' }}>Internal Reference</div>
                    <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                        WhatsApp Reply Templates
                    </h1>
                    <div className="gold-divider" style={{ margin: '0 0 1rem' }} />
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', lineHeight: 1.75 }}>
                        Ready-to-use WhatsApp reply templates for common customer inquiries. Click <strong>Copy</strong> to copy any message to clipboard.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '1.25rem' }}>
                    {templates.map(t => (
                        <TemplateCard key={t.category} {...t} />
                    ))}
                </div>
            </div>
        </div>
    );
}
