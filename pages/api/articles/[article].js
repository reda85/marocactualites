
import feeds from '../../../data/feeds';
import { distanceInWordsToNow } from 'date-fns';
import striptags from 'striptags';
import clientPromise from '../../../util/mongodb'
import { ObjectId } from 'mongodb';

export default async (req, res) => {
    console.log("tfouu", req.query)
    const client = await clientPromise
    const db = client.db('articles');
    let isConnected = true;
    var updatenumreads = await db.collection('articles').update({ _id: ObjectId(req.query.article) },
      {
        $inc: { reads: 1 }})
        console.log('updatenumreads' , updatenumreads)
    var article = await db.collection('articles').find({ _id : ObjectId(req.query.article)}).toArray()


  
console.log("teeest  here", article)
  if (article) {
    
    res.status(200).json(article);
  } else {
    res.status(404).json({ error: 'Feed not found.' });
  }
};