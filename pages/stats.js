import feeds from '../data/feeds';
import Page from '../components/page';
import { useAmp } from 'next/amp'
import Stats from '../components/stats';
import striptags from 'striptags';
import clientPromise from '../util/mongodb'

import {firebaseAdmin} from '../firebaseAdmin'
import nookies from 'nookies'
import { useAuth } from '../auth';

  
  
export const config = { amp: 'nonAmp' }

export default function Statistics({posts}) {
  const {user} = useAuth()
  const isAmp = useAmp()
  return (
    <Page>
      
      <Stats user={user} posts={posts} title="Toutess les stats" icon="icon solid fa-tasks" isAmp={isAmp}></Stats>
    </Page>
  );

  
}

export const getServerSideProps = async (ctx) => {





  try {
    const cookies = nookies.get(ctx);
    console.log('mirde', JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    // the user is authenticated!
    const { uid, email } = token;
    // FETCH STUFF HERE!! 🚀
  
    const client = await clientPromise
    const db = client.db('articles');
    let isConnected = true;
       
  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  let fposts, posts=[]
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.vercel.app/' : 'http://localhost:3000';
  console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
   fposts = await db.collection('ownarticles').find({statut : 'valid'}).sort({reads: -1}).toArray()
//


  
    
};
fposts.map(post => {posts.push({_id : post._id, link : `${api_base}/ownarticles/${post.slug}`, slug : post.slug, created : post.created, title : post.title, category : post.category, reads : post.reads})})
//

console.log("hnaaa", posts)
        let user = await db.collection('users').find({email : email}).toArray()
      console.log("user", user)  
if ( user[0].role!="admin")
    {
        ctx.res.writeHead(302, { Location: '/' });
        ctx.res.end();
    }
    return {
        props: {posts : JSON.parse(JSON.stringify(posts))},
    };
}
catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    console.log('erreeeee ', err)
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} };
}







  
};
 