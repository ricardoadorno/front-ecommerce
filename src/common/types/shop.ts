import { ValueOption } from "./common";

export type Comment = {
  rate: number;
  username: string;
  comment: string;
};

export type Rating = {
  rate: number;
  count: number;
  comments: Comment[];
};

export type ProductItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: Rating;
};

export type CartItem = {
  id: string;
  quantity: number;
  product: ProductItem;
};

export type SearchOptions = {
  categories: ValueOption[];
  sortOptions: ValueOption[];
};
