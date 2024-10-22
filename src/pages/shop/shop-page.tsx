import useSeachQuery from '@/hooks/use-search-query'
import ItemCard from './components/item-card'
import ItemsMenu from './components/items-menu'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { ProductItem } from '@/common/types'

const itemsCategories = [
    'All',
    'Tops',
    'Bottoms',
    'Dresses',
    'Jackets',
    'Accessories'
]

const sortOptions = [
    'Newest',
    'Price: Low to High',
    'Price: High to Low',
    'Best Selling'
]

export default function ShopPage() {
    const { clearSearchQuery } = useSeachQuery()


    const { data: items } = useQuery({
        queryKey: ['items'],
        queryFn: async (): Promise<ProductItem[]> => {
            const response = await fetch('https://fakestoreapi.com/products')
            return response.json()
        }
    })

    if (!items) return <div>Loading...</div>
    return (
        <div className='flex justify-between gap-8'>
            <div className="flex flex-col gap-6">
                <Button variant={'outline'} onClick={clearSearchQuery}>
                    <X className='mr-1' />
                    Clear Search
                </Button>
                <ItemsMenu keyword='category' items={itemsCategories} title='Category' />
                <ItemsMenu keyword='sort' items={sortOptions} title='Sort By' />
            </div>
            <div className='columns-4 gap-10'>
                {
                    items.map((item) => (
                        <ItemCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div >
    )
}
