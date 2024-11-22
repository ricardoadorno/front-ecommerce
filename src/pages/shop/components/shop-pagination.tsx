import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { PaginatedMetadata } from '@/common/types/paginated';
import { scrollToTop } from '@/utils/scroll';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useSeachQuery from '@/hooks/use-search-query';

export default function ShopPagination({ paginatedData }: { paginatedData: PaginatedMetadata }) {
    const { page, page_size, total_page } = paginatedData;

    const { addSearchQuery } = useSeachQuery()

    const handleSearchPage = (value: number) => {
        addSearchQuery('page', String(value))
        scrollToTop()
    }

    const handlerChangePageSize = (value: string) => {
        addSearchQuery('page_size', value)
        addSearchQuery('page', '1')
        scrollToTop()
    }


    return (
        <Pagination className='w-full space-x-4 '>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        disabled={page === 1}
                        onClick={() => handleSearchPage(page - 1)}
                    />
                </PaginationItem>
                {
                    Array.from({ length: total_page }, (_, i) => i + 1).map((i) => (
                        <PaginationItem key={i}>
                            <PaginationLink isActive={i === page}
                                onClick={() => handleSearchPage(i)}>
                                {i}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
                <PaginationEllipsis />
                <PaginationItem>
                    <PaginationNext
                        disabled={page === total_page}
                        onClick={() => handleSearchPage(page + 1)}
                    />
                </PaginationItem>
            </PaginationContent>

            <Select
                onValueChange={
                    (value) => handlerChangePageSize(value)
                }
            >
                <SelectTrigger className="w-16">
                    <SelectValue placeholder={page_size} />
                </SelectTrigger>
                <SelectContent >
                    {
                        [9, 15, 21].map((i) => (
                            <SelectItem key={i} value={String(i)}>
                                {i}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </Pagination >
    )
}
