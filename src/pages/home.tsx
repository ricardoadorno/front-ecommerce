import Hero from '@/components/sections/hero';
import Text from '@/components/ui/text';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import ThemeSwitch from '@/components/molecules/theme-switch';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Hero />
        </ >
    )
}

