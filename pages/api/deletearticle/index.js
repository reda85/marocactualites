import feeds from '../../../data/feeds';
import clientPromise from '../../../util/mongodb'
import {ObjectId} from 'mongodb'

export default async (req, res) => {
    
    console.log("req nom", req.body)
  //res.status(200).json(JSON.stringify(Object.assign({}, feeds)));
  const client = await clientPromise
  const db = client.db('articles');
  let isConnected = true;

 
    if (req.body._id) {
      console.log("req booody ", req.body)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//
try{
var d = await db.collection('ownarticles').deleteOne({ _id: new ObjectId(req.body._id) }
      )
      res.status(201).json({ success: true, data: d })
}
catch(e){
  res.status(400).json({ success: false })
}    
};


return {
  res
};
};