import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animals from "./routes/Animals";
import Animal from "./routes/Animal";
import Home from "./routes/Home";
import Rescue from "./routes/Rescue";
import "./Global.css";
import TNR from "./routes/TNR";
import Donation from "./routes/Donation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/:id" element={<Animal />} />
        <Route path="/rescue" element={<Rescue />} />
        <Route path="/tnr" element={<TNR />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
