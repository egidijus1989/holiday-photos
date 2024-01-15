import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./formatModal.scss";
import format1 from "../../formatImages/formatImage1.png";
import format2 from "../../formatImages/formatImage2.png";
import format3 from "../../formatImages/formatImage3.png";
import format4 from "../../formatImages/formatImage4.png";
import format5 from "../../formatImages/formatImage5.png";
import format6 from "../../formatImages/formatImage6.png";
import format7 from "../../formatImages/formatImage7.png";
import format8 from "../../formatImages/formatImage8.png";
import format9 from "../../formatImages/formatImage9.png";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ textAlign: "center" }}
      >
        Change photos format
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="formatModal"
        style={{ width: "300px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Format</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-4">
              <Link to="/imageLayout" className="dropdown-item" href="#">
                <img src={format1}></img>
              </Link>
              <Link to="/imageLayout2" className="dropdown-item" href="#">
                <img src={format2}></img>
              </Link>
              <Link to="/imageLayout3" className="dropdown-item" href="#">
                <img src={format3}></img>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/imageLayout4" className="dropdown-item" href="#">
                <img src={format4}></img>
              </Link>
              <Link to="/imageLayout5" className="dropdown-item" href="#">
                <img src={format5}></img>
              </Link>
              <Link to="/imageLayout6" className="dropdown-item" href="#">
                <img src={format6}></img>
              </Link>
            </div>
            <div className="col-4">
              <Link to="/imageLayout7" className="dropdown-item" href="#">
                <img src={format7}></img>
              </Link>
              <Link to="/imageLayout8" className="dropdown-item" href="#">
                <img src={format8}></img>
              </Link>
              <Link to="/imageLayout9" className="dropdown-item" href="#">
                <img src={format9}></img>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
