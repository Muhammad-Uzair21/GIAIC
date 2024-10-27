import React from "react";
import Link from "next/link";

const Footer=()=>{
    return(
        <div className="w-full bottom-0">
            <div>
                <div className=" bg-black py-4 text-center">
                    <p className="text-white">&copy; 2020 Zee Captures. All rights reserved.</p>
                    <ul className="flex justify-center space-x-4 mt-2">
                    <li><Link href="#" className="text-gray-300 hover:underline">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:underline">Terms of Service</Link></li>
                    <li><Link href="/contact" className="text-gray-300 hover:underline">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
