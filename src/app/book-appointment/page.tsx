'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

const services = [
    { id: 'beauty-studio', label: 'Beauty Studio', icon: '✦', desc: 'Threading, Waxing, Facial, Hair, Manicure & Pedicure' },
    { id: 'bridal-makeup', label: 'Bridal Makeup', icon: '♛', desc: 'Complete bridal makeup for your wedding day' },
    { id: 'engagement-makeup', label: 'Engagement Makeup', icon: '◈', desc: 'Elegant, glowing makeup for your engagement' },
    { id: 'reception-makeup', label: 'Reception Makeup', icon: '❧', desc: 'Bold, glamorous look for reception night' },
    { id: 'bridal-trial', label: 'Bridal Trial', icon: '〰', desc: 'Rehearse your bridal look before the big day' },
    { id: 'saree-hair', label: 'Saree Draping & Hairstyling', icon: '∿', desc: 'Expert saree draping combined with bridal hairstyling' },
];

// Only 3 fixed time slots as requested
const timeSlots = ['7:00 AM', '2:00 PM', '4:00 PM'];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

// ── Location Picker Component ──────────────────────────────────────
type AddressFields = { flat: string; street: string; city: string; pincode: string };

interface LocationPickerProps {
    value: string;
    onChange: (location: string) => void;
}

function LocationPicker({ value, onChange }: LocationPickerProps) {
    const [mode, setMode] = useState<'current' | 'manual' | null>(null);
    const [geoLoading, setGeoLoading] = useState(false);
    const [geoError, setGeoError] = useState('');
    const [mapCoords, setMapCoords] = useState<{ lat: number; lng: number } | null>(null);
    const [displayAddress, setDisplayAddress] = useState(value);
    const [addressFields, setAddressFields] = useState<AddressFields>({ flat: '', street: '', city: '', pincode: '' });
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    // Reverse geocode lat/lng via OpenStreetMap Nominatim (free, no key)
    const reverseGeocode = useCallback(async (lat: number, lng: number) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
                { headers: { 'Accept-Language': 'en' } }
            );
            const data = await res.json();
            const addr = data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
            setDisplayAddress(addr);
            onChange(addr);
        } catch {
            const fallback = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
            setDisplayAddress(fallback);
            onChange(fallback);
        }
    }, [onChange]);

    // Forward geocode address string
    const forwardGeocode = useCallback(async (query: string) => {
        if (!query.trim()) return;
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
                { headers: { 'Accept-Language': 'en' } }
            );
            const data = await res.json();
            if (data && data[0]) {
                setMapCoords({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
            }
        } catch {
            // silently fail — map just won't update on geocode error
        }
    }, []);

    // Handle "Use Current Location"
    function handleCurrentLocation() {
        setMode('current');
        setGeoError('');
        if (!navigator.geolocation) {
            setGeoError('Geolocation is not supported by your browser.');
            return;
        }
        setGeoLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;
                setMapCoords({ lat, lng });
                reverseGeocode(lat, lng);
                setGeoLoading(false);
            },
            (err) => {
                setGeoLoading(false);
                if (err.code === err.PERMISSION_DENIED) {
                    setGeoError('Location permission denied. Please allow access or enter your address manually.');
                } else {
                    setGeoError('Unable to retrieve your location. Please try again or enter manually.');
                }
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    }

    // Build address string from fields and trigger geocode + update parent
    function handleAddressFieldChange(newFields: AddressFields) {
        setAddressFields(newFields);
        const parts = [newFields.flat, newFields.street, newFields.city, newFields.pincode].filter(Boolean);
        const addr = parts.join(', ');
        setDisplayAddress(addr);
        onChange(addr);

        // Debounce geocoding to avoid hammering Nominatim
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        if (newFields.city) {
            debounceTimer.current = setTimeout(() => {
                forwardGeocode([newFields.street, newFields.city, 'India'].filter(Boolean).join(', '));
            }, 900);
        }
    }

    // Build OpenStreetMap embed URL
    function getMapSrc() {
        if (mapCoords) {
            const { lat, lng } = mapCoords;
            const delta = 0.01;
            return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - delta},${lat - delta},${lng + delta},${lat + delta}&layer=mapnik&marker=${lat},${lng}`;
        }
        // Default: India center
        return `https://www.openstreetmap.org/export/embed.html?bbox=68.0,8.0,97.0,37.0&layer=mapnik`;
    }

    const inputStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem',
        width: '100%', padding: '0.75rem 0.9rem',
        border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '4px',
        background: 'var(--ivory)', color: 'var(--soft-black)',
        outline: 'none', boxSizing: 'border-box',
    };

    return (
        <div>
            <div style={{
                fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--taupe)',
                marginBottom: '0.75rem',
            }}>
                Your Service Location *
            </div>

            {/* Toggle buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <button
                    type="button"
                    onClick={handleCurrentLocation}
                    disabled={geoLoading}
                    style={{
                        padding: '0.75rem 0.5rem',
                        border: `2px solid ${mode === 'current' ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'}`,
                        borderRadius: '6px',
                        background: mode === 'current' ? 'rgba(201,169,110,0.1)' : 'var(--warm-white)',
                        color: mode === 'current' ? 'var(--soft-black)' : 'var(--taupe)',
                        fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600,
                        cursor: geoLoading ? 'wait' : 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem',
                    }}
                >
                    <span style={{ fontSize: '1.2rem' }}>📍</span>
                    {geoLoading ? 'Detecting…' : 'Use Current Location'}
                </button>
                <button
                    type="button"
                    onClick={() => setMode('manual')}
                    style={{
                        padding: '0.75rem 0.5rem',
                        border: `2px solid ${mode === 'manual' ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'}`,
                        borderRadius: '6px',
                        background: mode === 'manual' ? 'rgba(201,169,110,0.1)' : 'var(--warm-white)',
                        color: mode === 'manual' ? 'var(--soft-black)' : 'var(--taupe)',
                        fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem',
                    }}
                >
                    <span style={{ fontSize: '1.2rem' }}>✏️</span>
                    Enter Address Manually
                </button>
            </div>

            {/* Error */}
            {geoError && (
                <div style={{
                    background: 'rgba(220,50,50,0.07)', border: '1px solid rgba(220,50,50,0.2)',
                    borderRadius: '4px', padding: '0.75rem 1rem', marginBottom: '1rem',
                    fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: '#c0392b',
                }}>
                    {geoError}
                </div>
            )}

            {/* Current location detected display */}
            {mode === 'current' && !geoLoading && displayAddress && !geoError && (
                <div style={{
                    background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.2)',
                    borderRadius: '4px', padding: '0.75rem 1rem', marginBottom: '1rem',
                    fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'var(--soft-black)',
                }}>
                    <strong style={{ color: '#25a244' }}>✓ Location detected:</strong><br />
                    <span style={{ color: 'var(--taupe)' }}>{displayAddress}</span>
                </div>
            )}

            {/* Manual Address Fields */}
            {mode === 'manual' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1rem' }}>
                    <input
                        style={inputStyle}
                        placeholder="House / Flat / Apartment No."
                        value={addressFields.flat}
                        onChange={e => handleAddressFieldChange({ ...addressFields, flat: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')}
                    />
                    <input
                        style={inputStyle}
                        placeholder="Street / Area / Locality"
                        value={addressFields.street}
                        onChange={e => handleAddressFieldChange({ ...addressFields, street: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                        <input
                            style={inputStyle}
                            placeholder="City"
                            value={addressFields.city}
                            onChange={e => handleAddressFieldChange({ ...addressFields, city: e.target.value })}
                            onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                            onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')}
                        />
                        <input
                            style={inputStyle}
                            placeholder="Pincode"
                            maxLength={6}
                            value={addressFields.pincode}
                            onChange={e => handleAddressFieldChange({ ...addressFields, pincode: e.target.value })}
                            onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                            onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')}
                        />
                    </div>
                </div>
            )}

            {/* Map embed — always shown after a mode is chosen */}
            {mode && (
                <div style={{ borderRadius: '6px', overflow: 'hidden', border: '1.5px solid rgba(201,169,110,0.2)', marginBottom: '0.5rem' }}>
                    <iframe
                        title="Service location map"
                        src={getMapSrc()}
                        style={{ width: '100%', height: '220px', border: 'none', display: 'block' }}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                    <div style={{
                        padding: '0.5rem 0.75rem',
                        background: 'var(--warm-white)',
                        fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'var(--taupe)',
                    }}>
                        Map powered by <a href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--champagne-gold)' }}>OpenStreetMap</a>
                    </div>
                </div>
            )}

            {/* Hint */}
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'var(--taupe)', lineHeight: 1.6 }}>
                Our artists travel to your location. Currently on-location service only.
            </p>
        </div>
    );
}

// ── Main Page Component ────────────────────────────────────────────
export default function BookAppointmentPage() {
    const today = new Date();
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [calYear, setCalYear] = useState(today.getFullYear());
    const [calMonth, setCalMonth] = useState(today.getMonth());
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', notes: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // Auto-scroll to top when step changes or form is submitted
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step, submitted]);
    const [unavailableSlots, setUnavailableSlots] = useState<string[]>([]);
    const [fetchingSlots, setFetchingSlots] = useState(false);

    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfMonth(calYear, calMonth);

    const prevMonth = () => {
        if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
        else setCalMonth(m => m - 1);
        setSelectedDate(null); setSelectedTime('');
    };
    const nextMonth = () => {
        if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
        else setCalMonth(m => m + 1);
        setSelectedDate(null); setSelectedTime('');
    };
    const isDateDisabled = (day: number) => {
        const d = new Date(calYear, calMonth, day);
        return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    };

    useEffect(() => {
        if (!selectedDate) return;
        const fetchSlots = async () => {
            setFetchingSlots(true);
            try {
                const mm = String(calMonth + 1).padStart(2, '0');
                const dd = String(selectedDate).padStart(2, '0');
                const dateStr = `${calYear}-${mm}-${dd}`;
                const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
                if (!endpoint) return;
                const res = await fetch(`${endpoint}?action=getSlots&date=${encodeURIComponent(dateStr)}`);
                const data = await res.json();
                setUnavailableSlots(data?.unavailable ?? []);
            } catch { /* ignore */ } finally {
                setFetchingSlots(false);
            }
        };
        fetchSlots();
    }, [selectedDate, calMonth, calYear]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
            if (endpoint) {
                await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({
                        _subject: `New Appointment Request: ${form.name} — ${selectedService}`,
                        service: selectedService,
                        date: `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`,
                        time: selectedTime,
                        name: form.name,
                        phone: form.phone,
                        email: form.email,
                        // Using "Service Address" label — no mention of HAVAKU Studio
                        notes: `Service Address: ${form.location}\n\nNotes: ${form.notes}`,
                    }),
                });
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
        setLoading(false);
        setSubmitted(true);
    };

    // ── styles ──
    const inputStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem',
        width: '100%', padding: '0.85rem 1rem',
        border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '4px',
        background: 'var(--ivory)', color: 'var(--soft-black)',
        outline: 'none', transition: 'border-color 0.25s ease', boxSizing: 'border-box',
    };
    const labelStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase' as const,
        color: 'var(--taupe)', display: 'block', marginBottom: '0.4rem',
    };

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px' }}>

                {/* ── Hero ── */}
                <section style={{
                    padding: '3.5rem 1.5rem 2.5rem',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, var(--blush-pink) 100%)',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '0%', right: '5%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '0.75rem' }}>HAVAKU Beauty</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                            Book Your Appointment
                        </h1>
                        <div className="gold-divider" />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: 'var(--taupe)', maxWidth: '420px', margin: '1rem auto 0', lineHeight: 1.85 }}>
                            Choose your service, pick a date and time, and we'll confirm via WhatsApp.
                        </p>
                    </div>
                </section>

                {/* ── Progress Bar ── */}
                <section style={{ padding: '2rem 1.5rem 0', maxWidth: '720px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        {[1, 2, 3].map((s, i) => (
                            <div key={s} style={{ display: 'flex', alignItems: 'center', flex: s < 3 ? 1 : undefined }}>
                                <div style={{
                                    width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                                    background: step >= s ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.15)',
                                    border: `2px solid ${step >= s ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', fontWeight: 700,
                                    color: step >= s ? 'var(--soft-black)' : 'var(--taupe)',
                                    transition: 'all 0.4s ease',
                                }}>
                                    {step > s ? '✓' : s}
                                </div>
                                {i < 2 && (
                                    <div style={{
                                        flex: 1, height: 2,
                                        background: step > s ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.2)',
                                        transition: 'background 0.4s ease',
                                    }} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {['Select Service', 'Date & Time', 'Your Details'].map((label, i) => (
                            <span key={label} style={{
                                fontFamily: 'Manrope, sans-serif', fontSize: '0.65rem', fontWeight: 600,
                                letterSpacing: '0.07em', textTransform: 'uppercase',
                                color: step === i + 1 ? 'var(--champagne-gold)' : 'var(--taupe)',
                                opacity: step === i + 1 ? 1 : 0.55,
                                flex: i < 2 ? 1 : undefined, textAlign: i === 1 ? 'center' : i === 2 ? 'right' : 'left',
                            }}>
                                {label}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ── Step Content ── */}
                <section style={{ padding: '2.5rem 1.5rem 5rem', maxWidth: '720px', margin: '0 auto' }}>

                    {/* STEP 1 — Select Service */}
                    {step === 1 && !submitted && (
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 4vw, 1.9rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                What service are you interested in?
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
                                Choose one service to get started with your booking.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
                                {services.map((svc) => (
                                    <button
                                        key={svc.id}
                                        onClick={() => setSelectedService(svc.label)}
                                        style={{
                                            textAlign: 'left', padding: '1.25rem',
                                            background: selectedService === svc.label ? 'rgba(201,169,110,0.1)' : 'var(--warm-white)',
                                            border: `1.5px solid ${selectedService === svc.label ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.2)'}`,
                                            borderRadius: '6px', cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            boxShadow: selectedService === svc.label ? '0 2px 16px rgba(201,169,110,0.18)' : '0 1px 6px rgba(26,26,26,0.04)',
                                        }}
                                    >
                                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--champagne-gold)', marginBottom: '0.35rem' }}>{svc.icon}</div>
                                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.25rem' }}>{svc.label}</div>
                                        <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--taupe)', lineHeight: 1.6 }}>{svc.desc}</div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                disabled={!selectedService}
                                className="btn-primary"
                                style={{ cursor: selectedService ? 'pointer' : 'not-allowed', opacity: selectedService ? 1 : 0.5, width: '100%' }}
                            >
                                Continue →
                            </button>
                        </div>
                    )}

                    {/* STEP 2 — Date & Time */}
                    {step === 2 && !submitted && (
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 4vw, 1.9rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                Pick a date and time
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
                                Service: <strong style={{ color: 'var(--champagne-gold)' }}>{selectedService}</strong>
                            </p>

                            {/* Calendar */}
                            <div style={{ background: 'var(--warm-white)', borderRadius: '6px', border: '1px solid rgba(201,169,110,0.2)', padding: '1.5rem 1.25rem', marginBottom: '1.5rem', boxShadow: '0 2px 16px rgba(26,26,26,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                    <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1.2rem', padding: '0.2rem 0.6rem' }}>‹</button>
                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 500, color: 'var(--soft-black)' }}>
                                        {MONTHS[calMonth]} {calYear}
                                    </span>
                                    <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1.2rem', padding: '0.2rem 0.6rem' }}>›</button>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '0.35rem' }}>
                                    {DAYS.map(d => (
                                        <div key={d} style={{ textAlign: 'center', fontFamily: 'Manrope, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.06em', color: 'var(--taupe)', padding: '0.3rem 0' }}>{d}</div>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
                                    {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
                                    {Array(daysInMonth).fill(null).map((_, i) => {
                                        const day = i + 1;
                                        const disabled = isDateDisabled(day);
                                        const selected = selectedDate === day;
                                        return (
                                            <button
                                                key={day}
                                                onClick={() => { if (!disabled) { setSelectedDate(day); setSelectedTime(''); } }}
                                                disabled={disabled}
                                                style={{
                                                    aspectRatio: '1', borderRadius: '50%',
                                                    background: selected ? 'var(--champagne-gold)' : 'transparent',
                                                    border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
                                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem',
                                                    color: selected ? 'var(--soft-black)' : disabled ? 'rgba(125,107,94,0.28)' : 'var(--soft-black)',
                                                    fontWeight: selected ? 700 : 400,
                                                    transition: 'all 0.18s ease',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                }}
                                                onMouseEnter={(e) => { if (!disabled && !selected) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,169,110,0.15)'; }}
                                                onMouseLeave={(e) => { if (!selected) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Time slots — only 3 */}
                            {selectedDate && (
                                <div style={{ marginBottom: '1.75rem' }}>
                                    <div style={{ ...labelStyle, marginBottom: '0.6rem' }}>
                                        Available Time Slots
                                        {fetchingSlots && <span style={{ textTransform: 'none', marginLeft: '0.5rem', fontWeight: 500, color: 'var(--champagne-gold)', fontSize: '0.7rem' }}>Checking...</span>}
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', opacity: fetchingSlots ? 0.6 : 1, transition: 'opacity 0.2s' }}>
                                        {timeSlots.map(slot => {
                                            // Check if the slot is in the past for today's date
                                            let isPast = false;
                                            if (selectedDate === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()) {
                                                const [time, modifier] = slot.split(' ');
                                                let [hours, minutes] = time.split(':').map(Number);
                                                if (modifier === 'PM' && hours < 12) hours += 12;
                                                if (modifier === 'AM' && hours === 12) hours = 0;
                                                
                                                const slotTime = new Date();
                                                slotTime.setHours(hours, minutes, 0, 0);
                                                if (slotTime < today) isPast = true;
                                            }

                                            const unavailable = unavailableSlots.includes(slot) || isPast;
                                            const chosen = selectedTime === slot;
                                            return (
                                                <button
                                                    key={slot}
                                                    onClick={() => { if (!unavailable) setSelectedTime(slot); }}
                                                    disabled={unavailable}
                                                    style={{
                                                        padding: '0.65rem 1.4rem',
                                                        borderRadius: '4px',
                                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600,
                                                        border: `1.5px solid ${chosen ? 'var(--champagne-gold)' : unavailable ? 'rgba(201,169,110,0.12)' : 'rgba(201,169,110,0.4)'}`,
                                                        background: chosen ? 'var(--champagne-gold)' : 'transparent',
                                                        color: chosen ? 'var(--soft-black)' : unavailable ? 'rgba(125,107,94,0.3)' : 'var(--taupe)',
                                                        cursor: unavailable ? 'not-allowed' : 'pointer',
                                                        transition: 'all 0.18s ease',
                                                        textDecoration: unavailable ? 'line-through' : 'none',
                                                    }}
                                                >
                                                    {slot}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {/* WhatsApp note for other timings */}
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', marginTop: '0.85rem', lineHeight: 1.7 }}>
                                        Need a different time?{' '}
                                        <a
                                            href="https://wa.me/916303890435?text=Hi%20HAVAKU%2C%20I%20need%20a%20custom%20appointment%20time."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#25D366', fontWeight: 600, textDecoration: 'none' }}
                                        >
                                            Contact us on WhatsApp
                                        </a>{' '}
                                        for other timings.
                                    </p>
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <button onClick={() => setStep(1)} style={{ background: 'none', border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '4px', padding: '0.8rem 1.5rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)', cursor: 'pointer' }}>
                                    ← Back
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!selectedDate || !selectedTime}
                                    className="btn-primary"
                                    style={{ flex: 1, cursor: (selectedDate && selectedTime) ? 'pointer' : 'not-allowed', opacity: (selectedDate && selectedTime) ? 1 : 0.5 }}
                                >
                                    Continue →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 — Details + Confirm */}
                    {step === 3 && !submitted && (
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 4vw, 1.9rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                Almost there — your details
                            </h2>
                            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '4px', padding: '0.3rem 0.75rem' }}>
                                    {selectedService}
                                </span>
                                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '4px', padding: '0.3rem 0.75rem' }}>
                                    {MONTHS[calMonth]} {selectedDate}, {calYear} · {selectedTime}
                                </span>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-name">Full Name *</label>
                                    <input id="ba-name" type="text" required placeholder="Your full name" style={inputStyle}
                                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-phone">Phone Number *</label>
                                    <input id="ba-phone" type="tel" required placeholder="+91 XXXXX XXXXX" style={inputStyle}
                                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-email">Email Address (optional)</label>
                                    <input id="ba-email" type="email" placeholder="your@email.com" style={inputStyle}
                                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                {/* ── Interactive Location Picker ── */}
                                <div>
                                    <LocationPicker
                                        value={form.location}
                                        onChange={(loc) => setForm(f => ({ ...f, location: loc }))}
                                    />
                                </div>

                                <div>
                                    <label style={labelStyle} htmlFor="ba-notes">Special Requests / Notes</label>
                                    <textarea id="ba-notes" rows={3} placeholder="Any skin concerns, specific requests, or notes for the artist..."
                                        style={{ ...inputStyle, resize: 'vertical' as const }}
                                        value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                                    <button type="button" onClick={() => setStep(2)} style={{ background: 'none', border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '4px', padding: '0.85rem 1.5rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)', cursor: 'pointer' }}>
                                        ← Back
                                    </button>
                                    <button type="submit" disabled={loading || !form.name || !form.phone || !form.location} className="btn-primary"
                                        style={{ flex: 1, opacity: (loading || !form.name || !form.phone || !form.location) ? 0.6 : 1 }}>
                                        {loading ? 'Confirming...' : 'Confirm Appointment ✦'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* CONFIRMATION */}
                    {submitted && (
                        <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'var(--warm-white)', borderRadius: '8px', border: '1px solid rgba(201,169,110,0.2)', boxShadow: '0 4px 30px rgba(26,26,26,0.06)' }}>
                            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', color: 'var(--champagne-gold)', marginBottom: '1rem', lineHeight: 1 }}>✦</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 5vw, 2rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                                Appointment Request Received!
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: 'var(--taupe)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '450px', margin: '0 auto 1.5rem' }}>
                                Thank you, <strong>{form.name}</strong>! Your request for <em>{selectedService}</em> on{' '}
                                <strong>{MONTHS[calMonth]} {selectedDate}</strong> at <strong>{selectedTime}</strong> has been received.
                                We'll confirm via WhatsApp shortly.
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a
                                    href={`https://wa.me/916303890435?text=Hi%20HAVAKU%2C%20I%20just%20booked%20a%20${encodeURIComponent(selectedService)}%20appointment%20for%20${encodeURIComponent(`${MONTHS[calMonth]} ${selectedDate}`)}%20at%20${encodeURIComponent(selectedTime)}.%20My%20name%20is%20${encodeURIComponent(form.name)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: '#25D366', color: 'white',
                                        fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        padding: '0.9rem 1.75rem', borderRadius: '4px', textDecoration: 'none',
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    }}
                                >
                                    Chat to Confirm
                                </a>
                                <Link href="/" className="btn-outline" style={{ padding: '0.9rem 1.75rem' }}>
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
