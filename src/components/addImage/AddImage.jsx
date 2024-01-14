import { useEffect, useState } from "react";
import * as service from "../../services/ImgCrudServices";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { type } from "@testing-library/user-event/dist/type";

const AddImage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState({
    imageUrl: "",
    uid: "",
  });

  useEffect(() => {
    id && service.showById((item) => setItems(item), id);
  }, [id]);

  const handleChange = (event) => {
    setItems({
      ...items,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (id) {
      service.updateWork(id, items);
    } else {
      service.addWork({
        ...items,
        uid: user.uid,
      });
    }
    navigate("/imageLayout");
  };
  const input = items.imageUrl;

  return (
    <div className="card">
      <div className="card-header">
        <h2>Add photo</h2>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitHandle}>
          <div className="mb-3">
            <label htmlFor="text">Choose image</label>
            <input
              className="form-control"
              id="imageUrl"
              type="text"
              name="imageUrl"
              onChange={handleChange}
              value={items.imageUrl}
              required
            />
          </div>
          <div className="mb-3">
            {input.startsWith("https://") ? (
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            ) : (
              <p>Please insert photo Url</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddImage;
