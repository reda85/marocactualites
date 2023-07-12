import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import striptags from 'striptags';
import clientPromise from '../../util/mongodb'

  
  
export const config = { amp: 'nonAmp' }

export default function Politique({posts}) {
  const isAmp = useAmp()
  return (
    <Page>
      
     {posts? <PostList posts={posts} title="Politique" icon="icon solid fa-handshake" col="mx-2 w-4 h-4 bg-orange-500" isAmp={isAmp}>
     </PostList> : <div> loading</div>}
     
    </Page>
  );

  
}
export async function getServerSideProps() {
  const client = await clientPromise
    const db = client.db('articles');
   let isConnected = true;
 
  let posts=[]
  let ownposts=[]

    if ( isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  // posts = await db.collection('articles').find({}).toArray()
   ownposts = await db.collection('ownarticles').find({statut : "valid",category:'politique'}).toArray()
//

//console.log("hnaaaa", posts)
  
    
};
posts = posts.map(post => post.item)
posts = posts.concat(ownposts)
//posts = posts.filter(item => {return( item.category.includes("politique") || item.category.includes("Politique") || item.category.includes("POLITIQUE")) })
    return {
      props : {posts: JSON.parse(JSON.stringify(posts)) 
      }
    };
};
  