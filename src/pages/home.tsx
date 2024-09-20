import Hero from '@/components/sections/hero';
import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Hero />

        </ >
    )
}

