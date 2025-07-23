export default Form
import { useState } from "react"




function Form(props){
        const list=props.list

const setlist=props.setlist

    const [newactivity,setnewactivity]=useState("")

   const handleadd=(event)=>{
          setnewactivity(event.target.value)




   }

        
const handleaddelement=()=>{
        setlist([...list,{id:list.length+1,activity:newactivity}])
        setnewactivity("")


}





















 return(


     <div className="font-poppins">
    <h1 className="font-semibold">Manage Activities</h1>
    <input value={newactivity}  onChange={handleadd}     placeholder="Next Activities" className="border border-gray-700  p-1 w-70"></input>
    <button onClick={handleaddelement} className=" border border-gray-700 bg-cyan-900 text-blue-50 p-1 m-1 cursor-pointer">Add</button>
            


   </div>

 )
 


}