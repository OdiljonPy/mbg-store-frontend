import {IContact} from "@/layout/components/footer/components/contacts/data-types/contacts";
import phone from '@/../public/images/icons/phone.svg'
import email from '@/../public/images/icons/email.svg'

export const contacts: IContact[] = [
    {
        title: '+998 (71) 234-56-78',
        icon: phone,
        label: 'footer.phone',
        path: 'tel:+998 (71) 234-56-78'
    },
    {
        title: 'info.mbgstore@gmail.com',
        icon: email,
        label: 'footer.email',
        path: 'mailto:info.mbgstore@gmail.com'
    },
    {
        title: 'г. Ташкент, Яккасарайский р-н., ул. Шота Руставели, 51',
        icon: email,
        label: 'footer.address'
    }
]