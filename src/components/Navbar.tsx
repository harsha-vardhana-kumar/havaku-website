'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

import Logo from './Logo';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Bridal', href: '/bridal' },
    { label: 'Beauty Studio', href: '/beauty-studio' },
    { label: 'Jewelry', href: '/jewelry' },
    { label: 'Handmade', href: '/handmade' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const cart = useCart();
    const wishlist = useWishlist();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
                style={{ transition: 'all 0.4s ease' }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                        {/* Logo */}
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Logo variant="dark" fontSize="1.8rem" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        style={{
                                            fontFamily: 'Manrope, sans-serif',
                                            fontSize: '0.78rem',
                                            fontWeight: isActive ? 700 : 500,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: isActive ? 'var(--champagne-gold)' : (scrolled ? 'var(--soft-black)' : 'var(--soft-black)'),
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            borderBottom: isActive ? '1.5px solid var(--champagne-gold)' : '1.5px solid transparent',
                                            paddingBottom: '2px',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--champagne-gold)' : 'var(--soft-black)')}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <Link href="/book-appointment" className="btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.75rem' }}>
                                Book Now
                            </Link>

                            {/* Wishlist icon */}
                            <Link href="/wishlist" style={{ position: 'relative', color: 'var(--soft-black)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--soft-black)')}
                            >
                                <Heart size={20} />
                                {wishlist.totalItems > 0 && (
                                    <span style={{
                                        position: 'absolute', top: -7, right: -7,
                                        background: 'var(--champagne-gold)', color: 'white',
                                        borderRadius: '50%', width: 16, height: 16,
                                        fontSize: '0.6rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>{wishlist.totalItems}</span>
                                )}
                            </Link>

                            {/* Cart icon */}
                            <Link href="/cart" style={{ position: 'relative', color: 'var(--soft-black)', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--soft-black)')}
                            >
                                <ShoppingBag size={20} />
                                {cart.totalItems > 0 && (
                                    <span style={{
                                        position: 'absolute', top: -7, right: -7,
                                        background: 'var(--champagne-gold)', color: 'white',
                                        borderRadius: '50%', width: 16, height: 16,
                                        fontSize: '0.6rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>{cart.totalItems}</span>
                                )}
                            </Link>
                        </nav>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="mobile-menu-btn"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--soft-black)',
                                display: 'none',
                            }}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        display: 'flex',
                    }}
                >
                    {/* Overlay */}
                    <div
                        style={{ flex: 1, background: 'rgba(26,26,26,0.6)' }}
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Drawer panel */}
                    <div
                        style={{
                            width: '280px',
                            background: 'var(--warm-white)',
                            height: '100vh',
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            animation: 'slideInRight 0.3s ease',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <span
                                style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: 'var(--champagne-gold)',
                                    letterSpacing: '0.12em',
                                }}
                            >
                                HAVAKU
                            </span>
                            <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)' }}>
                                <X size={22} />
                            </button>
                        </div>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        style={{
                                            fontFamily: 'Manrope, sans-serif',
                                            fontSize: '0.85rem',
                                            fontWeight: isActive ? 700 : 500,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: isActive ? 'var(--champagne-gold)' : 'var(--soft-black)',
                                            textDecoration: 'none',
                                            padding: '0.85rem 0',
                                            borderBottom: '1px solid rgba(201,169,110,0.15)',
                                            transition: 'color 0.2s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        {link.label}
                                        {isActive && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--champagne-gold)' }} />}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/book-appointment"
                                onClick={() => setMenuOpen(false)}
                                className="btn-primary"
                                style={{ textAlign: 'center', marginTop: '1.5rem' }}
                            >
                                Book Now
                            </Link>

                            {/* Mobile cart + wishlist */}
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <Link href="/wishlist" onClick={() => setMenuOpen(false)} style={{
                                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '0.5rem', padding: '0.65rem', border: '1.5px solid rgba(201,169,110,0.4)',
                                    borderRadius: '2px', color: 'var(--taupe)', textDecoration: 'none',
                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600,
                                    letterSpacing: '0.08em', textTransform: 'uppercase', position: 'relative',
                                }}>
                                    <Heart size={15} />
                                    Wishlist
                                    {wishlist.totalItems > 0 && (
                                        <span style={{ background: 'var(--champagne-gold)', color: 'white', borderRadius: '50%', width: 16, height: 16, fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{wishlist.totalItems}</span>
                                    )}
                                </Link>
                                <Link href="/cart" onClick={() => setMenuOpen(false)} style={{
                                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '0.5rem', padding: '0.65rem', border: '1.5px solid rgba(201,169,110,0.4)',
                                    borderRadius: '2px', color: 'var(--taupe)', textDecoration: 'none',
                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600,
                                    letterSpacing: '0.08em', textTransform: 'uppercase', position: 'relative',
                                }}>
                                    <ShoppingBag size={15} />
                                    Cart
                                    {cart.totalItems > 0 && (
                                        <span style={{ background: 'var(--champagne-gold)', color: 'white', borderRadius: '50%', width: 16, height: 16, fontSize: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{cart.totalItems}</span>
                                    )}
                                </Link>
                            </div>
                            
                            {/* Mobile WhatsApp Link */}
                            <a
                                href="https://wa.me/917386797648"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '0.65rem', padding: '0.85rem', background: '#25D366',
                                    borderRadius: '4px', color: 'white', textDecoration: 'none',
                                    fontFamily: 'Manrope, sans-serif, system-ui', fontSize: '0.8rem', fontWeight: 600,
                                    letterSpacing: '0.08em', textTransform: 'uppercase',
                                    boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
                                    opacity: 1, visibility: 'visible', transition: 'none',
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                </svg>
                                <span style={{ opacity: 1, visibility: 'visible' }}>WhatsApp Us</span>
                            </a>
                        </nav>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </>
    );
}


