import Text from '../ui/text';

export default function Footer() {
    return (
        <footer className='w-full flex justify-between items-center py-4 border-t border-muted'>
            <Text lightness={500} weight={'medium'}>
                © {new Date().getFullYear()}. All rights reserved.
            </Text>
            <Text >
                Created by Ricardo Adorno
            </Text>
        </footer>
    )
}
