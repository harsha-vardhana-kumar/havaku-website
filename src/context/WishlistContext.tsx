'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

type WishlistState = { items: Product[] };

type WishlistAction =
    | { type: 'TOGGLE'; product: Product }
    | { type: 'HYDRATE'; items: Product[] };

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
    switch (action.type) {
        case 'TOGGLE': {
            const exists = state.items.some((i) => i.id === action.product.id);
            return {
                items: exists
                    ? state.items.filter((i) => i.id !== action.product.id)
                    : [...state.items, action.product],
            };
        }
        case 'HYDRATE':
            return { items: action.items };
        default:
            return state;
    }
}

type WishlistContextType = {
    items: Product[];
    toggle: (product: Product) => void;
    isWishlisted: (id: string) => boolean;
    totalItems: number;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

    useEffect(() => {
        try {
            const stored = localStorage.getItem('havaku_wishlist');
            if (stored) {
                dispatch({ type: 'HYDRATE', items: JSON.parse(stored) });
            }
        } catch {
            // ignore
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('havaku_wishlist', JSON.stringify(state.items));
        } catch {
            // ignore
        }
    }, [state.items]);

    return (
        <WishlistContext.Provider
            value={{
                items: state.items,
                toggle: (product) => dispatch({ type: 'TOGGLE', product }),
                isWishlisted: (id) => state.items.some((i) => i.id === id),
                totalItems: state.items.length,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
    return ctx;
}
