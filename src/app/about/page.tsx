'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

const values = [
    { title: 'Elegance', desc: 'Every product, service, and experience is designed with a sense of refined aesthetics.' },
    { title: 'Quality', desc: 'We never compromise on quality — from bridal makeup to handcrafted products.' },
    { title: 'Trust', desc: 'Built on a foundation of honest service, transparent communication, and genuine care.' },
    { title: 'Celebration', desc: 'We celebrate every woman — for bridal moments and everyday beauty rituals alike.' },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '65vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, var(--blush-pink) 60%, var(--champagne-gold-light, #E8D5A8) 100%)',
                    display: 'flex', alignItems: 'center',
                    position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Story</div>
                            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                                The Story<br />Behind HAVAKU
                            </h1>
                            <div className="gold-divider" style={{ margin: '0 0 1.75rem' }} />
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', lineHeight: 1.9 }}>
                                HAVAKU was created with one vision — to be a complete, premium beauty and bridal destination where every woman feels celebrated. From everyday beauty rituals to life&apos;s most special moments, HAVAKU brings elegance, confidence, and joy to every experience.
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, var(--blush-pink) 0%, var(--champagne-gold-light, #E8D5A8) 100%)',
                            borderRadius: '4px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', fontWeight: 600, color: 'var(--champagne-gold)', letterSpacing: '0.12em' }}>HAVAKU</div>
                                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--taupe)' }}>Where Beauty Meets Celebration</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section style={{ padding: '6rem 2rem', background: 'var(--warm-white)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>What We Stand For</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Our Brand Values
                            </h2>
                            <div className="gold-divider" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            {values.map((value) => (
                                <div key={value.title} style={{
                                    padding: '2.5rem 1.75rem',
                                    textAlign: 'center',
                                    background: 'var(--ivory)',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(201,169,110,0.15)',
                                    transition: 'all 0.35s ease',
                                    boxShadow: '0 2px 15px rgba(26,26,26,0.04)',
                                }}>
                                    <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(201,169,110,0.12)', border: '1.5px solid rgba(201,169,110,0.3)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--champagne-gold)', fontSize: '1.2rem' }}>✦</span>
                                    </div>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>{value.title}</h3>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'var(--taupe)', lineHeight: 1.8 }}>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section style={{ padding: '6rem 2rem', background: 'var(--soft-black)' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div style={{ padding: '3rem', background: 'rgba(255,253,249,0.04)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px' }}>
                            <div style={{ color: 'var(--champagne-gold)', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Our Vision</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 500, color: 'var(--warm-white)', lineHeight: 1.3, marginBottom: '1.25rem' }}>
                                A Trusted Premium Beauty Brand
                            </h2>
                            <div style={{ width: 40, height: 1.5, background: 'var(--champagne-gold)', marginBottom: '1.25rem' }} />
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'rgba(250,247,242,0.65)', lineHeight: 1.9 }}>
                                To build HAVAKU into a trusted premium beauty, bridal, and lifestyle brand that women choose for elegance, confidence, and celebration.
                            </p>
                        </div>
                        <div style={{ padding: '3rem', background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '4px' }}>
                            <div style={{ color: 'var(--champagne-gold)', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Our Mission</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 500, color: 'var(--warm-white)', lineHeight: 1.3, marginBottom: '1.25rem' }}>
                                One Beautiful Brand Experience
                            </h2>
                            <div style={{ width: 40, height: 1.5, background: 'var(--champagne-gold)', marginBottom: '1.25rem' }} />
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'rgba(250,247,242,0.65)', lineHeight: 1.9 }}>
                                To provide high-quality beauty services, bridal transformations, curated jewelry, and handcrafted products under one beautiful and memorable brand experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, var(--champagne-gold) 0%, #A8853E 100%)', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                        Experience HAVAKU
                    </h2>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(26,26,26,0.7)', marginBottom: '2rem' }}>
                        Book an appointment and experience the HAVAKU difference.
                    </p>
                    <Link href="/contact" className="btn-outline" style={{ borderColor: 'var(--soft-black)', color: 'var(--soft-black)', marginRight: '1rem' }}>
                        Contact Us
                    </Link>
                    <Link href="/bridal" className="btn-outline" style={{ borderColor: 'var(--soft-black)', color: 'var(--soft-black)' }}>
                        Bridal Services
                    </Link>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
            <style jsx>{`
                @media (max-width: 900px) {
                    main > section:first-of-type > div[style*="grid-template-columns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    main > section:first-of-type > div > div:last-child {
                        order: -1 !important;
                        width: 100% !important;
                        aspect-ratio: 1 / 1 !important;
                    }
                    main > section:nth-of-type(3) > div {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    main > section:nth-of-type(3) > div > div {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </>
    );
}
