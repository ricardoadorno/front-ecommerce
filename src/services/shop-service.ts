import { Paginated } from "@/common/types/paginated";
import ApiService from "./api-service";
import { ProductItem, SearchOptions } from "@/common/types/shop";

export default class ProductService extends ApiService {
  constructor(token?: string) {
    super("api/products", token);
  }

  async list(params?: Record<string, string>) {
    try {
      const { data } = await this.http.get<Paginated<ProductItem>>("", {
        params,
      });

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async get(id: string) {
    try {
      const { data } = await this.http.get<ProductItem>(id);

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async searchOptions() {
    try {
      const { data } = await this.http.get<SearchOptions>("search-options");

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}
