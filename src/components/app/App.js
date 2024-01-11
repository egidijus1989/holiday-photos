import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Login from "../login/Login";
import Register from "../register/Register";
import Reset from "../reset/Reset";
import Images from '../images/Images'
import AddImage from "../addImage/AddImage";

function App() {
  return (
    <div className="App container">
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/images" element={<Images/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/password-reset" element={<Reset/>} />
            <Route path="/addImage" element={<AddImage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
