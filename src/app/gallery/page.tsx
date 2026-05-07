'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const tabs = ['All', 'Bridal', 'Beauty Studio', 'Jewelry', 'Products'];

const galleryItems = [
    { id: 1, category: 'Bridal', label: 'Bridal Transformation', tall: true },
    { id: 2, category: 'Jewelry', label: 'Bridal Jewelry Set', tall: false },
    { id: 3, category: 'Beauty Studio', label: 'Facial & Skincare', tall: false },
    { id: 4, category: 'Products', label: 'Handmade Soaps', tall: true },
    { id: 5, category: 'Bridal', label: 'Reception Look', tall: false },
    { id: 6, category: 'Bridal', label: 'Engagement Makeup', tall: true },
    { id: 7, category: 'Jewelry', label: 'Statement Earrings', tall: false },
    { id: 8, category: 'Beauty Studio', label: 'Hair Styling', tall: false },
    { id: 9, category: 'Products', label: 'Skincare Kit', tall: true },
    { id: 10, category: 'Bridal', label: 'Bridal Hair', tall: false },
    { id: 11, category: 'Jewelry', label: 'Necklace Collection', tall: false },
    { id: 12, category: 'Beauty Studio', label: 'Nail Art', tall: true },
];

const palette = ['#F2D6CF', '#E8D5A8', '#D4B8C7', '#C9A96E30', '#EFE8DE', '#F2D6CF', '#E8D5A8', '#D4B8C7'];

export default function GalleryPage() {
    const [activeTab, setActiveTab] = useState('All');

    const filtered = activeTab === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeTab);

    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '50vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--soft-black) 0%, #2A2020 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 60%)' }} />
                    <div style={{ padding: '3rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem', color: 'rgba(201,169,110,0.7)' }}>HAVAKU Portfolio</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, color: 'var(--warm-white)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                            The HAVAKU<br />Experience
                        </h1>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto' }} />
                    </div>
                </section>

                {/* Gallery */}
                <section style={{ padding: '5rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        {/* Filter Tabs */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3.5rem' }}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600,
                                        letterSpacing: '0.1em', textTransform: 'uppercase',
                                        padding: '0.5rem 1.5rem', borderRadius: '2px', cursor: 'pointer',
                                        border: '1.5px solid',
                                        borderColor: activeTab === tab ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)',
                                        color: activeTab === tab ? 'var(--champagne-gold)' : 'var(--taupe)',
                                        background: activeTab === tab ? 'rgba(201,169,110,0.08)' : 'transparent',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Masonry Grid */}
                        <div className="gallery-grid" style={{ columnCount: 3, columnGap: '1rem' }}>
                            {filtered.map((item, i) => (
                                <div
                                    key={item.id}
                                    style={{
                                        breakInside: 'avoid',
                                        marginBottom: '1rem',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {/* Fixed height image container */}
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: item.tall ? 340 : 220,
                                        overflow: 'hidden',
                                        borderRadius: '4px',
                                        background: '#FAF7F2',
                                    }}>
                                        <ImagePlaceholder
                                            width={300}
                                            height={item.tall ? 340 : 220}
                                            label={item.label}
                                            src={galleryItems[i % 5] ? [`/images/bridal-look-1.png`, `/images/bridal-look-2.png`, `/images/bridal-look-3.png`, `/images/bridal-look-4.png`, `/images/bridal-look-5.png`][i % 5] : undefined}
                                            alt={item.label}
                                            gradient={`linear-gradient(135deg, ${palette[i % palette.length]}, ${palette[(i + 2) % palette.length]})`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    @media (max-width: 900px) {
                        .gallery-grid {
                            column-count: 2 !important;
                        }
                    }
                    @media (max-width: 600px) {
                        .gallery-grid {
                            column-count: 1 !important;
                        }
                `}</style>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
