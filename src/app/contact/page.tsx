'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingCtaBanner from '@/components/BookingCtaBanner';

const serviceOptions = [
    'Beauty Studio',
    'Bridal Services',
    'Jewelry',
    'Handmade Products',
    'Other',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', service: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('https://formsubmit.co/ajax/hellohavaku@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    _subject: `New General Inquiry: ${formData.name}`,
                    ...formData
                }),
            });
            if (res.ok) setSubmitted(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '50vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, var(--blush-pink) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '10%', right: '8%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem' }}>Get In Touch</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                            Book Your HAVAKU<br />Experience
                        </h1>
                        <div className="gold-divider" />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', maxWidth: '480px', margin: '1.5rem auto 0', lineHeight: 1.85 }}>
                            For appointments, bridal consultations, product inquiries, and more.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>
                        {/* Contact Info */}
                        <div>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Contact Details</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>
                                Let&apos;s Connect
                            </h2>
                            <div className="gold-divider" style={{ margin: '0 0 2rem' }} />

                            {/* Info blocks */}
                            {[
                                { label: 'WhatsApp', value: '+91 73867 97648', href: 'https://wa.me/917386797648', icon: '📱' },
                                { label: 'Email', value: 'hellohavaku@gmail.com', href: 'mailto:hellohavaku@gmail.com', icon: '✉️' },
                                { label: 'Instagram', value: '@havaku.official', href: 'https://instagram.com', icon: '📸' },
                            ].map((item) => (
                                <div key={item.label} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,169,110,0.1)', border: '1.5px solid rgba(201,169,110,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '0.2rem' }}>{item.label}</div>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: 'var(--soft-black)', textDecoration: 'none' }}>
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            ))}

                            {/* Business Hours */}
                            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--warm-white)', borderRadius: '4px', border: '1px solid rgba(201,169,110,0.2)' }}>
                                <div className="section-label" style={{ marginBottom: '0.75rem' }}>Business Hours</div>
                                {[
                                    ['Monday – Saturday', '9:00 AM – 8:00 PM'],
                                    ['Sunday', 'By Appointment Only'],
                                ].map(([day, time]) => (
                                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)' }}>{day}</span>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--champagne-gold)', fontWeight: 500 }}>{time}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div style={{ marginTop: '2rem', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.2)', height: 200, background: 'linear-gradient(135deg, var(--blush-pink), var(--ivory))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.2rem' }}>Currently On Location</div>
                                    <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', lineHeight: 1.6, marginBottom: '0.65rem', padding: '0 1rem', maxWidth: '300px' }}>
                                        We travel to your location! We cover areas up to a 50km radius.
                                    </div>
                                    <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--champagne-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontStyle: 'italic' }}>Own Studio Coming Soon</div>
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div style={{ background: 'var(--warm-white)', borderRadius: '4px', padding: '3rem', boxShadow: '0 4px 30px rgba(26,26,26,0.08)' }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: 'var(--champagne-gold)', marginBottom: '1rem' }}>✦</div>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>
                                        Thank You!
                                    </h3>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: 'var(--taupe)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                        Your inquiry has been received. We&apos;ll get back to you within 24 hours.
                                    </p>
                                    <a href="https://wa.me/917386797648" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            ) : (
                                <>
                                    <div className="section-label" style={{ marginBottom: '0.75rem' }}>Send an Inquiry</div>
                                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '2rem' }}>
                                        Book an Appointment
                                    </h2>
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                        <div>
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input id="name" name="name" type="text" required placeholder="Your full name" className="form-input" value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="form-label" htmlFor="phone">Phone Number *</label>
                                            <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="form-input" value={formData.phone} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="form-label" htmlFor="email">Email Address</label>
                                            <input id="email" name="email" type="email" placeholder="your@email.com" className="form-input" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="form-label" htmlFor="service">Service of Interest *</label>
                                            <select id="service" name="service" required className="form-input" value={formData.service} onChange={handleChange}
                                                style={{ cursor: 'pointer' }}>
                                                <option value="">Select a service...</option>
                                                {serviceOptions.map((opt) => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="form-label" htmlFor="message">Message</label>
                                            <textarea
                                                id="message" name="message" rows={4}
                                                placeholder="Tell us about your requirements, preferred date, or any special requests..."
                                                className="form-input"
                                                value={formData.message} onChange={handleChange}
                                                style={{ resize: 'vertical', fontFamily: 'Manrope, sans-serif' }}
                                            />
                                        </div>
                                        <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', textAlign: 'center' }}>
                                            Send Inquiry
                                        </button>
                                        <div style={{ textAlign: 'center' }}>
                                            <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)' }}>or</span>
                                        </div>
                                        <a
                                            href="https://wa.me/917386797648"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                background: '#25D366', color: 'white',
                                                fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                                padding: '0.8rem 2rem', borderRadius: '2px',
                                                textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                gap: '0.5rem',
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                            </svg>
                                            Chat on WhatsApp
                                        </a>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <BookingCtaBanner />
            <Footer />
            <WhatsAppButton />
            <style jsx>{`
                @media (max-width: 900px) {
                    main > section:first-of-type {
                        min-height: auto !important;
                        padding-bottom: 3rem !important;
                    }
                    main > section:nth-of-type(2) > div {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        padding: 2rem 1.5rem !important;
                    }
                    div[style*="box-shadow: 0 4px 30px"] {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </>
    );
}

