import React from 'react';
import useCustomCollapse from "@/components/pages/about/faq/hooks/useCustomCollapse";
import Header from "@/components/pages/product/wrapper/components/info/description/about-product/header/header";
import Body from "@/components/pages/product/wrapper/components/info/description/about-product/body/body";

interface props {

}

const AboutProduct = (props: props) => {
    const {open, onToggle} = useCustomCollapse()

    return (
        <>
            <Header open={open} onToggle={onToggle}/>
            <Body open={open}>
                <p>
                    blablabla
                </p>
            </Body>
        </>
    );
};

export default AboutProduct;