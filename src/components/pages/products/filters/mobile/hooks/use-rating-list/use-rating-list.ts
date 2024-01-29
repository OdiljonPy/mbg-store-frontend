import {useTranslations} from 'next-intl';
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";

export function useRatingList () {
    const t = useTranslations()
    const items: ICustomRadio[] = [

        {
            name: 'rating',
            key: '4',
            title: t('rating.rate', {count: 4}),
            count: 15
        },
        {
            name: 'rating',
            key: '3',
            title: t('rating.rate', {count: 3}),
            count: 15
        },
        {
            name: 'rating',
            key: '2',
            title: t('rating.rate', {count: 2}),
            count: 15
        },
        {
            name: 'rating',
            key: '1',
            title: t('rating.rate', {count: 1}),
            count: 15
        }
    ]
    return items
}



