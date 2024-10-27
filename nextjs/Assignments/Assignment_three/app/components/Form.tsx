import React from "react";

const Form=()=>{
    return (
        <div id="form" className="max-w-[1240px] m-auto p-4 h-screen">
            <h2 className="text-2xl font-bold text-center p-4">Contact Me!</h2>
            <form className="max-w-[600px] m-auto">
                <div className="grid grid-cols-2 gap-2">
                <input className="border shadow-md p-3" type="text" placeholder="Name?" />
                <input className="border shadow-md p-3" type="email" placeholder="Email?" />
                </div>
                <input className="border w-full my-2 shadow-md p-3" type="text" placeholder="Subject" />
                <textarea className="border w-full shadow-md p-3" cols={30} rows={10} placeholder="Message"></textarea>
                <button className="w-full shadow-md p-4 font-bold text-white bg-black">SUBMIT!</button>
            </form>
        </div>
    )
}
export default Form