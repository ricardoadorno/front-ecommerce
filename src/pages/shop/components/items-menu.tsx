import { Button } from '@/components/ui/button'
import Text from '@/components/ui/text'
import useSeachQuery from '@/hooks/use-search-query'
import { cn } from '@/lib/utils'

export default function ItemsMenu({ keyword, title, items }: { keyword: string, title: string, items: string[] }) {
    const { currentSearchQuery, addSearchQuery } = useSeachQuery()

    return (
        <div className='flex flex-col'>
            <Text variant={'body-small'} lightness={400} >{title}</Text>
            {
                items.map((item, index) => (
                    <Button key={index}
                        onClick={() => addSearchQuery(keyword, item)}
                        variant={'link'}
                        className={
                            cn(
                                'p-0 self-start h-8',
                                currentSearchQuery[keyword] !== item && 'text-white'
                            )
                        }
                    >
                        {item}
                    </Button>
                ))
            }
        </div>
    )
}