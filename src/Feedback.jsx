import React from "react";
import Star from "./assets/Starimages.png";
import { useRef, useState } from "react";
import Confirmation from "./Confirmation.jsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./toastContainer.module.css";

function Feedback({ name, number }) {
  console.log("Component Rendered");
  const toastCss = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  // To store what component to render
  const [renderComponent, setComponent] = useState("Form");
  // To store if the request is going or not

  const [pending, setPending] = useState(false);
  // to get input from textarea
  const textarea = useRef(null);

  // to catch no of stars
  let noOfStars = 0;

  // function to run on buttonClick
  function buttonClick(e) {
    console.log("Button Clicked");
     setPending(true);
     handleSubmit(e);
  }
  // function to handleSubmit
  function handleSubmit(e) {
    e.preventDefault();

    const customerFeedBack = {
      data: [
        {
          Name: `${name}`,
          "Phone Number": `${number}`,
          Rating: `${noOfStars}`,
          Comment: `${textarea.current.value}`,
        },
      ],
    };

    if (noOfStars == 0) {
      toast.error("Rate Us Before Submitting the Form", toastCss);
    } else {
      axios
        .post(
          "https://sheetdb.io/api/v1/fmf04eysjdizg",
          JSON.stringify(customerFeedBack),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setPending(false);
          if (res.status >= 200 && res.status < 300) {
            setComponent("Confirmation");
          } else {
            toast.error("Something Went Wrong, Try Again", toastCss);
          }
        })
        .catch((err) => {
          console.log(err.response);
          toast.error("Server Problem, try again", toastCss);
        });
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
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        className={styles.toastContainer}
      />
      {renderComponent == "Confirmation" ? (
        <Confirmation />
      ) : (
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
            className="text-white font-normal w-full bg-green-600 rounded-md py-3 px-2 hover:scale-95 transition text-xl"
            onClick={buttonClick}
          >
            {pending ? (
              <div className="flex items-center justify-center gap-2">
                <i className="animate-spin fa-solid fa-circle-notch"></i>
                <p>Processing ...</p>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <i className="fa-regular fa-paper-plane"></i>
                <p>Submit Feedback</p>
              </div>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
