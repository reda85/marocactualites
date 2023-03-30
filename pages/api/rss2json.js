// Import Dependencies
import feeds from '../../data/feeds';
const url = require('url')
import striptags from 'striptags';
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI)






  var Feed = require('rss-to-json'); 
  const filtered =  feeds
  console.log("imken  here " , filtered )
  var posts=[]
    if (filtered.length > 0) {
      console.log("imken  here2")

      
      await Promise.all(filtered.map(async ( feed) =>  {
         
     
     // console.log("feed.url ", feed.url)
    
  
      let data = await Feed.load(`${feed.url}`);
     // console.log('r',r)
      //let data =  await JSON.stringify(r, null, 3);
    //console.log('data brute', data)
  
      if (data && data.items) {
     //   console.log("data ", data)
     let cat =  [" "];
     
        data.items.map(post => {
          if(feed.category ) {cat[0] = feed.category} else {cat = post.category}
         // console.log("post ", post.description)
          posts.push({
            slug: feed.slug,
            reads: 0,
            title: post.title,
            source: feed.title,
           created: post.created,
            link: post.link,
            category : cat,
            author: striptags(post.author),
            thumbnail : post.enclosures[0] ? post.enclosures[0].url : null,
            preview: striptags(post.description).slice(0, 100)
          });
        });
      }
    }))
//






    }

  // Select the "users" collection from the database
  const collection = await db.collection('articles')
console.log("gegeegege")
  // Select the users collection from the database
  var bulk = collection.initializeOrderedBulkOp();
      posts.forEach(function(item) {
        bulk.find({ "link": item.link }).upsert().updateOne({
          "$setOnInsert": {item} 
        });
      });
      bulk.execute();
      console.log("veveveveve", bulk)
  // Respond with a JSON string of all users in the collection
  res.status(200).json({ posts })
}