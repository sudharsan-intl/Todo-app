import Todolist from './Todolist'
import Form from './Form'
import { useState } from 'react'













function TodoContainer(){



const [list,setlist]=useState([{id:1,activity:""}])





















         return(<div className='flex flex-wrap'>
<Form list={list} setlist={setlist}></Form>
<Todolist list={list} setlist={setlist}/>
               




         </div>)




}
export default TodoContainer 