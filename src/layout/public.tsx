import { Card } from '@/components/ui/card';
import { RefreshCcw, ShoppingCart } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className='flex w-3/4 md:w-2/3 h-3/4'>
                <aside className='flex-1 hidden md:flex justify-center items-center bg-primary/5 border-r'>
                    <ShoppingCart className='text-primary size-1/2 -rotate-12' />
                </aside>
                <main className='flex-1 p-4 lg:px-12 lg:py-10'>
                    <Outlet />
                </main>
            </Card>
        </div>
    )
}
