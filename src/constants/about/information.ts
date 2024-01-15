import products from '@/../public/images/about/products.png'
import stores from '@/../public/images/about/stores.png'
import orders from '@/../public/images/about/orders.png'
import {IInformation} from "@/components/pages/about/information/data-types/information";


export const informationItems: IInformation[] = [
    {
        title: 'about.products',
        count: 25000,
        img: products
    },
    {
        title: 'about.stores',
        count: 10000,
        img: stores
    },
    {
        title: 'about.orders',
        count: 2000,
        img: orders
    },
]
