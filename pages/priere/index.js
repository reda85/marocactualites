import villes from '../../data/villes';
import Page from '../../components/page';
import FeedList from '../../components/feed-list';
import Prayer from '../../components/Prayer';




  
  
export const config = { amp: 'nonAmp' }

export default function Priere(prieres) {
  
  
  return (
    <Page>
      
      <Prayer prieres={prieres} />
    </Page>
  );

  
}
export const getServerSideProps = async () => {
    var horaires={};
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '-' + mm + '-' + yyyy;
var prieres = []
console.log('vi', villes)
await Promise.all(villes.map(async ( ville) =>  {
         
     
        // console.log("feed.url ", feed.url)
       let uri = ville.url + '&month=' + mm + '&year=' + new Date().getFullYear()
        console.log('uri mfz ' , uri)
         let r = await fetch(uri);
         console.log('today',today)
         //let data =  await JSON.stringify(r, null, 3);
       //console.log('data brute', data)
      horaires= await r.json();
      horaires = horaires.data.filter(horaire => horaire.date.gregorian.date == today)
      console.log('horaiiiiiires ',horaires)
         if (horaires ) {
          console.log("data ", horaires)
        //console.log ('data de ', horaires.data[0].date.gregorian )
horaires.map(horaire => {
    prieres.push ({
        ville : ville,
        Fajr : horaire.timings.Fajr,
        Dohr : horaire.timings.Dhuhr,
        Asr : horaire.timings.Asr,
        Maghrib : horaire.timings.Maghrib,
        Isha : horaire.timings.Isha,
    })
})

         }}
    ))

console.log("prieres ", prieres)

   console.log(horaires)
    return { props: {prieres} };
        } 
    
  