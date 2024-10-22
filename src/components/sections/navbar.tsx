import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import ThemeSwitch from '../molecules/theme-switch'
import { Link, useNavigate } from 'react-router-dom'
import { eraseCookie } from '@/services/cookies'
import { Button } from '../ui/button'
import { LogOut, ShoppingCart } from 'lucide-react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar'
import { GearIcon } from '@radix-ui/react-icons'
import SearchInput from '../molecules/search-input'
import CartSheet from '../organism/cart-sheet'
import useUserData from '@/hooks/use-user-data'
import { firstLetterUppercase } from '@/utils/format'

const items = [
    {
        label: 'Shop',
        href: '/shop'
    },
    {
        label: 'About',
        href: '/about'
    }
]

export default function Navbar() {

    const navigate = useNavigate()
    const { user } = useUserData()

    const logout = () => {
        eraseCookie('access_token')
        navigate('/')
    }

    return (
        <header className='flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-4'>
            <div className='flex gap-4 justify-center items-center'>
                <div className="border border-primary rounded-lg bg-primary/10 p-2">
                    <ShoppingCart className='text-primary' />
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        {
                            items.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <Link to={item.href} className={navigationMenuTriggerStyle()}>{item.label}</Link>
                                </NavigationMenuItem>
                            ))
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <SearchInput />

            <div className='flex justify-center items-center gap-4'>
                {user && <div>
                    Hello, <span className='font-bold'>{firstLetterUppercase(user.username)}</span>
                </div>}
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <GearIcon />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className='flex justify-evenly'>
                                Theme
                                <ThemeSwitch />
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                <Button variant={'ghost'} onClick={logout}>
                                    <LogOut size={16} className='mr-1' />
                                    Logout
                                </Button>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                <CartSheet />
            </div>
        </header>
    )
}

