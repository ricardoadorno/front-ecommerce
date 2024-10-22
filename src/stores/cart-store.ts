import { CartItem, ProductItem } from '@/common/types'
import { create } from 'zustand'

interface CartStore {
    items: CartItem[]
    add: (product: ProductItem) => void
    remove: (id: string) => void
    subtract: (id: string) => void
}

const useCartStore = create<CartStore>((set) => ({
    items: [],
    add: (product) => set((state) => {
        const item = state.items.find((item) => item.id === product.id)
        if (item) {
            return { items: state.items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) }
        }
        return { items: [...state.items, { ...product, quantity: 1 }] }
    }),
    subtract: (id) => set((state) => {
        const item = state.items.find((item) => item.id === id)
        if (!item) return state
        if (item.quantity === 1) {
            return { items: state.items.filter((item) => item.id !== id) }
        }
        return ({ items: state.items.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item) })
    }),
    remove: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) }))
}))

export default useCartStore