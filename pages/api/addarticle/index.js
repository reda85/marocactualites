import feeds from '../../../data/feeds';
import clientPromise from '../../../util/mongodb'
import {Button, createStandaloneToast} from '@chakra-ui/react'

export default async (req, res) => {
  const toast=createStandaloneToast()
   // console.log("req nom", req.body)
  //res.status(200).json(JSON.stringify(Object.assign({}, feeds)));
  const client = await clientPromise
  const db = client.db('articles');
  let isConnected = true;

 
    if (req.body.article && req.body.titre) {
     // console.log("req booody email", req.body.email)

      
      
     // const collection = await client.collection('articles')

  // Select the users collection from the database
  
//
try { 
let r = await db.collection('ownarticles').insertOne(
    
    
      {
        article : req.body.article,
        title : req.body.titre,
        keywords : req.body.keywords,
        accroche : req.body.accroche,
        category : req.body.category,
        slug : req.body.slug,
        statut : 'draft',
        created:  Date.now(),
        source : 'Maroc Actualités',
        thumbnail: req.body.image
      },
  ); 
  res.status(201).json({ success: true, data: r })

  toast({
    title: "Article soumis.",
    
    status: "success",
    duration: 9000,
    isClosable: true,
  })
    }    catch (e) {
      toast({
        title: "Erreur de suppression.",
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      res.status(400).json({ success: false })
   };
};


return {
  res
};
};