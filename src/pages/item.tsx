import { Button } from '@/components/ui/button'
import useCartStore from '@/stores/cart-store'
import { useParams } from 'react-router-dom'

export default function ItemPage() {
    const { id } = useParams()
    const { add, remove } = useCartStore()

    return (
        <div className='flex flex-col gap-4'>
            Product #{id}
        </div>
    )
}
