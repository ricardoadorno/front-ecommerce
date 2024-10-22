import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Text from '@/components/ui/text';
import { useToast } from '@/hooks/use-toast';
import AuthService from '@/services/auth-service';
import { setCookie } from '@/services/cookies';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const { toast } = useToast()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: 'ricardo@gmail.com',
        password: '123123'
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const authService = new AuthService()

        const { access_token } = await authService.login(form)

        setCookie('access_token', access_token)

        toast({
            title: 'Login successful',
            variant: 'primary'
        })

        navigate('/home')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 h-full justify-center'>
            <Text variant='subtitle1' className='text-center'>Login</Text>

            <Input
                type='email'
                placeholder='Email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
                type='password'
                placeholder='Password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Button
                type='submit'
            >
                Login
            </Button>

            <Text
                variant={'anchor'}
                className='text-center'
                href='/register'
            >
                Don't have an account?
            </Text>
        </form>
    )
}
