"use client";
import { Provider } from "react-redux";
import { store} from "@/store";
import { ToastProvider } from 'react-toast-notifications';

export function Providers({children} : {children:React.ReactNode}){
    return <ToastProvider>
                <Provider store={store}>
                         {children}
                </Provider>
            </ToastProvider>
}