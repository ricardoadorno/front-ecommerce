import { Badge } from '@/components/ui/badge';
import Text from '@/components/ui/text';
import ItemRating from './item-rating';
import { Button } from '@/components/ui/button';
import { firstLetterUppercase } from '@/utils/format';
// import useCartStore from '@/stores/cart-store';
import { ProductItem } from '@/common/types/shop';


export default function ItemInfo(item: ProductItem) {
    const { category, title, rating, description, price } = item;
    // const { add } = useCartStore();

    return (
        <div className="flex-1 my-12 flex flex-col gap-4">
            <div>
                <Badge variant={"secondary"} className="inline py-1">
                    {firstLetterUppercase(category)}
                </Badge>
            </div>
            <Text variant={"heading2"} weight={"semibold"}>
                {title}
            </Text>
            <ItemRating count={rating.count} rate={rating.rate} />
            <Text>{description}</Text>
            <Text variant={"heading2"} weight={"bold"}>
                ${price}
            </Text>
            {/* <Button onClick={() => add(item)}>Add to Cart</Button> */}
        </div>
    )
}
