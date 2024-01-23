import {ICategory} from "@/components/pages/products/filters/mobile/categories/data-types/categories";
import food from '@/../public/images/icons/cooked-food.svg'
import veg from '@/../public/images/icons/fruits-and-veg.svg'
import milk from '@/../public/images/icons/milk.svg'
import meat from '@/../public/images/icons/meat.svg'

export const categoriesItems: ICategory[] = [
    {
        title: 'Готовая еда',
        id: 1,
        count: 89,
        icon: food
    },
    {
        title: 'Овощи и фрукты',
        id: 2,
        count: 15,
        icon: veg
    },
    {
        title: 'Молоко',
        id: 3,
        count: 55,
        icon: milk
    },
    {
        title: "Мясо и птица",
        id: 4,
        count: 88,
        icon: meat
    }
]