import Link from "next/link"

export default function Footer (){
    return(
            <footer className="bg-gradient-to-r from-slate-900">
                <div className="flex justify-around px-9 py-4">
                    <div>
                        <h1><b>Cars By Category</b></h1>
                        <ul className="py-4">
                            <li>Jeep</li>
                            <li>Japanese Cars</li>
                            <li>Imported Cars</li>
                            <li>Automatic Cars</li>
                            <li>4x4 Cars</li>
                        </ul>
                    </div>
                    <div>
                        <h1><b>Cars By Body Type</b></h1>
                        <ul className="py-4">
                            <li>Sedan</li>
                            <li>Hatchback</li>
                            <li>SUV</li>
                            <li>Crossover</li>
                            <li>Van</li>
                        </ul>
                    </div>
                    <div className="py-9">
                        <b><ul>
                            <Link href=""><li>Youtube</li></Link>
                            <Link href=""><li>Instagram</li></Link>
                            <Link href=""><li>FaceBook</li></Link>
                        </ul></b>
                    </div>
                </div>
            </footer>
    )
}