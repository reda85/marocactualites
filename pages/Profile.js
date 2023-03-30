import feeds from '../data/feeds';
import Page from '../components/page';
import FeedList from '../components/feed-list';
import Account from '../components/Profile';
import striptags from 'striptags';
import { useAuth } from '../auth';
import nookies from 'nookies';
import {firebaseAdmin} from '../firebaseAdmin'


  
  
export const config = { amp: 'nonAmp' }

export default function Profile() {
  const {user} = useAuth()
  
  return (
    <Page>
      
      <Account user={user} />
    </Page>
  );

  
}
export const getServerSideProps = async (ctx) => {
  console.log("tfouu")
  try {
      const cookies = nookies.get(ctx);
      console.log('mirde', JSON.stringify(cookies, null, 2));
      const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
      // the user is authenticated!
      const { uid, email } = token;
      // FETCH STUFF HERE!! 🚀
      return {
          props: {},
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