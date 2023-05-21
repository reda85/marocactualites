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
        return  'mx-2 lg:mx-0 lg:my-2 font-bold   ' + colors[categories.indexOf(posts[index].category)] 
    }
    const api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/ownarticles/' : 'http://localhost:3000/ownarticles/';
   // console.log("api_base", api_base + posts[0].slug)
    return(
        <div className='flex  flex-col' >
        <div className='flex  flex-row' >
            <div className='w-full ' >
        <div className='   my-3' >
            <div className='py-6 font-bold bg-gradient-to-r from-red-600  to-green-400 inline-block text-transparent bg-clip-text  text-3xl'>
            À la Une
            </div>
            <Link href={api_base + posts[0].slug}>
            <div className='relative w-full h-128 aspect-video hover:cursor-pointer' >
            <Image fill priority
     src={posts[0].thumbnail} alt=""   
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"    
           />
           </div>
           </Link>
           <Link href={api_base + posts[0].slug}>
           <div className='my-4 hover:cursor-pointer hover:opacity-50 font-semibold text-black text-2xl'>{posts[0].title}</div>
           </Link>
        </div>
         
        <div className=' my-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>

            <div className='flex flex-row md:flex-col'>
            <div className='relative w-1/2 lg:w-full aspect-video hover:cursor-pointer h-28 lg:h-48' >
            <Link href={api_base + posts[1].slug}>
           
            <Image 
  fill src={posts[1].thumbnail} alt=""   
  sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw"      
           />
            </Link>
           </div>
          
           <div className='w-1/2 lg:w-full flex flex-col'> 
           <div className={cat(1,posts)}>{posts[1].category.toUpperCase()}</div>
           <Link href={api_base + posts[1].slug}>
           
           <div className='lg:my-2 mx-2 lg:mx-0  hover:cursor-pointer hover:opacity-50 font-semibold text-black text-base lg:text-lg'>{posts[1].title}</div>
           </Link>
           </div>
            </div>
            <div className='flex flex-row md:flex-col'>
            <div className='relative w-1/2 lg:w-full aspect-video hover:cursor-pointer h-28 lg:h-48' >
            <Link href={api_base + posts[2].slug}>
           
            <Image 
  fill src={posts[2].thumbnail} alt=""   
  sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw"      
           />
            </Link>
           </div>
          
           <div className='w-1/2 lg:w-full flex flex-col'> 
           <div className={cat(2,posts)}>{posts[2].category.toUpperCase()}</div>
           <Link href={api_base + posts[2].slug}>
           
           <div className='lg:my-2 mx-2 lg:mx-0  hover:cursor-pointer hover:opacity-50 font-semibold text-black text-base lg:text-lg'>{posts[2].title}</div>
           </Link>
           </div>
            </div>
            <div className='flex lg:hidden my-3 '>
                    <Adsense className="adsbygoogle"
     responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
     <div className='flex flex-row md:flex-col'>
            <div className='relative w-1/2 lg:w-full aspect-video hover:cursor-pointer h-28 lg:h-48' >
            <Link href={api_base + posts[3].slug}>
           
            <Image 
  fill src={posts[3].thumbnail} alt=""   
  sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw"    
           />
            </Link>
           </div>
          
           <div className='w-1/2 lg:w-full flex flex-col'> 
           <div className={cat(3,posts)}>{posts[3].category.toUpperCase()}</div>
           <Link href={api_base + posts[3].slug}>
           
           <div className='lg:my-2 mx-2 lg:mx-0  hover:cursor-pointer hover:opacity-50 font-semibold text-black text-base lg:text-lg'>{posts[3].title}</div>
           </Link>
           </div>
            </div>
        </div>
        </div>
        <div className='hidden h-full md:flex md:flex-col px-12 lg:items-center   lg:sticky lg:top-0'>
        <Adsense className="text-center  my-3"
  client="ca-pub-1131650691837357"
  slot="6027117993"
  style={{ display: 'block', width:'300px', height:'600px' }}
  
  format="auto-relaxed"
/>

        </div>
        </div>
        <div className="my-3 hidden md:flex ">
     <Adsense className="my-3 hidden md:flex "
   responsive='true'
     
     layoutKey="-h7-2g+1-79+wn"
     client="ca-pub-1131650691837357"
     slot="9009472157"></Adsense>
     </div>
     <div className='flex lg:hidden my-3 '>
                    <Adsense className="adsbygoogle"
    responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
    
       
        </div>
    )
}