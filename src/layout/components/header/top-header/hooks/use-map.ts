import {useState} from "react";

export function useMap() {
    const mapOptions: any = {
        modules: ["geocode", "SuggestView"],
        defaultOptions: {suppressMapOpenBlock: true},
        width: 600,
        height: 400,
    };

    const geolocationOptions: any = {
        defaultOptions: {maxWidth: 128},
        defaultData: {content: "Determine"},
    };

    const initialState: any = {
        title: "",
        center: [41.373433, 69.268657],
        zoom: 12,
    };
    const [state, setState] = useState({...initialState});
    const [mapConstructor, setMapConstructor] = useState<any>(null);


    return {mapOptions, geolocationOptions, initialState, state, mapConstructor, setState, setMapConstructor}
}