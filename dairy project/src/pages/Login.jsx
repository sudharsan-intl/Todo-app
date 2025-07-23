import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){
const user= props.user
const navigate = useNavigate()
 var userfound =false

const[ruser,setruser]=useState(true)


const[iusername,setiusername]=useState()
const[ipass,setipass]=useState()

function handleiuser(event){
 setiusername(event.target.value)
         

}



function handlepass(event){
  setipass(event.target.value)
}



function checkuser(){
   
      user.forEach(function(item){
              if(item.username === iusername && item.password === ipass )
              {
                console.log("loginsusee")
                userfound = true
                navigate("/Landing",{state:{user:iusername}})
              }
                


      })
             if(userfound==false){
              console.log("loginfail")
                  setruser(false)

             }


}





















return(
<div className="bg-black p-10">
    <div className="bg-white p-12">
        <div className="p-3"> 
     <h1 className="font-bold text-2xl  m-2 pt-8 ">Hey Hi</h1>
        {ruser? <p className="font-semibold ml-2 ">I help you manage your activites after your login :)</p>:<p className="text-red-400">please sign up before you login</p>}
        </div>
  
         <input value={iusername} onChange={handleiuser} className="border border-gray-700 p-2 m-1 ml-5" placeholder="username"></input><br></br>
          <input value={ipass} onChange={handlepass} className="border border-gray-700 p-2 m-1  ml-5" placeholder="password"></input><br></br>
          <button onClick={checkuser} className="bg-purple-400 text-black p-2 border border-black rounded-md m-2 px-5 ml-5">Login</button>

          <p className="ml-5">Don't have an account?<Link to={"/Signup"} className="underline" >Signup</Link> </p>
    </div>




</div>
)



}
export default Login