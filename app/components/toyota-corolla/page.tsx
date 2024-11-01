import Image from "next/image"
import toyota from "../../../public/toyota.jpg"
import Link from "next/link"

export default function toyotaCorolla(){

return(

    <div>

           <div className="flex justify-center py-10"><div className="w-1/2 h-24"><h1 className="text-3xl text-center"><u><b> Toyota Corolla 2024 Price In Pakistan, Images, Reviews & Specs</b></u></h1></div></div>

            <div className="flex justify-center"><Image src={toyota} alt="loading" width={400} /></div>

            <div className="flex justify-center py-12">
                <div className="px-2"><button className=" bg-blue-600 h-11 w-36 text-xs rounded-md">Book a test drive</button></div>
                <div className="px-2"><button className=" bg-blue-600 h-11 w-36 text-xs rounded-md">Request Bank Finance</button></div>
                <div className="px-2"><button className=" bg-blue-600 h-11 w-36 text-xs rounded-md">Visit Place</button></div>
                <div className="px-2"><button className=" bg-blue-600 h-11 w-36 text-xs rounded-md">Car Inspection</button></div>
                </div>

                <div className="flex justify-center py-7"><h1 className="text-green-600 text-2xl">PKR 45.00.000</h1></div>

               <Link href="form"><div className="flex justify-center h-40"><button className=" bg-blue-600 h-11 w-36 text-sm rounded-md">Make Payment</button></div></Link>
    </div>
)

}