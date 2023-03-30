import striptags from "striptags";
import Link from 'next/link';
import {formatDistance, formatDistanceToNow} from 'date-fns'
import { fr } from 'date-fns/locale'

const LastArticles = ({ Lastposts  } ) => {
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  
  return (



<div style={{marginTop : "60px"}}>
<h2 style={{color: "grey"}}> Autres articles publiés </h2>

<div class="posts">
    {Lastposts.map(post => {
        var dateresult = formatDistanceToNow(
           
            new Date(post.created),
            {locale: fr} // Pass the locale as an option
          )
        return(<article key={post}>
            <a style={{marginBottom : "10px", paddingBottom: '0px'}} href={`${api_base}/ownarticles/${post.slug}`} class="image"><h3 style={{marginBottom : "0px", paddingBottom: '0px'}}>{post.title}</h3></a>
           <p style={{marginTop : "0px", paddingTop: '0px'}} className="icon solid fa-clock"> Il y a {dateresult}</p> 
            <p>{striptags(post.accroche).slice(0,100)} ...</p>
          
        </article>)
    })}
										
                                        </div>
                                                                          </div>
  )
}
export default LastArticles