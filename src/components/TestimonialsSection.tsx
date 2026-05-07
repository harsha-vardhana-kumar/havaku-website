'use client';

import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export interface Testimonial {
    id: string | number;
    name: string;
    role: string;
    text: string;
    image?: string;
    rating?: number;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
    background?: 'ivory' | 'warm-white' | 'soft-black' | 'blush-pink';
}

export default function TestimonialsSection({
    testimonials,
    title = 'What Our Clients Say',
    subtitle = 'Real Experiences',
    background = 'warm-white'
}: TestimonialsSectionProps) {
    const bgColors = {
        'ivory': 'var(--ivory)',
        'warm-white': 'var(--warm-white)',
        'soft-black': 'var(--soft-black)',
        'blush-pink': 'var(--blush-pink)'
    };
    const textColor = background === 'soft-black' ? 'var(--warm-white)' : 'var(--soft-black)';
    const textMuted = background === 'soft-black' ? 'rgba(255,253,249,0.7)' : 'var(--taupe)';
    const cardBg = background === 'soft-black' ? '#2A2020' : '#FFFFFF';
    const cardBorder = background === 'soft-black' ? 'rgba(201,169,110,0.15)' : 'rgba(201,169,110,0.2)';

    return (
        <section style={{ padding: '5rem 2rem', background: bgColors[background] }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="section-label" style={{ marginBottom: '0.75rem', color: background === 'soft-black' ? 'rgba(201,169,110,0.7)' : undefined }}>
                        {subtitle}
                    </div>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: textColor }}>
                        {title}
                    </h2>
                    <div className="gold-divider" style={{ background: background === 'soft-black' ? 'var(--champagne-gold)' : undefined }} />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} style={{
                            background: cardBg,
                            padding: '2.5rem 2rem',
                            borderRadius: '4px',
                            border: `1px solid ${cardBorder}`,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            boxShadow: background !== 'soft-black' ? '0 4px 20px rgba(0,0,0,0.03)' : 'none'
                        }}>
                            {/* Star Rating */}
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < (testimonial.rating || 5) ? '#C9A96E' : 'rgba(201,169,110,0.2)'} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote text */}
                            <p style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: '0.88rem',
                                fontStyle: 'italic',
                                color: textMuted,
                                lineHeight: 1.9,
                                marginBottom: '2rem',
                                flexGrow: 1
                            }}>
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', borderTop: `1px solid ${cardBorder}`, paddingTop: '1rem', width: '100%' }}>
                                {testimonial.image && (
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(201,169,110,0.3)', flexShrink: 0 }}>
                                        <ImagePlaceholder src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                )}
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.05rem',
                                        fontWeight: 600,
                                        color: textColor
                                    }}>
                                        {testimonial.name}
                                    </div>
                                    <div style={{
                                        fontFamily: 'Manrope, sans-serif',
                                        fontSize: '0.75rem',
                                        color: 'var(--champagne-gold)',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        marginTop: '0.2rem'
                                    }}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
