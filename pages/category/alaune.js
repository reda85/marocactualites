import feeds from '../../data/feeds';
import Page from '../../components/page';
import { useAmp } from 'next/amp'
import PostList from '../../components/post-list';
import striptags from 'striptags';
import  clientPromise  from '../../util/mongodb'

  
  
export const config = { amp: 'nonAmp' }

export default function AlaUne({posts}) {
    const isAmp = useAmp()
  return (
    <Page>
      
      <PostList posts={posts} title="La une" col="mx-2 w-4 h-4 bg-red-500" isAmp={isAmp} icon="icon solid fa-clock"></PostList>
    </Page>
  );

  
}

export async function getServerSideProps() {
  const client = await clientPromise
    const db = client.db('articles');
   let isConnected = true;
  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  let posts =[]
  let ownposts=[]
  //console.log("imken  here " , filtered )
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
    if (filtered.length > 0 && isConnected) {
     // console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  ownposts = await db.collection('ownarticles').find({statut : "valid"}).toArray()
  //
  
  //console.log("hnaaaa", posts)
    
      
  };
  posts = posts.map(post => post.item)
  posts = posts.concat(ownposts)
     return {
      props : {posts: JSON.parse(JSON.stringify(posts))}
    };
};
  