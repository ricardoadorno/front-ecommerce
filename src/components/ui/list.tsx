import { cn } from '@/lib/utils';
import { Check, Dot } from 'lucide-react';
import React from 'react';

const listDecorationMap = {
    dot: <Dot className="size-6" />,
    check: <Check className="size-4" />,
    numeric: (index: number) => <span className='w-4'>{index + 1}.</span>
}
interface ListProps<T> extends React.HTMLAttributes<HTMLUListElement> {
    items?: T[] | null;
    listDecoration?: keyof typeof listDecorationMap;
    customKey?: keyof T;
    renderItem: (item: T, options: ListItemOptions) => React.ReactNode;
}


export function List<T>({ items, renderItem, customKey, listDecoration, ...props }: ListProps<T>) {

    if (!items) return null;
    return (
        <ul {...props}>
            {items.map((item, index) => (
                <React.Fragment key={
                    customKey
                        ? item[customKey] as React.Key
                        : index
                }>
                    {renderItem(item, {
                        index,
                        listDecoration: listDecoration ? listDecorationMap[listDecoration] : null
                    })}
                </React.Fragment>
            ))
            }
        </ul >
    )
}

interface ListItemProps<T> extends React.HTMLAttributes<HTMLLIElement> {
    options: ListItemOptions
}

type ListItemOptions = {
    listDecoration: React.ReactNode | ((index: number) => React.ReactNode)
    index: number
}

export function ListItem<T>({ options, children, className, ...props }: ListItemProps<T>) {
    const { listDecoration, index } = options

    return <li {...props} className={cn('flex items-center gap-1', className)}>
        {typeof listDecoration === 'function' ? listDecoration(index) : listDecoration}
        {children}
    </li>
}



// interface ListProps<T> extends React.HTMLAttributes<HTMLUListElement> {
//     items?: T[] | null;
//     key?: keyof T;
//     listDecoration?: 'dot' | 'check'
//     renderItem: (item: T) => React.ReactNode;
// }
// export function List<T>({ items, renderItem, listDecoration = 'dot', key, ...props }: ListProps<T>) {

//     const listDecorationMap = {
//         dot: <svg className="h-2 w-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//         </svg>,
//         check: <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//         </svg>
//     }

//     if (!items) return null;
//     return (
//         <ul {...props}>
//             {items.map((item, index) => (
//                 <li
//                     key={
//                         key
//                             ? item[key] as React.Key
//                             : index
//                     } className='flex  items-center'>
//                     {listDecorationMap[listDecoration]}
//                     {renderItem(item)}
//                 </li>
//             ))
//             }
//         </ul >
//     )
// }

