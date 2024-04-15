"use client"

import css from './actions.module.css'
import {useTranslations} from "next-intl";
import {raleway} from "@/constants/fonts/fonts";
import React, {Dispatch, SetStateAction} from "react";
import ProductActionBtn from "@/components/shared/product-action-btn/product-action-btn";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {addProduct, removeProduct} from "@/slices/basket/basketSlice";
import {IProduct} from "@/data-types/products/common";
import AddToFav from "@/components/shared/add-to-fav/add-to-fav";

interface props {
    product:IProduct
    count: number
    setCount: Dispatch<SetStateAction<number>>
}

const  Actions = ({setCount, count,product}: props) => {
    const {id,available} = product
    const dispatch = useDispatch<AppDispatch>()

    const t = useTranslations()

    const onDecrement = () => {
        console.log(count,"count" , available, "avialib")
        if(count == 1){
            setCount((prev) => prev - 1)
            dispatch(removeProduct(id))
        }
        else if (count > 1) {
            setCount((prev) => prev - 1)
            dispatch(addProduct({quantity : -1,product}))
        }
    }
    const onIncrement = () => {
        setCount((prev) => prev + 1)
        dispatch(addProduct({quantity: 1,product}))
    }

    return (
        <div className={css.actions}>
            <div className={css.action}>
                <div className={css.cardAdder}>
                    <ProductActionBtn classNames={css.decrement} img={count === 1 ?
                        <svg width="22" height="22" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M43.625 8.25H34.25V6.375C34.25 4.88316 33.6574 3.45242 32.6025 2.39752C31.5476 1.34263 30.1168 0.75 28.625 0.75H17.375C15.8832 0.75 14.4524 1.34263 13.3975 2.39752C12.3426 3.45242 11.75 4.88316 11.75 6.375V8.25H2.375C1.87772 8.25 1.40081 8.44754 1.04918 8.79918C0.697544 9.15081 0.5 9.62772 0.5 10.125C0.5 10.6223 0.697544 11.0992 1.04918 11.4508C1.40081 11.8025 1.87772 12 2.375 12H4.25V45.75C4.25 46.7446 4.64509 47.6984 5.34835 48.4016C6.05161 49.1049 7.00544 49.5 8 49.5H38C38.9946 49.5 39.9484 49.1049 40.6516 48.4016C41.3549 47.6984 41.75 46.7446 41.75 45.75V12H43.625C44.1223 12 44.5992 11.8025 44.9508 11.4508C45.3025 11.0992 45.5 10.6223 45.5 10.125C45.5 9.62772 45.3025 9.15081 44.9508 8.79918C44.5992 8.44754 44.1223 8.25 43.625 8.25ZM15.5 6.375C15.5 5.87772 15.6975 5.40081 16.0492 5.04918C16.4008 4.69754 16.8777 4.5 17.375 4.5H28.625C29.1223 4.5 29.5992 4.69754 29.9508 5.04918C30.3025 5.40081 30.5 5.87772 30.5 6.375V8.25H15.5V6.375ZM38 45.75H8V12H38V45.75ZM19.25 21.375V36.375C19.25 36.8723 19.0525 37.3492 18.7008 37.7008C18.3492 38.0525 17.8723 38.25 17.375 38.25C16.8777 38.25 16.4008 38.0525 16.0492 37.7008C15.6975 37.3492 15.5 36.8723 15.5 36.375V21.375C15.5 20.8777 15.6975 20.4008 16.0492 20.0492C16.4008 19.6975 16.8777 19.5 17.375 19.5C17.8723 19.5 18.3492 19.6975 18.7008 20.0492C19.0525 20.4008 19.25 20.8777 19.25 21.375ZM30.5 21.375V36.375C30.5 36.8723 30.3025 37.3492 29.9508 37.7008C29.5992 38.0525 29.1223 38.25 28.625 38.25C28.1277 38.25 27.6508 38.0525 27.2992 37.7008C26.9475 37.3492 26.75 36.8723 26.75 36.375V21.375C26.75 20.8777 26.9475 20.4008 27.2992 20.0492C27.6508 19.6975 28.1277 19.5 28.625 19.5C29.1223 19.5 29.5992 19.6975 29.9508 20.0492C30.3025 20.4008 30.5 20.8777 30.5 21.375Z"
                                fill="#232323"/>
                        </svg>
                        : <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.5 1C21.5 1.23206 21.4078 1.45462 21.2437 1.61872C21.0796 1.78281 20.8571 1.875 20.625 1.875H1.375C1.14294 1.875 0.920376 1.78281 0.756282 1.61872C0.592187 1.45462 0.5 1.23206 0.5 1C0.5 0.767936 0.592187 0.545376 0.756282 0.381282C0.920376 0.217187 1.14294 0.125 1.375 0.125H20.625C20.8571 0.125 21.0796 0.217187 21.2437 0.381282C21.4078 0.545376 21.5 0.767936 21.5 1Z"
                                fill="#232323"/>
                        </svg>
                    } onClick={onDecrement}/>
                    <p className={css.count}>
                        {count}
                    </p>
                    <ProductActionBtn
                        classNames={css.increment}
                        img={count > 0 ?
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.5 11C21.5 11.2321 21.4078 11.4546 21.2437 11.6187C21.0796 11.7828 20.8571 11.875 20.625 11.875H11.875V20.625C11.875 20.8571 11.7828 21.0796 11.6187 21.2437C11.4546 21.4078 11.2321 21.5 11 21.5C10.7679 21.5 10.5454 21.4078 10.3813 21.2437C10.2172 21.0796 10.125 20.8571 10.125 20.625V11.875H1.375C1.14294 11.875 0.920376 11.7828 0.756282 11.6187C0.592187 11.4546 0.5 11.2321 0.5 11C0.5 10.7679 0.592187 10.5454 0.756282 10.3813C0.920376 10.2172 1.14294 10.125 1.375 10.125H10.125V1.375C10.125 1.14294 10.2172 0.920376 10.3813 0.756282C10.5454 0.592187 10.7679 0.5 11 0.5C11.2321 0.5 11.4546 0.592187 11.6187 0.756282C11.7828 0.920376 11.875 1.14294 11.875 1.375V10.125H20.625C20.8571 10.125 21.0796 10.2172 21.2437 10.3813C21.4078 10.5454 21.5 10.7679 21.5 11Z"
                                    fill="white"/>
                            </svg>
                            : <svg width="28" height="28" viewBox="0 0 26 27" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.532 5.89883C25.444 5.79352 25.334 5.70882 25.2096 5.6507C25.0853 5.59259 24.9497 5.56248 24.8125 5.5625H5.90781L5.33477 2.41484C5.25628 1.98281 5.02865 1.59204 4.69157 1.31064C4.35449 1.02923 3.92934 0.875063 3.49023 0.875H1.375C1.12636 0.875 0.887903 0.973772 0.712087 1.14959C0.536272 1.3254 0.4375 1.56386 0.4375 1.8125C0.4375 2.06114 0.536272 2.2996 0.712087 2.47541C0.887903 2.65123 1.12636 2.75 1.375 2.75H3.48438L6.47969 19.1902C6.56792 19.6778 6.78339 20.1334 7.1043 20.5109C6.66138 20.9246 6.3417 21.4529 6.18069 22.0372C6.01969 22.6215 6.02365 23.2389 6.19214 23.8211C6.36064 24.4033 6.68708 24.9274 7.13526 25.3354C7.58345 25.7434 8.13588 26.0192 8.73128 26.1324C9.32668 26.2456 9.9418 26.1917 10.5084 25.9766C11.075 25.7615 11.571 25.3937 11.9414 24.914C12.3117 24.4342 12.542 23.8613 12.6066 23.2587C12.6712 22.6561 12.5677 22.0474 12.3074 21.5H17.6301C17.4203 21.9391 17.3118 22.4196 17.3125 22.9062C17.3125 23.5552 17.5049 24.1896 17.8655 24.7292C18.226 25.2688 18.7385 25.6894 19.3381 25.9377C19.9376 26.1861 20.5974 26.2511 21.2339 26.1245C21.8704 25.9978 22.4551 25.6853 22.9139 25.2264C23.3728 24.7676 23.6853 24.1829 23.812 23.5464C23.9386 22.9099 23.8736 22.2501 23.6252 21.6506C23.3769 21.051 22.9563 20.5385 22.4167 20.178C21.8771 19.8174 21.2427 19.625 20.5938 19.625H9.24648C9.02693 19.625 8.81436 19.5479 8.64582 19.4072C8.47728 19.2665 8.36346 19.0711 8.32422 18.8551L7.95273 16.8125H21.5465C22.2051 16.8124 22.8429 16.5811 23.3485 16.159C23.8541 15.7369 24.1955 15.1508 24.3133 14.5027L25.7383 6.66758C25.7624 6.53216 25.7564 6.39308 25.7208 6.26023C25.6851 6.12737 25.6207 6.00399 25.532 5.89883ZM10.75 22.9062C10.75 23.1844 10.6675 23.4563 10.513 23.6875C10.3585 23.9188 10.1389 24.099 9.8819 24.2055C9.62494 24.3119 9.34219 24.3397 9.0694 24.2855C8.79662 24.2312 8.54605 24.0973 8.34938 23.9006C8.15271 23.704 8.01878 23.4534 7.96452 23.1806C7.91026 22.9078 7.93811 22.6251 8.04454 22.3681C8.15098 22.1111 8.33122 21.8915 8.56248 21.737C8.79374 21.5825 9.06562 21.5 9.34375 21.5C9.71671 21.5 10.0744 21.6482 10.3381 21.9119C10.6018 22.1756 10.75 22.5333 10.75 22.9062ZM22 22.9062C22 23.1844 21.9175 23.4563 21.763 23.6875C21.6085 23.9188 21.3889 24.099 21.1319 24.2055C20.8749 24.3119 20.5922 24.3397 20.3194 24.2855C20.0466 24.2312 19.796 24.0973 19.5994 23.9006C19.4027 23.704 19.2688 23.4534 19.2145 23.1806C19.1603 22.9078 19.1881 22.6251 19.2945 22.3681C19.401 22.1111 19.5812 21.8915 19.8125 21.737C20.0437 21.5825 20.3156 21.5 20.5938 21.5C20.9667 21.5 21.3244 21.6482 21.5881 21.9119C21.8518 22.1756 22 22.5333 22 22.9062ZM22.4688 14.1676C22.4294 14.3842 22.3151 14.58 22.1458 14.7208C21.9765 14.8616 21.7631 14.9383 21.543 14.9375H7.61172L6.24883 7.4375H23.6887L22.4688 14.1676Z"
                                    fill="#ffffff"/>
                            </svg>
                        }
                        onClick={onIncrement}/>
                </div>
               <AddToFav product={product}/>
            </div>
            <button type={'button'} className={css.remove} onClick={() => dispatch(removeProduct(id))}>
                <svg width="24" height="24" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={css.path}
                          d="M43.625 8.25H34.25V6.375C34.25 4.88316 33.6574 3.45242 32.6025 2.39752C31.5476 1.34263 30.1168 0.75 28.625 0.75H17.375C15.8832 0.75 14.4524 1.34263 13.3975 2.39752C12.3426 3.45242 11.75 4.88316 11.75 6.375V8.25H2.375C1.87772 8.25 1.40081 8.44754 1.04918 8.79918C0.697544 9.15081 0.5 9.62772 0.5 10.125C0.5 10.6223 0.697544 11.0992 1.04918 11.4508C1.40081 11.8025 1.87772 12 2.375 12H4.25V45.75C4.25 46.7446 4.64509 47.6984 5.34835 48.4016C6.05161 49.1049 7.00544 49.5 8 49.5H38C38.9946 49.5 39.9484 49.1049 40.6516 48.4016C41.3549 47.6984 41.75 46.7446 41.75 45.75V12H43.625C44.1223 12 44.5992 11.8025 44.9508 11.4508C45.3025 11.0992 45.5 10.6223 45.5 10.125C45.5 9.62772 45.3025 9.15081 44.9508 8.79918C44.5992 8.44754 44.1223 8.25 43.625 8.25ZM15.5 6.375C15.5 5.87772 15.6975 5.40081 16.0492 5.04918C16.4008 4.69754 16.8777 4.5 17.375 4.5H28.625C29.1223 4.5 29.5992 4.69754 29.9508 5.04918C30.3025 5.40081 30.5 5.87772 30.5 6.375V8.25H15.5V6.375ZM38 45.75H8V12H38V45.75ZM19.25 21.375V36.375C19.25 36.8723 19.0525 37.3492 18.7008 37.7008C18.3492 38.0525 17.8723 38.25 17.375 38.25C16.8777 38.25 16.4008 38.0525 16.0492 37.7008C15.6975 37.3492 15.5 36.8723 15.5 36.375V21.375C15.5 20.8777 15.6975 20.4008 16.0492 20.0492C16.4008 19.6975 16.8777 19.5 17.375 19.5C17.8723 19.5 18.3492 19.6975 18.7008 20.0492C19.0525 20.4008 19.25 20.8777 19.25 21.375ZM30.5 21.375V36.375C30.5 36.8723 30.3025 37.3492 29.9508 37.7008C29.5992 38.0525 29.1223 38.25 28.625 38.25C28.1277 38.25 27.6508 38.0525 27.2992 37.7008C26.9475 37.3492 26.75 36.8723 26.75 36.375V21.375C26.75 20.8777 26.9475 20.4008 27.2992 20.0492C27.6508 19.6975 28.1277 19.5 28.625 19.5C29.1223 19.5 29.5992 19.6975 29.9508 20.0492C30.3025 20.4008 30.5 20.8777 30.5 21.375Z"
                          fill="#999999"/>
                </svg>
                <span className={`${css.text} ${raleway.className}`}>
                    {t('remove')}
                </span>
            </button>
        </div>
    );
};

export default Actions;