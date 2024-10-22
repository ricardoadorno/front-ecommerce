export type ProductItem = {
    id: string
    title: string
    description: string
    price: number
    image: string
    category: string
    rating: {
        rate: number
        count: number
    }
}

export type CartItem = {
    quantity: number
} & ProductItem

export type User = {
    id: string
    username: string
    email: string
}