import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { connectToDatabase } from '../../util/mongodb'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const { db, client } = await connectToDatabase()

  const isConnected = await client.isConnected()
let ownposts=[]
  if (isConnected) {
    console.log("imken  here2")

    
    
   // const collection = await client.collection('articles')

// Select the users collection from the database
//const now = new Date().getTime()

 //posts = await db.collection('articles').find({"item.created" : { $gt: now - 86400000 } }).toArray()
 ownposts = await db.collection('ownarticles').find({statut : 'valid'}).sort({created : -1}).toArray()
  }

  const fields = ownposts.map(post => Object({ loc : 'https://marocactualites.com/ownarticles/' + post.slug , lastmod: new Date().toISOString()}))
  

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}