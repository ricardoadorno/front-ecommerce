import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MinusIcon, PlusIcon, ShoppingBag, TrashIcon } from 'lucide-react'
import Text from '../ui/text'
import { formatMoney } from '@/utils/format'
import useCartStore from '@/stores/cart-store'


export default function CartSheet() {
    const { items } = useCartStore()

    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingBag size={16} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='text-2xl'>Your Cart</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col my-4 gap-4">
                    {
                        items.length === 0 ? <Text variant={'body-big'} weight={'bold'} className='mt-4 text-center'>The cart is empty</Text> :
                            items.map((item) => <CartListItem key={item.id} {...item} />)
                    }
                </div>
                {(items.length !== 0) &&
                    <SheetFooter>
                        Total: {formatMoney(items.reduce((acc, item) => acc + item.price * item.quantity, 0))}
                    </SheetFooter>}
            </SheetContent>
        </Sheet >
    )
}

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CartItem } from '@/common/types'

function CartListItem(item: CartItem) {
    const { id, title, price, image, quantity } = item
    const { add, subtract, remove } = useCartStore()

    return (
        <Card className="w-full max-w-xs">
            <div className="grid gap-2.5 p-4">
                <div className="flex items-center gap-4">
                    <img
                        src={image}
                        alt={title + ' image'}
                        width={75}
                        height={75}
                        className="aspect-square object-cover rounded-lg overflow-hidden"
                    />
                    <div className="grid gap-1.5">
                        <h3 className="font-bold text-base leading-none">{title}</h3>
                        <div className="font-bold">{formatMoney(price * quantity)}</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                    <div className="flex items-center gap-2 text-sm">
                        <Button size="sm" variant="outline" className="rounded-full"
                            onClick={() => subtract(id)}
                        >
                            <MinusIcon className="w-3 h-3" />
                            <span className="sr-only">Decrease</span>
                        </Button>
                        <span className="font-bold">{quantity}</span>
                        <Button size="sm" variant="outline" className="rounded-full"
                            onClick={() => add(item)}
                        >
                            <PlusIcon className="w-3 h-3" />
                            <span className="sr-only">Increase</span>
                        </Button>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-full"
                        onClick={() => remove(id)}
                    >
                        <TrashIcon className="w-4 h-4" />
                        <span className="sr-only">Remove</span>
                    </Button>
                </div>
            </div>
        </Card>
    )
}