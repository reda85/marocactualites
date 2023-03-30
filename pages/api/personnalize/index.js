import feeds from '../../../data/feeds';
import clientPromise from '../../../util/mongodb'

export default async (req, res) => {
    
    console.log("req nom", req.body)
  res.status(200).json(JSON.stringify(Object.assign({}, feeds)));
  const client = await clientPromise
    const db = client.db('articles');
    let isConnected = true;

 
    if (req.body.villes && req.body.categories) {
      console.log("req booody email", req.body.email)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//
/*res = await db.collection('ownarticles').insertOne(
    
    
      {
        article : req.body.article,
        titre : req.body.titre,
        accroche : req.body.accroche,
        categorie : req.body.categorie
      },
  ); 
 */   
res = await db.collection('users').updateOne(
    { email: req.body.email },
    {
      $set: {
        categories : req.body.categories,
        villes : req.body.villes,
        medias : req.body.medias,

      },
    },
  ); 
    
};


return {
  res
};
};