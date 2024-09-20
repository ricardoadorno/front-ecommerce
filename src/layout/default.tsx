import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
    return (
        <div className='container mx-auto'>
            <header className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold ">Ricardo Adorno</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" >About</a></li>
                        <li><a href="#projects" >Projects</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                <Outlet />
            </main>
            <footer className=" shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center ">
                    © {new Date().getFullYear()} Ricardo Adorno. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
