import { User } from '@/common/types'
import { getCookie } from '@/services/cookies'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { useEffect, useState } from 'react'

export default function useUserData() {
    const token = getCookie('accessToken') ?? ''

    const decodedData = jwtDecode<JwtPayload & User>(token)

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (decodedData) {
            setUser({
                id: decodedData.id,
                username: decodedData.username,
                email: decodedData.email
            })
        }
    }, [decodedData])

    return {
        user
    }
}