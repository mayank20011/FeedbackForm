import Feedback from "./Feedback";
import Start from "./Start";
import Confirmation from "./Confirmation";
import { Route, Routes } from "react-router-dom";
function App(){
  return (<>
   {/* <ABC/> */}
   <Routes>
   <Route path="/" element={<Start/>}/>
   <Route path="/Feedback" element={<Feedback/>}/>
   <Route path="/Confirmation" element={<Confirmation/>}/>
   </Routes>
  </>)
}
export default App;