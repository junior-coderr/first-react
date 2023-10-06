
function Popup(props){
let display = props.display;
    return(
        <div id="popup" className="fixed bg-[#00000074] w-[100%] h-[100%] hidden justify-center items-center" > 
            <div className="bg-[#e4e4e4] p-8 text-center rounded-md flex flex-col gap-4 relative">
            <h2 className="text-[30px] font-googleHead">Successfully registered!</h2>
            <i onClick={()=>{document.getElementById("popup").style.display = "none";}} class="bi bi-x text-[20px] absolute top-0 px-[5px] m-2 right-0 rounded-full transition-all  hover:bg-[#0b0b0b1b]"></i>
            </div>
        </div>
    )
}

export default Popup;