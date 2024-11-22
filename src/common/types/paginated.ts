export type PaginatedMetadata = {
  page: number;
  page_size: number;
  total_page: number;
};

export type Paginated<T> = {
  result: T[];
} & PaginatedMetadata;
