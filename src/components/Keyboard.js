import React from 'react'
import Key from "./Key";

export default function Keyboard() {
  const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2 = ["A","S","D","F","G","H","J","K","L"];
  const keys3 = ["Z","X","C","V","B","N","M"];
  
  return (
    <div className='flex align-center justify-center ml-30'>
       <div className='line1 flex flex-row'>
       {
          keys1.map((key)=>{
          return  <Key keyVal={key}/>  
          })
        }
       </div>
       <div className='line2 flex flex-row'>
       {
          keys2.map((key)=>{
          return  <Key keyVal={key}/>  
          })
        }
       </div>
       <div className='line3 flex flex-row'>
        <Key keyVal={"ENTER"} bigKey/>
       {
          keys3.map((key)=>{
          return <Key keyVal={key} />  
          })
        }
        <Key keyVal={"DELETE"} bigKey/>
       </div>
       
    </div>
  )
}
