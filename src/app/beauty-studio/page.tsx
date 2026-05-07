import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import BookingCtaBanner from '@/components/BookingCtaBanner';

const services = [
    { icon: '〰', title: 'Threading', desc: 'Precise eyebrow, upper lip, and facial threading for clean, defined results.' },
    { icon: '✦', title: 'Waxing', desc: 'Smooth, gentle waxing for face and body using premium wax formulas.' },
    { icon: '◌', title: 'Cleanup', desc: 'Refreshing facial cleanups to deep-cleanse and reveal glowing skin.' },
    { icon: '❀', title: 'Facial', desc: 'Customized facials for all skin types — brightening, anti-aging, and hydrating.' },
    { icon: '∿', title: 'Hair Spa', desc: 'Deep conditioning and nourishing hair spa treatments for lustrous locks.' },
    { icon: '✂', title: 'Haircut & Styling', desc: 'Expert haircuts and styling — from everyday looks to special occasion hairstyles.' },
    { icon: '◈', title: 'Manicure', desc: 'Relaxing manicure with cuticle care, shaping, and polish for beautifully groomed hands.' },
    { icon: '◉', title: 'Pedicure', desc: 'Rejuvenating pedicure to soften, treat, and pamper your tired feet.' },
];

export default function BeautyStudioPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '65vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--blush-pink) 0%, var(--ivory) 60%, var(--champagne-gold-light, #E8D5A8) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '15%', right: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem' }}>HAVAKU Studio</div>
                        <h1 style={{
                            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.25rem',
                        }}>
                            Everyday Beauty,<br />Elevated
                        </h1>
                        <div className="gold-divider" />
                        <p style={{
                            fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)',
                            maxWidth: '480px', margin: '1.5rem auto 2.5rem', lineHeight: 1.85,
                        }}>
                            Professional beauty services crafted for every woman — from everyday rituals to special occasion prep.
                        </p>
                        <Link href="/book-appointment" className="btn-primary">Book a Service</Link>
                    </div>
                </section>

                {/* Services Grid */}
                <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>What We Offer</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Our Beauty Services
                            </h2>
                            <div className="gold-divider" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            {services.map((service) => (
                                <div key={service.title} className="havaku-card" style={{ padding: '2rem 1.75rem', textAlign: 'center' }}>
                                    <div style={{
                                        fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem',
                                        color: 'var(--champagne-gold)', marginBottom: '1rem',
                                    }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{
                                        fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600,
                                        color: 'var(--soft-black)', marginBottom: '0.6rem',
                                    }}>{service.title}</h3>
                                    <p style={{
                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)',
                                        lineHeight: 1.8,
                                    }}>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Note */}
                <section style={{ padding: '4rem 2rem', background: 'var(--warm-white)', textAlign: 'center' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto 1.5rem' }} />
                        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                            Transparent, competitive pricing for every service.
                        </p>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', marginBottom: '2rem' }}>
                            Contact us for current pricing and packages tailored to your needs.
                        </p>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto 2rem' }} />
                        <Link href="/book-appointment" className="btn-primary">Get Pricing</Link>
                    </div>
                </section>

            </main>
            <BookingCtaBanner />
            <Footer />
            <WhatsAppButton />
        </>
    );
}
