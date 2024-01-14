import {ICategory} from "@/pages/_components/popular/categories/data-types/category";
import sweets from '@/../public/images/categories/sweet.png'
import img from '@/../public/images/categories/category.png'
import vegs from '@/../public/images/categories/vegs.png'
import bread from '@/../public/images/categories/bread.png'
import meat from '@/../public/images/categories/meat.png'
import milk from '@/../public/images/categories/milk.png'
export const category: ICategory[] = [
    {
        id: 1,
        img: img,
        title: "Готовая еда",
        color : '#DFCF76'
    },
    {
        id: 2,
        img: sweets,
        title: "Конфеты и десерты",
        color: '#F09A54'
    },
    {
        id: 3,
        img: vegs,
        title: "Овощи и фрукты",
        color: '#C7B4FF'
    },
    {
        id: 4,
        img: bread,
        title: "Хлеб и выпечка",
        color: '#DFB28F'
    },
    {
        id: 5,
        img: meat,
        title: "Мясо и птица",
        color: '#FFB4D4'
    },
    {
        id: 6,
        img: milk,
        title: "Молочный прилавок",
        color: '#97D9E7'
    },
    {
        id: 7,
        img: img,
        title: "Готовая еда",
        color : '#DFCF76'
    },
    {
        id: 9,
        img: sweets,
        title: "Конфеты и десерты",
        color: '#F09A54'
    },
]

