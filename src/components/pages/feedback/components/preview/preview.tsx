import React from 'react';
import css from './preview.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import mikado from '@/../public/images/products/mikado.png'

interface props {

}

const Preview = (props: props) => {
    return (
        <div className={css.preview}>
            <ResponsiveImage src={mikado} alt={''}/>
        </div>
    );
};

export default Preview;