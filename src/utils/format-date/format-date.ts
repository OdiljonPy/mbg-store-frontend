export function formatDate(dateString: string): string {
    const date = new Date(dateString)

    return `${date.getDay() > 9 ? date.getDate() : `0${date.getDay()}`}.${
        date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`
    }.${date.getFullYear()}`

}