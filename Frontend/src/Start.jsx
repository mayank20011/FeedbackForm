import React from "react";
import cowImg from "../src/assets/cow.jpeg";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="flex flex-col gap-6  py-6 px-4 w-fit mx-auto border-2 rounded-lg my-6">
        {/* for image */}
        <img src={cowImg} alt="" className="w-96 rounded-md" />

        {/* For Name and Heading */}
        <div className="space-y-6 grow">
          <h2 className="text-4xl font-bold text-green-600 text-center">
            Vardaan Farms
          </h2>
          <p className="text-gray-600 font-bold text-center">
            Share Your Feedback On Our Product
          </p>
        </div>

        {/* button div */}
        <Link to={"/Feedback"} className="text-center w-full border bg-green-600 py-3 px-2 rounded-md cursor-pointer text-white font-bold hover:scale-95 transition duration-150">
          <div className="flex justify-center items-center gap-2">
            Lets Start <i className="fa-solid fa-arrow-right"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Start;
