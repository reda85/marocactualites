import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import striptags from 'striptags';
import  clientPromise  from '../../util/mongodb'

  
  
export const config = { amp: 'nonAmp' }

export default function Covid19({posts}) {
  const isAmp = useAmp()
  return (
    <Page>
      
      <PostList posts={posts} title="Spécial Covid-19" icon="icon solid fa-clinic-medical" col="red" isAmp={isAmp}></PostList>
    </Page>
  );

  
}

export async function getServerSideProps() {
  const client = await clientPromise
    const db = client.db('articles');
   let isConnected = true;
  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  let posts=[]
  let ownposts=[]
  //console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  // posts = await db.collection('articles').find({}).toArray()
   ownposts = await db.collection('ownarticles').find({statut : "valid"}).toArray()
//

//console.log("hnaaaa", posts)
  
    
};
posts = posts.map(post => post.item)
posts= posts.concat(ownposts)
posts = posts.filter(item => {return(item.category.includes("covid19") || item.category.includes("Covid19") || item.category.includes("COVID19") || item.category.includes("covid 19") || item.category.includes("Covid 19") || item.category.includes("COVID 19") || item.category.includes("covid-19") || item.category.includes("Covid-19") || item.category.includes("COVID-19") || item.category.includes("coronavirus") || item.category.includes("Coronavirus") || item.category.includes("CORONAVIRuS")) })
//console.log("hnaaaa", posts)
  
    return {
      props : {posts}
    };
};
  