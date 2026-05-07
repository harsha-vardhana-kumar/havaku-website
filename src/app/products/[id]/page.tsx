import { allProducts } from '@/data/products';
import { ProductDetailClient } from './ProductDetailClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Required for static export — pre-generates all product routes at build time
export function generateStaticParams() {
    return allProducts.map(product => ({ id: product.id }));
}

// Next.js 15: params is a Promise and must be awaited
export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return (
            <>
                <Navbar />
                <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', color: 'var(--soft-black)' }}>Product Not Found</h1>
                        <p style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--taupe)', marginTop: '1rem' }}>We couldn&apos;t find the product you&apos;re looking for.</p>
                        <Link href="/jewelry" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Back to Shop</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return <ProductDetailClient product={product} />;
}
