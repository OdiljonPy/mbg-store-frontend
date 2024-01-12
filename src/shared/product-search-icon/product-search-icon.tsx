import React, {PropsWithChildren} from 'react';
import css from './product-search-icon.module.css'


const ProductSearchIcon = ({children}: PropsWithChildren) => {
    return (
        <div className={css.icon}>
            {children}
        </div>
    );
};

export default ProductSearchIcon;