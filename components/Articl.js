const Articl = ({ article ,  isAmp } ) => {
    var localdate = new Intl.DateTimeFormat('fr-FR').format(new Date(article.created))

    return (
      <div id="main" >
            
                          <div className="inner" >
             
            <section>
        
            <div className="post" >
              <h2>{article.title}</h2>
              
              <div className="info">
                {article.source ? (
                  <span>
                    <strong>{article.source}</strong> |{' '}
                  </span>
                ) : null}
                <time>{localdate} </time>
              </div>
              <div style={{display:"flex", direction:"row" ,alignItems:"flex-start"}}>
              {(isAmp && article.thumbnail && article.source != 'Telquel')? <span  style={{marginRight:"20px"}}class="image thumb"><amp-img src={article.thumbnail} alt="" width="200px" height="100px"/></span> : null}
              {(!isAmp && article.thumbnail && article.source != 'Telquel')? <span  style={{marginRight:"20px"}}class="image thumb"><img src={article.thumbnail} alt="" width="200px" height="100px"/></span> : null}
              <div className="preview">
                {article.preview}
                {'... '}
                <a href={article.link} target="_blank">
                  lire plus sur {article.source}
                </a>
              </div>
            </div>
            </div>
            
          );
       
  </section>
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
  
  export default Articl;