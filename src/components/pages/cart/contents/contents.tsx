import css from './contents.module.css'
import Product from "@/components/pages/cart/contents/product/product";
import {product, productWithoutDiscount} from "@/constants/product/product";

interface props {

}

const Contents = (props: props) => {
    return (
        <div className={css.contents}>
            <Product product={product}/>
            <Product product={productWithoutDiscount}/>
        </div>
    );
};

export default Contents;