import Footer from '@/components/sections/footer'
import Navbar from '@/components/sections/navbar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {

    return (
        <div className='relative container mx-auto '>
            <Navbar />
            <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
