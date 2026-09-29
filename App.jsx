// import React, { Component } from "react";
// import Nav from "./Topic1/Nav";

// export default class App extends Component{
//     render(){
//         return(
//         <div>
//             <Nav></Nav>
//             </div>

//         )
//     }
// }

// -------------FBC---------------

// import React from "react";
// import Navv from "./Topic1/Navv";


// let App =()=>{
//     return(
//         <div>
//             <Navv></Navv>
//         </div>
//     )
// }
// export default App

// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor(){
//         super()
//         this.state={
//             subject:"JAVA SCRIPT"
//         }
//     }
//     changeAd=()=>{
//         this.setState({subject:"REACT JS"})
//     }

//   render() {
//     return (
//       <div><h1>{this.state.subject}</h1>
//       <button onClick={this.changeAd}>CLICK</button></div>
//     )
//   }
// }
// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     handleI=()=>{
//         this.setState({count:this.state.count+1})
//         if(this.state.count>=0 && this.state.count<=3){
//             document.body.style.backgroundColor="red"
//         }else if(this.state.count>=4 && this.state.count<=8){
//              document.body.style.backgroundColor="green"
//         }else if(this.state.count>=10 && this.state.count<=11){
//              document.body.style.backgroundColor="blue"
//         }
//     }
//     handleD=()=>{
//         this.setState({count:this.state.count-1})
//         if(this.state.count>=0 && this.state.count<=5){
//             document.body.style.backgroundColor="red"
//         }else if(this.state.count>=5 && this.state.count<=10){
//              document.body.style.backgroundColor="green"
//         }else if(this.state.count>=10 && this.state.count<=11){
//              document.body.style.backgroundColor="blue"
//         }
//     }
//   render() {
//     return (
//       <div><h1>{this.state.count}</h1>
//       <button onClick={this.handleI}>click+</button> <button onClick={this.handleD}>click-</button></div>
//     )
//   }
// }
// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//           bulb:"BULB "
//         }
//     }
//     BO=()=>{
//        this.setState({bulb:" BULB ON"});((document.body.style.backgroundColor="green")
//       )
//     }
//     BA=()=>{
//        this.setState({bulb:" BULB OFF"});(document.body.style.backgroundColor="red")
//     }
//   render() {
//     return (
//       <div>
//         <div><h1>{this.state.bulb}</h1> 
//         <button onClick ={this.BO}>ON</button> <button onClick={this.BA}>OFF</button></div>
//       </div>
//     )
//   }
// }
// import React, { Component } from 'react'
// import ON from "./Bulb/images.jpg"
// import OFF from "./Bulb/bulb-off-icon-3.png"

// export default class App extends Component {
//   constructor(){
//     super()

//     this.state={
//       bulb:OFF
//     }
//   }
//   hanI=()=>{
//     this.setState({
//       bulb:ON
//     })
//   }
//   hanK=()=>{
//     this.setState({
//       bulb:OFF
//     })
//   }
//   render() {
//     return (
//       <div><img src={this.state.bulb} alt="" />
//       <button onClick={this.hanI}>ON</button>
//       <button onClick={this.hanK}>OFF</button></div>

//     )
//   }
// }
// import React, { Component } from 'react'
// import VD from "./Video/I Am The Danger -Video Song _ Coolie_ Superstar Rajinikanth_ Nagarjuna_ Lokesh_ Anirudh_Sun Pictures.mp4"
// export default class  extends Component {
//   constructor(){
//     super()
//     this.state={
//       isplaying:true
//     }
//   }
//   VDh=()=>{
//     this.setState({isplaying:! this.state.isplaying})

//     this.max=document.getElementById("max")
//     if(this.state.isplaying){
//         this.max.play()
//     }
//     else{
//       this.max.pause()
//     }
//   }

//   render() {
//     return (
//       <div><video id='max' height={400} width={400} src={VD}></video>
//       <button onClick={this.VDh}>PLAY/PAUSE</button></div>
//     )
//   }
// }
// import React, { Component } from 'react'
// import SL from "./photo/Shree-Leela-2.webp"
// import RV from "./photo/Rukmini-Vasanth-Marriage.webp"
// import RM from "./photo/cinemaexpress_2025-03-10_w6p2ayb1_Ramya.avif"
// import RR from "./photo/any-on-rachita-ram-v0-hj2amim60mte1.webp"
// const images=[RM,SL,RR,RV]
// export default class App extends Component {
  
//   constructor(){
//     super()
//     this.state={
//       currentIndex:0,
//       isphoto:images[0]
//     }
//   }
//   chP = () => {
//   const nextIndex = this.state.currentIndex + 1;

//   this.setState({
//     currentIndex: nextIndex,
//     isphoto: images[nextIndex]
//   });
// };
//  chH = () => {
//   const nextIndexx = this.state.currentIndex -1;

//   this.setState({
//     currentIndex: nextIndexx,
//     isphoto: images[nextIndexx]
//   });
// };
//   render() {
//     return (
//       <div><button onClick={this.chH}>PREV</button><button></button><img height={200} width={200} src={this.state.isphoto} alt="" />
//        <button onClick={this.chP}>NEXT</button></div>
//     )
//   }
// }
// import React, { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState(0)
//   let handleIncrement=()=>{
//     setState(state+1)
//   }
//   return (
//     <div><h1>{state}</h1>
//     <button onClick={handleIncrement}>click</button></div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import VID from "./Video/I Am The Danger -Video Song _ Coolie_ Superstar Rajinikanth_ Nagarjuna_ Lokesh_ Anirudh_Sun Pictures.mp4"
// import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";
// const App = () => {

//   let[play,setplay]=useState(true)

//   let handleVI=()=>{
//     setplay(!play)
//     let max=document.getElementById("max")
//     if(play){
//       max.play()
//     }else{
//       max.pause()
//     }
//   }
//   return (
//     <div><video id='max' height={100} width={200} src={VID}></video>
//     <button onClick={handleVI}>{play ? <FaPlay />:<FaPause />}</button></div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import ON from "./Bulb/images.jpg"
// import OFF from "./Bulb/bulb-off-icon-3.png"
// import { FaLightbulb } from "react-icons/fa";
// import { BsFillLightbulbOffFill } from "react-icons/bs";
// const App = () => {
//   let[state,setstate]=useState(OFF)
//   let handleon=()=>{
//     setstate(ON)
//   }
//   let handleoff=()=>{
//     setstate(OFF)
//   }
//   return (
//     <div><img height={400} width={400} src={state} alt="" />
//     <button onClick={handleon}><FaLightbulb /></button>
//     <button  onClick={handleoff}><BsFillLightbulbOffFill /></button></div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// export const App = () => {
//   let[state,setstate]=useState(null)
  
//   const leo=document.getElementById("leo")
//   let handcolor=()=>{
//     const max=document.querySelector('.max').value
//       leo=document.body.style.color=max
    
//   }
//   return (
//     <div><h1 id='leo'>State management using useState()</h1>
//     <input className='max' type="text" /> 
//       <button onClick={handcolor}> change color</button></div>
//   )
// }
// export default App
// import React, { Component } from 'react'
// import Data from './Data'
// export default class App extends Component {
//   render() {
//     return (
//       <div><Data leo={"magiccccccc"}></Data></div>
//     )
//   }
// }
// import React, { Component } from 'react'
// import Json from './JSON'
// import Data from './Data'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Data leo={Json}></Data>
//       </div>
//     )
//   }
// }
// import React from 'react'
// import Json from "./JSON"
// import Data from './Data'
// const App = () => {
//   return (
//     <div><Data max={Json}></Data></div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import video from './Youtube/Vid.json'
// import Container from './Container'
// import N from "./Youtube/N"
// const App = () => {
//   let [state,setstate]=useState(video)

//   let[vid,setvid]=useState(null)

//   let handlePlay=(dingaa)=>{
//     setvid(dingaa.videoUrl)
// }

//   return (
//     <div id='main'>
//       <N></N>
//       <Container fun={handlePlay} max={state} mark={vid}></Container></div>
//   )
// }

// export default App
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   handleClick=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   // componentDidMount=()=>{
//   //   alert("hello")
//   // }
//   // componentDidUpdate=()=>{
//   //   alert(`count=${this.state.count}`)
//   // }
//   componentWillUnmount=()=>{
//     alert("after death")
//   }
//   render() {
//     return (
//       <div><h1>{this.state.count}</h1>
//       <button onClick={this.handleClick}>click !</button></div>
//     )
//   }
// }
// import React from 'react'
// import Dinga from './HOC/Dinga'
// import Dingi from './HOC/Dingi'
// import Pengi from './HOC/Pengi'
// const App = (props) => {
//   return (
//     <div>
//       <Dinga></Dinga>
//       <Dingi></Dingi>
//       <Pengi></Pengi>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Rajajinagar from './CONTEXT/ContextApi'
// import Darshan from './CONTEXT/Darshan'
// import Shreeleela from './CONTEXT/Shreeleela'

// const App = () => {
//   return (
//     <div>
//       <Rajajinagar>
//         <Darshan></Darshan>
//         <Shreeleela></Shreeleela>
//       </Rajajinagar>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Rajajinagar from './CONTEXT/ContextApi'
// import Darshan from './CONTEXT/Darshan'
// import Cart from './Cart'
// import RV from './CONTEXT/RV'
// const App = () => {
//   return (
//     <div>
//       <Cart></Cart>
//       <Rajajinagar>
//         <Darshan></Darshan>
//         <RV></RV>
//       </Rajajinagar>
      
//     </div>
//   )
// }

// export default App
// import React, { useContext, useState } from 'react'
// import Theme, { ThemeContext } from './ThemeContext/ThemeContext'
// import Container1 from './ThemeContext/Container1'
// import Container2 from './ThemeContext/Container2'

// const App = () => {
//   let leo=useContext(ThemeContext)
//     let [State,usestate]=useState(true)
//     let handleColor=()=>{
//         usestate(!State)
//         let vk=document.getElementById("vk")
//         if(State){
//             vk.style.backgroundColor=leo.red.backgroundColor
//         }else{
//             vk.style.backgroundColor=leo.blue.backgroundColor
//         }
//     }
//   return (
//     <div id='kll'>
//       <ThemeContext.Provider value={Theme}>
//         <Container1></Container1>
//         <Container2></Container2>
//         <button id='kl' onClick={handleColor}>{State ? "DARK":"LIGHT"}</button> 
//       </ThemeContext.Provider>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
//   let[state,setstate]=useState({
//       user:"",
//       password:"",
//       gender:"",
//       check:[""]
// })
//   let handleChange=(e)=>{
//       let{name,value}=e.target;
//       setstate({...state,[name]:value})
      
//   }
//   let handlesubmit=(x)=>{
//     x.preventDefault()
//     console.log({...state});
    
    
//   }
//   return (
//     <div><form action="" onSubmit={handlesubmit}>
//       <label htmlFor="">user</label>
//       <input type="text" name="user" id="" onChange={handleChange}/>

//       <label htmlFor="">password</label>
//       <input type="text" name="password" id="" onChange={handleChange}/>
      
//       <label htmlFor="">Gender:</label>
//       <input type="radio" value="male" name="gender" id="" onChange={handleChange} />male
//       <input type="radio" name="gender" value="female" id="" onChange={handleChange}/>female <br />

//       <label htmlFor="">language:</label>
//       <input type="checkbox" name="check" id="" value="kan" onChange={handleChange} />kannada
//       <input type="checkbox" name="check" id="" value="hin" onChange={handleChange} />hindi
//       <input type="checkbox" name="check" id="" value="eng" onChange={handleChange} />english



//       <input type="submit" value="submit" />     
//       </form></div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   return (
//      <div class="logo-container">
//   <span class="text-white">Front</span><span class="text-orange">end</span>
// </div>
//   )
// }

// export default App
// import React from 'react'
// import  {createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './router/Home'
// import Login from './router/Login'
// import Products from './router/Products'
// import Shoes from './router/Shoes'
// import Cart from './router/Cart'
// const App = () => {

//     let router=createBrowserRouter([
//         {
//             path:"/",
//             element:<Home></Home>,
//             children:[
//                 {
//                     path:"login",
//                     element:<Login></Login>
//                 },
//                 {
//                     path:"Products",
//                     element:<Products></Products>,
//                     children:[
//                         {
//                             path:"products/shoes",
//                             element:<Shoes></Shoes>
//                         }
//                     ]
//                 },
//                 {
//                     path:"cart",
//                     element:<Cart></Cart>
//                 }
//             ]
//         }
//     ])

//   return (
//     <div>
//         <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './CRUD/Home'
// import Data from './CRUD/Data'
// import Printdata from './CRUD/Printdata'
// import Edit from './CRUD/Edit'
// import Delete from './CRUD/Delete'

// const App = () => {

//   let router=createBrowserRouter([
//     {
//       path:"/",
//       element:<Home></Home>,
//       children:[
//         {
//           path:"/data",
//           element:<Data></Data>
//         },
//         {
//           path:"/printdata",
//           element:<Printdata></Printdata>
//         },
//         {
//           path:"/edit/:id",
//           element:<Edit></Edit>
//         },
//         {
//           path:"/delet",
//           element:<Delete></Delete>
//         }
//       ]
//     }
//   ])
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './PROJECT/CartContext'
import Navbar from './PROJECT/Navbar'
import Home from './PROJECT/Home'
import Collection from './PROJECT/Collection'
import Cart from './PROJECT/Cart'
import Profile from './PROJECT/Profile'
import Payment from './PROJECT/Payment'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;


// import React, { useState } from 'react'

// const App = () => {
// let [state,setState]=useState(0)
// let handleChange=()=>{
//   setState(state+1);
// }
// let handleChange1=()=>{
//   setState(state-1);
// }
// let handle=()=>{
//   setState(0)
// }
//   return (


//     <div><h1>{state}</h1>
//     <button onClick={handleChange1}>(  -  )</button>
//     <button onClick={handle}>reset</button>
//     <button onClick={handleChange}>(  +  )</button></div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
// let [state,setstate]=useState(null)
// const col=document.getElementById("b")
// let hanadlecolor=()=>{
//   const colo=document.querySelector('.a').value
  
//   col=document.body.style.color=colo
  
// }
//   return (
//     <div>
//       <h1 id='b'>Enter color to change</h1><input type="text" className='a' />
//       <h1><button onClick={hanadlecolor}> click to change color</button></h1></div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// export const App = () => {
//   let[state,setstate]=useState(null)
  
//   const leo=document.getElementById("leo")
//   let handcolor=()=>{
//     const max=document.querySelector('.max').value
//       leo=document.body.style.color=max
    
//   }
//   return (
//     <div><h1 id='leo'>State management using useState()</h1>
//     <input className='max' type="text" /> 
//       <button onClick={handcolor}> change color</button></div>
//   )
// }
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App