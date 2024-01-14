import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import "./images.scss";
import AddImageModal from "../addImageModal/AddImageModal";

const Images = () => {
  return (
    <div className="container-fluid mainDiv">
      {/* <button className="btn btn-light p-3">
        <Link to="/addImage" style={{ color: "black", textDecoration: "none" }}>
          <FaPlus />
        </Link>
      </button> */}
      <AddImageModal className="btn-light" />
    </div>
  );
};
export default Images;
