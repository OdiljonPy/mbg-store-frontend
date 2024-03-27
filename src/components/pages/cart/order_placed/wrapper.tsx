import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import Content from "@/components/pages/cart/order_placed/content/content";
import TotalSum from "@/components/pages/cart/delivery/totalSum/totalSum";
import Status from "@/components/pages/cart/order_placed/status/status";

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
                    <Status status={"Ожидает оплаты"}/>
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