import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import clientPromise from '../../util/mongodb'
import striptags from 'striptags';


  
  
export const config = { amp: 'nonAmp' }

export default function Societe({posts}) {
  const isAmp = useAmp()
  return (
    <Page>
      
      <PostList posts={posts} title="Tous les articles Société" icon="icon solid fa-users" col="blue" isAmp={isAmp}></PostList>
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
  console.log("imken  here " , filtered )
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
posts = posts.concat(ownposts)
posts = posts.filter(item => {return( item.category.includes("société") || item.category.includes("Société") || item.category.includes("SOCIETE")) })
return {
  props : {posts: JSON.parse(JSON.stringify(posts)) 
    }
};
  };
 