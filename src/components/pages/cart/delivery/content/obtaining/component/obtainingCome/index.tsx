import {useEffect, useRef} from "react";
import css from "./index.module.css"
import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

interface props {
    changeContainerHeight: (e: number) => void
}

const ObtainingCome = ({changeContainerHeight}: props) => {
    const storeList = useSelector((state:RootState)=> state.basket.store_list)
    const cardRef = useRef<any>(null)

    useEffect(() => {
        changeContainerHeight(cardRef?.current?.scrollHeight)
    }, []);

    return (
        <div ref={cardRef}>
            {
                <div className={css.carts}>
                    {storeList.length && storeList.map((item) => <AddressCard store={item} type={'pick_up'} key={item.id}/>)}
                </div>
            }
        </div>
    )
}


export default ObtainingCome