import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import Link from 'next/link';

const offers = [
    {
        title: 'Bridal Early Bird Discount',
        desc: 'Book your bridal package 4 months in advance and get 15% off.',
        code: 'EARLYBRIDAL15',
        expiry: 'Valid until further notice'
    },
    {
        title: 'First Visit Special',
        desc: 'Get a complimentary facial cleanup on your first visit to HAVAKU Studio.',
        code: 'HELLOHAVAKU',
        expiry: 'Limited time offer'
    },
    {
        title: 'Jewelry & Handmade Combo',
        desc: 'Buy any jewelry set and get 20% off on all handmade soaps.',
        code: 'COMBO20',
        expiry: 'Ongoing offer'
    }
];

export default function OffersPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '72px', background: 'var(--ivory)', minHeight: '100vh' }}>
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Exclusive Rewards</div>
                            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Special Offers
                            </h1>
                            <div className="gold-divider" />
                            <p style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--taupe)', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
                                Discover the latest deals and exclusive packages at HAVAKU Beauty Studio.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {offers.map((offer) => (
                                <div key={offer.title} style={{
                                    background: 'white', padding: '2.5rem', borderRadius: '4px',
                                    border: '1.5px solid rgba(201,169,110,0.15)',
                                    display: 'flex', flexDirection: 'column', textAlign: 'center'
                                }}>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                                        {offer.title}
                                    </h3>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
                                        {offer.desc}
                                    </p>
                                    <div style={{
                                        background: 'var(--ivory)', padding: '0.75rem', borderRadius: '2px',
                                        border: '1px dashed var(--champagne-gold)', marginBottom: '1.5rem'
                                    }}>
                                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--champagne-gold)' }}>
                                            USE CODE: {offer.code}
                                        </span>
                                    </div>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'rgba(26,26,26,0.4)', marginBottom: '1.5rem' }}>
                                        {offer.expiry}
                                    </p>
                                    <Link href="/contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>Redeem Now</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <BookingCtaBanner />
            <Footer />
            <WhatsAppButton />
        </>
    );
}
