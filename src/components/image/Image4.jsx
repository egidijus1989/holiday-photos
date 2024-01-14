import { Link } from "react-router-dom";
import * as service from "../../services/ImgCrudServices";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import "./image.scss";

const Image4 = (props) => {
  const navigate = useNavigate();
  const { id } = useParams;
  const deleteHandler = () => {
    service.deleteWork(props.id);
    navigate("/imageLayout");
  };

  return (
    <div className="image " style={{ width: "29rem", marginBottom: "10rem" }}>
      <img
        src={props.imageUrl}
        className="card-img-top image-fluid"
        alt="Photo label"
      />
      <div className="deleteIcon">
        <Link
          to="/imageLayout"
          className="btn btn-danger"
          onClick={deleteHandler}
        >
          <MdDelete />
        </Link>
      </div>
    </div>
  );
};
export default Image4;
