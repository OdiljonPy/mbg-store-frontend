import {useTranslations} from 'next-intl';
import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";


export function useSalesList () {
    const t = useTranslations()

    const salesList: ICustomCheckbox[] = [
        {
            id: 80,
            title: t('sales.more', {count: 80}),
            count: 120
        },
        {
            id: 70,
            title: t('sales.more', {count: 70}),
            count: 856
        },
        {
            id: 60,
            title: t('sales.more', {count: 60}),
            count: 123
        },
        {
            id: 50,
            title: t('sales.more', {count: 50}),
            count: 345
        }
    ]

    return salesList
}