import Image from "next/image"
import { useRouter } from "next/router"
export default function VerticalMenu() {

    const router = useRouter()

    return(
        <div className=" flex flex-col">

<Image src='/Logo KamalnoPoint PNG.png' className="my-2" priority alt='Maroc actualités' height='50' width='200'></Image>

<div className='my-1 p-2  text-lg font-semibold hover:bg-orange-500 hover:text-white hover:cursor-pointer'><a  href='/category/politique'>Politique</a></div>
                <div className='my-1 p-2 text-lg hover:bg-red-500 hover:text-white  font-semibold hover:cursor-pointer'><a  href='/category/economie'>Economie</a></div>
                <div className='my-1 p-2 text-lg hover:bg-green-500 hover:text-white  font-semibold hover:cursor-pointer'><a  href='/category/sport'>Sport</a></div>
                <div className='my-1 p-2 text-lg hover:bg-blue-500 hover:text-white  font-semibold hover:cursor-pointer'><a  href='/category/societe'>Société</a></div>
                <div className='my-1 p-2  text-lg hover:bg-indigo-500 hover:text-white  font-semibold hover:cursor-pointer'><a  href='/category/people'>People</a></div>

        </div>
    )
}