import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from '../ui/input';
import { useState } from 'react';
import useSeachQuery from '@/hooks/use-search-query';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

export default function SearchInput() {
    const { currentSearchQuery, addSearchQuery } = useSeachQuery()

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addSearchQuery('q', searchQuery);
    }

    const isClearable = currentSearchQuery.q || searchQuery !== '';

    return (
        <form onSubmit={handleSearch} className='relative'>
            <Input placeholder='Search'
                className='w-[400px] pr-8'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {
                isClearable ?
                    <Button variant={'ghost'} className='absolute top-1/3 right-3 p-0 h-4'>
                        <X className='text-destructive size-4'
                            onClick={() => { setSearchQuery(''); addSearchQuery('q', '') }}
                        />
                    </Button>
                    : <MagnifyingGlassIcon className='absolute top-1/3 right-3 text-muted-foreground size-4' />

            }
        </form>
    )
}
