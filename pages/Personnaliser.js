import feeds from '../data/feeds';
import Page from '../components/page';
import FeedList from '../components/feed-list';
import Pourvous from '../components/pourvous';
import striptags from 'striptags';
import { useAuth } from '../auth';
import {firebaseAdmin} from '../firebaseAdmin'
import nookies from 'nookies'
import { connectToDatabase } from '../util/mongodb'


  
  
export const config = { amp: 'nonAmp' }

export default function personnaliser({myuser}) {
  const {user} = useAuth()
  
  return (
    <Page>
      
      <Pourvous user={myuser} />
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
        const { db } = await connectToDatabase()
        let user = await db.collection('users').find({email : email}).toArray()
      console.log("user", user[0])  
          let myuser = {email : user[0].email , categories : user[0].categories? user[0].categories : null , villes : user[0].villes? user[0].villes : null , medias : user[0].medias? user[0].medias : null}  
        return {
            props: { myuser}
        };
    
    
  };