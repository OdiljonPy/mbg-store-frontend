import React from 'react';
import css from './product-actions.module.css'
import ResponsiveImage from "@/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/products";
import DiscountBadge from "@/shared/discount-badge/discount-badge";

interface props {
    product: IProduct
}

const ProductActions = ({product}: props) => {
    const {
        img,
        title,
        discount_percentage
    } = product
    return (
        <div className={css.actions}>
            {discount_percentage && <DiscountBadge discount_percentage={discount_percentage}/>}
            <div className={css.img}>
                <ResponsiveImage src={img} alt={title}/>
            </div>
        </div>
    );
};

export default ProductActions;