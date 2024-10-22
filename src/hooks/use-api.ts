import { getCookie } from '@/services/cookies'
import UserService from '@/services/user-service'

export default function useApi() {
    const token = getCookie('access_token') ?? ''

    return {
        userService: () => new UserService(token)
    }
}