import { AxiosInstance } from 'axios';
import axiosApi from '@/lib/http-client';



export default class ApiService {
    protected readonly http: AxiosInstance;

    protected readonly token?: string;

    constructor(path: string, token?: string) {
        this.token = token;

        this.http = token ? axiosApi(path, { Authorization: `Bearer ${token}` }) : axiosApi(path);
    }
}