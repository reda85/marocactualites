import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Vignette(props) {

    const categories = ['société','politique','économie','Sport','people']
    const colors = ['text-indigo-500','text-orange-500','text-red-500','text-green-500','text-indigo-500']
    const {posts} = props
    const {router} = useRouter()
    function cat(index,posts) {
        return  'my-2 font-bold ' + colors[categories.indexOf(posts[index].category)] 
    }
    const api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.vercel.app/ownarticles/' : 'http://localhost:3000/ownarticles/';
    console.log("api_base", api_base + posts[0].slug)
    return(
        <div className='flex  flex-row' >
            <div className='w-2/3' >
        <div className='   my-3' >
            <div className='py-6 font-bold font-Lora text-black text-3xl'>
            À la une
            </div>
            <div className='relative w-128 h-96' >
            <Image fill priority
     src={posts[0].thumbnail} alt=""   
           
           />
           </div>
           <Link href={api_base + posts[0].slug}>
           <div className='my-4 hover:cursor-pointer hover:opacity-50 font-semibold text-black text-2xl'>{posts[0].title}</div>
           </Link>
        </div>
         
        <div className=' my-12 grid grid-cols-1 md:grid-cols-3 gap-8'>

            <div>
           
            <div className='relative h-32' >
            <Image 
  fill src={posts[1].thumbnail} alt=""   
           
           />
           </div>
           <div className={cat(1,posts)}>{posts[1].category.toUpperCase()}</div>
           <Link href={api_base + posts[1].slug}>
           
           <div className='my-2 hover:cursor-pointer hover:opacity-50 font-semibold text-black text-lg'>{posts[1].title}</div>
           </Link>
            </div>
            <div>
            
            <div className='relative h-32' >
            <Image
   fill src={posts[2].thumbnail} alt=""   
           
           />
           </div>
           <div className={cat(2,posts)}>{posts[2].category.toUpperCase()}</div>
           <Link href={api_base + posts[2].slug}>
           <div className='my-2 hover:cursor-pointer hover:opacity-50 font-semibold text-black text-lg'>{posts[2].title}</div>
           </Link>
            </div>
            <div>
           
            <div className='relative h-32' >
            <Image 
    fill src={posts[3].thumbnail} alt=""   
           
           />
           </div>
           <div className={cat(3,posts)}>{posts[3].category.toUpperCase()}</div>
           <Link href={api_base + posts[3].slug}>
           <div className='my-2 hover:cursor-pointer hover:opacity-50 font-semibold text-black text-lg'  >{posts[3].title}</div>
           </Link>
            </div>
        </div>
        </div>
       
        </div>
    )
}