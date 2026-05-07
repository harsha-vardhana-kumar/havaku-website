'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const packages = [
    'Bridal Makeup',
    'Engagement Makeup',
    'Reception Makeup',
    'Bridal Trial Session',
    'Saree Draping',
    'Hairstyling',
];

const referralSources = ['Instagram', 'WhatsApp', 'Friend / Family', 'Google', 'Other'];

export default function BridalConsultationPage() {
    const [form, setForm] = useState({
        name: '', phone: '', email: '', location: '',
        eventType: '',
        eventDate: '',
        selectedPackages: [] as string[],
        referral: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePackage = (pkg: string) => {
        setForm(prev => ({
            ...prev,
            selectedPackages: prev.selectedPackages.includes(pkg)
                ? prev.selectedPackages.filter(p => p !== pkg)
                : [...prev.selectedPackages, pkg],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('https://formsubmit.co/ajax/hellohavaku@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ 
                    _subject: `New Bridal Request: ${form.name}`,
                    ...form, 
                    packages: form.selectedPackages.join(', ') 
                }),
            });
        } catch { /* gracefully ignore errors */ }
        setLoading(false);
        setSubmitted(true);
    };

    const inputStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem',
        width: '100%', padding: '0.85rem 1rem',
        border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '2px',
        background: 'var(--warm-white)', color: 'var(--soft-black)',
        outline: 'none', transition: 'border-color 0.25s ease',
    };
    const labelStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem',
        fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const,
        color: 'var(--champagne-gold)', display: 'block', marginBottom: '0.5rem',
    };

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', paddingTop: '72px' }}>

                {/* ── Split Hero ── */}
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    minHeight: 'calc(100vh - 72px)',
                }}>
                    {/* Left — Image + heading */}
                    <div style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {/* Background image fills the panel */}
                        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                            <ImagePlaceholder
                                width={1080} height={1920}
                                label="Bridal Lifestyle"
                                src="/images/bridal-lifestyle.png"
                                alt="HAVAKU Bridal Lifestyle"
                                gradient="linear-gradient(160deg, #3A2D28 0%, var(--taupe) 50%, #C9A96E40 100%)"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                        {/* Overlay content */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to bottom, rgba(26,26,26,0.2) 0%, rgba(26,26,26,0.65) 100%)',
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'flex-end', padding: '3.5rem',
                        }}>
                            <div className="section-label" style={{ marginBottom: '1rem', color: 'rgba(201,169,110,0.8)' }}>HAVAKU Bridal</div>
                            <h1 style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                                fontWeight: 500, color: 'var(--warm-white)',
                                lineHeight: 1.2, marginBottom: '1.25rem',
                            }}>
                                Let&apos;s Plan Your<br />Perfect Bridal Look
                            </h1>
                            <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', marginBottom: '1.25rem' }} />
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(255,253,249,0.75)', lineHeight: 1.85, maxWidth: '380px' }}>
                                Book a personal consultation with our bridal experts. We&apos;ll understand your vision and create a look that&apos;s uniquely yours.
                            </p>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div style={{ background: 'var(--ivory)', padding: '4rem 3.5rem', overflowY: 'auto' }}>
                        {submitted ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '3rem 0' }}>
                                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', color: 'var(--champagne-gold)', marginBottom: '1.25rem', lineHeight: 1 }}>✦</div>
                                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                                    Thank You, {form.name || 'Beautiful'}!
                                </h2>
                                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', lineHeight: 1.85, maxWidth: '380px', marginBottom: '2rem' }}>
                                    Our bridal team will reach out to you within 24 hours to schedule your consultation. We can&apos;t wait to be part of your special day!
                                </p>
                                <a
                                    href="https://wa.me/917386797648?text=Hi%20HAVAKU%2C%20I%20just%20submitted%20a%20bridal%20consultation%20request!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: '#25D366', color: 'white',
                                        fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        padding: '0.85rem 2rem', borderRadius: '2px', textDecoration: 'none',
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    }}
                                >
                                    Message us directly on WhatsApp
                                </a>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', maxWidth: '480px', margin: '0 auto' }}>
                                <div>
                                    <div className="section-label" style={{ marginBottom: '0.5rem' }}>Bridal Consultation</div>
                                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.25rem' }}>
                                        Tell Us About Your Day
                                    </h2>
                                    <div className="gold-divider" style={{ margin: '0.75rem 0 0' }} />
                                </div>

                                {/* Name */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-name">Bride&apos;s Name *</label>
                                    <input id="bc-name" type="text" required placeholder="Your full name" style={inputStyle}
                                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-phone">Phone Number *</label>
                                    <input id="bc-phone" type="tel" required placeholder="+91 XXXXX XXXXX" style={inputStyle}
                                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                {/* Email */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-email">Email Address *</label>
                                    <input id="bc-email" type="email" required placeholder="your@email.com" style={inputStyle}
                                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>



                                {/* Location */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-location">Service Location (Google Maps Link or Address) *</label>
                                    <input id="bc-location" type="text" required placeholder="We cover up to 50km radius" style={inputStyle}
                                        value={form.location} onChange={e => setForm({ ...form, location: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                    <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--taupe)', marginTop: '0.35rem' }}>Currently traveling to clients within 50km. Own studio coming soon!</div>
                                </div>

                                {/* Event Type — Radio */}
                                <div>
                                    <label style={labelStyle}>Event Type *</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                                        {['Wedding', 'Engagement', 'Reception', 'Other'].map(type => (
                                            <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }}>
                                                <input
                                                    type="radio" name="eventType" value={type} required
                                                    checked={form.eventType === type}
                                                    onChange={() => setForm({ ...form, eventType: type })}
                                                    style={{ accentColor: 'var(--champagne-gold)', width: 16, height: 16 }}
                                                />
                                                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'var(--soft-black)' }}>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Event Date */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-date">Event Date *</label>
                                    <input id="bc-date" type="date" required style={{ ...inputStyle, colorScheme: 'light' }}
                                        value={form.eventDate} onChange={e => setForm({ ...form, eventDate: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                {/* Package Interest — Checkboxes */}
                                <div>
                                    <label style={labelStyle}>Bridal Package Interest</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                        {packages.map(pkg => (
                                            <label key={pkg} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }}>
                                                <input
                                                    type="checkbox"
                                                    checked={form.selectedPackages.includes(pkg)}
                                                    onChange={() => togglePackage(pkg)}
                                                    style={{ accentColor: 'var(--champagne-gold)', width: 15, height: 15 }}
                                                />
                                                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'var(--soft-black)', lineHeight: 1.4 }}>{pkg}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* How did you hear */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-referral">How did you hear about HAVAKU?</label>
                                    <select id="bc-referral" style={{ ...inputStyle, cursor: 'pointer' }}
                                        value={form.referral} onChange={e => setForm({ ...form, referral: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')}>
                                        <option value="">Select an option</option>
                                        {referralSources.map(src => <option key={src} value={src}>{src}</option>)}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label style={labelStyle} htmlFor="bc-message">Your Vision & Inspirations</label>
                                    <textarea id="bc-message" rows={4}
                                        placeholder="Tell us about your vision, inspirations, or any special requests..."
                                        style={{ ...inputStyle, resize: 'vertical', fontFamily: 'Manrope, sans-serif' }}
                                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                <button type="submit" disabled={loading} className="btn-primary"
                                    style={{ marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                                    {loading ? 'Sending...' : 'Request Bridal Consultation ✦'}
                                </button>
                            </form>
                        )}
                    </div>
                </section>

                {/* Mobile responsive override */}
                <style>{`
                    @media (max-width: 768px) {
                        main > section:first-of-type {
                            grid-template-columns: 1fr !important;
                        }
                        main > section:first-of-type > div:first-child {
                            min-height: 320px !important;
                        }
                        main > section:first-of-type > div:last-child {
                            padding: 2.5rem 1.5rem !important;
                        }
                    }
                `}</style>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
