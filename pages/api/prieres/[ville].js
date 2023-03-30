
import villes from '../../../data/villes';
import { distanceInWordsToNow } from 'date-fns';
import striptags from 'striptags';

export default async (req, res) => {
  const filtered = villes.filter(item => item.city === req.query.ville);
console.log("teeest gggggg here", filtered, req)
  if (filtered.length > 0) {
    var horaires={};
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '-' + mm + '-' + yyyy;
var prieres = []


    console.log("teeest  here2")
    let ville = filtered[0];
    console.log("feed.url ", ville.url)
    ville.prieres = [];

    let uri = ville.url + '&month=' + mm + '&year=' + new Date().getFullYear()
        console.log('uri mfz ' , uri)
         let r = await fetch(uri);
         console.log('today',today)
         //let data =  await JSON.stringify(r, null, 3);
       //console.log('data brute', data)
      horaires= await r.json();
    //  horaires = horaires.data.filter(horaire => horaire.date.gregorian.date == today)
      console.log('horaiiiiiires ',horaires)
         if (horaires ) {
          console.log("data ", horaires)
        //console.log ('data de ', horaires.data[0].date.gregorian )
horaires.data.map(horaire => {
    prieres.push ({
        
        Fajr : horaire.timings.Fajr,
        Dohr : horaire.timings.Dhuhr,
        Asr : horaire.timings.Asr,
        Maghrib : horaire.timings.Maghrib,
        Isha : horaire.timings.Isha,
        date : horaire.date.gregorian.date
    })
})
         }
console.log("hnaaaa prieres ", prieres)
    res.status(200).json(prieres);
  } else {
    res.status(404).json({ error: 'Feed not found.' });
  }
};