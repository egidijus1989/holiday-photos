import { Link } from "react-router-dom";
import * as service from "../../services/ImgCrudServices";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import "./image.scss";

const Image8 = (props) => {
  const navigate = useNavigate();
  const { id } = useParams;
  const deleteHandler = () => {
    service.deleteWork(props.id);
    navigate("/imageLayout");
  };

  return (
    <div className="image">
      <img
        src={props.imageUrl}
        className="card-img-top image1"
        alt="Photo label"
        style={{ borderRadius: "50%" }}
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
export default Image8;
