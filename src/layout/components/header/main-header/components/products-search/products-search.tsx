import React, {useEffect} from 'react';
import css from './products-search.module.css'
import {useTranslation} from "next-i18next";
import {raleway} from "@/constants/fonts";
import {ConfigProvider, Dropdown, MenuProps} from "antd";
import {UseProductSearch} from "@/layout/components/header/main-header/hooks/use-product-search";
import {useModal} from "@/hooks/use-modal";
import useDebounce from "@/hooks/use-debounce";
import ProductResult from "@/layout/components/header/main-header/components/product-result/product-result";
import {ICategoryItem} from "@/src/layout/components/header/main-header/data-types/data-types";

interface props {

}



const ProductsSearch = (props: props) => {
    const {open, onOpen, onClose} = useModal()
    const {focused, onFocused, searchText, onChange, onBlur} = UseProductSearch({onOpen, onClose})
    const {t} = useTranslation()

    const products: ICategoryItem[] = ['бумажное полотенце', 'шампунь', 'пена для бритья', 'шоколад']

    const debouncedValue = useDebounce(searchText, 500)

    useEffect(() => {
        if (debouncedValue) {
            onOpen()
        }
    }, [debouncedValue])


    const onSearch = () => {

    }


    const items: MenuProps['items'] = [
        {
            label: <h4 className={css.title}>
                {t('search.often')}
            </h4>,
            key: '1'
        },
        ...products?.map((item) => ({
            label: <ProductResult item={item}/>
        }))
    ]

    return (
        <ConfigProvider
            theme={{
                components: {
                    Dropdown: {
                        paddingBlock: 10
                    }
                },
                token: {
                    controlItemBgHover: '#F1FAF4'
                }
            }}
        >
            <Dropdown menu={{items}} open={open} overlayClassName={css.dropdown}>
                <div className={`${css.search} ${focused ? css.focused : ""}`}>
                    <div className={css.inputWrapper}>
                        <input onChange={onChange} value={searchText} onFocus={onFocused} onBlur={onBlur}
                               className={`${css.input} ${raleway.className}`} type={'search'}
                               placeholder={t('search.placeholder')}/>
                    </div>
                    <button className={css.btn}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.0308 18.4694L15.3368 13.7762C16.6973 12.1428 17.3757 10.0478 17.2309 7.92694C17.0861 5.80607 16.1293 3.82268 14.5593 2.38935C12.9894 0.95602 10.9274 0.183113 8.80212 0.231413C6.67687 0.279713 4.65205 1.1455 3.14888 2.64867C1.64571 4.15184 0.779927 6.17666 0.731627 8.30191C0.683327 10.4272 1.45623 12.4892 2.88956 14.0591C4.32289 15.629 6.30629 16.5859 8.42715 16.7307C10.548 16.8755 12.6431 16.1971 14.2765 14.8366L18.9696 19.5306C19.0393 19.6003 19.122 19.6556 19.213 19.6933C19.3041 19.731 19.4017 19.7504 19.5002 19.7504C19.5988 19.7504 19.6963 19.731 19.7874 19.6933C19.8784 19.6556 19.9612 19.6003 20.0308 19.5306C20.1005 19.4609 20.1558 19.3782 20.1935 19.2872C20.2312 19.1961 20.2506 19.0985 20.2506 19C20.2506 18.9015 20.2312 18.8039 20.1935 18.7128C20.1558 18.6218 20.1005 18.5391 20.0308 18.4694ZM2.25021 8.5C2.25021 7.16498 2.64609 5.85993 3.38779 4.7499C4.12949 3.63987 5.1837 2.7747 6.4171 2.26381C7.6505 1.75292 9.0077 1.61925 10.3171 1.8797C11.6264 2.14015 12.8292 2.78302 13.7732 3.72703C14.7172 4.67103 15.3601 5.87377 15.6205 7.18314C15.881 8.49251 15.7473 9.84971 15.2364 11.0831C14.7255 12.3165 13.8603 13.3707 12.7503 14.1124C11.6403 14.8541 10.3352 15.25 9.00021 15.25C7.21061 15.248 5.49488 14.5362 4.22944 13.2708C2.96399 12.0053 2.2522 10.2896 2.25021 8.5Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>

            </Dropdown>
        </ConfigProvider>
    );
};

export default ProductsSearch;