"use client";
import React, {KeyboardEventHandler, useEffect, useState} from 'react';
import css from './products-search.module.css'
import {useTranslations} from 'next-intl';
import {raleway} from "@/constants/fonts/fonts";
import {ConfigProvider, Dropdown, MenuProps} from "antd";
import {useProductSearch} from "@/layout/components/header/main-header/hooks/use-product-search";
import useDebounce from "@/hooks/use-debounce";
import ProductResult from "@/layout/components/header/main-header/components/product-result/product-result";
import {ICategoryItemGeneral} from "@/layout/components/header/main-header/data-types/category";
import ProductSearchIcon from "@/components/shared/product-search-icon/product-search-icon";
import {useRouter} from "next/router";
import {fetchSearchKey} from "@/slices/product/productSlices";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";


interface props {

}


const ProductsSearch = (props: props) => {
    const t = useTranslations()
    const {push, isReady, query} = useRouter()
    const {product_search,loading} =  useSelector((state:RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>()

    const {focused, onFocused, searchText, onChange, onBlur, onClearValue} = useProductSearch()

    const [products,setProducts] = useState<ICategoryItemGeneral[]>(
        [{
            title: 'бумажное полотенце',
            id: 2
        }, {
            title: 'шампунь',
            id: 3
        }, {
            title: 'пена для бритья',
            id: 4
        }, {
            title: 'шоколад',
            id: 5
        },]
    )


    const debouncedValue = useDebounce(searchText, 500)

    useEffect(() => {
        if (debouncedValue) {
            dispatch(fetchSearchKey(searchText))
        }
    }, [debouncedValue])

    useEffect(() => {
        const searchKey:ICategoryItemGeneral[] = []

             product_search?.map((el:string,idx:number) =>{
              return  searchKey.push({ title: el,id:idx+1})
            })
        setProducts((prevState) => prevState = searchKey)
    }, [product_search]);

    const onSearch = () => {
        if (searchText.length) {
            push({
                pathname: '/products',
                query: {
                    ...query,
                    search: searchText,
                    sort: 'popular'
                }
            }, undefined)
        }
    }

    const onClearInput = () =>{
        onClearValue()
        push({
            pathname: '/products',
            query: {
                ...query,
                search: '',
                sort: 'popular'
            }
        }, undefined)
    }

    const handleWithKey = (e:any)=>{
        if(e.code === 'Enter' && searchText){
            onSearch()
        }
    }

    const items: MenuProps['items'] = [
        {
            label: <h4 className={css.title}>
                {t('search.often')}
            </h4>,
            key: '0'
        },

        ...products?.map((item) => ({
              label: <ProductResult item={item} loading={loading}/>,
              key: item.id,
              icon: <ProductSearchIcon>
                  <svg width="14" height="14" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M20.0308 18.4694L15.3368 13.7762C16.6973 12.1428 17.3757 10.0478 17.2309 7.92694C17.0861 5.80607 16.1293 3.82268 14.5593 2.38935C12.9894 0.95602 10.9274 0.183113 8.80212 0.231413C6.67687 0.279713 4.65205 1.1455 3.14888 2.64867C1.64571 4.15184 0.779927 6.17666 0.731627 8.30191C0.683327 10.4272 1.45623 12.4892 2.88956 14.0591C4.32289 15.629 6.30629 16.5859 8.42715 16.7307C10.548 16.8755 12.6431 16.1971 14.2765 14.8366L18.9696 19.5306C19.0393 19.6003 19.122 19.6556 19.213 19.6933C19.3041 19.731 19.4017 19.7504 19.5002 19.7504C19.5988 19.7504 19.6963 19.731 19.7874 19.6933C19.8784 19.6556 19.9612 19.6003 20.0308 19.5306C20.1005 19.4609 20.1558 19.3782 20.1935 19.2872C20.2312 19.1961 20.2506 19.0985 20.2506 19C20.2506 18.9015 20.2312 18.8039 20.1935 18.7128C20.1558 18.6218 20.1005 18.5391 20.0308 18.4694ZM2.25021 8.5C2.25021 7.16498 2.64609 5.85993 3.38779 4.7499C4.12949 3.63987 5.1837 2.7747 6.4171 2.26381C7.6505 1.75292 9.0077 1.61925 10.3171 1.8797C11.6264 2.14015 12.8292 2.78302 13.7732 3.72703C14.7172 4.67103 15.3601 5.87377 15.6205 7.18314C15.881 8.49251 15.7473 9.84971 15.2364 11.0831C14.7255 12.3165 13.8603 13.3707 12.7503 14.1124C11.6403 14.8541 10.3352 15.25 9.00021 15.25C7.21061 15.248 5.49488 14.5362 4.22944 13.2708C2.96399 12.0053 2.2522 10.2896 2.25021 8.5Z"
                          fill="#999999"/>
                  </svg>
              </ProductSearchIcon>
          }))

    ]

    if (!isReady) return

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
            <Dropdown menu={{items}} trigger={['hover']} >
                <div className={`${css.search} ${focused ? css.focused : ""}`}>
                    <div className={css.inputWrapper}>
                        <input onKeyUp={handleWithKey} onChange={onChange} value={searchText} onFocus={onFocused} onBlur={onBlur}
                               className={`${css.input} ${raleway.className}`} type={'search'}
                               placeholder={t('search.placeholder')}/>
                        <svg className={`${css.icon} ${searchText.length ? css.show : ''}`} onClick={onClearInput} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.7807 13.7194C14.8504 13.789 14.9056 13.8718 14.9433 13.9628C14.9811 14.0539 15.0005 14.1514 15.0005 14.25C15.0005 14.3485 14.9811 14.4461 14.9433 14.5372C14.9056 14.6282 14.8504 14.7109 14.7807 14.7806C14.711 14.8503 14.6283 14.9056 14.5372 14.9433C14.4462 14.981 14.3486 15.0004 14.2501 15.0004C14.1515 15.0004 14.0539 14.981 13.9629 14.9433C13.8718 14.9056 13.7891 14.8503 13.7194 14.7806L7.50005 8.5603L1.28068 14.7806C1.13995 14.9213 0.949074 15.0004 0.750051 15.0004C0.551028 15.0004 0.360156 14.9213 0.219426 14.7806C0.0786953 14.6399 -0.000366207 14.449 -0.000366211 14.25C-0.000366215 14.051 0.0786953 13.8601 0.219426 13.7194L6.43974 7.49999L0.219426 1.28061C0.0786953 1.13988 -0.000366211 0.949013 -0.000366211 0.74999C-0.000366211 0.550967 0.0786953 0.360095 0.219426 0.219365C0.360156 0.0786343 0.551028 -0.000427246 0.750051 -0.000427246C0.949074 -0.000427246 1.13995 0.0786343 1.28068 0.219365L7.50005 6.43968L13.7194 0.219365C13.8602 0.0786343 14.051 -0.00042725 14.2501 -0.000427246C14.4491 -0.000427242 14.6399 0.0786343 14.7807 0.219365C14.9214 0.360095 15.0005 0.550967 15.0005 0.74999C15.0005 0.949013 14.9214 1.13988 14.7807 1.28061L8.56036 7.49999L14.7807 13.7194Z"
                                fill="#C2C2C2"/>
                        </svg>

                    </div>
                    <button onClick={onSearch} className={css.btn}>
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