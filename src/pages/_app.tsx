import '@/styles/globals.css'
import '@/styles/roots.css'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from "@/layout/layout";
import {NextIntlClientProvider, IntlProvider} from 'next-intl';
import {useRouter} from "next/router";


function App({Component, pageProps}: AppProps) {
    const {locale} = useRouter()
    return (
        <IntlProvider
            locale={locale!}
            messages={pageProps.messages}
            onError={() => {}}
            timeZone={'Asia/Tashkent'}
        >
            <Layout>
                <NextNProgress color={`#39B969`}
                               startPosition={0.3}
                               stopDelayMs={200}
                               height={8}
                               showOnShallow={true}/>
                <Component {...pageProps} /></Layout>
        </IntlProvider>
    )

}


export default App

