import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { SearchOptions } from '@/common/types/shop';
import useSeachQuery from '@/hooks/use-search-query';
import ItemsMenu from './items-menu';

export default function SearchOptionsMenus({ categories, sortOptions }: SearchOptions) {
    const { clearSearchQuery } = useSeachQuery();

    return (
        <div className='space-y-4'>
            <Button variant={"outline"} onClick={clearSearchQuery} className='w-full'>
                <X className="mr-1" />
                Clear Search
            </Button>
            <div className="flex md:flex-col gap-8">
                <ItemsMenu keyword="category" items={categories} title="Category" />
                <ItemsMenu keyword="sort" items={sortOptions} title="Sort By" />
            </div>
        </div>
    )
}
