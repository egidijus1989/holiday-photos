import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" className="formatModal" onClick={handleShow}>
        Change photos format
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Format</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-4">
              <Link to="/imageLayout" className="dropdown-item" href="#">
                1 format
              </Link>
              <Link to="/imageLayout2" className="dropdown-item" href="#">
                2 format
              </Link>
              <Link to="/imageLayout3" className="dropdown-item" href="#">
                3 format
              </Link>
            </div>
            <div className="col-4">
              <Link to="/imageLayout4" className="dropdown-item" href="#">
                4 format
              </Link>
              <Link to="/imageLayout5" className="dropdown-item" href="#">
                5 format
              </Link>
              <a className="dropdown-item" href="#">
                6 format
              </a>
            </div>
            <div className="col-4">
              <a className="dropdown-item" href="#">
                7 format
              </a>
              <a className="dropdown-item" href="#">
                8 format
              </a>
              <a className="dropdown-item" href="#">
                9 format
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
