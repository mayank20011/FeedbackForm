import Feedback from "./Feedback";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ExpireLink from "./ExpireLink";
import axios from "axios";

function App() {
  // to get name and no from the url
  const location = useLocation();

  // for name and number
  const [name, setName] = useState("");
  const [number, setPhone] = useState("");

  // to check if the user has already filled the formor not
  const [submit, setSubmit] = useState(false);

  //  for Loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const number = params.get("phone");
    setName(name || "");
    setPhone(number || "");
    const baseURL = `http://localhost:5000/feedback/?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(number)}`;

    axios
      .get(baseURL)
      .then((response) => {
        setLoading(false);
        if (response.data.sentByUs) {
          if(response.data.rated){
            setSubmit(true);
          }
          else{
            setSubmit(false);
          }
        }
        else
        {
          // Here i can create a new page to show if the person tries to be oversmart
          setSubmit(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.search]);

  if (loading) {
    return <p>Loading ....</p>;
  }

  return (
    <>{submit ? <ExpireLink /> : <Feedback name={name} number={number} />}</>
  );
}
export default App;
