import css from '@/components/pages/cart/order_placed/order-pickup/order.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import Content from "@/components/pages/cart/order_placed/order-delivery/content/content";
import TotalSum from "@/components/pages/cart/delivery/totalSum/totalSum";
import Status from "@/components/pages/cart/order_placed/common/order-status/status";

interface props {

}

const Wrapper = (props: props) => {
    const t = useTranslations()
    return (
        <section className={css.cart}>
            <div className={'container'}>
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/cart',
                        label: t('header.basket')
                    },
                    {
                        path: '/cart/delivery',
                        label: t('header.order_placed')
                    }
                ]}/>
                <div className={css.status}>
                    <Status status_text={"Ожидает оплаты"} status='warning'/>
                </div>
                <div className={css.wrapper}>
                    <Content/>
                    <TotalSum/>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;