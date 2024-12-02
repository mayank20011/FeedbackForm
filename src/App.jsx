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
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const number = params.get("phone");
    setName(name || "");
    setPhone(number || "");
    axios
      .get("https://sheetdb.io/api/v1/fmf04eysjdizg")
      .then((response) => {
        setLoading(false);
        if (response.status >= 200 && response.status < 300) {
          let row = {};
          for (let i = 0; i < response.data.length; i++) {
            row = response.data[i];
            if (row["Phone Number"] == number) {
              if (row["Link Shared?"]=="") {
                setSubmit(true);
              }
              break;
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.search]);

  if(loading)
    {
      return <p>Loading ....</p>
    }

  return (
    <>{submit ? <ExpireLink /> : <Feedback name={name} number={number} />}</>
  );
}
export default App;
