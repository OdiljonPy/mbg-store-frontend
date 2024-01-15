export function priceFormatter(price: number, withCurrency?: boolean) {
    return `${new Intl.NumberFormat('ru-RU').format(price)}${withCurrency ? " сум" : ''}`
}