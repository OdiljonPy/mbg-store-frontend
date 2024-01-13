export function priceFormatter(price: number) {
    return `${new Intl.NumberFormat('ru-RU').format(price)} сум`
}