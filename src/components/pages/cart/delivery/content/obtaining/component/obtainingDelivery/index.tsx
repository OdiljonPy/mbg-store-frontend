import css from "./index.module.css"
import React, {useEffect, useRef, useState} from "react";
import FormModal from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/modal/address_modal/form-modal";
import AddressCart
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/address-cart";
import AddAddress
    from "@/components/pages/cart/common/button/add_address";
import SendButton
    from "@/components/pages/cart/common/button/send_button";
import DeleteModal
    from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/modal/delete_modal/delete_modal";

interface props{
    changeContainerHeight : (e:number)=> void
    activeAddress : (e:number) => void
}


const ObtainingDelivery = ({changeContainerHeight,activeAddress}:props) =>{
    const cardRef = useRef<any>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const [activeAddressCart,setActiveAddressCart] = useState<number>(1)
    const addressList = [
        {
            id:1,
            value:1,
            title:"Мой дом",
            address:"г. Ташкент, проспект Амира Темура, д-23, кв-20",
            status:""
        },
        {
            id:2,
            value:2,
            title:"Мама",
            address:"г. Ташкент, ул. Паркентская, д-12, кв-5",
            status:""
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
    // delete modal

    const [deleteModalData,setDeleteModalData] = useState({id:0,title:''})
    const onOpenDeleteModal = (id:number,title:string) => {
        document.body.style.overflow = 'hidden'
        setOpenDeleteModal(true)
        const modalData = {
            id,
            title
        }
        setDeleteModalData((prevState)=> prevState = modalData)
    }

    const closeDeleteModal = () => {
        document.body.style.overflow = 'visible'
        setOpenDeleteModal(false)
    }
    const deleteAddress =  (id:number) =>{
        console.log(id,"delete id")
    }
    return(
        <div ref={cardRef}>
            <div className={css.carts}>
                {
                    addressList.map((item) =>{
                        return <AddressCart key={item.id} data={item} fetchActive={fetchActive} active={activeAddressCart} openDelModal={onOpenDeleteModal} openEditModal={onOpen}/>
                    })
                }
            </div>
            <div className={css.action_btn}>
                <AddAddress onOpen={onOpen}/>
                {
                    addressList.length && <SendButton title={'approve'} onClick={() => activeAddress(activeAddressCart)}/>
                }
            </div>
            <FormModal open={open} onClose={onClose} />
            <DeleteModal open={openDeleteModal} onClose={closeDeleteModal} deleteAddress={deleteAddress} data={deleteModalData}/>
        </div>
    )
}

export default ObtainingDelivery









