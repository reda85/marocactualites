import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import striptags from 'striptags';
import  clientPromise  from '../../util/mongodb'


  
  
export const config = { amp: 'nonAmp' }

export default function Tanger({posts}) {
  const isAmp = useAmp()
  return (
    <Page>
      
      <PostList posts={posts} title="Tanger" isAmp={isAmp}></PostList>
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
posts = posts.filter(post => {return( post.title.toLowerCase().includes("tanger") || post.preview.toLowerCase().includes("tanger") ) })
//console.log("hnaaaa", posts)
  
    return {
      props : {posts}
    };
};
  


  