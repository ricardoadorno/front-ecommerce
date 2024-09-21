import ThemeSwitch from '@/components/molecules/theme-switch'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Text from '@/components/ui/text'
import { Outlet } from 'react-router-dom'

const items = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About me',
        href: '/about-me'
    }
]

const Nav = () => {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    items.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
                        </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default function DefaultLayout() {
    return (
        <div className='container mx-auto'>
            <header className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Text as='h2' variant={'subtitle2'}>Ricardo Adorno</Text>

                <Nav />

                <ThemeSwitch />
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
