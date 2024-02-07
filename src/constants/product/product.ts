import {IProduct} from "@/data-types/products/products";
import img from '@/../public/images/products/mikado.png'
import img1 from '@/../public/images/products/fruct.png'
import img2 from '@/../public/images/products/tanho.png'
import img3 from '@/../public/images/products/avokado.png'
import img4 from '@/../public/images/products/pomidor.png'
import img5 from '@/../public/images/products/makfa.png'
import img6 from '@/../public/images/products/mountain.png'
import img7 from '@/../public/images/products/onion.png'
import img8 from '@/../public/images/products/bread.png'
import img9 from '@/../public/images/products/nesquik.png'
import img10 from '@/../public/images/products/oil.png'
import {ISortingOption} from "@/components/pages/products/filters/desktop/data-types/sorting/sorting";

export const product: IProduct = {
    id: 1,
    title: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    total_rate_count: 12358,
    price: 30000,
    weight: '170г',
    discount_percentage: 50,
    discount_price: 15000,
    img: img,
    seller: 'Продавец',
    count:2
}

export const productWithoutDiscount: IProduct = {
    id: 2,
    title: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    weight: '350г',
    total_rate_count: 12358,
    price: 30000,
    img: img,
    seller: 'Продавец',
    count:2
}

export const productSales:IProduct[] = [
    {
        id: 1,
        title: 'Ананасы Mikado ломтики 580мл',
        rating: 4.9,
        weight: '580г',
        total_rate_count: 12358,
        price: 30000,
        discount_percentage: 50,
        discount_price: 15000,
        img: img,
        seller: 'Продавец',

    },
    {
        id: 2,
        title: 'Фруктовые капли без сахара\n' +
            '300 г',
        rating: 4.9,
        weight: '300г',
        total_rate_count: 12358,
        price: 15000,
        discount_percentage: 15,
        discount_price: 12700,
        img: img1,
        seller: 'Продавец',

    },
    {
        id: 3,
        title: 'Avokado 1 штук',
        rating: 4.9,
        weight: '300г',
        total_rate_count: 12358,
        price: 12000,
        discount_percentage: 40,
        discount_price: 7200,
        img: img3,
        seller: 'Продавец',

    },
    {
        id: 4,
        title: 'Кетчуп Tanho острый 910 г',
        rating: 4.9,
        weight: '300г',
        total_rate_count: 12358,
        price: 14000,
        discount_percentage: 10,
        discount_price: 12000,
        img: img2,
        seller: 'Продавец',
    }
]
export const productClose:IProduct[] = [
    {
        id: 1,
        title: 'Помидор 1 кг',
        rating: 4.9,
        weight: '580г',
        total_rate_count: 12358,
        price: 14700,
        img: img4,
        seller: 'Продавец',
    },
    {
        id: 2,
        title: 'Гречневая MAKFA 800 г',
        rating: 4.9,
        weight: '800г',
        total_rate_count: 12358,
        price: 15000,
        img: img5,
        seller: 'Продавец',
    },
    {
        id: 3,
        title: 'Mountain dew 1500 мл\n',
        rating: 4.9,
        weight: '1500г',
        total_rate_count: 12358,
        price: 20000,
        discount_percentage: 10,
        discount_price: 18000,
        img: img6,
        seller: 'Продавец',
    },
    {
        id: 4,
        title: 'Лук красный 1 кг\n',
        rating: 4.9,
        weight: '300г',
        total_rate_count: 12358,
        price: 5400,
        img: img7,
        seller: 'Продавец',
    }
]
export const productTop:IProduct[] = [
    {
        id: 1,
        title: 'Ананасы Mikado ломтики 580мл',
        rating: 4.9,
        weight: '580г',
        total_rate_count: 12358,
        price: 30000,
        discount_percentage: 50,
        discount_price: 15000,
        img: img,
        seller: 'Продавец',

    },
    {
        id: 2,
        title: 'Хлеб бородинский',
        rating: 4.9,
        weight: '300г',
        total_rate_count: 12358,
        price: 15000,
        img: img8,
        seller: 'Продавец',

    },
    {
        id: 3,
        title: 'Готовый завтрак MIX Nesquik\n' +
            '460 г',
        rating: 4.9,
        weight: '460г',
        total_rate_count: 12358,
        price: 52000,
        discount_percentage: 13,
        discount_price: 45000,
        img: img9,
        seller: 'Продавец',

    },
    {
        id: 4,
        title: 'Масло подсолнечное\n' +
            '800 г',
        rating: 4.9,
        weight: '800г',
        total_rate_count: 12358,
        price: 21000,
        discount_percentage: 21,
        discount_price: 16000,
        img: img2,
        seller: 'Продавец',
    }
]



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