import {Map} from "@pbe/react-yandex-maps";

interface props {

}

const AddressMap = (props: props) => {
    return (
        <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} />

    );
};

export default AddressMap;