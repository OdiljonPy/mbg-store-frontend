import css from './product.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import {IProduct} from "@/data-types/products/products";
import Description from "@/components/pages/cart/contents/product/description/description";
import {useState} from "react";
import Actions from "@/components/pages/cart/contents/product/actions/actions";

interface props {
    product: IProduct
}

const Product = ({product}: props) => {
    const { img, title} = product

    const [count, setCount] = useState<number>(0)



    return (
        <div className={css.product}>
            <div className={css.img}>
                <ResponsiveImage src={img} alt={title}/>
            </div>
            <div className={css.info}>
                <Description count={count} product={product}/>
                <Actions count={count} setCount={setCount}/>
            </div>
        </div>
    );
};

export default Product;