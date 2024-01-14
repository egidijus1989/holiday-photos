import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Login from "../login/Login";
import Register from "../register/Register";
import Reset from "../reset/Reset";
import Images from "../images/Images";
// import AddImage from "../addImage/AddImage";
import ImageLayout from "../imageLayout/ImageLayout";
import ImageLayout2 from "../imageLayout/ImageLayout2";
import ImageLayout3 from "../imageLayout/ImageLayout3";
import ImageLayout4 from "../imageLayout/ImageLayout4";
import ImageLayout5 from "../imageLayout/ImageLayout5";
function App() {
  return (
    <div className="App container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/images" element={<Images />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<Reset />} />
          {/* <Route path="/addImage" element={<AddImage />} /> */}
          <Route path="/imageLayout" element={<ImageLayout />} />
          <Route path="/imageLayout2" element={<ImageLayout2 />} />
          <Route path="/imageLayout3" element={<ImageLayout3 />} />
          <Route path="/imageLayout4" element={<ImageLayout4 />} />
          <Route path="/imageLayout5" element={<ImageLayout5 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
