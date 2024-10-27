import React from "react";
import image1 from "../../public/image1.jpg"
import image2 from "../../public/image2.jpg"
import image3 from "../../public/image3.jpg"
import image4 from "../../public/image4.jpg"
import image5 from "../../public/image5.jpg"
import image6 from "../../public/image6.jpg"
import InstaImg from "./InstaImg";

const Insta =()=>{
    return(
    <div id="insta" className="max-w-[1240px] mx-auto text-center py-20">
        <p className="font-bold text-2xl">Follow me on Instagram</p>
        <p className="pb-4">@Zee_Captures</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
            <InstaImg socialimg={image1} />
            <InstaImg socialimg={image2} />
            <InstaImg socialimg={image3} />
            <InstaImg socialimg={image4} />
            <InstaImg socialimg={image5} />
            <InstaImg socialimg={image6} />
        </div>
    </div>
    )
}

export default Insta