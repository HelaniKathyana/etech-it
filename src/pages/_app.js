import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Drift from "react-driftjs";
import { GoogleTagManager } from '@next/third-parties/google';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
            <Drift appId="gwehber5pp8p" />
            <WithNinetailedProvider>
                <Component {...pageProps} />
            </WithNinetailedProvider>
        </>
    );
}
