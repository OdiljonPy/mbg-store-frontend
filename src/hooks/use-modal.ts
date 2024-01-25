import {useState} from "react";




export function useModal(inner?: boolean) {
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => {
        document.body.style.overflow = 'hidden'
        setOpen(true)
    }

    const onClose = () => {
        if (!inner) {
            document.body.style.overflow = 'visible'
        }
        setOpen(false)
    }

    const onToggle = () => {
        setOpen((prev) => {
            if (prev) {
                document.body.style.overflow = 'visible'
            } else {
                document.body.style.overflow = 'hidden'
            }
            return !prev
        })
    }

    return {open, onClose, onOpen, onToggle}
}