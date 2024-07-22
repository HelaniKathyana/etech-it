import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Script from 'next/script'
 
export default function Page() {
  return (
    <>
      <Script
        src="./drift.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
    </>
  )
}
export default function MyApp({ Component, pageProps }) {
    return (
        <WithNinetailedProvider>
            <Component {...pageProps} />
        </WithNinetailedProvider>
    );
}
