import Login from "./Components/Login";
import Inscription from "./Components/Insciption";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}
export default App;
