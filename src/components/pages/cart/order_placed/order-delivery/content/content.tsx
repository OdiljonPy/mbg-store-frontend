import css from "./content.module.css"
import Order from "@/components/pages/cart/delivery/content/order/order";
interface props{

}
const Content = (props:props) =>{
    return(
        <div className={css.content}>
            <h2 className={css.title}>Способ получения</h2>

            <Order/>
        </div>
    )
}

export default Content