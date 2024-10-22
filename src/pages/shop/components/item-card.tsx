import { ProductItem } from '@/common/types';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import useCartStore from '@/stores/cart-store';
import { formatMoney } from '@/utils/format';
import { Link } from 'react-router-dom';

export default function ItemCard(product: ProductItem) {
    const { id, title, price, image } = product
    const { add } = useCartStore()

    return (

        <div className='flex flex-col gap-2 mb-8 break-inside-avoid'>
            <Link to={'/item/' + id}   >
                <img src={image} alt={title + 'image'} className='h-auto max-w-full rounded-lg' />
            </Link>
            <Link to={'/item/' + id} >
                <Text variant={'body-big'} weight={'medium'}>{title}</Text>
            </Link >
            <div className='flex justify-between items-center'>
                <Text>{formatMoney(price)}</Text>
                <Button onClick={() => add(product)} variant={'default'}>Add</Button>
            </div>
        </div>
    )
}