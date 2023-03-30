import feeds from '../../../data/feeds';
import clientPromise from '../../../util/mongodb'
import { ObjectId } from 'mongodb';

export default async (req, res) => {
    
    console.log("req nom", req.body)
  res.status(200).json(JSON.stringify(Object.assign({}, feeds)));
  const client = await clientPromise
    const db = client.db('articles');
    let isConnected = true;

 
    if (req.body.article && req.body.titre) {
      console.log("req booody email", req.body)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//
res = await db.collection('ownarticles').updateOne(
    
    
    { _id: ObjectId(req.body.id )},
    {
      $set: {
        article : req.body.article,
        title : req.body.titre,
        accroche : req.body.accroche,
        category : req.body.category,
       
        
        thumbnail: req.body.image
      },
    }
  ); 
  console.log("res", res)
    
};


return {
  res
};
};