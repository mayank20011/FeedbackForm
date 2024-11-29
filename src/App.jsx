import { useState, useEffect } from "react";
import axios from "axios";
import mostAngry from "./assets/RED 5.png";
import mostHappy from "./assets/GREEN 1.png";
import lessHappy from "./assets/LIGHT GREEN 2.png";
import normal from "./assets/YELLOW 3.png";
import lessAngry from "./assets/ORANGE 4.png";
import Logo from "./assets/vfLogo.png";
import Star from "./assets/Starimages.png";
import TextArea from "./components/TextArea";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clientArray, setClientArray] = useState(null);

  function showDialogueBox() {
    setFeedbackDialogue(true);
  }
  function hideDialogue() {
    setFeedbackDialogue(false);
  }

// To Get Data From URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const phone = params.get("phone");
    setName(name || "");
    setPhone(phone || "");
  }, [location.search]);

  // To Send Data to Db
  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((response) => {
  //       console.log(response.data);
  //       setClientArray(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    // container for background
    <div className="bg-slate-100 w-100 min-h-screen flex items-center justify-center py-0 sm:py-4">
      {/* Div to hold logo and form */}
      <div className="mx-0 sm:mx-3 w-full px-5 border-2 md:w-3/4 lg:w-1/2 py-12 pt-6 bg-white rounded-sm space-y-6">
        {/* Logo Div */}
        <img src={Logo} alt="Logo" className="w-48 mx-auto" />

        {/* Form Div */}
        <form className="grid gap-6 align-center justify-center">
          {/* heading */}
          <div className="border-slate-200 border-b-2 pb-6 w-full">
            <h1 className="text-5xl text-center font-bold">
              Hii <span className="text-green-600 capitalize">{name}!!! </span>
            </h1>
          </div>

          {/* Feedback Div */}
          <div className="grid gap-6">
            <h1 className="text-2xl text-center font-bold text-slate-600">
              Help Us Improve With Your Valuable Feedback
            </h1>

            {/* Quality div */}

            <div className="grid gap-6">
              <h1 className="text-xl font-medium">How Was The Quality ...</h1>
              {/* For Rating */}
              <div className="flex justify-between">
                <img
                  src={mostAngry}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={showDialogueBox}
                />
                <img
                  src={lessAngry}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={showDialogueBox}
                />
                <img
                  src={normal}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={hideDialogue}
                />
                <img
                  src={lessHappy}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={hideDialogue}
                />
                <img
                  src={mostHappy}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={hideDialogue}
                />
              </div>
            </div>

            {/* Taste div */}

            <div className="grid gap-6">
              <h1 className="text-xl font-medium">What About Taste ...</h1>
              {/* For Rating */}
              <div className="flex justify-between">
                <img
                  src={mostAngry}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={showDialogueBox}
                />
                <img
                  src={lessAngry}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={showDialogueBox}
                />
                <img
                  src={normal}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={hideDialogue}
                />
                <img
                  src={lessHappy}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={hideDialogue}
                />
                <img
                  src={mostHappy}
                  alt="Sad Emoji 1"
                  className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition"
                  onClick={hideDialogue}
                />
              </div>
            </div>
          </div>

          {/* Dialogue box for bad feedback */}

          <TextArea />

          {/* overall rating */}
          <div className="grid gap-6">
            <h1 className="text-xl font-medium">Overall Rating ... </h1>
            {/* For Rating */}
            <div className="flex justify-between">
              <img
                src={Star}
                alt="Sad Emoji 1"
                className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={Star}
                alt="Sad Emoji 1"
                className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={Star}
                alt="Sad Emoji 1"
                className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={Star}
                alt="Sad Emoji 1"
                className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={Star}
                alt="Sad Emoji 1"
                className="w-14 sm:w-20 cursor-pointer hover:scale-110 transition duration-150"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-100 font-bold text-white text:md py-3 rounded bg-green-600 hover:scale-90 transition duration-300 md:w-fit md:px-6"
          >
            Submit Response
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
