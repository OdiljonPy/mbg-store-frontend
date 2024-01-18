import React, {PropsWithChildren} from 'react';
import useCustomCollapse from "@/components/pages/about/faq/hooks/useCustomCollapse";
import Header from "@/components/pages/products/filters/filter-collapse/header/header";
import Body from "@/components/pages/products/filters/filter-collapse/body/body";

interface props {
    title: string

}

const FilterCollapse = ({title, children}: PropsWithChildren<props>) => {

    const {open, onToggle} = useCustomCollapse()
    return (
        <>
            <Header title={title} open={open} onToggle={onToggle}/>
            <Body open={open}>
                {children}
            </Body>
        </>
    );
};

export default FilterCollapse;