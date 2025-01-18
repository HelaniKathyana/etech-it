import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Drift from "react-driftjs";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Drift appId="gwehber5pp8p" />
            <WithNinetailedProvider>
                <Component {...pageProps} />
            </WithNinetailedProvider>
        </>
    );
}
