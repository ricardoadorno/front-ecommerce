export const formatMoney = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value)
}

export const firstLetterUppercase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)
