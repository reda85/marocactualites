import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import striptags from 'striptags';
import clientPromise from '../../util/mongodb'

  
  
export const config = { amp: 'nonAmp' }

export default function Economie({posts}) {
  const isAmp = useAmp()
  return (
    <Page>
      
      <PostList posts={posts} title="Tous les articles Economie" icon="icon solid fa-chart-line" col="brown" isAmp={isAmp}></PostList>
    </Page>
  );

  
}



function categorize (post) {
    var category=""
    if(post.category.includes("covid19") || post.category.includes("Covid19") || post.category.includes("COVID19") || post.category.includes("covid-19") || post.category.includes("Covid-19") || post.category.includes("COVID-19") || post.category.includes("coronavirus") || post.category.includes("Coronavirus") || post.category.includes("CORONAVIRUS") || post.category.includes("covid 19") || post.category.includes("Covid 19") || post.category.includes("COVID 19"))
  { category="Covid19"
     }
    if(post.category.includes("économie") || post.category.includes("Economie") || post.category.includes("ECONOMIE"))
    { category="Economie"
     }
    if(post.category.includes("politique") || post.category.includes("POLITIQUE") || post.category.includes("Politique"))
    { cocategorylor="Politique"
    }
    if(post.category.includes("société") || post.category.includes("Société") || post.category.includes("SOCIETE"))
    { category="Société"
     }
    if(post.category.includes("sport") || post.category.includes("SPORT") || post.category.includes("Sport") || post.category.includes("football") || post.category.includes("Football") || post.category.includes("FOOTBALL") || post.category.includes("basketball") || post.category.includes("Basketball") || post.category.includes("BASKETBALL") || post.category.includes("Tennis") || post.category.includes("tennis") || post.category.includes("TENNIS"))
    { category="Sport"
     }
     return category
  }



export async function getServerSideProps() {
  const client = await clientPromise
    const db = client.db('articles');
   let isConnected = true;
  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  let posts=[]
  //console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
   posts = await db.collection('articles').find({statut : "valid"}).toArray()
//

//console.log("hnaaaa", posts)
  
    
};
posts = posts.map(post => post.item)
//
posts = posts.filter(item => {return( item.category.includes("économie") || item.category.includes("Economie") || item.category.includes("ECONOMIE")) })
//console.log("hnaaaa", posts)
  
    return {
      props : {posts}
    };
};
 