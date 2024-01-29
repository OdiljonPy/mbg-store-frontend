import '@/styles/globals.css'
import '@/styles/roots.css'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/layout/layout";
import nextI18NextConfig from '@/../next-i18next.config.js'
import {appWithTranslation, UserConfig} from "next-i18next";

const emptyInitialI18NextConfig: UserConfig = {
    i18n: {
        defaultLocale: nextI18NextConfig.i18n.defaultLocale,
        locales: nextI18NextConfig.i18n.locales,
    },
};


function App({Component, pageProps}: AppProps) {
    return (<Layout>
        <NextNProgress color={`#39B969`}
                       startPosition={0.3}
                       stopDelayMs={200}
                       height={8}
                       showOnShallow={true}/>
        <Component {...pageProps} /></Layout>)
}


export default appWithTranslation(App, emptyInitialI18NextConfig)

