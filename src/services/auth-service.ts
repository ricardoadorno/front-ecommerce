import ApiService from "./api-service";

type LoginCredentialsResponse = {
  accessToken: string;
  refreshToken: string;
};

export default class AuthService extends ApiService {
  constructor() {
    super("auth");
  }

  async login(body: { email: string; password: string }) {
    try {
      const { data } = await this.http.post<LoginCredentialsResponse>(
        "login",
        body,
      );

      this.onSuccess("Login successful");

      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // async refreshToken(refreshToken: string) {
  //     try {
  //     const {data} = await this.http.post<LoginCredentialsResponse>('refresh', { refreshToken });

  //     return data;
  //     } catch (error) {
  //         throw  this.handleError(error);
  //     }
  // }
}
