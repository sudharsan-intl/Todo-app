import Card from "./Card"
import TodoContainer from "./TodoContainer"


function Header(props){
return(<div className="bg-black p-10">
    <div className="bg-white font-poppins p-10" >
        <h1 className='text-2xl  '>Hello {props.name} !</h1>
     <h1 className="text-gray-800  font-poppins" >I help you manage your activities :)</h1>


                
  <Card></Card> 

  <TodoContainer></TodoContainer>
      



 






    </div>
  


</div>)

}
export default Header