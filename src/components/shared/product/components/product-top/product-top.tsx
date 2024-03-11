import React from 'react';
import css from './product-top.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/products";
import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import ProductActions from "@/components/shared/product/components/product-top/product-actions/product-actions";
import Link from "next/link";

interface props {
    product: IProduct
}

const ProductTop = ({product}: props) => {
    const {
        id,
        images,
        name,
        discount,
        count
    } = product

    return (
        <div className={css.actions}>
            {discount ? <div className={css.discount}>
                <DiscountBadge discount_percentage={discount}/>
            </div> : null}
            <Link href={`/products/${id}`} className={css.img}>
                <ResponsiveImage src={images[0].image} alt={name}/>
            </Link>
            <ProductActions count={count}/>
        </div>
    );
};

export default ProductTop;