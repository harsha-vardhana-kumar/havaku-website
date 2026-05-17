'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function OrderTrackingPage() {
    const [phone, setPhone] = useState('');
    const [ref, setRef] = useState('');

    function handleTrack(e: React.FormEvent) {
        e.preventDefault();
        const msg = `Hi HAVAKU! I'd like to track my order.${ref ? `\n*Order Ref:* ${ref}` : ''}\n*Phone:* +91 ${phone}`;
        window.open(`https://wa.me/916303890435?text=${encodeURIComponent(msg)}`, '_blank');
    }

    const isValid = phone.length >= 10;

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', paddingTop: '72px' }}>
                {/* Hero */}
                <section style={{
                    minHeight: '45vh',
                    background: 'linear-gradient(135deg, var(--soft-black) 0%, #2A2020 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 60%)' }} />
                    <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem', color: 'rgba(201,169,110,0.7)' }}>HAVAKU Orders</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 500, color: 'var(--warm-white)', lineHeight: 1.2, marginBottom: '1rem' }}>
                            Track Your Order
                        </h1>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto' }} />
                    </div>
                </section>

                {/* Form Section */}
                <section style={{ background: 'var(--ivory)', padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '520px', margin: '0 auto' }}>
                        <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px', padding: '2.5rem' }}>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                Check Order Status
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Enter the phone number you used at checkout. We'll connect you to our team on WhatsApp instantly.
                            </p>

                            <form onSubmit={handleTrack}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label className="form-label">Phone Number Used at Checkout *</label>
                                    <input
                                        className="form-input"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="10-digit mobile number"
                                        maxLength={10}
                                        required
                                    />
                                </div>
                                <div style={{ marginBottom: '1.75rem' }}>
                                    <label className="form-label">Order Reference (Optional)</label>
                                    <input
                                        className="form-input"
                                        value={ref}
                                        onChange={(e) => setRef(e.target.value)}
                                        placeholder="e.g. HAV-12345678"
                                    />
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--taupe)', marginTop: '0.4rem' }}>
                                        Found in your WhatsApp order confirmation
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    style={{
                                        width: '100%', fontFamily: 'Manrope, sans-serif', fontWeight: 600,
                                        fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                                        padding: '0.95rem', borderRadius: '2px', border: 'none',
                                        cursor: isValid ? 'pointer' : 'not-allowed',
                                        background: isValid ? '#25D366' : 'rgba(37,211,102,0.3)',
                                        color: isValid ? 'white' : 'rgba(255,255,255,0.5)',
                                        transition: 'all 0.25s ease',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                    </svg>
                                    Track via WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Info note */}
                        <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px' }}>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'var(--taupe)', lineHeight: 1.8 }}>
                                <strong style={{ color: 'var(--soft-black)' }}>Response time:</strong> Our team typically replies within 2 hours during business hours.
                            </p>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(125,107,94,0.8)', marginTop: '0.35rem' }}>
                                Mon – Sat: 9:00 AM – 8:00 PM &nbsp;·&nbsp; Sunday: By Appointment
                            </p>
                        </div>

                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'var(--taupe)', textAlign: 'center', marginTop: '2rem' }}>
                            New order?{' '}
                            <Link href="/jewelry" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>Shop Jewelry</Link>
                            {' '}or{' '}
                            <Link href="/handmade" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>Handmade Products</Link>
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
