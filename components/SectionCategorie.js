import { Adsense } from "@ctrl/react-adsense";
import Image from "next/image"
import Link from "next/link";

export default function SectionCategorie(props) {

    const {posts,category,color} = props
    let cat = "mx-2 w-4 h-4 " + color
    
    const api_base = process.env.NODE_ENV == 'production' ? 'https://marocactualites.com/ownarticles/' : 'http://localhost:3000/ownarticles/';
    const myposts = posts.filter(post => post.category == category).slice(0,5)
   
    return(
        <div className="my-12">
           




            <div className="flex flex-row items-center justify-start my-16">
               <div className="text-xl font-extrabold text-black"> {category.toUpperCase()} </div>
                <div className={cat}></div>
                <div className="mr-1 w-full h-4 bg-gray-100"></div>
            </div>


           <div className="flex flex-row">
           <div className="flex flex-col">
            <div className='w-full xl:w-fit ' >



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div className="">
                <Link href={api_base + myposts[0].slug}>
<div className='relative hover:cursor-pointer  w-full aspect-video ' >
            <Image fill 
     src={myposts[0].thumbnail} alt=""   
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"    
           />
           </div>
           </Link>
           <Link href={api_base + myposts[0].slug}>
           <div className='my-4 font-semibold text-black text-xl hover:cursor-pointer hover:opacity-50'>{myposts[0].title}</div>
           </Link>
           <div className='  text-gray-500 text-sm'>{myposts[0].accroche}</div>
        </div>
        
        <div className="grid my-6 grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" grid grid-cols-2 place-content-start md:grid-cols-1 ">
        <Link href={api_base + myposts[1].slug}>
<div className='relative hover:cursor-pointer  mr-2 md:w-full aspect-video' >
            <Image fill
     src={myposts[1].thumbnail} alt=""   
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"     
           />
           </div>
           </Link>
           <Link href={api_base + myposts[1].slug}>
           <div className='  font-semibold hover:cursor-pointer hover:opacity-50 text-black text-base'>{myposts[1].title}</div>
           </Link>
        </div>
        <div className="grid grid-cols-2 place-content-start md:grid-cols-1">
        <Link href={api_base + myposts[2].slug}>
<div className='relative hover:cursor-pointer  mr-2 md:w-full aspect-video' >
            <Image fill
     src={myposts[2].thumbnail} alt=""   
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"      
           />
           </div>
           </Link>
           <Link href={api_base + myposts[2].slug}>
           <div className=' font-semibold hover:cursor-pointer hover:opacity-50 text-black text-base'>{myposts[2].title}</div>
           </Link>
        </div>
        <div className='flex md:hidden my-3 '>
                    <Adsense className="adsbygoogle"
      responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
        <div className="grid place-content-start grid-cols-2 md:grid-cols-1">
        <Link href={api_base + myposts[3].slug}>
<div className='relative hover:cursor-pointer  mr-2 md:w-full aspect-video' >
            <Image fill
     src={myposts[3].thumbnail} alt=""   
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"      
           />
           </div>
           </Link>
           <Link href={api_base + myposts[3].slug}>
           <div className=' font-semibold hover:cursor-pointer hover:opacity-50 text-black text-base'>{myposts[3].title}</div>
           </Link>
        </div>
        <div className="grid grid-cols-2 place-content-start md:grid-cols-1">
        <Link href={api_base + myposts[4].slug}>
<div className='relative hover:cursor-pointer  mr-2 md:w-full aspect-video' >
            <Image fill
     src={myposts[4].thumbnail} alt=""   
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"      
           />
           </div>
           </Link>
           <Link href={api_base + myposts[4].slug}>
           <div className=' font-semibold hover:cursor-pointer hover:opacity-50 text-black text-base'>{myposts[4].title}</div>
        </Link>
        </div>
        </div>
        </div>
       
        </div>
        <div className=" hidden md:flex ">
     <Adsense className=" hidden md:flex "
      responsive='true'
     
     layoutKey="-h7-2g+1-79+wn"
     client="ca-pub-1131650691837357"
     slot="9009472157"></Adsense>
     </div>
     </div>

        <div className="my-3 hidden md:flex h-full md:w-80 md:flex-col md:items-center md:px-12  md:sticky md:top-0 ">
        <Adsense className="text-center  my-3"
  client="ca-pub-1131650691837357"
  slot="6027117993"
  style={{ display: 'block', width:'300px', height:'600px' }}
  
  format="auto-relaxed"
/>

     </div>
     </div>
     <div className='flex md:hidden my-3 '>
                    <Adsense className="adsbygoogle"
      responsive='true'
     client="ca-pub-1131650691837357"
     slot="9619846246"></Adsense>
     </div>
     
        </div>
    )
}