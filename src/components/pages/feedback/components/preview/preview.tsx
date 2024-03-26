import React from 'react';
import css from './preview.module.css'
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import mikado from '@/../public/images/products/mikado.png'
import {StaticImageData} from "next/image";

interface props {
    img?:string | StaticImageData
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