import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// Required for static export — pre-generates all blog post routes at build time
export function generateStaticParams() {
    // Current placeholder slug until a real blog system is implemented
    return [{ slug: 'art-of-sustainable-beauty' }];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // In a real application, fetch the blog post based on the slug
    // Here we'll show a generic structure or placeholder content.
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '100px', background: 'var(--ivory)', minHeight: '100vh' }}>
                <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 5rem' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <Link href="/" style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem',
                            color: 'var(--taupe)', textDecoration: 'none',
                            textTransform: 'uppercase', letterSpacing: '0.05em'
                        }}>
                            <ChevronLeft size={16} />
                            Back to Home
                        </Link>
                    </div>

                    <div className="section-label" style={{ marginBottom: '1rem', color: 'var(--rose-gold)' }}>Beauty & Lifestyle</div>
                    <h1 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 500,
                        color: 'var(--soft-black)',
                        lineHeight: 1.2,
                        marginBottom: '1.5rem'
                    }}>
                        Discovering the Art of Sustainable Beauty
                    </h1>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '1rem',
                        fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem',
                        color: 'var(--taupe)', marginBottom: '3rem',
                        borderBottom: '1.5px solid rgba(201,169,110,0.15)', paddingBottom: '1.5rem'
                    }}>
                        <span>Admin</span>
                        <span style={{ color: 'rgba(201,169,110,0.5)' }}>•</span>
                        <span>MAR 16, 2024</span>
                        <span style={{ color: 'rgba(201,169,110,0.5)' }}>•</span>
                        <span>5 MINS READ</span>
                    </div>

                    <div style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '1.1rem',
                        lineHeight: 1.9,
                        color: 'var(--taupe)',
                    }}>
                        <p style={{ marginBottom: '2rem' }}>
                            At HAVAKU, we believe that beauty is an art form, one that should be crafted with care and respect for the natural world. Our journey began with a simple idea: to bring together the finest ingredients and the most skilled hands to create something truly exceptional.
                        </p>

                        <div style={{
                            width: '100%', aspectRatio: '16/9', background: 'rgba(201,169,110,0.15)',
                            borderRadius: '4px', marginBottom: '2.5rem', overflow: 'hidden',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'Cormorant Garamond, serif', color: 'var(--champagne-gold)',
                            fontSize: '1.2rem', fontStyle: 'italic', border: '1px solid rgba(201,169,110,0.3)'
                        }}>
                           Placeholder: Inspiring Beauty Visual
                        </div>

                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--soft-black)', marginBottom: '1.5rem', marginTop: '3rem' }}>The Essence of Purity</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam nec elementum diam, vel elementum urna. Aenean feugiat, magna sed efficitur hendrerit, ante nisi pharetra mi, vel scelerisque diam enim vel quam.
                        </p>

                        <blockquote style={{
                            fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
                            color: 'var(--soft-black)', borderLeft: '4px solid var(--champagne-gold)',
                            paddingLeft: '2.5rem', margin: '3rem 0', lineHeight: 1.4
                        }}>
                           "True beauty is when you feel as good on the inside as you look on the outside."
                        </blockquote>

                        <p>
                            Maecenas convallis elit quis ante dignissim hendrerit. Etiam tincidunt, magna eu elementum tristique, nunc tellus scelerisque diam, ac interdum nisl lacus tincidunt nisl.
                        </p>
                    </div>

                    <div style={{ marginTop: '5rem', borderTop: '1.5px solid rgba(201,169,110,0.15)', paddingTop: '3rem', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Want more beauty tips?</h3>
                        <Link href="/contact" className="btn-primary">Join our Newsletter</Link>
                    </div>
                </article>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
