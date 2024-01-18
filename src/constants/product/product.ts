import {IProduct} from "@/data-types/products/products";
import img from '../../../public/images/products/mikado.png'
import {ISortingOption} from "@/components/pages/products/filters/data-types/sorting";

export const product: IProduct = {
    id: 1,
    title: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    total_rate_count: 12358,
    price: 30000,
    discount_percentage: 50,
    discount_price: 15000,
    img: img
}

export const productWithoutDiscount: IProduct = {
    id: 2,
    title: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    total_rate_count: 12358,
    price: 30000,
    img: img
}


export const sortingOptions:ISortingOption[] = [
    {
        title: 'filters.sorting.popular',
        val: 'popular',
    },
    {
        title: 'filters.sorting.cheap',
        val: 'cheap'
    },
    {
        title: 'filters.sorting.expensive',
        val: 'expensive'
    },
    {
        title: 'filters.sorting.highRate',
        val: 'highRate'
    },
]