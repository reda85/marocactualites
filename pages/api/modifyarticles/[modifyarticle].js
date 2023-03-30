
import { connectToDatabase } from '../../../util/mongodb'
import { ObjectId } from 'mongodb';

export default async (req, res) => {
    console.log("tfouu", req.query)
    const { db, client } = await connectToDatabase()
  try{  

    var d = await db.collection('ownarticles').find({ slug : req.query.modifyarticle}).toArray()
    res.status(201).json({ success: true, data: d })
  }catch(e){
    res.status(400).json({ success: false })
  }

  
console.log("teeest  here", d)
return {res}
};