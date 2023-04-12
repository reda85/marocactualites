
import Image from "next/image";
import Link from "next/link";

const PostList = ({ posts , title, isAmp, icon, col } ) => {
  let api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com' : 'http://localhost:3000';
  posts = posts.sort((a,b) => (a.created < b.created) ? 1 : ((b.created < a.created) ? -1 : 0)); 
  return (
    <div id="main" >
          <div className="row">
						<div  >
            <div className="flex flex-row items-center justify-start my-16">
               <div className="text-xl font-extrabold text-black"> {title} </div>
                <div className={col}></div>
                <div className="mr-1 w-full h-4 bg-gray-100"></div>
            </div>
          <section style={{marginTop:'60px'}}> 
      {posts.map((post, i) => {

        var localdate = new Intl.DateTimeFormat('fr-FR').format(new Date(post.created))
        
        return (
          <div className="md:w-2/3 w-full" key={i}>
          <div className="post" style = {{ borderBottom:"2px", borderBottomColor:"black", paddingRight:"10px", marginLeft:"0px", marginRight:"0px",  }} key={i}>
           
            
            <div  >
             
             
            </div>
            <div className="flex w-full flex-col sm:flex-row">
         
           
             <div className="relative sm:h-32 h-64 aspect-video">
              <Image src={post.thumbnail} alt="" placeholder="empty" fill />
              </div> 
            <div className=" mx-2 flex flex-col sm:flex-row">
            { <Link className="text-gray-800" href={`${api_base}/ownarticles/${post.slug}`} >
            <div className=" text-black mb-5 sm:text-xl text-base ">{post.title}</div>
            <time>{localdate} </time>
             
             
            
            <div className=" text-gray-800 hidden sm:flex "> {post.accroche} </div>
              </Link> }
            </div>
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