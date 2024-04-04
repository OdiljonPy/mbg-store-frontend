import css from "./wrapper.module.css"
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import React from "react";
import {useTranslations} from "next-intl";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import Product from "@/components/shared/product/product";
import ProductsEmpty
    from "@/components/pages/account/favorites/components/favorites-list/favorites-empty/favorites-empty";
const Wrapper = () =>{
    const t = useTranslations()
    const {favourites,total_count} = useSelector((state:RootState) => state.favorites)

    return(
        <section className={css.favourite}>
            <div className="container">
                <Breadcrumbs items={[
                    {
                        path: '/',
                        label: t('header.home')
                    },
                    {
                        path: '/favourites',
                        label:  t('header.favourites')
                    }
                ]}/>
                <h2 className={css.title}>{t('header.favorites')}</h2>
                {
                    total_count ? <div className={css.wrapper}>
                        { favourites.map((product)=> <Product product={product} isNotSwiper key={product.id} />)}
                    </div> : <ProductsEmpty/>
                }

            </div>
        </section>
    )
}

export default Wrapper