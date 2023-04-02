import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useAmp } from 'next/amp'
//import Script from 'next/script'



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
         
         
      
        
          
        </body>
        
      </Html>
    )
  }
}
