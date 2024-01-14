import Image from "../image/Image";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/ImgCrudServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import formatModal from "../formatModal/formatModal";

const imageLayout = () => {
  const [images, setImages] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      service.getAllWorks((images) => setImages(images), user);
    }
  }, [user, loading]);
  return (
    <div className="container">
      <Link
        to="/addImage"
        className="btn btn-secondary"
        style={{ color: "black", textDecoration: "none" }}
      >
        Change photos format
      </Link>
      {images.map((image) => (
        <Image key={image.id} id={image.id} imageUrl={image.imageUrl} />
      ))}
    </div>
  );
};
export default imageLayout;
