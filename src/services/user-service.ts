import ApiService from './api-service';


type ListUsersResponse = {
    id: number;
    email: string;
    username: string;
}[];

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
export default class UserService extends ApiService {
    constructor(token?: string) {
        super('api/users', token);
    }

    async register(body: { email: string, password: string, username: string }) {
            try {
              return await this.http.post('', body);
          } catch (error) {
              throw this.handleError(error);
          }
    }

    async list() {
        try {
            const {data} = await this.http.get<ListUsersResponse>('');
            
            return data;
        } catch (error) {
            throw this.handleError(error);
        }
    }
}