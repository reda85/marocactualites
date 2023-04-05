import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useAmp } from 'next/amp'
import Script from 'next/script'
//import Script from 'next/script'
import { GA_TRACKING_ID , DATA_CA_ID} from '../lib/gtag'


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
        <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  strategy="afterInteractive"
/>
<script type="text/javascript" dangerouslySetInnerHTML={{__html: `
  const configSFBXAppConsent = {
    appKey: '475a79d8-ca2c-4bbf-8ca3-290df67295f6'
  }`
      }}>
</script>
<script src="https://cdn.appconsent.io/loader-clear.js" defer async></script>
      
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-1131650691837357"
     data-ad-slot="5304254186"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
 
        <link
              href="https://fonts.googleapis.com/css2?family=Rubik&display=optionnal"
              rel="stylesheet"
            />
             <link
              href="https://fonts.googleapis.com/css2?family=Lora&display=optionnal"
              rel="stylesheet"
            />
        
        <body className='font-Rubik text-medium antialiased'>
          
          <div>
      
   


</div>
          <Main />
          <NextScript />
         
         
      
        
          
        </body>
        
      </Html>
    )
  }
}
