import Header from "./Components/Header"
import Card from "./Components/Card"
import TodoContainer from "./Components/TodoContainer"
import Login from  "./pages/Login"
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){ 

const [user,setuser]=useState([{username:"sudharsan",password:"1234"}])





return(


  <div>


<BrowserRouter>
<Routes>

<Route  path='/' element={<Login  user={user} setuser={setuser}  />}></Route>
<Route path='/signup' element={<Signup  user={user}  setuser={setuser}  />}></Route>

<Route path='/landing' element={<Landing  user={user}  setuser={setuser}  />}></Route>

</Routes>







</BrowserRouter>
 </div>


)}
export default App
