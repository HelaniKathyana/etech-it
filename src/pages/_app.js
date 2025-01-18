import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Drift from "react-driftjs";
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-16576091880"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16576091880');
                    `,
                }}
            />
            <Drift appId="gwehber5pp8p" />
            <WithNinetailedProvider>
                <Component {...pageProps} />
            </WithNinetailedProvider>
        </>
    );
}
