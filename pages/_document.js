import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useAmp } from 'next/amp'

import Script from 'next/script'
import { GA_TRACKING_ID , DATA_CA_ID} from '../lib/gtag'
import { Adsense } from '@ctrl/react-adsense'


function AmpWrap({ ampOnly, nonAmp }) {
  const isAmp = useAmp()
  if (ampOnly) return isAmp && ampOnly
  return !isAmp && nonAmp
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
 {/*       
<script type="text/javascript" dangerouslySetInnerHTML={{__html: `
  const configSFBXAppConsent = {
    appKey: '475a79d8-ca2c-4bbf-8ca3-290df67295f6'
  }`
      }}>
</script>
<script src="https://cdn.appconsent.io/loader-clear.js" defer async></script>
    */}    
       <Script 
    id="adsbygoogle-init" 
    strategy="beforeInteractive" 
    crossOrigin="anonymous"
   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1131650691837357"></Script>


        <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}');
                    `,
                  }}
                />
 
       
            
        
        <body >
          
          <div>
      
   


</div>
          <Main />
          <NextScript />
         
         
      
        
          
        </body>
        
      </Html>
    )
  }
}
