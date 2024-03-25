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
    name: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    rating_count: 12358,
    price: 30000,
    weight: '170г',
    available:170,
    discount: 50,
    view_count:0,
    discount_price: 15000,
    images: [
        {
            id:1,
            product:1,
            image:img
        }
    ],
    seller: 'Продавец',
    store:[
        {
            id:1,
            brand_name:"Фермерская базарка",
            longitude:0,
            latitude:0,
            working_time:"",
            store_location_name:"",
            logo:""
        }
    ]
}

export const productWithoutDiscount: IProduct = {
    id: 2,
    name: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    weight: '350г',
    available:170,
    rating_count: 12358,
    price: 30000,
    view_count:0,
    images: [
        {
            id:1,
            product:1,
            image:img
        }
    ],
    seller: 'Продавец',
    store:[
        {
            id:1,
            brand_name:"Фермерская базарка",
            longitude:0,
            latitude:0,
            working_time:"",
            store_location_name:"",
            logo:""
        }
    ]
}
export const productWithoutCount: IProduct = {
    id: 2,
    name: 'Ананасы Mikado ломтики 580мл',
    rating: 4.9,
    weight: '350г',
    available:170,
    rating_count: 12358,
    price_with_discount:1200,
    price: 30000,
    view_count:0,
    images: [
        {
            id:1,
            product:1,
            image:img
        }
    ],
    seller: 'Продавец',
    store:[
        {
            id:1,
            brand_name:"Фермерская базарка",
            longitude:0,
            latitude:0,
            working_time:"",
            store_location_name:"",
            logo:""
        }
    ],
    count:2
}

export const productSales:IProduct[] = [
    {
        id: 1,
        name: 'Ананасы Mikado ломтики 580мл',
        rating: 4.9,
        weight: '580г',
        available:170,
        rating_count: 12358,
        price: 30000,
        discount: 50,
        discount_price: 15000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 2,
        name: 'Фруктовые капли без сахара\n' +
            '300 г',
        rating: 4.9,
        weight: '300г',
        available:170,
        rating_count: 12358,
        price: 15000,
        discount: 15,
        discount_price: 12700,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img1
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 3,
        name: 'Avokado 1 штук',
        rating: 4.9,
        weight: '300г',
        available:170,
        rating_count: 12358,
        price: 12000,
        discount: 40,
        discount_price: 7200,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img3
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 4,
        name: 'Кетчуп Tanho острый 910 г',
        rating: 4.9,
        weight: '300г',
        available:170,
        rating_count: 12358,
        price: 14000,
        discount: 10,
        discount_price: 12000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img2
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    }
]
export const productClose:IProduct[] = [
    {
        id: 1,
        name: 'Помидор 1 кг',
        rating: 4.9,
        weight: '580г',
        available:170,
        rating_count: 12358,
        price: 14700,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img4
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 2,
        name: 'Гречневая MAKFA 800 г',
        rating: 4.9,
        weight: '800г',
        available:170,
        rating_count: 12358,
        price: 15000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img5
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 3,
        name: 'Mountain dew 1500 мл\n',
        rating: 4.9,
        weight: '1500г',
        available:170,
        rating_count: 12358,
        price: 20000,
        discount: 10,
        discount_price: 18000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img6
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 4,
        name: 'Лук красный 1 кг\n',
        rating: 4.9,
        weight: '300г',
        available:170,
        rating_count: 12358,
        price: 5400,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img7
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    }
]
export const productTop:IProduct[] = [
    {
        id: 1,
        name: 'Ананасы Mikado ломтики 580мл',
        rating: 4.9,
        weight: '580г',
        available:170,
        rating_count: 12358,
        price: 30000,
        discount: 50,
        discount_price: 15000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 2,
        name: 'Хлеб бородинский',
        rating: 4.9,
        weight: '300г',
        available:170,
        rating_count: 12358,
        price: 15000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img8
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 3,
        name: 'Готовый завтрак MIX Nesquik\n' +
            '460 г',
        rating: 4.9,
        weight: '460г',
        available:170,
        rating_count: 12358,
        price: 52000,
        discount: 13,
        discount_price: 45000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img9
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
    },
    {
        id: 4,
        name: 'Масло подсолнечное\n' +
            '800 г',
        rating: 4.9,
        weight: '800г',
        available:170,
        rating_count: 12358,
        price: 21000,
        discount: 21,
        discount_price: 16000,
        view_count:0,
        images: [
            {
                id:1,
                product:1,
                image:img10
            }
        ],
        seller: 'Продавец',
        store:[
            {
                id:1,
                brand_name:"Фермерская базарка",
                longitude:0,
                latitude:0,
                working_time:"",
                store_location_name:"",
                logo:""
            }
        ]
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