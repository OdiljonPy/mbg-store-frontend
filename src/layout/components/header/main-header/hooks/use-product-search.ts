import {ChangeEvent, useState} from "react";


interface IProductSearch {
    onOpen: () => void
    onClose: () => void
}

export function UseProductSearch({
                                     onOpen,
                                     onClose
                                 }: IProductSearch) {
    const [focused, setFocused] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const onFocused = () => {
        setFocused(true)
        onOpen()
    }

    const onBlur = () => {
        setFocused(false)
        onClose()
    }


    return {focused, searchText, onFocused, onBlur, onChange}
}