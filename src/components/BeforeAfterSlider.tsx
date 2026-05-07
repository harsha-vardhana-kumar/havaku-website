'use client';

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After'
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: globalThis.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleInteractionStart = (e: MouseEvent | TouchEvent) => {
        setIsDragging(true);
        if ('touches' in e) {
            handleMove(e.touches[0].clientX);
        } else {
            handleMove((e as MouseEvent).clientX);
        }
    };

    const handleInteractionEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleInteractionEnd);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleInteractionEnd);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleInteractionEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleInteractionEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleInteractionEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleInteractionEnd);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-square overflow-hidden rounded-md bg-[#FAF7F2] select-none cursor-ew-resize touch-pan-y"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
                <ImagePlaceholder src={afterImage} alt={afterLabel} className="pointer-events-none" />
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-md">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground overlay) */}
            <div
                className="absolute inset-0 h-full overflow-hidden will-change-transform"
                style={{ width: `${sliderPosition}%` }}
            >
                <div className="absolute inset-0" style={{ width: containerRef.current?.offsetWidth || '100vw' }}>
                    <ImagePlaceholder src={beforeImage} alt={beforeLabel} className="pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-md">
                        {beforeLabel}
                    </div>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] cursor-ew-resize z-10 flex items-center justify-center transform -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center -ml-[1px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                        <path d="M15 18l-6-6 6-6" className="transform -translate-x-1 translate-y-0" />
                        <path d="M9 18l6-6-6-6" className="transform translate-x-1 translate-y-0" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
