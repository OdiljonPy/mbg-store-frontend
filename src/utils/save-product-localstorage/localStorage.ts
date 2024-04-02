
import {IProduct} from "@/data-types/products/common";

export const getLocaleStorage = ():IProduct[] | undefined => {
    if (typeof window === 'undefined') {
        return undefined; // SSR, do not attempt to access localStorage
    }

    try {
        const serializedState = localStorage.getItem('basket');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveLocalStorage = (state:IProduct[]) => {
    if (typeof window === 'undefined') {
        return; // SSR, do not attempt to access localStorage
    }

    try {

        const serializedState = JSON.stringify(state);
        localStorage.setItem('basket', serializedState);
    } catch {
        // Ignore write errors or handle them as needed
    }
};
