import Image from "next/image"
import Link from "next/link"

import city from "../public/city.jpg"
import civic from "../public/civic.jpg"
import toyota from "../public/toyota.jpg"
import markx from "../public/markx.jpg"

import Nav from "./components/Nav"
import Footer from "./components/Footer"

export default function web (){
  return(
      <div>
        <Nav /><div>
        <div className="flex h-10 justify-center py-4">
          <h1 className="text-lg">Sell Your Car On Pak Wheels And Get The Best Price</h1>
        </div>
        <div className="flex justify-around py-8 bg-">
          <div>
          <h1 className="text-xl"><b>Post Your Ad On Pakwheels</b></h1>
          <ul className="py-3 text-sm">
            <li className="py-1">Post Your Ad Free In 3 Easy Steps</li>
            <li className="py-1">Get Genuine offers from Verified Buyers</li>
            <li className="py-1">Sell your car Fast at the Best Price</li>
          </ul><div className="py-2">
          <button className="h-6 w-28 bg-red-600 rounded-sm">Post Your Ad</button></div>
          </div>
          <div className="py-10"><h1 className="text-2xl">OR</h1></div>
          <div>
            <h1 className="text-xl"><b>Try PakWheels Sell It For Me</b></h1>
            <ul className="py-5 text-sm">
              <li className="py-1">Dedicated Sales Expert To Sell your Car</li>
              <li className="py-1">We Bargain for you and share the Best Offer</li>
              <li className="py-1">We ensure Safe & Seucre Transaction</li>
            </ul>
            <div><button className="h-6 w-36 bg-red-600 rounded-sm">Register Your Car</button></div>
        </div>
        </div>
        </div>

        <div className="py-14">

        <div><b><h1 className=" text-xl px-4">Featured New Cars</h1></b></div>
        <div className="py-4"><ul className="flex">
          <li className="px-4">Populer</li>
          <li className="px-4">Upcoming</li>
          <li className="px-4">Newly Launched Cars</li>
          </ul>
          </div>
        </div>

            <div className="flex justify-center">
            <Link href="components/honda-city"><div className="px-1"><Image src={city} alt="loading" width={250} /><div className="flex justify-center bg-white"><p className="text-blue-800"><b>Honda City</b></p></div><div className="flex justify-center bg-white"><p className="text-green-600">PKR 46.5 - 65.0 lacs</p></div></div></Link>
           

           <Link href="components/honda-civic"><div className="px-1"><Image src={civic} alt="loading" width={250} />
           <div className="flex justify-center bg-white"><p className="text-blue-800"><b>Honda Civic</b></p></div><div className="flex justify-center bg-white"><p className="text-green-600">PKR 86.6 - 99.0 lacs</p></div></div></Link>
            
           <Link href="components/toyota-corolla"><div className="px-1"><Image src={toyota} alt="loading" width={250} /><div className="flex justify-center bg-white"><p className="text-blue-800"><b>Toyota Corolla</b></p></div><div className="flex justify-center bg-white"><p className="text-green-600">PKR 59.7 - 75.5 lacs</p></div></div></Link>

            
            <Link href="components/mark-x"><div className="px-1"><Image src={markx} alt="loading" width={250} /><div className="flex justify-center bg-white"><p className="text-blue-800"><b>Toyota Mark X</b></p></div><div className="flex justify-center bg-white"><p className="text-green-600">PKR 90.0 - 99.0 lacs</p></div></div></Link>
            </div>
          
          

          <div className="py-11"><Footer /></div>
      </div>
  )
}