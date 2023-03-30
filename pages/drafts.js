import feeds from '../data/feeds';
import Page from '../components/page';
import { useAmp } from 'next/amp'
import PostList from '../components/post-list';
import striptags from 'striptags';
import  clientPromise  from '../util/mongodb'

import {firebaseAdmin} from '../firebaseAdmin'
import nookies from 'nookies'
import { useAuth } from '../auth';

  
  
export const config = { amp: 'nonAmp' }

export default function Drafts({posts}) {
  const {user} = useAuth()
  const isAmp = useAmp()
  return (
    <Page>
      
      <PostList user={user} posts={posts} title="Tous les drafts" icon="icon solid fa-tasks" isAmp={isAmp}></PostList>
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
       
  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  let fposts, posts=[]
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  console.log("imken  here " , filtered )
    if (filtered.length > 0 && isConnected) {
      console.log("imken  here2")

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
   fposts = await db.collection('ownarticles').find({statut : 'draft'}).toArray()
//


  
    
};
fposts.map(post => {posts.push({_id : post._id, link : `${api_base}/ownarticles/${post.slug}`, source : post.source, created : post.created, title : post.title, category : post.category, slug: post.slug, statut : post.statut, preview : striptags(post.article).slice(0, 300)})})
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
 