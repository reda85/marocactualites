import Image from 'next/image'
export default function Vignette(props) {

    const {posts} = props
    return(
        <div>
        <div className=' my-3'>
            <div className='py-6 font-bold font-Lora text-black text-3xl'>
            À la une
            </div>
            <div className='' >
            <Image width={1200}
    height={950}
    objectFit="cover" src={posts[1].thumbnail} alt=""   
           
           />
           </div>
           <div className='my-4 font-semibold text-black text-2xl'>{posts[1].title}</div>
        </div>
        <div className=' my-12 grid grid-cols-3 gap-4'>

            <div>
           
            <div className='' >
            <Image width={1200}
    height={950}
    objectFit="cover" src={posts[1].thumbnail} alt=""   
           
           />
           </div>
           <div className='my-4 font-semibold text-black text-lg'>{posts[1].title}</div>
            </div>
            <div>
            
            <div className='' >
            <Image width={1200}
    height={950}
    objectFit="cover" src={posts[2].thumbnail} alt=""   
           
           />
           </div>
           <div className='my-4 font-semibold text-black text-lg'>{posts[2].title}</div>
            </div>
            <div>
           
            <div className='' >
            <Image width={1200}
    height={950}
    objectFit="cover" src={posts[3].thumbnail} alt=""   
           
           />
           </div>
           <div className='my-4 font-semibold text-black text-lg'>{posts[3].title}</div>
            </div>
        </div>
        </div>
    )
}