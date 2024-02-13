import {ChangeEvent, useEffect, useState} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";




export function useProductSearch() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const pathname = usePathname()
    const {isReady} = useRouter()
    const [focused, setFocused] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>(search ?? '')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }


    const onClearValue = () => {
        setSearchText('')
    }
    useEffect(() => {
        if (isReady && pathname === '/products') {
            if (search) {
                setSearchText(search)
            } else {
                setSearchText('')
            }
        }
    }, [isReady, searchParams])


    useEffect(() => {
        if (pathname !== '/products') {
            onClearValue()
        }
    }, [pathname])

    const onFocused = () => {
        setFocused(true)
    }

    const onBlur = () => {
        setFocused(false)
    }


    return {focused, searchText, onFocused, onBlur, onChange, onClearValue}
}