import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import {Badge} from "antd";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Total from "@/components/pages/cart/total/total";
import Content from "@/components/pages/cart/delivery/content/content";
import TotalSum from "@/components/pages/cart/delivery/content/totalSum/totalSum";

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
                        label: t('header.delivery')
                    }
                ]}/>
                <div className={css.wrapper}>
                    {/*<Contents/>*/}
                    <Content/>
                    {/*<Total/>*/}
                    <TotalSum/>
                </div>
                {/*<Favourites/>*/}
            </div>
        </section>
    );
};

export default Wrapper;