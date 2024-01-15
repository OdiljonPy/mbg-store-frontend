import React from 'react';
import useCustomCollapse from "@/components/pages/about/faq/hooks/useCustomCollapse";
import {IQuestion} from "@/components/pages/about/faq/data-types/faq";
import Header from "@/components/pages/about/faq/custom-collapse/header/header";
import Body from "@/components/pages/about/faq/custom-collapse/body/body";

interface props {
    item: IQuestion
}

const CustomCollapse = ({item}: props) => {
    const {open, onToggle} = useCustomCollapse()
    return (
        <>
            <Header item={item} open={open} onToggle={onToggle}/>
            <Body answer={item.answer} open={open}/>
        </>
    );
};

export default CustomCollapse;