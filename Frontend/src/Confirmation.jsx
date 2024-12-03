import React from 'react'
import drinkinganimation from "./assets/drinkinganimation.gif";
function Confirmation() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-3 py-3">
        
        <div className="grid gap-4 mx-auto" style={{maxWidth:"500px"}}>
           <h1 className="text-4xl text-center text-green-600">Thank You</h1>
           <p className="text-center text-xl text-gray-600">We Appreciate your feedback and are delighted to have you a valued customer. Your opinion helps us improve our services.</p>
           <img src={drinkinganimation} alt="" />
        </div>

    </div>
  )
}

export default Confirmation