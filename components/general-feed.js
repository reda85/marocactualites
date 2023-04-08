
import { useAmp } from 'next/amp'
import {formatDistance, formatDistanceToNow} from 'date-fns'
import { fr } from 'date-fns/locale'
import Link from 'next/link'
import Image from 'next/image'
import Vignette from './Vignette'
import SectionCategorie from './SectionCategorie'
import { Adsense } from '@ctrl/react-adsense'
export const config = { amp: 'nonAmp' }

 
function categorize (post) {
  var color="black"
  if(Array.isArray(post.category)) {
  if(post.category.includes("covid19") || post.category.includes("Covid19") || post.category.includes("COVID19") || post.category.includes("covid-19") || post.category.includes("Covid-19") || post.category.includes("COVID-19") || post.category.includes("coronavirus") || post.category.includes("Coronavirus") || post.category.includes("CORONAVIRUS") || post.category.includes("covid 19") || post.category.includes("Covid 19") || post.category.includes("COVID 19"))
{ color="#6d071a"
   }
  if(post.category.includes("économie") || post.category.includes("Economie") || post.category.includes("ECONOMIE"))
  { color="brown"
   }
  if(post.category.includes("politique") || post.category.includes("POLITIQUE") || post.category.includes("Politique"))
  { color="orange"
  }
  if(post.category.includes("société") || post.category.includes("Société") || post.category.includes("SOCIETE"))
  { color="blue"
   }
  if(post.category.includes("sport") || post.category.includes("SPORT") || post.category.includes("Sport") || post.category.includes("sports") || post.category.includes("SPORTS") || post.category.includes("Sports") || post.category.includes("football") || post.category.includes("Football") || post.category.includes("FOOTBALL") || post.category.includes("basketball") || post.category.includes("Basketball") || post.category.includes("BASKETBALL") || post.category.includes("Tennis") || post.category.includes("tennis") || post.category.includes("TENNIS"))
  { color="green"
   }
  }
  else {
    if(post.category=="covid19" || post.category=="Covid19" || post.category=="COVID19" || post.category=="covid-19" || post.category=="Covid-19" || post.category=="COVID-19" || post.category=="coronavirus" || post.category=="Coronavirus" || post.category=="CORONAVIRUS" || post.category=="covid 19" || post.category=="Covid 19" || post.category=="COVID 19")
    { color="#6d071a"
       }
      if(post.category=="économie" || post.category=="Economie" || post.category=="ECONOMIE")
      { color="brown"
       }
      if(post.category=="politique" || post.category=="POLITIQUE" || post.category=="Politique")
      { color="orange"
      }
      if(post.category=="société" || post.category=="Société" || post.category=="SOCIETE")
      { color="blue"
       }
      if(post.category=="sport" || post.category=="SPORT" || post.category=="Sport"  || post.category=="sports" || post.category=="SPORTS" || post.category=="Sports" || post.category=="football" || post.category=="Football" || post.category=="FOOTBALL" || post.category=="basketball" || post.category=="Basketball" || post.category=="BASKETBALL" || post.category=="Tennis" || post.category=="tennis" || post.category=="TENNIS")
      { color="green"}
      if(post.category=="people" || post.category=="PEOPLE" || post.category=="People"  )
      { color="pink"}

  }
   return color
}
function GeneralFeed ({ posts , ownposts, coviddata, hotposts}) {
  const isAmp = useAmp()
  
  //console.log('fucking hotposts', hotposts)
    
  //console.log("feed", feed)
  var sortedposts = posts.sort((a,b) => (a.created < b.created) ? 1 : ((b.created < a.created) ? -1 : 0)); 
  sortedposts = ownposts.concat(sortedposts)
  /*const groups = sortedposts.reduce((groups, post) => {
    const pubdate = post.created.split(' ')[0];
    if (!groups[pubdate]) {
      groups[pubdate] = [];
    }
    groups[pubdate].push(post);
    return groups;
  }, {});
  
  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((pubdate) => {
    return {
      pubdate,
      posts: groups[pubdate]
    };
  });
  */
  //console.log("plz",coviddata);
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  
      return(
        
        <div id="main" >






            <div className="flex flex-row xl:px-36 items-center justify-center">
  <div className='flex flex-col' >

  <div className=" hidden md:flex ">
     <Adsense className=" hidden md:flex "
     style={{display:'inline-block',width:'970px',height:'250px'}}
     
     layoutKey="-h7-2g+1-79+wn"
     client="ca-pub-1131650691837357"
     slot="9009472157"></Adsense>
     </div>
     <div className="my-3 md:hidden " >
        <Adsense 
     style={{display:'block'}}
     format="fluid"
     layoutKey="-hs-s+1c-5f+cv"
     client="ca-pub-1131650691837357"
    slot="9669767968"></Adsense>
     </div>
        <Vignette posts={ownposts} />
        <SectionCategorie posts={ownposts} category='Sport' color='bg-green-500' />
        <SectionCategorie posts={ownposts} category='politique' color='bg-orange-500' />
        <SectionCategorie posts={ownposts} category='société' color='bg-blue-500' />
        <SectionCategorie posts={ownposts} category='économie' color='bg-red-500' />
        <SectionCategorie posts={ownposts} category='people' color='bg-indigo-500' />


       
       
</div>


       








</div>






       
        </div> 

        
        
      );
    
  };
  
  export default GeneralFeed;

  