import useSeachQuery from "@/hooks/use-search-query";
import ItemCard from "./components/item-card";
import { useQuery } from "@tanstack/react-query";
import useApi from '@/hooks/use-api';
import Text from '@/components/ui/text';
import ShopPagination from './components/shop-pagination';
import SearchOptionsMenus from './components/search-options-menus';

export default function ShopPage() {
  const { currentSearchQuery } = useSeachQuery();
  const { productService } = useApi()

  const { data: paginatedItems } = useQuery({
    queryKey: ["items", currentSearchQuery],
    queryFn: () => productService().list(currentSearchQuery),
  });

  const { data: searchOptions } = useQuery({
    queryKey: ["searchOptions"],
    queryFn: () => productService().searchOptions(),
  });

  if (!paginatedItems) return <div>Loading...</div>;

  const { result: items, ...paginatedData } = paginatedItems
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      {searchOptions && <SearchOptionsMenus {...searchOptions} />}
      <div className="flex flex-col gap-4 justify-center py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.length ? items.map((item) => (
            <ItemCard key={item.id} {...item} />
          )) : <Text weight={'bold'}>No items found</Text>
          }
        </div>
        <ShopPagination paginatedData={paginatedData} />
      </div>
    </div>
  );
}


