'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductImageGallery from '@/components/ProductImageGallery';
import { allProducts, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import Link from 'next/link';
import { ChevronLeft, Share2, Heart } from 'lucide-react';

export function ProductDetailClient({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const { toggle, isWishlisted } = useWishlist();
    const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
        product.variants?.[0]
    );
    const [addedToCart, setAddedToCart] = useState(false);
    const [shareMsg, setShareMsg] = useState('');

    function handleAddToCart() {
        addToCart(product, selectedVariant);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 1600);
    }

    function handleShare() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({ title: product.name, url });
        } else {
            navigator.clipboard?.writeText(url).then(() => {
                setShareMsg('Link copied!');
                setTimeout(() => setShareMsg(''), 2000);
            });
        }
    }

    // Map variant selection to correct image subset for h-luxury-soap
    let activeImages = product.images;
    if (product.id === 'h-luxury-soap' && selectedVariant && product.images) {
        const variantSliceMap: Record<string, [number, number]> = {
            'Rose': [0, 3],
            'Lavender': [3, 5],
            'Turmeric': [5, 7],
            'Charcoal': [7, 9],
            'Sandalwood': [9, 11],
        };
        const range = variantSliceMap[selectedVariant];
        if (range) activeImages = product.images.slice(range[0], range[1]);
    }

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '72px', background: 'var(--ivory)', minHeight: '100vh' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem 4rem' }}>

                    {/* ── Breadcrumb ── */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <Link href={product.type === 'jewelry' ? '/jewelry' : '/handmade'} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                            fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem',
                            color: 'var(--taupe)', textDecoration: 'none',
                            textTransform: 'uppercase', letterSpacing: '0.07em'
                        }}>
                            <ChevronLeft size={14} />
                            Back to {product.type === 'jewelry' ? 'Jewelry' : 'Handmade'}
                        </Link>
                    </div>

                    {/* ── Main Grid ── */}
                    <div className="pd-grid">
                        {/* Left: Image Gallery */}
                        <div style={{ position: 'relative' }}>
                            <div style={{ borderRadius: '6px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                                <ProductImageGallery
                                    image={activeImages ? activeImages[0] : product.image}
                                    images={activeImages}
                                    alt={product.name}
                                    aspectRatio="1 / 1"
                                />
                            </div>
                            {/* Wishlist button over image */}
                            <button
                                onClick={() => toggle(product)}
                                aria-label={isWishlisted(product.id) ? 'Remove from wishlist' : 'Save to wishlist'}
                                style={{
                                    position: 'absolute', top: 14, right: 14, zIndex: 10,
                                    background: 'rgba(255,253,249,0.95)', border: 'none', borderRadius: '50%',
                                    width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                                }}
                            >
                                <Heart
                                    size={18}
                                    fill={isWishlisted(product.id) ? 'var(--champagne-gold)' : 'none'}
                                    stroke="var(--champagne-gold)"
                                    strokeWidth={2}
                                />
                            </button>
                        </div>

                        {/* Right: Product Info */}
                        <div className="pd-info">
                            <div className="section-label" style={{ marginBottom: '0.6rem' }}>{product.category}</div>

                            <h1 style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                                fontWeight: 500, color: 'var(--soft-black)',
                                lineHeight: 1.2, marginBottom: '0.75rem',
                            }}>
                                {product.name}
                            </h1>

                            <p style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                                fontWeight: 600, color: 'var(--champagne-gold)',
                                marginBottom: '1.25rem',
                            }}>
                                ₹{product.price.toLocaleString('en-IN')}
                            </p>

                            <div style={{ height: '1.5px', background: 'rgba(201,169,110,0.2)', width: 60, marginBottom: '1.25rem' }} />

                            <p style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'clamp(0.88rem, 2.5vw, 1rem)',
                                color: 'var(--taupe)', lineHeight: 1.85, marginBottom: '1.5rem',
                            }}>
                                {product.description}
                            </p>

                            {/* Variant Selector */}
                            {product.variants && product.variants.length > 0 && (
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{
                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 700,
                                        textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--taupe)',
                                        marginBottom: '0.6rem',
                                    }}>
                                        Variant — <span style={{ color: 'var(--champagne-gold)' }}>{selectedVariant}</span>
                                    </h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {product.variants.map(v => (
                                            <button
                                                key={v}
                                                onClick={() => setSelectedVariant(v)}
                                                style={{
                                                    padding: '0.35rem 0.9rem', borderRadius: '20px', cursor: 'pointer',
                                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 500,
                                                    border: `1.5px solid ${selectedVariant === v ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'}`,
                                                    background: selectedVariant === v ? 'rgba(201,169,110,0.12)' : 'transparent',
                                                    color: selectedVariant === v ? 'var(--champagne-gold)' : 'var(--taupe)',
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                {v}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="pd-actions">
                                <button
                                    onClick={handleAddToCart}
                                    className="btn-primary"
                                    style={{
                                        flex: 1, padding: '1rem',
                                        background: addedToCart ? '#25a244' : undefined,
                                        border: addedToCart ? '1.5px solid #25a244' : undefined,
                                        transition: 'all 0.25s ease', fontSize: '0.85rem', minWidth: 0,
                                    }}
                                >
                                    {addedToCart ? '✓ Added to Bag' : 'Add to Bag'}
                                </button>
                                <button
                                    onClick={handleShare}
                                    title={shareMsg || 'Share this product'}
                                    style={{
                                        width: 50, height: 50, flexShrink: 0,
                                        border: '1.5px solid rgba(201,169,110,0.35)',
                                        borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: shareMsg ? 'var(--champagne-gold)' : 'var(--taupe)',
                                        cursor: 'pointer', background: 'transparent', transition: 'all 0.2s ease',
                                    }}
                                >
                                    <Share2 size={18} />
                                </button>
                            </div>
                            {shareMsg && (
                                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--champagne-gold)', marginTop: '0.4rem' }}>{shareMsg}</p>
                            )}

                            {/* WhatsApp Enquiry */}
                            <a
                                href={`https://wa.me/916303890435?text=Hi%20HAVAKU%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}${selectedVariant ? `%20(${encodeURIComponent(selectedVariant)})` : ''}%20%E2%80%94%20%E2%82%B9${product.price}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                                    background: 'rgba(37,211,102,0.08)', color: '#25D366',
                                    padding: '0.9rem', borderRadius: '4px', textDecoration: 'none',
                                    fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                                    border: '1px solid rgba(37,211,102,0.25)', marginTop: '0.75rem',
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                </svg>
                                Enquire on WhatsApp
                            </a>

                            {/* Product Meta */}
                            <div style={{
                                marginTop: '2rem', borderTop: '1px solid rgba(201,169,110,0.12)',
                                paddingTop: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap',
                            }}>
                                <div>
                                    <h5 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem', color: 'var(--soft-black)' }}>Material</h5>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)' }}>
                                        {product.type === 'jewelry' ? 'Premium Rolled Gold' : 'Natural & Organic'}
                                    </p>
                                </div>
                                <div>
                                    <h5 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem', color: 'var(--soft-black)' }}>Delivery</h5>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)' }}>3–5 Business Days</p>
                                </div>
                                <div>
                                    <h5 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem', color: 'var(--soft-black)' }}>Returns</h5>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)' }}>Via WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Related Products ── */}
                    <div style={{ marginTop: '5rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.6rem' }}>You May Also Like</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: 'var(--soft-black)' }}>Related Products</h2>
                        </div>
                        <div className="pd-related">
                            {allProducts.filter(p => p.type === product.type && p.id !== product.id).slice(0, 4).map(item => (
                                <Link key={item.id} href={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="havaku-card" style={{ overflow: 'hidden' }}>
                                        <div style={{ aspectRatio: '1/1', background: '#FAF7F2', overflow: 'hidden' }}>
                                            <ProductImageGallery image={item.image} images={item.images} alt={item.name} aspectRatio="1/1" />
                                        </div>
                                        <div style={{ padding: '1rem' }}>
                                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.65rem', fontWeight: 600, color: 'var(--champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.25rem' }}>{item.category}</p>
                                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.2rem' }}>{item.name}</h3>
                                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--champagne-gold)', fontWeight: 600 }}>₹{item.price.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* ── Responsive Styles ── */}
            <style>{`
                .pd-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                @media (min-width: 768px) {
                    .pd-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                        align-items: start;
                    }
                    .pd-info {
                        position: sticky;
                        top: 90px;
                    }
                }
                .pd-actions {
                    display: flex;
                    gap: 0.75rem;
                    align-items: center;
                    margin-bottom: 0;
                }
                .pd-related {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }
                @media (min-width: 900px) {
                    .pd-related {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
            `}</style>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
