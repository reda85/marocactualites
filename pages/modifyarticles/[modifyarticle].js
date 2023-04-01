import Modify from '../../components/Modify'
import Page from '../../components/page';

export default function ModifyArticle({article}) {
    
    console.log ('plzz', article.data)
    return (
      <Page>
        
        <Modify article={article.data} />
      </Page>
    );
  
    
  }
  export const getServerSideProps = async (ctx) => {
    console.log("miirde", ctx.query)
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.vercel.app/' : 'http://localhost:3000';
  let r = await fetch(`${api_base}/api/modifyarticles/${ctx.query.modifyarticle}`);
  //let r = await fetch(`http://localhost:3000/api/feeds/${query.slug}`)
  let article = await r.json();
  
  
  //console.log("article", article)
  if (article.error && ctx.res) {
    ctx.res.statusCode = 404;
  }
console.log("aaaaaarticle", article)
  return {
    props :{ article }
  };
};
