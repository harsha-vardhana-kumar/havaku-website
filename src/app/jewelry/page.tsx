'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductImageGallery from '@/components/ProductImageGallery';
import Link from 'next/link';
import { jewelryProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useEffect } from 'react';

const categories = ['All', 'Bridal Sets', 'Earrings', 'Bangles', 'Necklaces', 'Occasion'];

export default function JewelryPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [addedId, setAddedId] = useState<string | null>(null);
    const [lastViewed, setLastViewed] = useState<string | null>(null);
    const { addToCart } = useCart();
    const { toggle, isWishlisted } = useWishlist();

    // Restore scroll position and highlight last viewed product
    useEffect(() => {
        const lv = sessionStorage.getItem('lastProductViewed');
        if (lv) {
            setLastViewed(lv);
            // Small delay to ensure grid has rendered
            const timer = setTimeout(() => {
                const el = document.getElementById(lv);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                // Clear highlight after 3 seconds
                const clearTimer = setTimeout(() => setLastViewed(null), 3000);
                sessionStorage.removeItem('lastProductViewed');
                return () => clearTimeout(clearTimer);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const filteredProducts = activeCategory === 'All'
        ? jewelryProducts
        : jewelryProducts.filter(p => p.category === activeCategory);

    function handleAddToCart(product: typeof jewelryProducts[0]) {
        addToCart(product);
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 1500);
    }

    function handleProductClick(id: string) {
        sessionStorage.setItem('lastProductViewed', id);
    }

    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '65vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, #EFE8DE 50%, var(--champagne-gold-light, #E8D5A8) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '10%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem' }}>HAVAKU Jewelry</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                            Elegance for<br />Every Occasion
                        </h1>
                        <div className="gold-divider" />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', maxWidth: '480px', margin: '1.5rem auto 0.75rem', lineHeight: 1.85 }}>
                            All jewelry is rolled gold — premium quality, elegantly crafted, made to last.
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Collection</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Jewelry Collection
                            </h2>
                            <div className="gold-divider" />
                        </div>

                        {/* Category tabs */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
                            {categories.map((cat) => (
                                <span key={cat} onClick={() => setActiveCategory(cat)} className="filter-tab" style={{
                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600,
                                    letterSpacing: '0.1em', textTransform: 'uppercase',
                                    padding: '0.5rem 1.25rem', border: '1.5px solid',
                                    borderRadius: '2px', cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    backgroundColor: activeCategory === cat ? 'rgba(201,169,110,0.1)' : 'transparent',
                                    color: activeCategory === cat ? 'var(--champagne-gold)' : 'var(--taupe)',
                                    borderColor: activeCategory === cat ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'
                                }}>
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    id={product.id}
                                    className="havaku-card-wrapper"
                                    style={{
                                        position: 'relative',
                                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                        transform: lastViewed === product.id ? 'scale(1.02)' : 'scale(1)',
                                        zIndex: lastViewed === product.id ? 2 : 1,
                                    }}
                                >
                                    <div
                                        className="havaku-card"
                                        style={{
                                            overflow: 'hidden',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            boxShadow: lastViewed === product.id ? '0 12px 40px rgba(201,169,110,0.3)' : undefined,
                                            border: lastViewed === product.id ? '1.5px solid var(--champagne-gold)' : '1px solid transparent',
                                            transition: 'all 0.4s ease',
                                        }}
                                    >
                                        <Link
                                            href={`/products/${product.id}`}
                                            onClick={() => handleProductClick(product.id)}
                                            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                        >
                                            {/* Image */}
                                            <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#FAF7F2' }}>
                                                <ProductImageGallery
                                                    image={product.image}
                                                    images={product.images}
                                                    alt={product.name}
                                                    aspectRatio="1 / 1"
                                                    disableLightbox={true}
                                                />
                                            </div>
                                            <div style={{ padding: '1.25rem 1.25rem 0' }}>
                                                <div style={{ marginBottom: '0.35rem' }}>
                                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--champagne-gold)' }}>
                                                        {product.category}
                                                    </span>
                                                </div>
                                                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.4rem' }}>
                                                    {product.name}
                                                </h3>
                                                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                                                    ₹{product.price.toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        </Link>

                                        <div style={{ padding: '0 1.25rem 1.25rem', marginTop: 'auto' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                                    className="btn-add-to-cart-small"
                                                    style={{
                                                        flex: 1,
                                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 600,
                                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                                        padding: '0.55rem 0.75rem', borderRadius: '2px', cursor: 'pointer',
                                                        border: '1.5px solid var(--champagne-gold)',
                                                        background: addedId === product.id ? 'var(--champagne-gold)' : 'transparent',
                                                        color: addedId === product.id ? 'white' : 'var(--champagne-gold)',
                                                        transition: 'all 0.25s ease',
                                                    }}
                                                >
                                                    {addedId === product.id ? '✓ Added' : 'Add to Cart'}
                                                </button>
                                                <a
                                                    href={`https://wa.me/917386797648?text=Hi%20HAVAKU%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(₹${product.price}).`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    title="Enquire on WhatsApp"
                                                    style={{
                                                        width: 34, height: 34, borderRadius: '2px', border: '1.5px solid rgba(37,211,102,0.5)',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        color: '#25D366', textDecoration: 'none', flexShrink: 0,
                                                    }}
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                        <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Wishlist button — placed outside Link to avoid triggering navigation */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggle(product); }}
                                        title={isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                                        style={{
                                            position: 'absolute', top: 10, right: 10, zIndex: 10,
                                            background: 'rgba(255,253,249,0.9)', border: 'none', borderRadius: '50%',
                                            width: 32, height: 32, cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s',
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill={isWishlisted(product.id) ? 'var(--champagne-gold)' : 'none'} stroke="var(--champagne-gold)" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Info Banner */}
                <section style={{ padding: '4rem 2rem', background: 'var(--soft-black)', textAlign: 'center' }}>
                    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto 1.5rem' }} />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--warm-white)', marginBottom: '0.75rem', lineHeight: 1.8 }}>
                            All HAVAKU jewelry is crafted in rolled gold — premium quality, tarnish-resistant, and elegantly finished.
                        </p>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'rgba(250,247,242,0.55)', marginBottom: '2rem' }}>
                            Inquire via WhatsApp for custom sizing, bridal sets, or bulk orders.
                        </p>
                        <a
                            href="https://wa.me/917386797648"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Inquire via WhatsApp
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
