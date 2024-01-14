import React from 'react';
import css from './product-top.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/products";
import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import ProductActions from "@/components/shared/product/components/product-top/product-actions/product-actions";

interface props {
    product: IProduct
}

const ProductTop = ({product}: props) => {
    const {
        img,
        title,
        discount_percentage,
        count
    } = product
    return (
        <div className={css.actions}>
            {discount_percentage && <DiscountBadge discount_percentage={discount_percentage}/>}
            <div className={css.img}>
                <ResponsiveImage src={img} alt={title}/>
            </div>
            <ProductActions count={count}/>
        </div>
    );
};

export default ProductTop;