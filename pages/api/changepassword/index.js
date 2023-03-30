import { getServerSideProps } from '../..';
import { useAuth } from '../../../auth';
import feeds from '../../../data/feeds';
import { firebaseClient } from '../../../firebaseClient';
import nookies from "nookies";
import { firebaseAdmin} from '../../../firebaseAdmin'
import {connectToDatabase} from '../../../util/mongodb'

export default async (req, res) => {

    
   // const user = await firebaseClient.auth().currentUser 
    //console.log("req nom", req.body);
    const cookies = nookies.get(ctx);
    console.log('test ', JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    console.log('token ', token)


 
    if (req.body.email && req.body.password) {
      //console.log("req booody email", req.body.email)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//


//console.log("firebaseclient ", firebaseClient.auth)

user.updatePassword(req.body.password).then(function() {

  window.location.href = "/"
}).catch(function(error) {
  return( <div>Error!</div>)
});


return {
  res
};
}
}