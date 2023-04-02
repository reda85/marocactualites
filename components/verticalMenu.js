import Image from "next/image"
export default function VerticalMenu() {

    return(
        <div className=" flex flex-col">

<Image src='/Logo KamalnoPoint PNG.png' className="my-2" priority alt='Maroc actualités' height='50' width='200'></Image>

<div className='my-1 p-2  text-lg font-semibold hover:bg-orange-500 hover:text-white hover:cursor-pointer'>Politique</div>
                <div className='my-1 p-2 text-lg hover:bg-red-500 hover:text-white  font-semibold hover:cursor-pointer'>Economie</div>
                <div className='my-1 p-2 text-lg hover:bg-green-500 hover:text-white  font-semibold hover:cursor-pointer'>Sport</div>
                <div className='my-1 p-2 text-lg hover:bg-blue-500 hover:text-white  font-semibold hover:cursor-pointer'>Société</div>
                <div className='my-1 p-2  text-lg hover:bg-indigo-500 hover:text-white  font-semibold hover:cursor-pointer'>People</div>

        </div>
    )
}