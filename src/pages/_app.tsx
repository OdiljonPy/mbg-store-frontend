import '@/styles/globals.css'
import '@/styles/roots.css'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/layout/layout";
import {appWithTranslation} from "next-i18next";


function App({Component, pageProps}: AppProps) {
    return (<Layout>
        <NextNProgress color={`#39B969`}
                       startPosition={0.3}
                       stopDelayMs={200}
                       height={8}
                       showOnShallow={true}/>
        <Component {...pageProps} /></Layout>)
}


export default appWithTranslation(App)

