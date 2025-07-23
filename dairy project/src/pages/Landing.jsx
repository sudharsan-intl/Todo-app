import Header from "../Components/Header"
import Card from "../Components/Card"
import TodoContainer from "../Components/TodoContainer"


import { useLocation } from "react-router-dom"

function Landing(){
const data = useLocation()


   return(

        <div className="bg-black p-10">
    <div className="bg-white font-poppins p-10" >


<Header name={data.state.user}></Header>

                

      



 


</div>



    
  




</div>)

}


export default Landing