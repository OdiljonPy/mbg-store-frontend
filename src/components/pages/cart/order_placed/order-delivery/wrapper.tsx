import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import Content from "@/components/pages/cart/order_placed/order-delivery/content/content";
import Status from "@/components/pages/cart/order_placed/common/order-status/status";
import DetailCart from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart";
import DetailPrice from "@/components/pages/cart/order_placed/common/detail-carts/detail-price/detail-price";

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
                    <Status status_text={"Оплачено"} status='done'/>
                </div>
                <div className={css.wrapper}>
                    <Content/>
                   <div className={css.detail}>
                       <DetailCart/>
                       <DetailPrice />
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;