import useApi from '@/hooks/use-api';
import { useQuery } from '@tanstack/react-query';


export default function HomePage() {
    const { userService } = useApi()

    const { data: users } = useQuery({
        queryKey: ['usersList'],
        queryFn: () => userService().list()
    })

    if (!users) return <p>Loading...</p>
    return (
        <>
            {
                users.map(user => (
                    <div key={user.id}>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </ >
    )
}

