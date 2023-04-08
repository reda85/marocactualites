import { Adsense } from '@ctrl/react-adsense'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Vignette(props) {

    const categories = ['société','politique','économie','Sport','people']
    const colors = ['text-indigo-500','text-orange-500','text-red-500','text-green-500','text-indigo-500']
    const {posts} = props
    const {router} = useRouter()
    function cat(index,posts) {
        return  'mx-2 md:mx-0 md:my-2 font-bold   ' + colors[categories.indexOf(posts[index].category)] 
    }
    const api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/ownarticles/' : 'http://localhost:3000/ownarticles/';
   // console.log("api_base", api_base + posts[0].slug)
    return(
        <div className='flex  flex-col' >
        <div className='flex  flex-row' >
            <div className='w-full md:w-fit ' >
        <div className='   my-3' >
            <div className='py-6 font-bold bg-gradient-to-r from-red-600  to-green-400 inline-block text-transparent bg-clip-text  text-3xl'>
            À la Une
            </div>
            <Link href={api_base + posts[0].slug}>
            <div className='relative w-full aspect-video hover:cursor-pointer' >
            <Image fill priority
     src={posts[0].thumbnail} alt=""   
           
           />
           </div>
           </Link>
           <Link href={api_base + posts[0].slug}>
           <div className='my-4 hover:cursor-pointer hover:opacity-50 font-semibold text-black text-2xl'>{posts[0].title}</div>
           </Link>
        </div>
         
        <div className=' my-12 grid grid-cols-1 md:grid-cols-3 gap-8'>

            <div className='flex flex-row md:flex-col'>
            <div className='relative w-1/2 md:w-full hover:cursor-pointer h-32' >
            <Link href={api_base + posts[1].slug}>
           
            <Image 
  fill src={posts[1].thumbnail} alt=""   
           
           />
            </Link>
           </div>
          
           <div className='w-1/2 flex flex-col'> 
           <div className={cat(1,posts)}>{posts[1].category.toUpperCase()}</div>
           <Link href={api_base + posts[1].slug}>
           
           <div className='md:my-2 mx-2 md:mx-0  hover:cursor-pointer hover:opacity-50 font-semibold text-black text-base md:text-lg'>{posts[1].title}</div>
           </Link>
           </div>
            </div>
            <div className='flex flex-row md:flex-col'>
            <div className='relative w-1/2 md:w-full hover:cursor-pointer h-32' >
            <Link href={api_base + posts[2].slug}>
           
            <Image 
  fill src={posts[2].thumbnail} alt=""   
           
           />
            </Link>
           </div>
          
           <div className='w-1/2 flex flex-col'> 
           <div className={cat(2,posts)}>{posts[2].category.toUpperCase()}</div>
           <Link href={api_base + posts[2].slug}>
           
           <div className='md:my-2 mx-2 md:mx-0  hover:cursor-pointer hover:opacity-50 font-semibold text-black text-base md:text-lg'>{posts[1].title}</div>
           </Link>
           </div>
            </div>
            <div className="my-3 md:hidden " >
        <Adsense className="my-3 md:hidden "
     style={{display:'block'}}
     format="fluid"
     layoutKey="-hs-s+1c-5f+cv"
     client="ca-pub-1131650691837357"
    slot="9669767968"></Adsense>
     </div>
     <div className='flex flex-row md:flex-col'>
            <div className='relative w-1/2 md:w-full hover:cursor-pointer h-32' >
            <Link href={api_base + posts[3].slug}>
           
            <Image 
  fill src={posts[3].thumbnail} alt=""   
           
           />
            </Link>
           </div>
          
           <div className='w-1/2 flex flex-col'> 
           <div className={cat(3,posts)}>{posts[3].category.toUpperCase()}</div>
           <Link href={api_base + posts[3].slug}>
           
           <div className='md:my-2 mx-2 md:mx-0  hover:cursor-pointer hover:opacity-50 font-semibold text-black text-base md:text-lg'>{posts[1].title}</div>
           </Link>
           </div>
            </div>
        </div>
        </div>
        <div className='hidden h-full md:flex md:flex-col px-4  md:w-96 md:sticky md:top-0'>
        <Adsense className="adsbygoogle"
     style={{display:"inline-block",width:"300px",height:"600px"}}
     client="ca-pub-1131650691837357"
     slot="3352206399"></Adsense>

        </div>
        </div>
        <div className="my-3 md:hidden " >
        <Adsense className="my-3 md:hidden "
     style={{display:'block'}}
     format="fluid"
     layoutKey="-hs-s+1c-5f+cv"
     client="ca-pub-1131650691837357"
    slot="9669767968"></Adsense>
     </div>
     <div className="my-3 hidden md:flex ">
     <Adsense className="my-3 hidden md:flex "
     style={{display:'inline-block',width:'970px',height:'250px'}}
     
     layoutKey="-h7-2g+1-79+wn"
     client="ca-pub-1131650691837357"
     slot="9009472157"></Adsense>
     </div>
       
        </div>
    )
}