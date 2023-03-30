import feeds from '../data/feeds';
import Page from '../components/page';
import FeedList from '../components/feed-list';
import SoumettreArticle from '../components/SoumettreArticle';
import striptags from 'striptags';
import { useAuth } from '../auth';
import {firebaseAdmin} from '../firebaseAdmin'
import nookies from 'nookies'
import  clientPromise  from '../util/mongodb'


  
  
export const config = { amp: 'nonAmp' }

export default function submitArticl({posts}) {
  const {user} = useAuth()
  
  return (
    <Page>
      
      <SoumettreArticle user={user} />
    </Page>
  );

  
}
export const getServerSideProps = async (ctx) => {
    console.log("tfouu")
    
        const cookies = nookies.get(ctx);
        console.log('mirde', JSON.stringify(cookies, null, 2));
        const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
        // the user is authenticated!
        const { uid, email } = token;
        // FETCH STUFF HERE!! 🚀
      
        const client = await clientPromise
        const db = client.db('articles');
        let isConnected = true; 
            let user = await db.collection('users').find({email : email}).toArray()
          console.log("user", user)  
  
        return {
            props: {},
        };
   
  };