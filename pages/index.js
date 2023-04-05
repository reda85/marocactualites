import feeds from '../data/feeds';
import Page from '../components/page';
import FeedList from '../components/feed-list';
import GeneralFeed from '../components/general-feed';
import striptags from 'striptags';
import clientPromise from '../util/mongodb'


  
  
export const config = { amp: 'nonAmp' }

export default function Index({posts , ownposts}) {
  return (
    <Page>
       
    {ownposts &&  <GeneralFeed ownposts={ownposts} posts={posts}  ></GeneralFeed>}
    </Page>
  );

  
}

export async function getStaticProps() {
  

  let isConnected;
  try {
    const client = await clientPromise
    const db = client.db('articles');
    isConnected = true;
    var Feed = require('rss-to-json'); 

  
  const filtered =  feeds
  var coviddata={}
  let posts=[]
  let ownposts=[]
  let hotposts=[]
  console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  const now = new Date().getTime()
  console.log('noooooooow', now)
   //posts = await db.collection('articles').find({"item.created" : { $gt: now - 86400000 } }).toArray()
   ownposts = await db.collection('ownarticles').find({statut : 'valid'}).sort({created : -1}).toArray()
//
//hotposts = await db.collection('ownarticles').find({statut : 'valid'}).sort( { reads: -1 } ).toArray()
//console.log("hnaaaa", hotposts)
hotposts = hotposts.slice(0,9)  
return {
  props : {posts: JSON.parse(JSON.stringify(posts)) 
    , 
    ownposts: JSON.parse(JSON.stringify(ownposts)) 
    , 
    
    
    isConnected},
    revalidate: 1
}; 
}
else return {props : {}}
  } catch(e) {
   // console.log(e);
    isConnected = false;
    return {props : {}}
  }
  

//hotposts.forEach(post => { post._id = post._id });

//posts = posts.map(post => post.item)
//hotposts = hotposts.map(post => post.item)






  };