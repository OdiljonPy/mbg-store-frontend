import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import {Badge} from "antd";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Contents from "@/components/pages/cart/contents/contents";
import Total from "@/components/pages/cart/total/total";

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
                    }
                ]}/>
                <h1 className={css.title}>
                    {t('header.basket')} <Badge count={2} color={'#39B969'}/>
                </h1>
                <div className={css.wrapper}>
                    <Contents/>
                    <Total/>
                </div>
                <Favourites/>
            </div>
        </section>
    );
};

export default Wrapper;