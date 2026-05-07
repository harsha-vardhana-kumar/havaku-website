'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BookingCtaBanner from './BookingCtaBanner';
import ImagePlaceholder from './ImagePlaceholder';
import Head from 'next/head';

interface Review {
    name: string;
    text: string;
}

interface Faq {
    q: string;
    a: string;
}

interface Props {
    serviceName: string;
    location: string;
    pageSlug: string;
    heroSubtext: string;
    detailsList: string[];
    galleryPrefix: string;
    reviews: Review[];
    faqs: Faq[];
}

export default function ServiceLandingLayout({
    serviceName,
    location,
    pageSlug,
    heroSubtext,
    detailsList,
    galleryPrefix,
    reviews,
    faqs
}: Props) {
    return (
        <>
            <Navbar />
            <main>
                {/* SEO Hero */}
                <section style={{
                    minHeight: '40vh', paddingTop: '80px', paddingBottom: '4rem',
                    background: 'linear-gradient(135deg, var(--soft-black) 0%, #2A2020 100%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden', paddingLeft: '2rem', paddingRight: '2rem'
                }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.1) 0%, transparent 60%)' }} />
                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                        <div className="section-label" style={{ marginBottom: '1rem', color: 'rgba(201,169,110,0.7)' }}>HAVAKU in {location}</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, color: 'var(--warm-white)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                            {serviceName} in {location}
                        </h1>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.1rem', color: 'rgba(250,247,242,0.8)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
                            {heroSubtext}
                        </p>
                        <a href="https://wa.me/917386797648" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                            Book Your Session
                        </a>
                    </div>
                </section>

                {/* Details Section */}
                <section style={{ padding: '5rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <div className="section-label" style={{ marginBottom: '1rem' }}>Why Choose Us</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Premium {serviceName} near {location}
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                At HAVAKU, we take pride in delivering exceptional beauty experiences. Whether it's your regular pampering session or preparations for your big day, our expert artists bring the best of their craft to {location}.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {detailsList.map((detail, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ color: 'var(--champagne-gold)', marginTop: '2px' }}>✦</span>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--soft-black)' }}>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', bottom: '1rem', left: '1rem', border: '1px solid var(--champagne-gold)', zIndex: 0 }} />
                            <div style={{ position: 'relative', zIndex: 1, aspectRatio: '4/5', background: '#e0d8d0', overflow: 'hidden' }}>
                                <ImagePlaceholder width={600} height={750} label={`${serviceName} Image`} src={`/images/${pageSlug}-featured.png`} alt={`${serviceName} in ${location}`} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews */}
                {reviews.length > 0 && (
                    <section style={{ padding: '4rem 2rem', background: 'var(--warm-white)', textAlign: 'center' }}>
                        <div className="section-label" style={{ marginBottom: '1rem' }}>Local Love</div>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '3rem' }}>
                            What Clients in {location} Say
                        </h2>
                        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {reviews.map((rv, i) => (
                                <div key={i} style={{ background: 'var(--ivory)', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', textAlign: 'left' }}>
                                    <div style={{ color: 'var(--champagne-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>❝</div>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--soft-black)', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                        "{rv.text}"
                                    </p>
                                    <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--taupe)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                        — {rv.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* FAQs */}
                {faqs.length > 0 && (
                    <section style={{ padding: '5rem 2rem', background: 'var(--ivory)' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div className="section-label" style={{ marginBottom: '1rem', textAlign: 'center' }}>Knowledge Base</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '3rem', textAlign: 'center' }}>
                                Frequency Asked Questions
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {faqs.map((faq, i) => (
                                    <div key={i} style={{ borderBottom: '1px solid rgba(201,169,110,0.2)', paddingBottom: '1.5rem' }}>
                                        <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>
                                            {faq.q}
                                        </h3>
                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', lineHeight: 1.7 }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>
            <BookingCtaBanner />
            <Footer />
            <WhatsAppButton />
        </>
    );
}
