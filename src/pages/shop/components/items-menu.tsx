import { ValueOption } from '@/common/types';
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import useSeachQuery from "@/hooks/use-search-query";
import { cn } from "@/lib/utils";

export default function ItemsMenu({
  keyword,
  title,
  items,
}: {
  keyword: string;
  title: string;
  items?: ValueOption[];
}) {
  const { currentSearchQuery, addSearchQuery } = useSeachQuery();

  return (
    <div className="flex flex-col">
      <Text variant={"body-small"} lightness={400}>
        {title}
      </Text>
      {items && items.map((item, index) => (
        <Button
          key={index}
          onClick={() => addSearchQuery(keyword, item.value)}
          variant={"link"}
          className={cn(
            "h-8 self-start p-0",
            currentSearchQuery[keyword] !== item.value && "text-white",
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
