import React from "react"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import data from "./data"
 
export default function App() {
   const cards = data.map(item => {
       return (
           <Card
               key={item.id}
               {...item}
           />
       )
   })       
   return (
       <div className="container">
           <Navbar />
           {cards}
       </div>
   )
}