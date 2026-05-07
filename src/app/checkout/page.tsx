'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useCart } from '@/context/CartContext';
import ImagePlaceholder from '@/components/ImagePlaceholder';

type FormData = {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    notes: string;
};

export default function CheckoutPage() {
    const { items, subtotal, clearCart } = useCart();
    const [form, setForm] = useState<FormData>({
        name: '', phone: '', email: '', address: '', city: '', state: '', pincode: '', notes: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [orderRef, setOrderRef] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const ref = `HAV-${Date.now().toString().slice(-8)}`;
        setOrderRef(ref);

        const orderLines = items
            .map((i) => `• ${i.product.name}${i.variant ? ` (${i.variant})` : ''} × ${i.quantity} — ₹${(i.product.price * i.quantity).toLocaleString('en-IN')}`)
            .join('\n');

        const message = `Hi HAVAKU! I'd like to place an order 🛍️

*Order Ref:* ${ref}

*Order Details:*
${orderLines}

*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}

*Deliver to:*
${form.name}
${form.address}, ${form.city}, ${form.state} - ${form.pincode}
📞 +91 ${form.phone}${form.email ? `\n✉️ ${form.email}` : ''}${form.notes ? `\n\n*Notes:* ${form.notes}` : ''}`;

        const waUrl = `https://wa.me/917386797648?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');

        clearCart();
        setSubmitted(true);
    }

    const isValid = form.name && form.phone.length >= 10 && form.address && form.city && form.state && form.pincode.length === 6;

    if (items.length === 0 && !submitted) {
        return (
            <>
                <Navbar />
                <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', marginBottom: '2rem' }}>Your cart is empty.</p>
                        <Link href="/jewelry" className="btn-primary" style={{ display: 'inline-block' }}>Shop Now</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (submitted) {
        return (
            <>
                <Navbar />
                <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '520px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
                        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(37,162,68,0.12)', border: '2px solid #25a244', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.75rem' }}>
                            ✓
                        </div>
                        <div className="section-label" style={{ marginBottom: '0.75rem', color: '#25a244' }}>Order Placed</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.75rem' }}>
                            Thank you, {form.name.split(' ')[0]}!
                        </h1>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: 'var(--taupe)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                            Your order request has been sent via WhatsApp. Our team will confirm your order and share payment details shortly. We ship once payment is received.
                        </p>
                        <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '4px', padding: '1.25rem', margin: '1.5rem 0' }}>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--taupe)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Order Reference</p>
                            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--champagne-gold)', letterSpacing: '0.05em' }}>{orderRef}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                            <Link href="/order-tracking" className="btn-outline" style={{ display: 'inline-block' }}>Track Order</Link>
                            <Link href="/" className="btn-primary" style={{ display: 'inline-block' }}>Back to Home</Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px' }}>
                <section style={{ padding: '3rem 2rem 2rem', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div className="section-label" style={{ marginBottom: '0.5rem' }}>Checkout</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                            Complete Your Order
                        </h1>
                    </div>
                </section>

                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr min(380px, 100%)', gap: '2.5rem', alignItems: 'start' }}>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            {/* Contact */}
                            <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px', padding: '2rem', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1.5rem' }}>Contact Details</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label className="form-label">Full Name *</label>
                                        <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                                    </div>
                                    <div>
                                        <label className="form-label">Phone Number *</label>
                                        <input className="form-input" name="phone" value={form.phone} onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                            setForm(prev => ({ ...prev, phone: val }));
                                        }} type="tel" required placeholder="10-digit mobile number" />
                                    </div>
                                    <div>
                                        <label className="form-label">Email (Optional)</label>
                                        <input className="form-input" name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" />
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Address */}
                            <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px', padding: '2rem', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1.5rem' }}>Delivery Address</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label className="form-label">Street Address *</label>
                                        <input className="form-input" name="address" value={form.address} onChange={handleChange} required placeholder="House / Flat, Street, Landmark" />
                                    </div>
                                    <div>
                                        <label className="form-label">City *</label>
                                        <input className="form-input" name="city" value={form.city} onChange={handleChange} required placeholder="City" />
                                    </div>
                                    <div>
                                        <label className="form-label">State *</label>
                                        <select 
                                            className="form-input" 
                                            name="state" 
                                            value={form.state} 
                                            onChange={(e) => setForm(prev => ({ ...prev, state: e.target.value }))}
                                            required
                                            style={{ appearance: 'auto', background: 'var(--warm-white)' }}
                                        >
                                            <option value="">Select State</option>
                                            {['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'].sort().map(s => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div style={{ gridColumn: '1 / -1' }}>
                                        <label className="form-label">Pincode *</label>
                                        <input className="form-input" name="pincode" value={form.pincode} onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                                            setForm(prev => ({ ...prev, pincode: val }));
                                        }} type="text" required placeholder="6-digit pincode" />
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px', padding: '2rem', marginBottom: '2rem' }}>
                                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1rem' }}>Special Instructions</h2>
                                <textarea
                                    className="form-input"
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    placeholder="Gift wrapping, custom notes, timing preferences…"
                                    rows={3}
                                    style={{ resize: 'vertical' }}
                                />
                            </div>

                            {/* Trust note */}
                            <div style={{
                                borderLeft: '3px solid var(--champagne-gold)',
                                paddingLeft: '1rem',
                                marginBottom: '1.5rem',
                                background: 'rgba(201,169,110,0.05)',
                                borderRadius: '0 4px 4px 0',
                                padding: '0.9rem 1rem',
                            }}>
                                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', lineHeight: 1.75, margin: 0 }}>
                                    <strong style={{ color: 'var(--soft-black)', fontWeight: 600 }}>How it works:</strong> After you tap &ldquo;Send Order via WhatsApp&rdquo;, our team will confirm your order and share payment details. We ship only after payment is received.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={!isValid}
                                style={{
                                    width: '100%', fontFamily: 'Manrope, sans-serif', fontWeight: 600,
                                    fontSize: '0.88rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                                    padding: '1rem', borderRadius: '2px', cursor: isValid ? 'pointer' : 'not-allowed',
                                    background: isValid ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.35)',
                                    color: isValid ? 'var(--soft-black)' : 'rgba(26,26,26,0.4)',
                                    border: 'none', transition: 'all 0.25s ease',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                </svg>
                                Place Order via WhatsApp
                            </button>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--taupe)', textAlign: 'center', marginTop: '0.85rem', lineHeight: 1.6 }}>
                                Clicking will open WhatsApp with your order details pre-filled.
                            </p>
                        </form>

                        {/* Order Summary sidebar */}
                        <div style={{ background: 'var(--warm-white)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '4px', padding: '2rem', position: 'sticky', top: '90px' }}>
                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1.25rem' }}>
                                Order Summary
                            </h3>
                            {items.map((item) => (
                                <div key={`${item.product.id}-${item.variant}`} style={{ display: 'flex', gap: '0.85rem', marginBottom: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: 50, height: 50, borderRadius: '4px', overflow: 'hidden', background: '#F2EDE8', flexShrink: 0 }}>
                                        <ImagePlaceholder src={item.product.image} alt={item.product.name} width={50} height={50} style={{ width: 50, height: 50 }} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.product.name}</p>
                                        {item.variant && <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'var(--taupe)' }}>{item.variant}</p>}
                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--taupe)' }}>Qty: {item.quantity}</p>
                                    </div>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: 'var(--soft-black)', flexShrink: 0 }}>
                                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                                    </p>
                                </div>
                            ))}
                            <div style={{ borderTop: '1px solid rgba(201,169,110,0.2)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'var(--taupe)' }}>Subtotal</span>
                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'var(--soft-black)', fontWeight: 600 }}>₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'var(--taupe)' }}>Delivery</span>
                                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: '#25a244', fontWeight: 600 }}>Free</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--soft-black)' }}>Total</span>
                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--soft-black)' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(201,169,110,0.15)', paddingTop: '1rem' }}>
                                <Link href="/cart" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--champagne-gold)', textDecoration: 'none' }}>
                                    ← Edit Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
            <style jsx>{`
                @media (max-width: 900px) {
                    /* Correctly target the grid layout */
                    div[style*="display: grid"][style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    /* Reset container side padding */
                    main > div[style*="max-width: 1100px"] {
                        padding: 2rem 1.25rem !important;
                    }
                    /* Put the form first on mobile so they see it quickly */
                    form {
                        order: 1 !important;
                    }
                    /* Summary follows the form */
                    div[style*="position: sticky"] {
                        position: static !important;
                        order: 2 !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                        padding: 1.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    section[style*="padding: 3rem 2rem 2rem"] {
                        padding: 2.5rem 1.5rem 1.5rem !important;
                    }
                    div[style*="grid-template-columns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="padding: 2rem"] {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </>
    );
}
