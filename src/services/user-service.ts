import { CartItem } from "@/common/types/shop";
import ApiService from "./api-service";
import { User } from "@/common/types/user";

type CreteUserRequest = { password: string; email: string; username: string };
type UpdateUserCartRequest = { product_id: string; quantity: number };

const HandleErrorDecorator = <T extends { new (...args: any[]): {} }>(
  targetClass: T,
): T => {
  const methods = Object.getOwnPropertyNames(targetClass.prototype);

  methods.forEach((method) => {
    if (method !== "constructor") {
      const originalMethod = targetClass.prototype[method];

      targetClass.prototype[method] = async function (...args: any[]) {
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          this.handleError(error);
        }
      };
    }
  });

  return targetClass;
};

// function HandleError(constructor: Function) {
//     const methods = Object.getOwnPropertyNames(constructor.prototype);

//     methods.forEach(method => {
//       if (method !== 'constructor') {
//         const originalMethod = constructor.prototype[method];

//         constructor.prototype[method] = async function (...args: any[]) {
//           try {
//             return await originalMethod.apply(this, args);
//           } catch (error) {
//             throw this.handleError(error);
//           }
//         };
//       }
//     });
// }

// @HandleError
export default HandleErrorDecorator(
  class UserService extends ApiService {
    constructor(token?: string) {
      super("api/users", token);
    }

    async register(body: CreteUserRequest) {
      await this.http.post("", body);

      this.onSuccess("User created successfully");
    }

    async list() {
      const { data } = await this.http.get<User[]>("");

      return data;
    }

    async getCart(id: string) {
      const { data } = await this.http.get<CartItem[]>(`/${id}/cart`);

      return data;
    }

    async updateProductQuantity(id: string, body: UpdateUserCartRequest) {
      const { data } = await this.http.put(`/${id}/cart/products`, body);

      this.onSuccess("Product quantity updated");

      return data;
    }
  },
);
