import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {useTranslations} from 'next-intl';

export function useDeliveryOptions( ) {
    const t = useTranslations()
    const storesList: ICustomCheckbox[] = [
        {
            id: 1,
            title: t('filters.delivery.free'),
            count: 2132
        },
        {
            id: 2,
            title: t('filters.delivery.self'),
            count: 856
        }
    ]
    return storesList
}