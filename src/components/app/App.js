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
import ImageLayout6 from "../imageLayout/ImageLayout6";
import ImageLayout7 from "../imageLayout/ImageLayout7";
import ImageLayout8 from "../imageLayout/ImageLayout8";
import ImageLayout9 from "../imageLayout/ImageLayout9";
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
          <Route path="/imageLayout6" element={<ImageLayout6 />} />
          <Route path="/imageLayout7" element={<ImageLayout7 />} />
          <Route path="/imageLayout8" element={<ImageLayout8 />} />
          <Route path="/imageLayout9" element={<ImageLayout9 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
