import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Text from '@/components/ui/text';
import useApi from '@/hooks/use-api';
import { useToast } from '@/hooks/use-toast';
import UserService from '@/services/user-service';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
    const { toast } = useToast()
    const { userService } = useApi()
    const [form, setForm] = useState({
        email: '',
        password: '',
        username: '',
        repeatPassword: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await userService().register(form)

        toast({
            title: 'User created successfully',
            variant: 'primary'
        })
    }

    return (
        <form onSubmit={handleSubmit} className='relative flex flex-col gap-6 h-full justify-center'>
            <Link to='/' className='absolute top-2 left-0'><ArrowLeft className='size-6' /></Link>


            <Text variant='subtitle1' className='text-center'>Register</Text>

            <Input
                type='email'
                placeholder='Email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
                type='text'
                placeholder='Username'
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <Input
                type='password'
                placeholder='Password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Input
                type='password'
                placeholder='Repeat Password'
                value={form.repeatPassword}
                onChange={(e) => setForm({ ...form, repeatPassword: e.target.value })}
            />
            <Button
                type='submit'
            >
                Create Account
            </Button>

        </form>
    )
}
