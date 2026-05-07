import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import TestimonialsSection from '@/components/TestimonialsSection';

const bridalPackages = [
    {
        title: 'Bridal Makeup Package',
        desc: 'Complete bridal makeup for the wedding day including skin prep, base, eyes, and lips. Customized to your look and complexion.',
        includes: ['Skin Prep & Primer', 'HD Foundation', 'Eye & Lip Makeup', 'Bridal Blush & Contour', 'Setting & Finishing'],
    },
    {
        title: 'Engagement Makeup Package',
        desc: 'Elegant, glowing makeup for your engagement ceremony — fresh, radiant, and picture-perfect.',
        includes: ['Natural Glow Base', 'Defined Eye Look', 'Soft Lip Colour', 'Touch-up Kit'],
    },
    {
        title: 'Reception Makeup Package',
        desc: 'Bold, glamorous look for your reception night — long-lasting, luxurious, and camera-ready.',
        includes: ['Dramatic Eye Makeup', 'Full Coverage Base', 'Bold Lip', 'All-Night Setting Spray'],
    },
    {
        title: 'Bridal Trial Package',
        desc: 'Rehearse your bridal look before the big day. Try looks, adjust finishes, and feel completely confident.',
        includes: ['Full Trial Makeup', 'Look Photos', 'Consultation', 'Product Notes'],
    },
    {
        title: 'Saree Draping & Hairstyling',
        desc: 'Expert saree draping in your preferred style, combined with bridal hairstyling to complete your look.',
        includes: ['Saree Draping', 'Bridal Hairstyle', 'Accessories Pinning', 'Finishing Touches'],
    },
];

const faqs = [
    { q: 'How early should I book for bridal services?', a: 'We recommend booking at least 3–6 months in advance, especially for peak wedding seasons, to secure your preferred date and time.' },
    { q: 'Do you offer bridal trials?', a: 'Yes! We highly recommend a bridal trial 1–2 weeks before your wedding day. This helps finalize your look and ensures you feel completely comfortable and confident.' },
    { q: 'What time should I schedule the bridal appointment?', a: 'For morning ceremonies, we typically start 3–4 hours before the event. We will coordinate timing based on your ceremony schedule during consultation.' },
    { q: 'Can I bring my own makeup products?', a: 'You are welcome to bring specific products you love, especially foundations matched to your skin tone. However, we use only premium quality products.' },
    { q: 'Do you travel to venues?', a: 'Yes, we offer on-location services for an additional travel fee. Contact us with your venue details for a custom quote.' },
];

const bridalTestimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Bride',
        rating: 5,
        text: 'The team at HAVAKU made me feel like an absolute queen on my wedding day. The makeup lasted flawlessly through all the ceremonies and tears. Highly recommend their bridal package!',
        image: '/images/bridal-look-1.png'
    },
    {
        id: 2,
        name: 'Aisha Patel',
        role: 'Bride',
        rating: 5,
        text: 'I was so nervous about my reception look, but the artists understood exactly what I wanted. The bold, glamorous look they created was simply stunning. Best decision ever!',
        image: '/images/bridal-look-6.png'
    }
];



export default function BridalPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '75vh',
                    background: 'linear-gradient(135deg, var(--soft-black) 0%, #3A2D28 50%, var(--taupe) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    paddingTop: '72px', position: 'relative', overflow: 'hidden',
                    textAlign: 'center',
                }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 65%)',
                    }} />
                    <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
                        <div className="section-label" style={{ marginBottom: '1.25rem', color: 'rgba(201,169,110,0.7)' }}>HAVAKU Bridal</div>
                        <h1 style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontWeight: 500,
                            color: 'var(--warm-white)',
                            lineHeight: 1.15,
                            marginBottom: '1.25rem',
                        }}>
                            Your Perfect<br />Bridal Look
                        </h1>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto 1.5rem' }} />
                        <p style={{
                            fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem',
                            color: 'rgba(255,253,249,0.7)', maxWidth: '520px', margin: '0 auto 2.5rem',
                            lineHeight: 1.85,
                        }}>
                            Complete bridal transformation for your most special day. Every detail crafted with love.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Link href="/book-appointment" className="btn-primary">Book Bridal Consultation</Link>
                            <Link href="/bridal-consultation" className="btn-outline">Bridal Consultation Form →</Link>
                        </div>
                    </div>
                </section>

                {/* Bridal Packages */}
                <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Packages</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Bridal Packages
                            </h2>
                            <div className="gold-divider" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
                            {bridalPackages.map((pkg) => (
                                <div key={pkg.title} className="havaku-card" style={{ padding: '2.5rem', borderTop: '3px solid var(--champagne-gold)' }}>
                                    <h3 style={{
                                        fontFamily: 'Cormorant Garamond, serif', fontSize: '1.45rem', fontWeight: 600,
                                        color: 'var(--soft-black)', marginBottom: '0.75rem',
                                    }}>{pkg.title}</h3>
                                    <p style={{
                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'var(--taupe)',
                                        lineHeight: 1.8, marginBottom: '1.5rem',
                                    }}>{pkg.desc}</p>
                                    <ul style={{ listStyle: 'none', marginBottom: '1.75rem' }}>
                                        {pkg.includes.map((item) => (
                                            <li key={item} style={{
                                                fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'var(--taupe)',
                                                padding: '0.4rem 0', borderBottom: '1px solid rgba(201,169,110,0.12)',
                                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                            }}>
                                                <span style={{ color: 'var(--champagne-gold)', fontSize: '0.6rem' }}>✦</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/book-appointment" className="btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                                        Inquire Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Before & After Transformations */}
                <section style={{ padding: '6rem 2rem', background: 'var(--soft-black)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem', color: 'rgba(201,169,110,0.7)' }}>The Transformation</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--warm-white)' }}>
                                Before & After
                            </h2>
                            <div className="gold-divider" style={{ background: 'var(--champagne-gold)' }} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <BeforeAfterSlider beforeImage="/images/bridal-before-1.png" afterImage="/images/bridal-after-1.png" />
                            <BeforeAfterSlider beforeImage="/images/bridal-before-2.png" afterImage="/images/bridal-after-2.png" />
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section style={{ padding: '5rem 2rem', background: 'var(--warm-white)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Bridal Transformations
                            </h2>
                            <div className="gold-divider" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                            {Array(6).fill(null).map((_, i) => (
                                <div key={i} style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', borderRadius: '4px', background: '#FAF7F2' }}>
                                    <ImagePlaceholder
                                        width={300} height={400}
                                        label={`Bridal Look ${i + 1}`}
                                        src={`/images/bridal-look-${i + 1}.png`}
                                        alt={`HAVAKU Bridal Look ${i + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section style={{ padding: '5rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Common Questions</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Frequently Asked Questions
                            </h2>
                            <div className="gold-divider" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {faqs.map((faq, i) => (
                                <details key={i} style={{
                                    background: 'var(--warm-white)',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(201,169,110,0.2)',
                                    overflow: 'hidden',
                                }}>
                                    <summary style={{
                                        padding: '1.25rem 1.5rem',
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        color: 'var(--soft-black)',
                                        cursor: 'pointer',
                                        listStyle: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        {faq.q}
                                        <span style={{ color: 'var(--champagne-gold)', fontSize: '1.2rem', fontFamily: 'Manrope, sans-serif' }}>+</span>
                                    </summary>
                                    <p style={{
                                        padding: '0 1.5rem 1.25rem',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontSize: '0.875rem',
                                        color: 'var(--taupe)',
                                        lineHeight: 1.85,
                                        borderTop: '1px solid rgba(201,169,110,0.15)',
                                        paddingTop: '1rem',
                                        margin: '0 1.5rem',
                                        marginBottom: '1.25rem',
                                    }}>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <TestimonialsSection
                    testimonials={bridalTestimonials}
                    title="Love from our Brides"
                    subtitle="Bridal Experiences"
                    background="warm-white"
                />

            </main>
            <BookingCtaBanner />
            <Footer />
            <WhatsAppButton />
        </>
    );
}
