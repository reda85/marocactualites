import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useAmp } from 'next/amp'
//import Script from 'next/script'
import { GA_TRACKING_ID , DATA_CA_ID} from '../lib/gtag'
import AmpAnalytics from '../components/amp/AmpAnalytics'
import AmpAdSense from '../components/amp/AmpAdSense'
import AmpForm from '../components/amp/AmpForm'


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
         
          {/* AMP - Google Analytics */}
          <AmpWrap
            ampOnly={
                <div>
                    
                    <AmpForm  /> 
            <AmpAdSense type="adsense" data_ca_id = {DATA_CA_ID}> 


            </AmpAdSense>
              <AmpAnalytics
                type="googleanalytics"
                script={{
                  vars: {
                    account: GA_TRACKING_ID,
                    gtag_id: GA_TRACKING_ID,
                    config: {
                      [GA_TRACKING_ID]: { groups: 'default' },
                    },
                  },
                  triggers: {
                    trackPageview: {
                      on: 'visible',
                      request: 'pageview',
                    },
                  },
                }}
              />
              </div>
            }
            
          />

          {/* Non-AMP - Google Analytics */}
          <AmpWrap
            nonAmp={
              <>
              <script data-ad-client="ca-pub-1131650691837357" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
                


              </>
            }
          />
      
        
          
        </body>
        
      </Html>
    )
  }
}
