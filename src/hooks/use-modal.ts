import {useState} from "react";

export function useModal () {
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => {
        document.body.style.overflow = 'hidden'
        setOpen(true)
    }

    const onClose = () => {
        document.body.style.overflow = 'visible'
        setOpen(false)
    }

    return {open, onClose, onOpen}
}