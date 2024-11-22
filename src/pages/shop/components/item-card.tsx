import { ProductItem } from '@/common/types/shop';
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import useApi from '@/hooks/use-api';
import useUserData from '@/hooks/use-user-data';
import { formatMoney } from "@/utils/format";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from "react-router-dom";

export default function ItemCard(product: ProductItem) {
  const { id, title, price, image } = product;

  const queryClient = useQueryClient();
  const { userService } = useApi();
  const { user } = useUserData();
  const updateCart = useMutation({
    mutationFn: (newQuantity: number) =>
      userService().updateProductQuantity(user.id, { product_id: id, quantity: newQuantity }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });

  return (
    <div className="mb-8 flex break-inside-avoid flex-col gap-2">
      <Link to={"/item/" + id} className="flex items-center justify-center rounded-lg bg-white
      w-full h-64 overflow-hidden
      ">
        <img
          src={image}
          alt={title + "image"}
          className="w-1/2"
        />
      </Link>
      <Link to={"/item/" + id}>
        <Text variant={"body-big"} weight={"medium"}>
          {title}
        </Text>
      </Link>
      <div className="flex items-center justify-between">
        <Text>{formatMoney(price)}</Text>
        <Button
          onClick={() => updateCart.mutate(1)}
          variant={"default"}>
          Add
        </Button>
      </div>
    </div>
  );
}
