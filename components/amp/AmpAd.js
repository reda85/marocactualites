import AmpIncludeCustomElement from './AmpIncludeCustomElement'

export default function AmpAdSense(props) {
  return (
    <>
      <AmpIncludeCustomElement name="amp-auto-ads" version="0.1" />
      <amp-ad type={props.type} data-ad-client={props.data_ca_id} >
        
      </amp-ad>
    </>
  )
}