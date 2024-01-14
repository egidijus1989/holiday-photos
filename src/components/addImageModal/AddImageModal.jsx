import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa6";
import * as service from "../../services/ImgCrudServices";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   -------------------------------------Img add functionality-------------------------------------------------------
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
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <Button variant="secondary" className="btn-light" onClick={handleShow}>
        <FaPlus />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Choose image Url"
            onChange={handleChange}
            value={items.imageUrl}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          {input.startsWith("https://") ? (
            <Button variant="primary" onClick={submitHandle}>
              Save
            </Button>
          ) : (
            <p>Please insert photo Url</p>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
