'use client';

import React, { useState } from 'react';

interface ImagePlaceholderProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    label?: string;
    /** Extra classes applied to the img or placeholder div (e.g. rounded-*, ring-*) */
    className?: string;
    /** Inline styles passed through — use for borderRadius when Tailwind isn't enough */
    style?: React.CSSProperties;
    /** @deprecated – use the wrapping div's aspect-ratio instead */
    gradient?: string;
    children?: React.ReactNode;
}

/**
 * ImagePlaceholder — drop-in image with safe fallback
 * ─────────────────────────────────────────────────────────────────────────────
 * ALWAYS wrap this component in a sized container, e.g.:
 *   <div className="relative w-full aspect-square overflow-hidden bg-[#FAF7F2]">
 *     <ImagePlaceholder src="/images/file.jpg" alt="..." />
 *   </div>
 *
 * • src exists & loads  → fills 100% of the parent with object-cover
 * • src missing / 404   → blush-gold gradient placeholder with camera icon + dimensions
 */
export default function ImagePlaceholder({
    src,
    alt,
    width,
    height,
    label,
    className = '',
    style,
    gradient,
    children,
}: ImagePlaceholderProps) {
    const [imgError, setImgError] = useState(false);

    // Support auto-resolving extensions
    const extensions = ['.webp', '.jpg', '.png', '.jpeg', '.gif', '.avif'];
    const [extIndex, setExtIndex] = useState(0);

    // If src contains a known extension and we're at index 0, start checking.
    // We strip the extension to try others if the primary one fails.
    const baseSrc = src ? src.replace(/\.(jpg|jpeg|png|gif|webp|avif)$/i, '') : '';
    const currentSrc = src && extIndex === 0 ? src : (baseSrc ? `${baseSrc}${extensions[extIndex]}` : undefined);

    const handleError = () => {
        if (baseSrc && extIndex < extensions.length - 1) {
            setExtIndex(prev => prev + 1);
        } else {
            setImgError(true);
        }
    };

    if (currentSrc && !imgError) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={currentSrc}
                alt={alt || label || 'HAVAKU'}
                width={width}
                height={height}
                onError={handleError}
                className={`w-full h-full object-cover object-center transition-transform duration-500 ${className}`}
                style={style}
            />
        );
    }

    // ── Placeholder (no src or 404) ──────────────────────────────────────────
    const bg = gradient ?? 'linear-gradient(135deg, #F2D6CF 0%, rgba(201,169,110,0.35) 100%)';

    return (
        <div
            className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden ${className}`}
            style={{ background: bg, ...style }}
        >
            {/* Subtle crosshatch */}
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.06]">
                <defs>
                    <pattern id="xhatch" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path d="M0 0 L16 16 M16 0 L0 16" stroke="#7D6B5E" strokeWidth="0.75" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#xhatch)" />
            </svg>

            {/* Camera icon */}
            <svg
                aria-hidden="true"
                className="w-8 h-8 mb-2 relative z-10"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
                style={{ opacity: 0.55 }}
            >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>

            {width && height && (
                <span className="relative z-10 text-[0.65rem] font-semibold tracking-widest text-[#C9A96E] opacity-80" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {width} × {height} px
                </span>
            )}
            {label && (
                <span className="relative z-10 text-[0.75rem] italic text-[#7D6B5E] opacity-65 mt-0.5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {label}
                </span>
            )}
            {children}
        </div>
    );
}
