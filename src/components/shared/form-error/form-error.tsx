import React, {CSSProperties} from 'react';
import css from './form-error.module.css'
import {raleway} from "@/constants/fonts/fonts";

interface props {
    error?: string,
    style?: CSSProperties | undefined
}

const FormError = ({error, style}: props) => {
    return (
        <p style={style} className={`${css.error} ${raleway.className}`}>
            {error ? error : ""}
        </p>
    );
};

export default FormError;