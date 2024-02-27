import React from 'react';
import css from './info.module.css'
import Gallery from "@/components/pages/product/wrapper/components/info/gallery/gallery";
import Description from "@/components/pages/product/wrapper/components/info/description/description";
import { IProductSingle} from "@/data-types/products/products";

interface props {
    info:IProductSingle ,
    loading:boolean
}

const Info = ({info,loading}: props) => {
    return (
        <section className={css.info}>
            <Gallery gallery={info}  loading={loading}/>
            <Description info={info} loading={loading}/>
        </section>
    );
};

export default Info;