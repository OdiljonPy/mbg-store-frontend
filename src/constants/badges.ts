import {IBadge} from "@/layout/components/header/main-header/data-types/badge";
import fav from '@/../public/images/icons/heart.svg'
import cart from '@/../public/images/icons/cart.svg'


export const favouritesBadge: IBadge = {
    icon: fav,
    path: '/',
    title: 'header.favourites',
    count: 30
}


export const cartBadge: IBadge = {
    icon: cart,
    path: '/',
    title: 'header.basket',
    count: 6
}