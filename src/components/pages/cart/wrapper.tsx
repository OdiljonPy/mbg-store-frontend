import css from './wrapper.module.css'
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import {useTranslations} from "next-intl";
import {Badge} from "antd";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Contents from "@/components/pages/cart/contents/contents";
import Total from "@/components/pages/cart/total/total";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {calcPrices} from "@/slices/basket/basketSlice"
interface props {

}

const Wrapper = (props: props) => {
    const basketSlices = useSelector((state:RootState)=>state.basket)
    const {favourites,total_count} = useSelector((state:RootState)=> state.favorites)
    const dispatch = useDispatch<AppDispatch>()
    const t = useTranslations()

    dispatch(calcPrices())
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
                ]}/>
                <h1 className={css.title}>
                    {t('header.basket')} <Badge count={basketSlices.totalCountProduct ? basketSlices.totalCountProduct : 0} color={'#39B969'}/>
                </h1>
                <div className={css.wrapper}>
                    <Contents basketSlices={basketSlices}/>
                    <Total basketSlice={basketSlices} />
                </div>
                {total_count ? <Favourites favourites={favourites}/>:''}
            </div>
        </section>
    );
};

export default Wrapper;