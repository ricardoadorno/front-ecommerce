import axios, { AxiosInstance } from 'axios';
import axiosApi from '@/lib/http-client';
import { toast } from '@/hooks/use-toast';
import { getCookie, setCookie } from './cookies';

export default class ApiService {
    protected readonly http: AxiosInstance;

    constructor(path: string, token?: string) {
        this.http = token ? axiosApi(path, { Authorization: `Bearer ${token}` }) : axiosApi(path);

        this.http.interceptors.request.use(async (config) => {

            if (!getCookie('accessToken') && !getCookie('refreshToken')) {
                return config;
            }

            await axios.post('http://localhost:3000/api/v1/auth/refresh', {
                refreshToken: getCookie('refreshToken') ?? ''
            }).then((response) => {
                setCookie('accessToken', response.data.accessToken);
            })

            return config;
        },
        (error) => {
            return Promise.reject(error);
        });
    }

    protected handleError(error: any) {
        const { data } = error.response;

        if (!data.message) {
            toast({
                title: "An error occurred",
                variant: 'destructive',
            })
            return;
        }

        toast({
            title: data.message,
            variant: 'destructive',
        })
    }
    
    protected onSuccess(message: string) {
        toast({
            title: message,
            variant: 'success',
        })
    }
}