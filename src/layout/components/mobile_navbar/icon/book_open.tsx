import css from "./icon.module.css"
import Link from "next/link";
import {raleway} from "@/constants/fonts/fonts";
import {Badge} from "antd";
import React from "react";
import {usePathname} from "next/navigation";
import badge from "@/components/shared/badge/badge";
import {IBadge} from "@/layout/components/header/main-header/data-types/badge";

interface props{
    path:string
}
const BookOpen = ({path}:props) =>{
    const pathname = usePathname()
    return(

    <Link href='/catalog?filters=\' className={`${css.menuItem} ${pathname === path ? css.active :''}  ${raleway.className}`}>
        {/*<Badge count={count} style={{backgroundColor: '#39B969', borderColor: 'transparent'}}>*/}
        {/*    <span className={css.icon}>*/}
        {/*    {icon}*/}
        {/*    </span>*/}
        {/*</Badge>*/}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5 5.25H17.5C16.8208 5.25 16.1509 5.40813 15.5434 5.71188C14.9359 6.01563 14.4075 6.45664 14 7C13.5925 6.45664 13.0641 6.01563 12.4566 5.71188C11.8491 5.40813 11.1792 5.25 10.5 5.25H3.5C3.03587 5.25 2.59075 5.43437 2.26256 5.76256C1.93437 6.09075 1.75 6.53587 1.75 7V21C1.75 21.4641 1.93437 21.9092 2.26256 22.2374C2.59075 22.5656 3.03587 22.75 3.5 22.75H10.5C11.1962 22.75 11.8639 23.0266 12.3562 23.5188C12.8484 24.0111 13.125 24.6788 13.125 25.375C13.125 25.6071 13.2172 25.8296 13.3813 25.9937C13.5454 26.1578 13.7679 26.25 14 26.25C14.2321 26.25 14.4546 26.1578 14.6187 25.9937C14.7828 25.8296 14.875 25.6071 14.875 25.375C14.875 24.6788 15.1516 24.0111 15.6438 23.5188C16.1361 23.0266 16.8038 22.75 17.5 22.75H24.5C24.9641 22.75 25.4092 22.5656 25.7374 22.2374C26.0656 21.9092 26.25 21.4641 26.25 21V7C26.25 6.53587 26.0656 6.09075 25.7374 5.76256C25.4092 5.43437 24.9641 5.25 24.5 5.25ZM10.5 21H3.5V7H10.5C11.1962 7 11.8639 7.27656 12.3562 7.76884C12.8484 8.26113 13.125 8.92881 13.125 9.625V21.875C12.3684 21.3057 11.4469 20.9985 10.5 21ZM24.5 21H17.5C16.5531 20.9985 15.6316 21.3057 14.875 21.875V9.625C14.875 8.92881 15.1516 8.26113 15.6438 7.76884C16.1361 7.27656 16.8038 7 17.5 7H24.5V21Z" fill="#C2C2C2"/>
        </svg>
    </Link>
    )
}

export default BookOpen