import { Route, Routes } from "react-router-dom";
import Chatbot from "./assets/Chatbot";
import Page3 from "./assets/Page3";
import Page1 from "./assets/Page1";

const App = () => {
  return (
    <Routes>
          <Route path="/" element = {<Page1/>}></Route>
          <Route path="/chatbot" element ={<Chatbot />}></Route>
          <Route path="/exit" element ={<Page3/>}></Route>
    </Routes>
  );
};

export default App;
