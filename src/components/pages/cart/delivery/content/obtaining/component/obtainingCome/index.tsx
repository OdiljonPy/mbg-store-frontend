import css from "./index.module.css"
import {useEffect, useRef} from "react";

interface props{
    changeContainerHeight : (e:number)=>void
}

const ObtainingCome = ({changeContainerHeight}:props) =>{
    const cardRef = useRef<any>(null)
    useEffect(()=>{
        changeContainerHeight(cardRef?.current?.scrollHeight)
    },[])
    return(
        <div ref={cardRef}>
            Store
        </div>
    )
}

export default ObtainingCome