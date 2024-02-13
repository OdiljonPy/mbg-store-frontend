import {IDelivery} from "@/components/pages/product/wrapper/components/info/description/data-types";
import delivery from '@/../public/images/icons/delivery.svg'
import pickup from '@/../public/images/icons/pickup.svg'

export const deliveries: IDelivery[] = [
    {
        icon:delivery,
        text: 'особые правила',
        title: 'Бесплатная доставка'
    },
    {
        icon: pickup,
        title: 'Самовывоз',
        text: 'оплата на месте'
    }
]