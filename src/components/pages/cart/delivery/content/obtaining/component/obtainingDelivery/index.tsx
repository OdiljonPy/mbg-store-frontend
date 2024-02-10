import css from "./index.module.css"
import React, {useEffect, useRef, useState} from "react";
import PlusSVG from "@/components/pages/cart/delivery/content/obtaining/component/icon/plusSVG";
import FormModal from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/modal/address_modal/form-modal";
import AddressCart
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/address-cart";
import AddAddress
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/button/add_address";
import SendButton
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/button/send_button";

interface props{
    changeContainerHeight : (e:number)=> void
}


const ObtainingDelivery = ({changeContainerHeight}:props) =>{
    const cardRef = useRef<any>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [activeAddressCart,setActiveAddressCart] = useState(1)
    const addressList = [
        {
            id:1,
        }
    ]
    const fetchActive = (e:number) =>{
        setActiveAddressCart(e)
    }
    useEffect(()=>{
        changeContainerHeight(cardRef?.current?.scrollHeight)
    },[])

    const onOpen = () => {
        document.body.style.overflow = 'hidden'
        setOpen(true)
    }

    const onClose = () => {
        document.body.style.overflow = 'visible'
        setOpen(false)
    }
    return(
        <div ref={cardRef}>
            <div className={css.carts}>
                <AddressCart value={1} fetchActive={fetchActive} active={activeAddressCart}/>
                <AddressCart value={2} fetchActive={fetchActive} active={activeAddressCart}/>
                <AddressCart value={3} fetchActive={fetchActive} active={activeAddressCart}/>
            </div>
            <div className={css.action_btn}>
                <AddAddress onOpen={onOpen}/>
                {
                    addressList.length && <SendButton title={'approve'}/>
                }
            </div>
            <FormModal open={open} onClose={onClose} />
        </div>
    )
}

export default ObtainingDelivery









