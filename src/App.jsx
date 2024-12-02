import Feedback from "./Feedback";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [number, setPhone] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const number = params.get("phone");
    setName(name || "");
    setPhone(number || "");
  }, [location.search]);

  return (
    <>
      <Feedback name={name} number={number} />
    </>
  );
}
export default App;
