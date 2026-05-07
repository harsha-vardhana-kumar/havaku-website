'use client';

import React, { useEffect, useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function InstagramFeed() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Placeholder images for when the widget is not yet configured or loading
    const placeholderImages = [
        '/images/ig-1.jpg', '/images/ig-2.jpg', '/images/ig-3.jpg',
        '/images/ig-4.jpg', '/images/ig-5.jpg', '/images/ig-6.jpg'
    ];

    return (
        <section style={{ padding: '4rem 0', background: 'var(--ivory)', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <a
                    href="https://instagram.com/havaku"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--soft-black)',
                        transition: 'color 0.25s ease',
                    }}
                    className="hover:text-[#C9A96E]"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Follow @havaku
                </a>
            </div>

            {/* INSTAGRAM WIDGET PLACEHOLDER */}
            {/* INSTRUCTIONS: 
                To use a real Instagram widget (like Elfsight or SnapWidget):
                1. Create your widget on their platform.
                2. Replace the grid div below with the embed code they provide.
            */}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                width: '100%',
                overflow: 'hidden'
            }}>
                {placeholderImages.map((src, i) => (
                    <a
                        key={i}
                        href="https://instagram.com/havaku"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            position: 'relative',
                            aspectRatio: '1/1',
                            display: 'block',
                            overflow: 'hidden',
                            backgroundColor: '#FAF7F2'
                        }}
                        className="group"
                    >
                        <ImagePlaceholder
                            src={src}
                            alt="Instagram Feed Image"
                            className="group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
