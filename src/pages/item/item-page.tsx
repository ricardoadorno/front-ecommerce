import { ProductItem } from '@/common/types/shop';
import useApi from '@/hooks/use-api';
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ItemRatingComments from './components/item-comments';
import ItemInfo from './components/item-info';

export default function ItemPage() {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const { productService } = useApi()

  const { data: item } = useQuery<ProductItem>({
    queryKey: ["item", id],
    queryFn: () => productService().get(id),
  });

  if (!item) return <div>Loading...</div>;
  return (
    <div className="relative flex flex-col mt-8 gap-12">
      <ArrowLeft
        className="absolute -top-10 left-0 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="flex flex-col gap-x-12 md:flex-row">
        <div className="flex-1 flex items-center justify-center rounded-lg bg-white min-h-72">
          <img src={item.image} alt={item.title} className="w-1/2" />
        </div>
        <ItemInfo {...item} />
      </div>
      <div>
        <ItemRatingComments comments={item.rating.comments} />
      </div>
    </div>
  );
}


