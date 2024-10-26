import { getCookie } from '@/services/cookies'
import UserService from '@/services/user-service'

export default function useApi() {
    const token = getCookie('accessToken') ?? ''

    return {
        userService: () => new UserService(token)
    }
}