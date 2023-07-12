import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
export default function VerticalMenu() {

    const router = useRouter()

    return(
        <div className=" flex flex-col">

<Image src='/Logo KamalnoPoint PNG.png' className="my-2" priority alt='Maroc actualités' height='50' width='200'></Image>

<div className='my-1 p-2  text-lg font-semibold hover:bg-orange-500 hover:text-white hover:cursor-pointer'><Link  href='/category/politique'>Politique</Link></div>
                <div className='my-1 p-2 text-lg hover:bg-red-500 hover:text-white  font-semibold hover:cursor-pointer'><Link  href='/category/economie'>Economie</Link></div>
               {/* <div className='my-1 p-2 text-lg hover:bg-green-500 hover:text-white  font-semibold hover:cursor-pointer'><Link  href='/category/sport'>Sport</Link></div> */}
                <div className='my-1 p-2 text-lg hover:bg-blue-500 hover:text-white  font-semibold hover:cursor-pointer'><Link  href='/category/societe'>Société</Link></div>
                <div className='my-1 p-2  text-lg hover:bg-indigo-500 hover:text-white  font-semibold hover:cursor-pointer'><Link  href='/category/people'>People</Link></div>

        </div>
    )
}