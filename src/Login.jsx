import {Link, useNavigate } from "react-router-dom";


function Login(props){

    let navigate = useNavigate();
    

  function userAuth(){
    console.log("userAuth");
    let email = document.getElementById("username_L").value;
    let password = document.getElementById("password_L").value;

    let userData ={
        email,
        password
    }


if(email.charAt(email.length-1)=='m' && email.charAt(email.length-2)=="o" && email.charAt(email.length-3)=='c' && email.charAt(email.length-4)=='.' && password.length>0){
    console.log('pa')
    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((response) => {
        if (response.message == "success") {

            navigate('/home');
            let child_of_notifi = document.getElementById("popup").children[0];
            child_of_notifi.children[0].innerText='Successfully logged in!';
            document.getElementById("popup").style.display = "flex";

        }else if (response.message == "failed") {
            console.log(response.message);
            document.getElementById("popup").style.display = "flex";
            let child_of_notifi = document.getElementById("popup").children[0];
            child_of_notifi.children[0].innerText = "Username or Password is incorrect!"
        }
    });

}else{
    let child_of_notifi = document.getElementById("popup").children[0];
    child_of_notifi.children[0].innerText='Please fill the inputs properly!';
    document.getElementById("popup").style.display = "flex";

}

  }


    return(
        <div className="p-10 flex flex-col gap-10 h-[100%]">
            <img src="/src/assets/moon.png" className="w-[500px] absolute right-0 bottom-0" alt="" srcset="" />
            <div>
            <h1 className="text-black font-semibold text-[70px] font-googleHead">YOU are only a step <br /> closer ! </h1>
            </div>

            <div>
            <p className="text-3xl font-medium s">Find people nearby for your <br />open science and open-source projects</p>
            </div>

            <form className="flex flex-col gap-5 justify-center">
            <input type="text" placeholder="Username"  id='username_L' className="border-solid border-[1px] border-black p-3 px-5 text=[15px] outline-none w-[400px] rounded-full"/>
            <input type="text" placeholder="Password" id='password_L' className="border-solid border-[1px] border-black p-3 px-5 text=[15px] outline-none w-[400px] rounded-full"/>
        <div className="flex flex-col justify-center items-center w-[400px] gap-2">
            <div onClick={userAuth} className="bg-black text-white p-3 px-[100px] text-2xl tracking-[4px] rounded-[4px] text-center rounded-full">Login</div>
            <Link to='/signup' className="text-xl font-normal underline cursor-pointer">New here? Sign up</Link>
        </div>
            </form>
        </div>
    )
}

export default Login;