import { useState } from "react"
import Form from "./Form"
import TodoContainer from "./TodoContainer"
export default Todolist
function Todolist(props){
const list=props.list

const setlist=props.setlist



const handledelete=(removeid)=>{
  var temperr= list.filter(function(item){
     if(item.id === removeid)
     {

        return false
    }
         else{
               return true
           

         }




      })
         setlist(temperr)

             


}







 return(
        
<div className="flex-grow">


        
<div className="bg-purple-500 text-black p-4 flex-grow border rounded-b-sm">
<h1 className="font-semibold">Today's Activity :)</h1>
{list.length===0?<p>You haven't add any activity today</p>:""}



<ul>

{
      list.map(function(item,index){

          return(
          
          <div className="flex justify-between">

 <li> {index+1}.{item.activity}   </li>
                    
    <li><button onClick={()=>{handledelete(item.id)}}>Delete</button></li>
       
          </div>
        
    
                  
                   
          
         )


      })




}


</ul>






</div>


</div>


 )




}