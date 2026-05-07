'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer style={{ background: '#1A1A1A', color: 'var(--ivory)', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        marginBottom: '3rem',
                        paddingBottom: '3rem',
                        borderBottom: '1px solid rgba(201,169,110,0.2)',
                    }}
                >
                    {/* Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div style={{ marginBottom: '1.25rem', marginLeft: '-4px' }}>
                            <Logo variant="light" fontSize="1.6rem" layout="horizontal" />
                        </div>
                        <p style={{ 
                            fontFamily: 'Manrope, sans-serif', 
                            fontSize: '0.88rem', 
                            color: 'rgba(250,247,242,0.6)', 
                            lineHeight: 1.6, 
                            marginBottom: '1.75rem',
                            maxWidth: '240px'
                        }}>
                            Where Beauty Meets Celebration
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: 40, height: 40, borderRadius: '50%',
                                    border: '1px solid rgba(201,169,110,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--champagne-gold)',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--champagne-gold)';
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,169,110,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.3)';
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                }}
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/917386797648"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: 40, height: 40, borderRadius: '50%',
                                    border: '1px solid rgba(201,169,110,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--champagne-gold)',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--champagne-gold)';
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,169,110,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.3)';
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.5rem' }}>Services</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: 'Beauty Studio', href: '/beauty-studio' },
                                { label: 'Bridal Services', href: '/bridal' },
                                { label: 'Bridal Makeup', href: '/bridal-makeup-hyderabad' },
                                { label: 'Hair Styling', href: '/bridal' },
                                { label: 'Saree Draping', href: '/bridal' }
                            ].map((item) => (
                                <Link key={item.label} href={item.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                                >{item.label}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Collections */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.5rem' }}>Collections</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: 'Bridal Jewelry', href: '/jewelry' },
                                { label: 'Earrings', href: '/jewelry' },
                                { label: 'Bangles', href: '/jewelry' },
                                { label: 'Necklaces', href: '/jewelry' },
                                { label: 'Handmade Soaps', href: '/handmade' },
                                { label: 'Skincare Kits', href: '/handmade' }
                            ].map((item) => (
                                <Link key={item.label} href={item.href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                                >{item.label}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[['About Us', '/about'], ['Gallery', '/gallery'], ['Bridal Services', '/bridal'], ['Contact', '/contact'], ['Book Appointment', '/book-appointment'], ['My Cart', '/cart'], ['My Wishlist', '/wishlist'], ['Track Order', '/order-tracking']].map(([label, href]) => (
                                <Link key={label} href={href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                                >{label}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.5rem' }}>Contact</h4>
                        <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', lineHeight: 1.85 }}>
                            <p style={{ marginBottom: '1rem' }}>
                                HAVAKU Beauty Studio<br />
                                Hyderabad &amp; Andhra Pradesh
                            </p>
                            
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.75rem', color: 'rgba(250,247,242,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Hyderabad</span><br />
                                Bhavani —&nbsp;
                                <a href="tel:+917995950839" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>+91 79959 50839</a>
                            </div>
                            
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.75rem', color: 'rgba(250,247,242,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Andhra Pradesh</span><br />
                                Tanuja —&nbsp;
                                <a href="tel:+917386797648" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>+91 73867 97648</a>
                            </div>
                            
                            <a href="mailto:hellohavaku@gmail.com" style={{ color: 'var(--champagne-gold)', textDecoration: 'none', display: 'block', marginTop: '0.5rem' }}>hellohavaku@gmail.com</a>
                        </div>
                        <div style={{ marginTop: '1.25rem' }}>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.5)', fontStyle: 'italic' }}>
                                Mon – Sat: 9:00 AM – 8:00 PM<br />
                                Sunday: By Appointment
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid rgba(250,247,242,0.05)', paddingTop: '2rem' }}>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.3)' }}>
                        © 2026 HAVAKU. All rights reserved.
                    </p>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.3)', letterSpacing: '0.02em' }}>
                        Crafted with love for every woman
                    </p>
                </div>
            </div>
        </footer>
    );
}
