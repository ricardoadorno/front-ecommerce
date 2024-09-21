import { useAtom } from 'jotai';
import { Switch } from '../ui/switch';
import { themeAtom, toggleThemeAtom } from '@/stores/theme-store';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeSwitch() {
    const [theme] = useAtom(themeAtom);
    const [, toggleTheme] = useAtom(toggleThemeAtom);

    return (
        <div>
            <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                thumbChildren={theme === 'dark' ? <MoonIcon className='size-4' /> : <SunIcon className='size-4' />}
            />
        </div>
    );
}
