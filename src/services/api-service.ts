import { AxiosInstance } from 'axios';
import axiosApi from '@/lib/http-client';
import { toast } from '@/hooks/use-toast';

export default class ApiService {
    protected readonly http: AxiosInstance;

    constructor(path: string, token?: string) {
        this.http = token ? axiosApi(path, { Authorization: `Bearer ${token}` }) : axiosApi(path);
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
}