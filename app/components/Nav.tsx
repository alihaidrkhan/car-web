import Image from "next/image"

import carlogo from "../../public/carlogo.png"

export default function Nav (){
    return(
        <div className="flex w-100 h-28 bg-gradient-to-r from-blue-500 justify-center">
            <nav className="flex">
           <div className="px-20"><Image src={carlogo} alt="carlogo" width={130} /></div>
            <ul className="flex">
            <li className="px-6 py-12">Used Cars</li>
            <li className="px-6 py-12">New Car</li>
            <li className="px-6 py-12">Bikes</li>
            <li className="px-6 py-12">Auto Store</li>
            <li className="px-6 py-12">Videos</li>
            <li className="px-6 py-12">Forums</li>
            <li className="px-6 py-12">Blog</li>
            <li className="px-6 py-12">More</li>
            <div className="px-10 py-4"><b>SignUp / Login </b> </div>
            <div className="py-1"><button className=" bg-gradient-to-t from-blue-500 w-36 h-12 rounded-lg" >Place Your Order</button></div>
            </ul></nav></div>
    )
}