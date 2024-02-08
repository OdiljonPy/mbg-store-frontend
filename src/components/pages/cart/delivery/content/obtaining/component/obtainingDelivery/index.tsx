import css from "./index.module.css"
import { useEffect, useRef} from "react";
import PlusSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/plusSVG";
import FormModal from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/modal/form-modal";

interface props{
    changeContainerHeight : (e:number)=> void
}


const ObtainingDelivery = ({changeContainerHeight}:props) =>{
    const cardRef = useRef<any>(null)
    useEffect(()=>{
        changeContainerHeight(cardRef?.current?.scrollHeight)
    },[])
    return(
        <div ref={cardRef}>
            <FormModal/>
        </div>
    )
}

export default ObtainingDelivery









