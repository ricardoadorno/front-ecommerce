import { ProductItem } from '@/common/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Text from '@/components/ui/text'
import useCartStore from '@/stores/cart-store'
import { firstLetterUppercase } from '@/utils/format'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Star } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ItemPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { add } = useCartStore()

    const { data: item } = useQuery<ProductItem>({
        queryKey: ['item', id],
        queryFn: () => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    })

    if (!item) return <div>Loading...</div>
    return (
        <div className='relative grid grid-cols-2 gap-12 mt-8'>
            <ArrowLeft className='absolute cursor-pointer -top-10 left-0' onClick={() => navigate(-1)} />
            <div className=" flex justify-center items-center bg-white rounded-lg">
                <img src={item.image} alt={item.title} className='w-1/2' /></div>
            <div className='flex flex-col gap-4 my-12'>
                <div>
                    <Badge variant={'secondary'} className='py-1 inline'>{firstLetterUppercase(item.category)}</Badge>
                </div>
                <Text variant={'heading2'} weight={'semibold'}>{item.title}</Text>
                <Rating {...item.rating} />
                <Text >{item.description}</Text>
                <Text variant={'heading2'} weight={'bold'}>${item.price}</Text>
                <Button onClick={() => add(item)}>Add to Cart</Button>
            </div>
        </div>
    )
}

const Rating = ({ count, rate }: ProductItem['rating']) => {
    const filledStars = Math.floor(rate)

    const clipMask = `inset(0  ${(1 - (rate - Math.floor(rate))) * 100}% 0 0)`

    return (
        <div className="flex items-center gap-1">

            {[...Array(5)].map((_, index) => {

                if (index === filledStars) {
                    return (
                        <Star key={index} size={16} style={{ clipPath: clipMask }} className='
                        fill-yellow-400 stroke-yellow-400
                        ' />
                    )
                }

                return (
                    <Star key={index} size={16}
                        className={
                            index < filledStars ? 'fill-yellow-400 stroke-yellow-400' : 'text-white'
                        } />
                )
            })}
            <Text className='mx-2'>{rate}</Text>
            |
            <Text className='ml-2' weight={'bold'}>{count} Reviews</Text>
        </div>
    )
}
