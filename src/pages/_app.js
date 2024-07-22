import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Script from 'next/script'
 
export default function MyApp({ Component, pageProps }) {
    return (
        <>
      <Script
        src="./drift.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
      <WithNinetailedProvider>
            <Component {...pageProps} />
        </WithNinetailedProvider>
    </>
        
    );
}
