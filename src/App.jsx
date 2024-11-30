import Feedback from "./Feedback";
import Start from "./Start";
import Confirmation from "./Confirmation";
import { Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

function App(){
  
  const location = useLocation();
  const [name, setName] = useState("");
  const [number, setPhone] = useState("");

  useEffect(()=>{
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const number = params.get("phone");
    setName(name || "");
    setPhone(number || "");
  },[location.search]);

  return (<>
   <Feedback name={name} number={number}/>
  </>)
}
export default App;




{/* <Routes>
   <Route path="/" element={<Start/>}/>
   <Route path="/Feedback" element={<Feedback name={name} number={number}/>}/>
   <Route path="/Confirmation" element={<Confirmation/>}/>
   </Routes> */}