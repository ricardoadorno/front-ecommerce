import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const typographyVariant = cva("", {
    variants: {
        variant: {
            heading1: "text-[2rem]",
            heading6: "text-[1.725rem] leading-9",
            subtitle1: "md:text-[1.525rem] text-[1.125rem] leading-7",
            subtitle2: "text-[1.125rem] ",
            "body-big": "md:text-[1rem] text-[0.825rem]",
            body: "md:text-[0.875rem] text-[0.775rem]",
            "body-small": "md:text-[0.825rem] text-[0.675rem]",
            button: "text-[0.775rem] ",
            caption: "text-[0.625rem]",
        },
        weight: {
            light: "font-light",
            regular: "font-normal",
            medium: "font-medium",
            bold: "font-bold",
        },
        lightness: {
            400: "text-neutral-400",
            500: "text-neutral-500",
            600: "text-neutral-600",
            700: "text-neutral-700",
            800: "text-neutral-800",
            900: "text-neutral-900",
            1000: "text-neutral-1000",
        },
    },
    defaultVariants: {
        variant: "body",
        weight: "regular",
        lightness: 1000,
    },
});

interface TxtProps extends VariantProps<typeof typographyVariant>, React.HTMLAttributes<HTMLElement> {
    as: keyof HTMLElementTagNameMap;
}


export default function Text({ as, className, lightness, variant, weight, ...props }: TxtProps) {

    const Component = as;

    return (
        <Component {...props} className={cn(typographyVariant({ variant, weight, lightness, className }))} />
    )
}
