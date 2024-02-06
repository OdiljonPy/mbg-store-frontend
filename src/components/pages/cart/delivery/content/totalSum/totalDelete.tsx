import css from "./totalDelete.module.css"
import DoneSVG from "@/components/pages/cart/delivery/content/totalSum/doneSVG";
import DeleteSVG from "@/components/pages/cart/delivery/content/totalSum/deleteSVG";

interface props{

}



const totalDelete = (props:props) =>{
    return(
        <div className={css.totalDelete}>
            <div className={css.flex}>
                <DoneSVG/>
                <span className='green_text'>NEW10 <span className={css.black_text}>применено</span></span>
            </div>
            <DeleteSVG/>
        </div>
    )
}

export default totalDelete