import feeds from '../../../data/feeds';
import {connectToDatabase} from '../../../util/mongodb'
import {ObjectId} from 'mongodb'

export default async (req, res) => {
    
    console.log("req nom", req.body)
  //res.status(200).json(JSON.stringify(Object.assign({}, feeds)));
  const { db, client } = await connectToDatabase()

 
    if (req.body._id) {
      console.log("req booody ", req.body)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//
try{
var update = await db.collection('ownarticles').updateOne({ _id: ObjectId(req.body._id) },
      {
        $set: { statut: 'valid' }})
        res.status(201).json({ success: true, data: update })
    
}catch(e){
  res.status(400).json({ success: false })
}    
    }


return {
  res
};
};