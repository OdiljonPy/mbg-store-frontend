import Document, {DocumentProps, Head, Html, Main, NextScript} from 'next/document';
import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';
import type {DocumentContext} from 'next/document';
import Script from 'next/script';
import i18nextConfig from '../../next-i18next.config'


const MAP_API_KEY = process.env.NEXT_PUBLIC_YANDEX_KEY;

const MyDocument = ({__NEXT_DATA__}: DocumentProps) => {
    const currentLocale =
        __NEXT_DATA__.locale ??
        i18nextConfig.i18n.defaultLocale
    return (<Html lang={currentLocale}>
        <Head>
            <Script
                src={`https://api-maps.yandex.ru/v3/?apikey=${MAP_API_KEY}&lang=ru-RU`}
                type="module"
                strategy="beforeInteractive"
            />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>)
};


MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{__html: style}}/>
            </>
        ),
    };
};


export default MyDocument;
