import React from 'react';
import css from './address-map.module.css'





interface MapProps {
    coordinates:
        | {
        lat: number;
        lng: number;
    }
        | undefined;
}

const AddressMap = ({
                        coordinates
                    }: MapProps) => {
    if (!coordinates) return null;


    return (
        <div className={css.map}>
          
        </div>
    );
};

export default AddressMap;