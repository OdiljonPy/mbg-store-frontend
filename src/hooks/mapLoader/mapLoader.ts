import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";


export function UseMapLoader() {

    const [mapComponents, setMapComponents] = useState<any>()
    const [zoomComponent, setZoomComponent] = useState<any>()

    useEffect(() => {
        async function loader() {
            const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
            const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
            const items =
                reactify.module(ymaps3);
            const {YMapZoomControl} = reactify.module(await ymaps3.import('@yandex/ymaps3-controls@0.0.1'));
            setMapComponents({
                ...items
            })
            setZoomComponent(YMapZoomControl)
        }

        loader()
    }, [])

    return [mapComponents, zoomComponent]

}