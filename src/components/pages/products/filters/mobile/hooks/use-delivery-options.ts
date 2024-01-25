import {ICustomCheckbox} from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import {useTranslation} from "next-i18next";

export function useDeliveryOptions( ) {
    const {t} = useTranslation()
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