import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MinusIcon, PlusIcon, ShoppingBag, TrashIcon } from "lucide-react";
import Text from "../ui/text";
import { formatMoney } from "@/utils/format";

export default function CartSheet() {
  const { user } = useUserData();
  const { userService } = useApi();

  const { data: items } = useQuery({
    queryKey: ['cart'],
    queryFn: () => userService().getCart(user.id),
  })

  if (!items) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBag size={16} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="my-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <Text
              variant={"body-big"}
              weight={"bold"}
              className="mt-4 text-center"
            >
              The cart is empty
            </Text>
          ) : (
            items.map((item) => <CartListItem key={item.id} {...item} />)
          )}
        </div>
        {items.length !== 0 && (
          <SheetFooter>
            Total:{" "}
            {formatMoney(
              items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
            )}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartItem } from '@/common/types/shop';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useUserData from '@/hooks/use-user-data';
import useApi from '@/hooks/use-api';

function CartListItem({ product, quantity }: CartItem) {
  const { id, title, price, image } = product;
  const { user } = useUserData();
  const { userService } = useApi();

  const queryClient = useQueryClient();
  const updateCart = useMutation({
    mutationFn: (newQuantity: number) => userService().updateProductQuantity(user.id, {
      product_id: id,
      quantity: newQuantity
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });

  return (
    <Card className="w-full max-w-xs">
      <div className="grid gap-2.5 p-4">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={title + " image"}
            width={75}
            height={75}
            className="aspect-square overflow-hidden rounded-lg object-cover"
          />
          <div className="grid gap-1.5">
            <h3 className="text-base font-bold leading-none">{title}</h3>
            <div className="font-bold">{formatMoney(price * quantity)}</div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              onClick={() => updateCart.mutate(quantity - 1)}
            >
              <MinusIcon className="h-3 w-3" />
              <span className="sr-only">Decrease</span>
            </Button>
            <span className="font-bold">{quantity}</span>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              onClick={() => updateCart.mutate(quantity + 1)}
            >
              <PlusIcon className="h-3 w-3" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
            onClick={() => updateCart.mutate(0)}
          >
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
