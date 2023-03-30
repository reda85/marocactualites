import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import striptags from 'striptags';
import { connectToDatabase } from '../../util/mongodb'


  
  
export const config = { amp: 'nonAmp' }

export default function Rabat({posts}) {
  const isAmp = useAmp()
  return (
    <Page>
      
      <PostList posts={posts} title="Rabat" isAmp={isAmp}></PostList>
    </Page>
  );

  
}

export async function getServerSideProps() {
  const { db, client } = await connectToDatabase()

  const isConnected = await client.isConnected()
  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  let posts=[]
  console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
   posts = await db.collection('articles').find({}).toArray()
//

//console.log("hnaaaa", posts)
  
    
};
posts = posts.map(post => post.item)
posts = posts.filter(post => {return( post.title.toLowerCase().includes("rabat") || post.preview.toLowerCase().includes("rabat") ) })
//console.log("hnaaaa", posts)
  
    return {
      props : {posts}
    };
};
  


  