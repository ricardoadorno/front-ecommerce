import ApiService from './api-service';

type ListUsersResponse = {
    id: number;
    email: string;
    username: string;
}[];

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