import {IDelivery} from "@/components/pages/product/wrapper/components/info/description/data-types";
import delivery from '@/../public/images/icons/delivery.svg'
import pickup from '@/../public/images/icons/pickup.svg'

export const deliveries: IDelivery[] = [
    {
        icon:delivery,
        text: 'stories.with_rule',
        title: 'filters.delivery.free'
    },
    {
        icon: pickup,
        title: 'filters.delivery.self',
        text: 'stories.pay_on'
    }
]