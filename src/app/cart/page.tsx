'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function CartPage() {
    const { items, removeFromCart, updateQty, subtotal, totalItems } = useCart();
    const { toggle, isWishlisted } = useWishlist();

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px' }}>
                {/* Header */}
                <section style={{
                    padding: '3rem 2rem 2rem',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, #EFE8DE 100%)',
                    borderBottom: '1px solid rgba(201,169,110,0.15)',
                }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div className="section-label" style={{ marginBottom: '0.5rem' }}>Shopping</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                            Your Cart {totalItems > 0 && <span style={{ fontSize: '1.2rem', color: 'var(--taupe)', fontWeight: 400 }}>({totalItems} item{totalItems !== 1 ? 's' : ''})</span>}
                        </h1>
                    </div>
                </section>

                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>
                    {items.length === 0 ? (
                        /* Empty state */
                        <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🛍️</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>
                                Your cart is empty
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Explore our jewelry and handmade beauty collection.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/jewelry" className="btn-primary" style={{ display: 'inline-block' }}>Shop Jewelry</Link>
                                <Link href="/handmade" className="btn-outline" style={{ display: 'inline-block' }}>Shop Handmade</Link>
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(340px, 100%)', gap: '2.5rem', alignItems: 'start' }}>
                            {/* Cart Items */}
                            <div>
                                {items.map((item) => (
                                    <div key={`${item.product.id}-${item.variant}`} style={{
                                        display: 'flex', gap: '1.25rem', padding: '1.5rem 0',
                                        borderBottom: '1px solid rgba(201,169,110,0.15)', alignItems: 'flex-start',
                                    }}>
                                        {/* Thumbnail */}
                                        <div style={{ width: 90, height: 90, borderRadius: '4px', overflow: 'hidden', flexShrink: 0, background: '#F2EDE8' }}>
                                            <ImagePlaceholder
                                                src={item.product.image}
                                                alt={item.product.name}
                                                width={90} height={90}
                                                style={{ width: 90, height: 90 }}
                                            />
                                        </div>

                                        {/* Details */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                                <div>
                                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '0.2rem' }}>
                                                        {item.product.category}
                                                    </p>
                                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.2rem' }}>
                                                        {item.product.name}
                                                    </h3>
                                                    {item.variant && (
                                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--taupe)' }}>
                                                            Variant: {item.variant}
                                                        </p>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.product.id, item.variant)}
                                                    title="Remove"
                                                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1.2rem', lineHeight: 1, flexShrink: 0, padding: '2px' }}
                                                >
                                                    ×
                                                </button>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.85rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                                                {/* Qty stepper */}
                                                <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid rgba(201,169,110,0.4)', borderRadius: '2px', overflow: 'hidden' }}>
                                                    <button
                                                        onClick={() => updateQty(item.product.id, item.variant, item.quantity - 1)}
                                                        style={{ width: 32, height: 32, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >−</button>
                                                    <span style={{ width: 32, textAlign: 'center', fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: 'var(--soft-black)' }}>
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQty(item.product.id, item.variant, item.quantity + 1)}
                                                        style={{ width: 32, height: 32, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >+</button>
                                                </div>

                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    {/* Save to wishlist */}
                                                    <button
                                                        onClick={() => toggle(item.product)}
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.73rem', color: 'var(--taupe)' }}
                                                    >
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill={isWishlisted(item.product.id) ? 'var(--champagne-gold)' : 'none'} stroke="var(--champagne-gold)" strokeWidth="2">
                                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                                        </svg>
                                                        {isWishlisted(item.product.id) ? 'Saved' : 'Save'}
                                                    </button>
                                                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--soft-black)' }}>
                                                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div style={{ marginTop: '1.5rem' }}>
                                    <Link href="/jewelry" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'var(--champagne-gold)', textDecoration: 'none' }}>
                                        ← Continue Shopping
                                    </Link>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div style={{
                                background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.2)',
                                borderRadius: '4px', padding: '2rem', position: 'sticky', top: '90px',
                            }}>
                                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1.5rem' }}>
                                    Order Summary
                                </h3>
                                <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', paddingTop: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)' }}>Subtotal</span>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--soft-black)', fontWeight: 600 }}>₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)' }}>Delivery</span>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#25a244', fontWeight: 600 }}>Free delivery</span>
                                    </div>
                                    <div style={{ borderTop: '1px solid rgba(201,169,110,0.2)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--soft-black)' }}>Total</span>
                                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--soft-black)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <Link
                                        href="/checkout"
                                        className="btn-primary"
                                        style={{ display: 'block', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}
                                    >
                                        Proceed to Checkout
                                    </Link>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--taupe)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
                                        Orders confirmed via WhatsApp · Payment after confirmation
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
            <style jsx>{`
                @media (max-width: 900px) {
                    /* Header section */
                    main > section:first-of-type > div {
                        padding: 1rem 0 !important;
                    }
                    /* Main container padding */
                    main > div[style*="max-width: 1100px"] {
                        padding: 2rem 1.25rem !important;
                    }
                    /* Grid stacking */
                    div[style*="display: grid"][style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                    /* Sticky summary sidebar */
                    div[style*="position: sticky"] {
                        position: static !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                        padding: 1.5rem !important;
                    }
                    /* Smaller product images and text on mobile */
                    div[style*="display: flex; gap: 1.25rem"] {
                        gap: 1rem !important;
                    }
                    div[style*="width: 90px; height: 90px"] {
                        width: 70px !important;
                        height: 70px !important;
                    }
                    h3[style*="font-size: 1.15rem"] {
                        font-size: 0.95rem !important;
                        margin-bottom: 0.25rem !important;
                    }
                    p[style*="font-size: 0.82rem"] {
                        font-size: 0.75rem !important;
                        margin-bottom: 0.4rem !important;
                    }
                }
            `}</style>
        </>
    );
}
