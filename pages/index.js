import feeds from '../data/feeds';
import Page from '../components/page';

import GeneralFeed from '../components/general-feed';

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
  let politiqueposts=[]
  let sportposts=[]
  let economieposts=[]
  let peopleposts=[]
  let societeposts=[]
  console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  const now = new Date().getTime()
  console.log('noooooooow', now)
   //posts = await db.collection('articles').find({"item.created" : { $gt: now - 86400000 } }).toArray()
  // politiqueposts = await db.collection('ownarticles').find({statut : 'valid',category:'politique'}).sort({created : -1}).limit(5).toArray()
   economieposts = await db.collection('ownarticles').find({statut : 'valid',category:'économie'}).sort({created : -1}).limit(5).toArray()
   sportposts = await db.collection('ownarticles').find({statut : 'valid',category:'Sport'}).sort({created : -1}).limit(5).toArray()
   peopleposts = await db.collection('ownarticles').find({statut : 'valid',category:'people'}).sort({created : -1}).limit(5).toArray()
   societeposts = await db.collection('ownarticles').find({statut : 'valid',category:'société'}).sort({created : -1}).limit(5).toArray()
//
//hotposts = await db.collection('ownarticles').find({statut : 'valid'}).sort( { reads: -1 } ).toArray()
console.log("hnaaaa", politiqueposts)
//
ownposts=politiqueposts.concat(economieposts).concat(sportposts).concat(peopleposts).concat(societeposts)
//ownposts=politiqueposts.concat(economieposts)
ownposts.sort((a,b) => b.created - a.created);
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