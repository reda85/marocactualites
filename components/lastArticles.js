import striptags from "striptags";
import Link from 'next/link';
import {formatDistance, formatDistanceToNow} from 'date-fns'
import { fr } from 'date-fns/locale'

const LastArticles = ({ Lastposts  } ) => {
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  
  return (



<div style={{marginTop : "60px"}}>
<div className=" text-2xl mb-16 text-gray-500"> Autres articles publiés </div>

<div className="posts">
    {Lastposts.map((post,i) => {
        var dateresult = formatDistanceToNow(
           
            new Date(post.created),
            {locale: fr} // Pass the locale as an option
          )
        return(<article key={i}>
            <a style={{marginBottom : "10px", paddingBottom: '0px'}} href={`${api_base}/ownarticles/${post.slug}`} className="image"><span className="text-black text-lg">{post.title}</span></a>
           <p style={{marginTop : "0px", paddingTop: '0px'}} className="icon solid fa-clock"> Il y a {dateresult}</p> 
            <p>{striptags(post.accroche).slice(0,100)} ...</p>
          
        </article>)
    })}
										
                                        </div>
                                                                          </div>
  )
}
export default LastArticles