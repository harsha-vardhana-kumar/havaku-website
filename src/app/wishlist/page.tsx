'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

export default function WishlistPage() {
    const { items, toggle } = useWishlist();
    const { addToCart } = useCart();

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px' }}>
                {/* Header */}
                <section style={{
                    padding: '3rem 2rem 2rem',
                    background: 'linear-gradient(135deg, var(--blush-pink) 0%, var(--ivory) 100%)',
                    borderBottom: '1px solid rgba(201,169,110,0.15)',
                }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div className="section-label" style={{ marginBottom: '0.5rem', color: 'var(--rose-gold)' }}>Saved Items</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--soft-black)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            My Wishlist
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--rose-gold)" stroke="none">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </h1>
                    </div>
                </section>

                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>
                    {items.length === 0 ? (
                        /* Empty state */
                        <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.4)" strokeWidth="1.5" style={{ marginBottom: '1.5rem' }}>
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>
                                No saved items yet
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Tap the heart on any product to save it here.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/jewelry" className="btn-primary" style={{ display: 'inline-block' }}>Browse Jewelry</Link>
                                <Link href="/handmade" className="btn-outline" style={{ display: 'inline-block' }}>Browse Handmade</Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                {items.map((product) => (
                                    <div key={product.id} className="havaku-card" style={{ overflow: 'hidden', position: 'relative' }}>
                                        {/* Remove button */}
                                        <button
                                            onClick={() => toggle(product)}
                                            title="Remove from wishlist"
                                            style={{
                                                position: 'absolute', top: 10, right: 10, zIndex: 2,
                                                background: 'rgba(255,253,249,0.95)', border: 'none', borderRadius: '50%',
                                                width: 32, height: 32, cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                boxShadow: '0 2px 6px rgba(0,0,0,0.12)', color: 'var(--taupe)', fontSize: '1rem',
                                            }}
                                        >
                                            ×
                                        </button>

                                        {/* Image */}
                                        <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#FAF7F2' }}>
                                            <ImagePlaceholder
                                                src={product.image}
                                                alt={product.name}
                                                width={240} height={240}
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                        </div>

                                        <div style={{ padding: '1.25rem' }}>
                                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '0.3rem' }}>
                                                {product.category}
                                            </p>
                                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.35rem' }}>
                                                {product.name}
                                            </h3>
                                            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                                                ₹{product.price.toLocaleString('en-IN')}
                                            </p>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="btn-primary"
                                                style={{ width: '100%', fontSize: '0.75rem', padding: '0.6rem 1rem', boxSizing: 'border-box' }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                                <Link href="/cart" className="btn-outline" style={{ display: 'inline-block' }}>View Cart</Link>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
