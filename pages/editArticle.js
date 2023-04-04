
import Page from '../components/page';

import striptags from 'striptags';
import { useAuth } from '../auth';

import nookies from 'nookies'
import clientPromise from '../util/mongodb'

import Link from 'next/link';
import { Spinner } from "@chakra-ui/react"

  
export const config = { amp: 'nonAmp' }

export default function EditArticle({posts}) {
  const {user} = useAuth()
  if(posts){
   //  console.log(" frk", posts)
  return (
    <Page>
        <h1>Liste des articles</h1>
      <ul>
      {posts.map(post => {
       return <li key={post.title}><Link href={post.link}>{post.title}</Link></li>  
      })}
      </ul>
    </Page>
  );
    }
    else
    { console.log(" sdffrk")
        return <Spinner />
    }
  
}


  export const getServerSideProps = async (ctx) => {
    console.log("tfouu")
    
        const cookies = nookies.get(ctx);
        console.log('mirde', JSON.stringify(cookies, null, 2));
       // const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        // the user is authenticated!
       // const { uid, email } = token;
        // FETCH STUFF HERE!! 🚀
      
        const client = await clientPromise
        const db = client.db('articles');
        let isConnected = true;
   /*         let user = await db.collection('users').find({email : email}).toArray()
          console.log("user", user)  
  if ((user[0].role!="admin"))
        {
            ctx.res.writeHead(302, { Location: '/' });
            ctx.res.end();
        }
*/
        let posts =[]
    let fposts=[]
  
    let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000/';

    if ( isConnected) {
        console.log("imken  here2")
  
        
        
       // const collection = await client.collection('articles')
  
    // Select the users collection from the database
     fposts = await db.collection('ownarticles').find().toArray()
  //
  
  //console.log("hnaaaa", posts)
    
      
  };
  //posts = posts.map(post => post.item)
  //console.log("hnaaaa", posts)
  fposts.map(post => {posts.push({_id : post._id, link : `${api_base}modifyarticles/${post.slug}`, slug : post.slug, source : post.source, created : post.created, title : post.title, thumbnail : post.thumbnail, category : post.category, statut : post.statut, preview : striptags(post.article).slice(0, 100)})})  
  console.log("pooooooosts", posts)    
  return {
        props : {posts: JSON.parse(JSON.stringify(posts))}
      };
    
  };