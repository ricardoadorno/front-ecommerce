import Text from '@/components/ui/text';
import ItemRating from './item-rating';
import { Comment } from '@/common/types/shop';

export default function ItemRatingComments({ comments }: { comments: Comment[] }) {

    return (
        <div >
            <Text variant={"heading2"} weight={"semibold"}>
                Reviews
            </Text>
            <div className='space-y-4 mt-4'>
                {comments.map((comment) => (
                    <div key={comment.username} >
                        <Text variant={'body-big'} weight={'bold'} className='mb-1'> {comment.username}</Text>
                        <ItemRating rate={comment.rate} />
                        <Text className='border-t-2 py-2 mt-2'>{comment.comment}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
