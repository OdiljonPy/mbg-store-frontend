import React from 'react';
import css from './address-map.module.css'

import {type LngLat} from '@yandex/ymaps3-types';
import {UseMapLoader} from "@/hooks/mapLoader/mapLoader";


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
    const [mapComponents, zoom] = UseMapLoader()

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapMarker} = mapComponents


    const location = {center: [coordinates.lng, coordinates.lat], zoom: 13};


    console.log(YMap)

    return (
        <div className={css.map}>
            <YMap location={location} className={css.mapInner}>
                <YMapDefaultSchemeLayer/>
                <YMapDefaultFeaturesLayer/>
            </YMap>
        </div>
    );
};

export default AddressMap;