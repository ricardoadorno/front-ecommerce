import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeSwitch from "../molecules/theme-switch";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { eraseCookie } from "@/services/cookies";
import { Button } from "../ui/button";
import { LogOut, Menu, ShoppingCart } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import { GearIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchInput from "../molecules/search-input";
import CartSheet from "../organism/cart-sheet";
import useUserData from "@/hooks/use-user-data";
import { firstLetterUppercase } from "@/utils/format";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '../ui/sheet';
import Text from '../ui/text';

const items = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    eraseCookie("accessToken");
    eraseCookie("refreshToken");
    navigate("/");
  };

  return (
    <header className="flex justify-between pt-4 pb-8 gap-4">
      <div className="flex items-center justify-center gap-4">
        <div className="rounded-lg border border-primary bg-primary/10 p-2">
          <ShoppingCart className="text-primary" />
        </div>
        <NavigationMenu className='hidden md:flex items-center justify-center'>
          <NavigationMenuList>
            {items.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link to={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <SearchInput />

      <div className="hidden md:flex items-center justify-center gap-4 ml-auto">
        <UserGreeting />
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <GearIcon />
            </MenubarTrigger>
            <MenubarContent >
              {configMenuOptions.map((option, index) => (
                <MenubarItem key={index} className='flex justify-between px-4'>
                  {option.label}
                  {option.children}
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <CartSheet />
      <MobileMenu />
    </header>
  );
}

const configMenuOptions = [
  {
    label: "Theme",
    children: <ThemeSwitch />
  },
  {
    label: "Logout",
    children: <LogOut size={16} />,
  },
]

const UserGreeting = () => {
  const { user } = useUserData();

  return (
    <div>
      Hello,{" "}
      <span className="font-bold">
        {firstLetterUppercase(user?.username ?? '')}
      </span>
    </div>
  );
}

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden'>
        <Menu size={16} />
      </SheetTrigger>
      <SheetContent side={'left'} className='flex flex-col gap-2 py-16'>
        <UserGreeting />
        <Menubar>
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink href={item.href}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </Menubar>
        {
          configMenuOptions.map((option, index) => (
            <Button key={index} variant='ghost' className='w-full'>
              <div className="flex justify-between items-center w-full ">
                {option.label}
                {option.children}
              </div>
            </Button>
          ))
        }
      </SheetContent>
    </Sheet>
  )
}