import React from 'react';
import css from './form-error.module.css'
import {raleway} from "@/constants/fonts";

interface props {
error?: string
}

const FormError = ({error}: props) => {
    return (
        <p className={`${css.error} ${error? css.show : ''} ${raleway.className}`}>
            {error}
        </p>
    );
};

export default FormError;