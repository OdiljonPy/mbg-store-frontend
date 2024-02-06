import Recipient from "@/components/pages/cart/delivery/content/recipient/recipient";
import css from "./content.module.css"
interface props{

}
const Content = (props:props) =>{
    return(
        <div className={css.content}>
            <Recipient/>
        </div>
    )
}

export default Content