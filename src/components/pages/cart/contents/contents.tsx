import css from './contents.module.css'
import Product from "@/components/pages/cart/contents/product/product";
import CartEmpty from "@/components/pages/cart/common/cart-empty/cart-empty";
import {IProduct} from "@/data-types/products/common";

interface props {
    products:IProduct[]
    totalCount : number
}

const Contents = ({products,totalCount}: props) => {

    return (
        <div className={css.contents}>
            {!totalCount ? <CartEmpty/> :
                products.map((product)=> <Product product={product} key={product.id}/>)
            }

        </div>
    );
};

export default Contents;