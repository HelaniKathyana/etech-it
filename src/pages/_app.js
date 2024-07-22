import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Script from 'next/script'
import Drift from "react-driftjs";
 
export default function MyApp({ Component, pageProps }) {
    return (
    <>
    <Drift appId="2g8vxhkczgcv" />
    <WithNinetailedProvider>
            <Component {...pageProps} />
        </WithNinetailedProvider>
    </>
      
        
    );
}
