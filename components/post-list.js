import striptags from "striptags";

const PostList = ({ posts , title, isAmp, icon, col } ) => {
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  posts = posts.sort((a,b) => (a.created < b.created) ? 1 : ((b.created < a.created) ? -1 : 0)); 
  return (
    <div id="main" >
          <div className="row">
						<div className="col-9 col-12-small" >
            <h2 className={icon} style={{color:col}}> &nbsp; {title}</h2>
          <section style={{marginTop:'60px'}}> 
      {posts.map((post, i) => {

        var localdate = new Intl.DateTimeFormat('fr-FR').format(new Date(post.created))
        
        return (
          <div className="post" style = {{ borderBottom:"2px", borderBottomColor:"black", padding:"15px 15px 15px 15px", paddingRight:"10px", marginLeft:"0px", marginRight:"0px",  }} key={i}>
            <h3>{post.title}</h3>
            
            <div className="info" >
             
              <time>{localdate} </time>
            </div>
            <div style={{display:"flex", direction:"row" ,alignItems:"flex-start"}}>
            {(isAmp && post.thumbnail && post.source != 'Telquel')? <span  style={{marginRight:"20px"}}className="image thumb"><amp-img src={post.thumbnail} alt="" width="200px" height="100px"/></span> : null}
            {(!isAmp && post.thumbnail && post.source != 'Telquel')? <span  style={{marginRight:"20px"}}className="image thumb"><img src={post.thumbnail} alt="" width="200px" height="100px"/></span> : null}
            <div className="preview">
              {post.source == 'Maroc Actualités' ? striptags(post.article).slice(0,100) : post.preview}
              {'... '}
             {post.source == 'Maroc Actualités' ? <a href={`${api_base}/ownarticles/${post.slug}`} >
                lire plus sur {post.source}
              </a> :
              <a href={post.link} >
              lire plus sur {post.source}
            </a>}
            </div>
          </div>
          </div>
          
        );
      })}
</section>
</div>
</div>
      <style jsx>{`
        .post {
          margin-bottom: 60px;
        }
        h2 {
          color: #333;
          margin: 50px 0 20px;
          font-size: 28px;
          line-height: 1.3;
        }
        .info {
          color: #555;
          font-size: 16px;
          margin-bottom: 10px;
        }
        time {
          color: #777;
        }
        .preview {
          color: #7a7a7a;
        }
      `}</style>
    </div>
  );
};

export default PostList;