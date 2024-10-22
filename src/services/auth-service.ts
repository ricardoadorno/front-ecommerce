import ApiService from './api-service';

export default class AuthService extends ApiService {
    constructor() {
        super('auth');
    }

    async login(body: { email: string, password: string }): Promise<{access_token: string}> {
        try {
        const {data} = await this.http.post<{access_token: string}>('login', body);

        return data;
        } catch (error) {
            throw  this.handleError(error);
        }
    }

}