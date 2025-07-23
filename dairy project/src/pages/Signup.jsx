import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
const user=props.user
const navigate = useNavigate()
const  setuser=props.setuser



const[iusername,setiusername]=useState()
const[ipass,setipass]=useState()

function handleiuser(event){
 setiusername(event.target.value)
         

}



function handlepass(event){
  setipass(event.target.value)
}



function  handleadd(){

setuser([...user,{username:iusername,password:ipass}])
console.log("signupsuxess")
navigate("/")
}














return(
<div className="bg-black p-10">
    <div className="bg-white p-12">
        <div className="p-3"> 
     <h1 className="font-bold text-2xl  m-2 pt-8 ">Hey Hi</h1>
         <p className="font-semibold ml-2 ">Sign up here:)</p>
        </div>
   
         <input value={iusername}  onChange={handleiuser}   className="border border-gray-700 p-2 m-1 ml-5" placeholder="username"></input><br></br>
          <input value={ipass}   onChange={handlepass}    className="border border-gray-700 p-2 m-1  ml-5" placeholder="password"></input><br></br>
          <button onClick={handleadd} className="bg-pink-400 text-black p-2 border border-black rounded-md m-2 px-5 ml-5">Sign Up</button>

          <p className="ml-5">Don't have an account?<Link to={"/"} className="underline" >Login</Link> </p>
    </div>




</div>
)



}
export default Signup