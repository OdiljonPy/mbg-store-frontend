import React from 'react';
import css from './preview.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import mikado from '@/../public/images/products/mikado.png'

interface props {
    img?:string
}

const Preview = ({img}: props) => {
    return (
        <div className={css.preview}>
            {
                img && <ResponsiveImage src={img} alt={''}/>
            }
        </div>
    );
};

export default Preview;