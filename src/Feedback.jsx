import React from "react";
import Star from "./assets/Starimages.png";
import { useRef, useEffect, useState } from "react";

function Feedback({ name, number }) {

  // to get input from textarea
  const textarea=useRef(null);

  // to catch no of stars
  let noOfStars = 0;

  // function to handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    const customerFeedBack={
      "name":name,
      "number":number,
      "rating":noOfStars,
      "feedBack":textarea.current.value,
    }
    if (noOfStars == 0) {
      alert("Fill In the Form")
    } else {
      console.log(customerFeedBack);
      // axios.post("")
      // .then(()=>
      //   {
            
      //   })
      //   .catch(()=>
      //   {

      //   });
    }
  }

  // Array of refrence for stars
  const starRefs = useRef([]);

  // To initialize empty array
  if (starRefs.current.length === 0) {
    for (let i = 0; i < 5; i++) {
      starRefs.current.push(React.createRef());
    }
  }

  // For Star Colors
  function colorStars(index) {
    noOfStars = index + 1;
    starRefs.current.forEach((ref, i) => {
      if (i <= index) {
        ref.current.classList.remove("grayscale");
        ref.current.style.transform = "scale(1.3)";
      } else {
        ref.current.classList.add("grayscale");
        ref.current.style.transform = "scale(1)";
      }
    });
  }
  return (
    <form
      className="flex flex-col min-h-screen gap-6 px-3 py-3 mx-auto"
      style={{ maxWidth: "500px" }}
      onSubmit={handleSubmit}
    >
      {/* For Heading */}
      <h1 className="text-center text-4xl py-4 font-bold text-green-600">
        Feedback Form
      </h1>

      {/* changes in name and phone number */}
      <div className="grid gap-6">
        {/* name div */}
        <div className="border-2 border-black p-4 rounded-md flex items-center gap-3 relative">
          <div
            className="flex gap-3 items-center absolute bg-white text-green-600"
            style={{ top: "-30%" }}
          >
            <i className="fa-solid fa-user"></i>
            Customer Name
          </div>
          <p>{name}</p>
        </div>
        {/*  phone no div */}
        <div className="border-2 border-black p-4 rounded-md flex items-center gap-3 relative">
          <div
            className="flex gap-3 items-center absolute bg-white text-green-600"
            style={{ top: "-30%" }}
          >
            <i className="fa-solid fa-phone"></i>
            Phone Number
          </div>
          <p>{`+${number}`}</p>
        </div>
      </div>

      {/* For Rating */}
      <div className="grid gap-2">
        <h1 className="text-2xl font-bold">Rate Your Experience</h1>
        <div className="flex gap-1">
          {starRefs.current.map((ref, index) => (
            <img
              key={index}
              src={Star}
              alt="Star Image"
              className="h-12 grayscale hover:scale-150 transition cursor-pointer"
              ref={ref}
              onClick={() => colorStars(index)}
            />
          ))}
        </div>
      </div>

      {/* Product Feedback */}
      <div className="grow flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Product Feedback</h1>
        <textarea
          name="Feedback"
          id="Feedback"
          placeholder="Share Your thoughts and experiences about the product... "
          className="w-full h-48 outline-none border-2 p-2 resize-none rounded-md"
          ref={textarea}
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="text-white font-normal w-full bg-green-600 rounded-md py-3 px-2 hover:scale-95 transition flex items-center justify-center gap-2 text-xl"
      >
        <i className="fa-regular fa-paper-plane"></i>
        <p>Submit Feedback</p>
      </button>
    </form>
  );
}

export default Feedback;
