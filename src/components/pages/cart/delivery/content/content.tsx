import Recipient from "@/components/pages/cart/delivery/content/recipient/recipient";
import css from "./content.module.css"
import Order from "@/components/pages/cart/delivery/content/order/order";
import Obtaining from "@/components/pages/cart/delivery/content/obtaining/obtaining";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {IOrder, IPostOrder} from "@/data-types/order/order";
import {useFormContext, UseFormReturn} from "react-hook-form";
import {useEffect} from "react";
interface props{
    form:UseFormReturn<IPostOrder>
}
const Content = ({form}:props) =>{
    const {products,totalCountProduct} = useSelector((state:RootState) => state.basket)
    const {setValue} = useFormContext<IPostOrder>()

    useEffect(() => {
        setValue('products',products.map((item)=>{
            return {
                product:item.id,
                quantity:item.count ? item.count:0
            }
        }))
    }, []);


    return(
        <div className={css.content}>
            <Recipient form={form}/>
            <Obtaining/>
            {
                totalCountProduct ? <Order products={products} totalCountProduct={totalCountProduct} />:''
            }
        </div>
    )
}

export default Content