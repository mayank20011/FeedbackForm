import React from 'react'
import expirelinkimg from "./assets/expirelinkimg.gif";
function ExpireLink() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-3 py-3">
        
    <div className="grid gap-4 mx-auto" style={{maxWidth:"500px"}}>
       <h1 className="text-5xl text-center text-red-700">Link Expired</h1>
       <p className="text-center text-xl text-red-400">Your response has already been recorded. We appreciate your participation and thank you for taking the time to provide your feedback.</p>
       <img src={expirelinkimg} alt="" />
    </div>

</div>
  )
}

export default ExpireLink