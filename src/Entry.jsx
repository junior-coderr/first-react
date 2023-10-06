import {Link} from "react-router-dom";

function Entry(){
    return(
        <div className="flex flex-col justify-center items-center gap-8 h-[75%] ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-black text-[140px] font-googleHead">Join Now</h1>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-2xl font-medium s">Find people nearby for your <br />open science and open-source projects</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <Link to='/login' className="bg-black text-white p-3 px-16 text-2xl tracking-[4px] rounded-[4px]">Login</Link>
                <Link to='/signup' className="text-2xl font-normal underline cursor-pointer">Sign up</Link>
            </div>
        </div>
    )
}

export default Entry;