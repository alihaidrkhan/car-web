import Link from "next/link"

export default function from (){

    return(

        <div>

            <h1 className="text-center font-bold text-3xl uppercase py-9">Enter Your Details</h1>
            
                <div className="py-10">
                    <form className="gap-3 flex flex-col mt-28 justify-center items-center" >
                       
                        <input type="name" className=" bg-black px-2 py-2 rounded-md w-1/5 border border-slate-400"
                        placeholder="Enter Your Name"/>

                        <input type="email" className=" bg-black px-2 py-2 rounded-md w-1/5 border border-slate-400"
                        placeholder="Enter Your Email"/>

                        <input type="password" className="bg-black px-2 py-2 rounded-md w-1/5 border border-slate-400"
                        placeholder="Card Number"/>

                        <input type="address" className="bg-black px-2 py-2 rounded-md w-1/5 border border-slate-400"
                        placeholder="Address"/>

                    </form>

                    <div className="flex justify-center py-10">

                        <Link href="thankyou"><button className="bg-blue-500 w-40 h-11 rounded-md">Place Your Order</button></Link>
                    
                    </div>
                </div>

            </div>

    )

}