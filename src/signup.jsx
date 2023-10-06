import {Link, useNavigate } from "react-router-dom";
import {useState} from "react";

function Signup(){
    let [path,setPat] = useState('/');
    let navigate = useNavigate();

    async function registerUser(){
        let firstname =document.getElementById('f_name').value;
        let lastname =document.getElementById('l_name').value;
        let email =document.getElementById('email_C').value;
        let password =document.getElementById('password_C').value;
        
        let userdata = {
            firstname,
            lastname,
            email,
            password
        }
if(firstname.length > 0 && lastname.length > 0 && email.charAt(email.length-1)=='m' && email.charAt(email.length-2)=="o" && email.charAt(email.length-3)=='c' && email.charAt(email.length-4)=='.' && password.length > 0){

            fetch('/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userdata),
            })
              .then((response) => response.json()) // Parse response as JSON
              .then((data) => {

                if(data.message=='success'){
                    navigate('/home');
                    let child_of_notifi = document.getElementById("popup").children[0];
                    child_of_notifi.children[0].innerText='Successfully registered!';
                    document.getElementById("popup").style.display = "flex";

                }else{
                    navigate('/login');
                    let child_of_notifi = document.getElementById("popup").children[0];
                    child_of_notifi.children[0].innerText='User already exists!';
                    document.getElementById("popup").style.display = "flex";
                }
                
              })
              .catch((error) => {
                console.log('Error:', error);
              });
            }else{
              let child_of_notifi = document.getElementById("popup").children[0];
              child_of_notifi.children[0].innerText='Please fill all the fields properly!';
              document.getElementById("popup").style.display = "flex";
            }
        
    }
    return(
        <div className="p-10 flex flex-col gap-10 h-[100%]">
        <img src="/src/assets/rocket.png" className="w-[600px] absolute right-[0px] top-[-3%]" />
        <div>
        <h1 className="text-black font-semibold text-[90px] font-googleHead">Welcome ! </h1>
        </div>


        <form className="flex flex-col gap-5 justify-center">
        <input type="text" id='f_name' required placeholder="First name"  className="border-solid border-[1px] border-black p-3 px-5 text=[15px] outline-none w-[400px] rounded-full"/>
        <input type="text" id='l_name' required placeholder="Last name"   className="border-solid border-[1px] border-black p-3 px-5 text=[15px] outline-none w-[400px] rounded-full"/>
        <input type="email" id='email_C' required placeholder="email address"   className="border-solid border-[1px] border-black p-3 px-5 text=[15px] outline-none w-[400px] rounded-full"/>
        <input type="password" id='password_C' required placeholder=" Create  password"   className="border-solid border-[1px] border-black p-3 px-5 text=[15px] outline-none w-[400px] rounded-full"/>

    <div className="flex flex-col justify-center items-center w-[400px] gap-2">

        <div onClick={registerUser} className="bg-black text-white p-3 px-[100px] text-2xl tracking-[4px] rounded-[4px] text-center rounded-full">Sign up</div>
        <Link to='/login' className="text-xl font-normal underline cursor-pointer">Already have an account ?</Link>
    </div>
        </form>
    </div>
    )
}

export default Signup;