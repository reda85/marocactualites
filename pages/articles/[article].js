import fetch from 'isomorphic-unfetch';
import Error from '../_error';
import Page from '../../components/page';
import Articl from '../../components/Articl';
import { useAmp } from 'next/amp'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export const config = { amp: 'nonAmp' }

export default function Article({ article }) {
    const isAmp = useAmp()
    console.log("aaaaaaaarticle de mierda ", article)
    const router = useRouter()

    useEffect(() => {
      if (article) {
        router.push(article[0].item.link)
      }
      if (article.error) {
        return <Error statusCode={404} />;
      }
    }, [article])
    
      return <div> Redirection vers l'article</div>
    


  
}

Article.getInitialProps = async ({ res, query }) => {
    console.log("miirde", query.article)
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  let r = await fetch(`${api_base}/api/articles/${query.article}`);
  //let r = await fetch(`http://localhost:3000/api/feeds/${query.slug}`)
  let article = await r.json();
  
  
  //console.log("article", article)
  if (article.error && res) {
    res.statusCode = 404;
  }

  return {
    article
  };
};
