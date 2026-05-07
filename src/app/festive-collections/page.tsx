import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export default function FestiveCollectionsPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '72px', background: 'var(--soft-black)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="section-label" style={{ marginBottom: '1rem', color: 'rgba(201,169,110,0.7)' }}>Exclusively Crafted</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 500, color: 'var(--warm-white)', lineHeight: 1.2, marginBottom: '2.5rem' }}>
                            Seasonal & Festive Collections
                        </h1>
                        <div style={{ width: 80, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto 2.5rem' }} />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: 'rgba(250,247,242,0.6)', lineHeight: 1.8, marginBottom: '3rem' }}>
                            Discover our curated festive edits on jewelry and handmade gift hampers once we release our seasonal collections.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <Link href="/jewelry" style={{ textDecoration: 'none' }}>
                                <div style={{ background: 'rgba(255,253,249,0.05)', border: '1px solid rgba(201,169,110,0.3)', padding: '3rem 2rem', borderRadius: '4px', textAlign: 'center' }}>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'var(--warm-white)', marginBottom: '1.5rem' }}>Shop Festive Jewelry</h3>
                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--champagne-gold)', textTransform: 'uppercase' }}>Explore Jewels →</span>
                                </div>
                            </Link>
                            <Link href="/handmade" style={{ textDecoration: 'none' }}>
                                <div style={{ background: 'rgba(255,253,249,0.05)', border: '1px solid rgba(201,169,110,0.3)', padding: '3rem 2rem', borderRadius: '4px', textAlign: 'center' }}>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'var(--warm-white)', marginBottom: '1.5rem' }}>Gift Hampers</h3>
                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--champagne-gold)', textTransform: 'uppercase' }}>Explore Hampers →</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
