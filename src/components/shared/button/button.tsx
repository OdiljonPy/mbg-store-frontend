import React from 'react';
import css from "./button.module.css"

interface Props {
    readonly children: string,
    onClick?: () => void,
    type?: string,
    disabled?: boolean
}

function Button({children, onClick, type = 'primary', disabled = false}: Props) {
    return (
        <button disabled={disabled} className={`${type === "primary" ? css.primary : css.outline}`}
                onClick={onClick}>{children}</button>
    );
}

export default Button;