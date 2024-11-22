import { Rating } from '@/common/types/shop';
import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export default function ItemRating({ count, rate }: { count?: number, rate: number }) {
    const filledStars = Math.floor(rate);

    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => {
                return (
                    <Star
                        key={index}
                        size={16}
                        className={
                            cn(
                                index < filledStars
                                    ? "fill-yellow-400 stroke-yellow-400 "
                                    : "text-white",
                            )
                        }
                    />
                );
            })}
            <Text className="mx-2">{rate.toFixed(1)}</Text>
            {count && <Text className="pl-2 border-l-2 border-white" weight={"bold"}>
                {count} Reviews
            </Text>}
        </div>
    );
};
