import {useTranslations} from 'next-intl';
import {ICustomRadio} from "@/components/shared/custom-radio/data-types/custom-radio";


export function useRatingMock () {
    const t = useTranslations()
    const items: ICustomRadio[] = [
        {
            name: 'rating',
            key: '',
            title: t('product.allFeedbacks'),
            count: 1500
        },
        {
            name: 'rating',
            key: '5',
            title: '5',
            count: 15
        },
        {
            name: 'rating',
            key: '4',
            title: '4',
            count: 15
        },
        {
            name: 'rating',
            key: '3',
            title: '3',
            count: 15
        },
        {
            name: 'rating',
            key: '2',
            title: '2',
            count: 15
        },
        {
            name: 'rating',
            key: '1',
            title: '1',
            count: 15
        }
    ]
    return items
}