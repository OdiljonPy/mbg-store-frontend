import {useState} from "react";

export default function useCustomCollapse ( ) {
    const [open, setOpen] = useState<boolean>(false)

    const onToggle = () => setOpen((prev) => !prev)

    return {open, onToggle}
}