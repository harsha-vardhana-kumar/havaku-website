'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

export type CartItem = {
    product: Product;
    quantity: number;
    variant?: string;
};

type CartState = {
    items: CartItem[];
};

type CartAction =
    | { type: 'ADD'; product: Product; variant?: string }
    | { type: 'REMOVE'; id: string; variant?: string }
    | { type: 'UPDATE_QTY'; id: string; variant?: string; quantity: number }
    | { type: 'CLEAR' }
    | { type: 'HYDRATE'; items: CartItem[] };

function cartKey(id: string, variant?: string) {
    return variant ? `${id}::${variant}` : id;
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD': {
            const key = cartKey(action.product.id, action.variant);
            const existing = state.items.find(
                (i) => cartKey(i.product.id, i.variant) === key
            );
            if (existing) {
                return {
                    items: state.items.map((i) =>
                        cartKey(i.product.id, i.variant) === key
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            }
            return {
                items: [...state.items, { product: action.product, quantity: 1, variant: action.variant }],
            };
        }
        case 'REMOVE': {
            const key = cartKey(action.id, action.variant);
            return { items: state.items.filter((i) => cartKey(i.product.id, i.variant) !== key) };
        }
        case 'UPDATE_QTY': {
            const key = cartKey(action.id, action.variant);
            if (action.quantity <= 0) {
                return { items: state.items.filter((i) => cartKey(i.product.id, i.variant) !== key) };
            }
            return {
                items: state.items.map((i) =>
                    cartKey(i.product.id, i.variant) === key ? { ...i, quantity: action.quantity } : i
                ),
            };
        }
        case 'CLEAR':
            return { items: [] };
        case 'HYDRATE':
            return { items: action.items };
        default:
            return state;
    }
}

type CartContextType = {
    items: CartItem[];
    addToCart: (product: Product, variant?: string) => void;
    removeFromCart: (id: string, variant?: string) => void;
    updateQty: (id: string, variant: string | undefined, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    // Hydrate from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem('havaku_cart');
            if (stored) {
                dispatch({ type: 'HYDRATE', items: JSON.parse(stored) });
            }
        } catch {
            // ignore
        }
    }, []);

    // Persist to localStorage on every change
    useEffect(() => {
        try {
            localStorage.setItem('havaku_cart', JSON.stringify(state.items));
        } catch {
            // ignore
        }
    }, [state.items]);

    const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                addToCart: (product, variant) => dispatch({ type: 'ADD', product, variant }),
                removeFromCart: (id, variant) => dispatch({ type: 'REMOVE', id, variant }),
                updateQty: (id, variant, quantity) => dispatch({ type: 'UPDATE_QTY', id, variant, quantity }),
                clearCart: () => dispatch({ type: 'CLEAR' }),
                totalItems,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
