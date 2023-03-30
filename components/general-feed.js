
import { useAmp } from 'next/amp'
import {formatDistance, formatDistanceToNow} from 'date-fns'
import { fr } from 'date-fns/locale'
import Link from 'next/link'
import Image from 'next/image'
import Vignette from './Vignette'
export const config = { amp: 'nonAmp' }

 
function categorize (post) {
  var color="black"
  if(Array.isArray(post.category)) {
  if(post.category.includes("covid19") || post.category.includes("Covid19") || post.category.includes("COVID19") || post.category.includes("covid-19") || post.category.includes("Covid-19") || post.category.includes("COVID-19") || post.category.includes("coronavirus") || post.category.includes("Coronavirus") || post.category.includes("CORONAVIRUS") || post.category.includes("covid 19") || post.category.includes("Covid 19") || post.category.includes("COVID 19"))
{ color="#6d071a"
   }
  if(post.category.includes("économie") || post.category.includes("Economie") || post.category.includes("ECONOMIE"))
  { color="brown"
   }
  if(post.category.includes("politique") || post.category.includes("POLITIQUE") || post.category.includes("Politique"))
  { color="orange"
  }
  if(post.category.includes("société") || post.category.includes("Société") || post.category.includes("SOCIETE"))
  { color="blue"
   }
  if(post.category.includes("sport") || post.category.includes("SPORT") || post.category.includes("Sport") || post.category.includes("sports") || post.category.includes("SPORTS") || post.category.includes("Sports") || post.category.includes("football") || post.category.includes("Football") || post.category.includes("FOOTBALL") || post.category.includes("basketball") || post.category.includes("Basketball") || post.category.includes("BASKETBALL") || post.category.includes("Tennis") || post.category.includes("tennis") || post.category.includes("TENNIS"))
  { color="green"
   }
  }
  else {
    if(post.category=="covid19" || post.category=="Covid19" || post.category=="COVID19" || post.category=="covid-19" || post.category=="Covid-19" || post.category=="COVID-19" || post.category=="coronavirus" || post.category=="Coronavirus" || post.category=="CORONAVIRUS" || post.category=="covid 19" || post.category=="Covid 19" || post.category=="COVID 19")
    { color="#6d071a"
       }
      if(post.category=="économie" || post.category=="Economie" || post.category=="ECONOMIE")
      { color="brown"
       }
      if(post.category=="politique" || post.category=="POLITIQUE" || post.category=="Politique")
      { color="orange"
      }
      if(post.category=="société" || post.category=="Société" || post.category=="SOCIETE")
      { color="blue"
       }
      if(post.category=="sport" || post.category=="SPORT" || post.category=="Sport"  || post.category=="sports" || post.category=="SPORTS" || post.category=="Sports" || post.category=="football" || post.category=="Football" || post.category=="FOOTBALL" || post.category=="basketball" || post.category=="Basketball" || post.category=="BASKETBALL" || post.category=="Tennis" || post.category=="tennis" || post.category=="TENNIS")
      { color="green"}
      if(post.category=="people" || post.category=="PEOPLE" || post.category=="People"  )
      { color="pink"}

  }
   return color
}
function GeneralFeed ({ posts , ownposts, coviddata, hotposts}) {
  const isAmp = useAmp()
  
  //console.log('fucking hotposts', hotposts)
    
  //console.log("feed", feed)
  var sortedposts = posts.sort((a,b) => (a.created < b.created) ? 1 : ((b.created < a.created) ? -1 : 0)); 
  sortedposts = ownposts.concat(sortedposts)
  /*const groups = sortedposts.reduce((groups, post) => {
    const pubdate = post.created.split(' ')[0];
    if (!groups[pubdate]) {
      groups[pubdate] = [];
    }
    groups[pubdate].push(post);
    return groups;
  }, {});
  
  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((pubdate) => {
    return {
      pubdate,
      posts: groups[pubdate]
    };
  });
  */
  //console.log("plz",coviddata);
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/' : 'http://localhost:3000';
  
      return(
        
        <div id="main" >



<div className="row" style={{paddingLeft:"20px",}}>

            </div>


<div className="row" style = {{display:"flex" , flexDirection:'row' ,justifyContent:"space-between"} }>
  <div className="col-8 col-12-small">


        <Vignette posts={ownposts} />


        <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between"  }}>
          <h2 style={{color:'#400090' ,marginBottom:"0px"}}>A la une</h2> 
          <Link href="/category/alaune" style={{ color:"blue", fontSize:"13px"}}><strong>Voir plus : A la une</strong></Link> 
          </div>
						<div id="innercust" className="innercust" >
          <section style={{paddingTop:"10px"}}>
          
        <div >

            {ownposts.map((post, i) => {
           //   console.log('kkk' , post.created)
             while(i < 6) {  
               
            var dateresult = formatDistanceToNow(
           
              new Date(post.created),
              {locale: fr} // Pass the locale as an option
            )
           var col = categorize(post)
           //console.log('col ', col)
            return (
              <div>
                <div className="grostitre" style={{ padding:'0 0 0 0',  display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div style={{width:'100%', maxWidth:'5O%'}}> 
              <div className="titre" style={{display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                <span style={{color:col , fontSize:'18px', marginRight:"15px" }}> &#8226;</span>
                <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} >
               <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               

                </div>
                <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", marginRight:"15px", marginLeft:"18px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> 
            
            </div>   
            <div >     
           {(isAmp && post.thumbnail)? <span class="image thumb"><amp-img src={post.thumbnail} alt=""  width="200px" 
           
      height="100px"/></span> : null}
      {(!isAmp && post.thumbnail)? <span class="image thumb"><Image height= {100} width= {160} src={post.thumbnail} alt=""   
           
           /></span> : null}
     </div>   
    </div>  
              </div>
            );
          }})}
    
         
        </div>
        </section>
        
        </div> 
        
        

       
       
       
       
        <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between" }}>
          <h2 style={{color:'blue',marginBottom:"0px"}}>Société</h2> 
          <Link href="/category/societe" style={{ color:"blue", fontSize:"13px"}}><strong>Voir plus : Société</strong></Link> 
          </div>
          <div id="innercust" className="innercust">
            <section style={{paddingTop:"10px"}}>
          
          <div >
  
          {sortedposts.filter(item => {return(categorize(item) == "blue")}).map((post, i) => {
            let col=categorize(post); 
               while(i < 6) {  
                 
              var dateresult = formatDistanceToNow(
               
                new Date(post.created),
                {locale: fr} // Pass the locale as an option
              )
             
             //console.log('col ', col)
              return (
                <div>
                  <div className="grostitre" style={{ padding:'0 0 0 0',  display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div style={{width:'100%', maxWidth:'5O%'}}> 
              <div className="titre" style={{display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                  <span style={{color:col , fontSize:'18px' , marginRight:"15px"}}> &#8226;</span>
                  {post.source == "Maroc Actualités" ? <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
                 : <a href={`${api_base}/articles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               }
                  </div>
                  {post.source == "Maroc Actualités" ? <div style={{flexDirection:'row' , fontSize: "12px", display:"flex",marginLeft:"18px", marginRight:"15px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> : <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", alignItems:"baseline"}} >
                <p style={{ marginLeft:"21px"}}> {post.source}</p>
                
    <span> &nbsp; - &nbsp; </span>
                <p> {dateresult}</p>
                </div>   }
              
              </div>   
              <div >     
             {(isAmp && post.thumbnail)? <span class="image thumb"><amp-img src={post.thumbnail} alt=""  width="200px" 
             
        height="100px"/></span> : null}
        {(!isAmp && post.thumbnail)? <span class="image thumb"><Image height= {100} width= {160} src={post.thumbnail} alt=""   
             
             /></span> : null}
       </div >    
      </div>  
                </div>
              );
            }})}
      
           
          </div>
          </section>
        
        </div> 
        <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between" }}>
          <h2 style={{color:'orange',marginBottom:"0px"}}>Politique</h2> 
          <Link href="/category/politique" style={{ color:"blue", fontSize:"13px"}}><strong>Voir plus : Politique</strong></Link> 
          </div>
          <div id="innercust" className="innercust">
            <section style={{paddingTop:"10px"}}>
          
          <div >
  
          {sortedposts.filter(item => {return(categorize(item) == "orange")}).map((post, i) => {
            let col=categorize(post); 
               while(i < 6) {  
                 
              var dateresult = formatDistanceToNow(
               
                new Date(post.created),
                {locale: fr} // Pass the locale as an option
              )
             
             //console.log('col ', col)
              return (
                <div>
                  <div className="grostitre" style={{ padding:'0 0 0 0',  display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div style={{width:'100%', maxWidth:'5O%'}}> 
              <div className="titre" style={{display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                  <span style={{color:col , fontSize:'18px' , marginRight:"15px"}}> &#8226;</span>
                  {post.source == "Maroc Actualités" ? <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
                 : <a href={`${api_base}/articles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               }
  
                  </div>
                  {post.source == "Maroc Actualités" ? <div style={{flexDirection:'row' , marginLeft:"18px", fontSize: "12px", display:"flex", marginRight:"15px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> : <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", alignItems:"baseline"}} >
                <p style={{ marginLeft:"21px"}}> {post.source}</p>
                
    <span> &nbsp; - &nbsp; </span>
                <p> {dateresult}</p>
                </div>   }
              
              </div>   
              <div >   
             {(isAmp && post.thumbnail)? <span class="image thumb"><amp-img src={post.thumbnail} alt=""  width="200px" 
             
        height="100px"/></span> : null}
        {(!isAmp && post.thumbnail)? <span class="image thumb"><Image src={post.thumbnail}  height= {100} width= {160} alt=""  /></span> : null}
        </div >    
      </div>  
                </div>
              );
            }})}
      
           
          </div>
          </section>
        </div> 
        <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between" }}>
          <h2 style={{color:'brown',marginBottom:"0px"}}>Economie</h2> 
          <Link href="/category/economie" style={{ color:"blue", fontSize:"13px"}}><strong>Voir plus : Economie</strong></Link> 
          </div>
          <div id="innercust" className="innercust">
            <section style={{paddingTop:"10px"}}>
          
          <div >
  
          {sortedposts.filter(item => {return(categorize(item) == "brown")}).map((post, i) => {
            let col=categorize(post); 
               while(i< 6) {  
                 
              var dateresult = formatDistanceToNow(
               
                new Date(post.created),
                {locale: fr} // Pass the locale as an option
              )
             
             //console.log('col ', col)
              return (
                <div>
                  <div className="grostitre" style={{ padding:'0 0 0 0',  display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div style={{width:'100%', maxWidth:'5O%'}}> 
              <div className="titre" style={{display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                  <span style={{color:col , fontSize:'18px' , marginRight:"15px" }}> &#8226;</span>
                  {post.source == "Maroc Actualités" ? <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
                 : <a href={`${api_base}/articles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               }
  
                  </div>
                  {post.source == "Maroc Actualités" ? <div style={{flexDirection:'row' , fontSize: "12px", display:"flex",marginLeft:"18px", marginRight:"15px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> : <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", alignItems:"baseline"}} >
                <p style={{ marginLeft:"21px"}}> {post.source}</p>
                
    <span> &nbsp; - &nbsp; </span>
                <p> {dateresult}</p>
                </div>   }
              
              </div>   
              <div >   
             {(isAmp && post.thumbnail)? <span class="image thumb"><amp-img src={post.thumbnail} alt=""  width="200px" 
             
        height="100px"/></span> : null}
        {(!isAmp && post.thumbnail)? <span class="image thumb"><Image height= {100} width= {160} src={post.thumbnail} alt=""  /></span> : null}
        </div >   
      </div>  
                </div>
              );
            }})}
      
           
          </div>
          </section>
        
        </div> 

         {/* Sport */}


         <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between"}}>
          <h2 style={{color:'green', marginBottom:"0px"}}>Sport</h2> 
          <Link href="/category/sport" style={{ color:"blue", fontSize:"13px"}}><strong>Voir plus : Sport</strong></Link> 
          </div>
          <div id="innercust" className="innercust">
            <section style={{paddingTop:"10px"}}>
          
          <div >
  
              {
              sortedposts.filter(item => {return(categorize(item) == "green")}).map((post, i) => {
                let col=categorize(post); 
                
               
               while(i < 6) {  
                 
              var dateresult = formatDistanceToNow(
               
                new Date(post.created),
                {locale: fr} // Pass the locale as an option
              )
             
             //console.log('col ', col)
             return (
              <div>
                <div className="grostitre" style={{ padding:'0 0 0 0',  display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div style={{width:'100%', maxWidth:'5O%'}}> 
              <div className="titre" style={{display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                <span style={{color:col , fontSize:'18px' , marginRight:"15px"}}> &#8226;</span>
                {post.source == "Maroc Actualités" ? <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
                 : <a href={`${api_base}/articles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               }

                </div>

{post.source == "Maroc Actualités" ? <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", marginRight:"15px", marginLeft:"18px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> : <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", alignItems:"baseline"}} >
                <p style={{ marginLeft:"21px"}}> {post.source}</p>
                
    <span> &nbsp; - &nbsp; </span>
                <p> {dateresult}</p>
                </div>   }
                

                
                
                
                
            </div> 
            
           
            <div >     
           {(isAmp && post.thumbnail)? <span class="image thumb"><amp-img src={post.thumbnail} alt=""  width="200px" 
           
      height="100px"/></span> : null}
      {(!isAmp && post.thumbnail)? <span class="image thumb"><Image height= {100} width= {160} src={post.thumbnail} alt=""   
           
           /></span> : null}
     </div>   
    </div>  
              </div>
            );
          }})}
    
         
        </div>
        </section>
        
        </div> 

        <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between"}}>
          <h2 style={{color:'pink', marginBottom:"0px"}}>People</h2> 
          <Link href="/category/people" style={{ color:"pink", fontSize:"13px"}}><strong>Voir plus : People</strong></Link> 
          </div>
          <div id="innercust" className="innercust">
            <section style={{paddingTop:"10px"}}>
          
          <div >
  
              {
              sortedposts.filter(item => {return(categorize(item) == "pink")}).map((post, i) => {
                let col=categorize(post); 
                
               
               while(i < 6) {  
                 
              var dateresult = formatDistanceToNow(
               
                new Date(post.created),
                {locale: fr} // Pass the locale as an option
              )
             
             //console.log('col ', col)
             return (
              <div>
                <div className="grostitre" style={{ padding:'0 0 0 0',  display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div style={{width:'100%', maxWidth:'5O%'}}> 
              <div className="titre" style={{display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                <span style={{color:col , fontSize:'18px' , marginRight:"15px"}}> &#8226;</span>
                {post.source == "Maroc Actualités" ? <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
                 : <a href={`${api_base}/articles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               }

                </div>

{post.source == "Maroc Actualités" ? <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", marginRight:"15px", marginLeft:"18px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> : <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", alignItems:"baseline"}} >
                <p style={{ marginLeft:"21px"}}> {post.source}</p>
                
    <span> &nbsp; - &nbsp; </span>
                <p> {dateresult}</p>
                </div>   }
                

                
                
                
                
            </div> 
            
           
            <div >     
           {(isAmp && post.thumbnail)? <span class="image thumb"><amp-img src={post.thumbnail} alt=""  width="200px" 
           
      height="100px"/></span> : null}
      {(!isAmp && post.thumbnail)? <span class="image thumb"><Image height= {100} width= {160} src={post.thumbnail} alt=""   
           
           /></span> : null}
     </div>   
    </div>  
              </div>
            );
          }})}
    
         
        </div>
        </section>
        
        </div> 
       
</div>


       







<div className='col-3 col-12-medium'>
        <div style = {{ marginTop:"40px", padding:"O O O O" , marginBottom:"10px" ,display:"flex", direction:"row", alignItems:"baseline",justifyContent:"space-between" }}>
          <h2 className="icon solid fa-fire-alt" style={{color:"#f56a6a" ,marginBottom:"0px"}}> Les plus lus</h2> 
          
          </div>
						<div  style = {{  paddingLeft:"10px", paddingRight:"10px", marginLeft:"0px", marginRight:"0px",  boxShadow: "2px 2px 8px 2px rgba(0,0,0,0.2)" , borderRadius: "5px 5px 5px 5px"}}>
          <section style={{paddingTop:"10px"}}>
          
        <div style={{margin:'10px 10px 10px 10px'}}>

            {hotposts.hotposts.map((post, i) => {
           //   console.log('kkk' , post.created)
             while(i < 5) {  
               
            var dateresult = formatDistanceToNow(
           
              new Date(post.created),
              {locale: fr} // Pass the locale as an option
            )
           var col = categorize(post)
           //console.log('col ', col)
            return (
              <div>
                <div className="grostitre" style={{ display:"flex", direction:"row" ,justifyContent:"space-between"}}>
               <div > 
              <div className="titre" style={{width:"100%",display:"flex", direction:"row" ,alignItems:"flex-start"}} >
                <span style={{color:col , fontSize:'18px', marginRight:"15px" }}> &#8226;</span>
                {post.source == "Maroc Actualités" ? <a href={`${api_base}/ownarticles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
                 : <a href={`${api_base}/articles/${post.slug}`} style={{textDecorationLine:"none"}} > 
                 <strong style={{fontWeight:"900", fontSize:"14px", textDecorationLine:"none"}}> {post.title}</strong></a>
               }

                </div>
                {post.source == "Maroc Actualités" ? <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", marginRight:"25px", alignItems:"center"}} >
                <Image style={{ marginLeft:"21px", marginRight:"15px"}} height= {30} width= {40} src='/Logo Solo PNG.png' alt="maroc actualités"   
           
           />
                
    <span> &nbsp; - &nbsp; </span>
                <span> {dateresult}</span>
                
                
                
            </div> : <div style={{flexDirection:'row' , fontSize: "12px", display:"flex", alignItems:"baseline"}} >
                <p style={{ marginLeft:"21px"}}> {post.source}</p>
                
    <span> &nbsp; - &nbsp; </span>
                <p> {dateresult}</p>
                </div>   }
            
            </div>   
            
    </div>  
              </div>
            );
          }})}
    
         
        </div>
        </section>
        </div>
        </div> 
</div>






       
        </div> 

        
        
      );
    
  };
  
  export default GeneralFeed;

  