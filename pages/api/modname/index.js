import feeds from '../../../data/feeds';
import {connectToDatabase} from '../../../util/mongodb'

export default async (req, res) => {
    
    console.log("req nom", req.body)
  res.status(200).json(JSON.stringify(Object.assign({}, feeds)));
  const { db, client } = await connectToDatabase()

 
    if (req.body.nom && req.body.prenom) {
      console.log("req booody email", req.body.email)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//
res = await db.collection('users').updateOne(
    { email: req.body.email },
    {
      $set: {
        nom : req.body.nom,
        prenom : req.body.prenom,
      },
    },
  ); 
    
};


return {
  res
};
};