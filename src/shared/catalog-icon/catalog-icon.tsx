import React, {PropsWithChildren} from 'react';
import css from './catalog-icon.module.css'

interface props {

}

const CatalogIcon = ({children}: PropsWithChildren) => {
    return (
        <div className={css.icon}>
            {children}
        </div>
    );
};

export default CatalogIcon;