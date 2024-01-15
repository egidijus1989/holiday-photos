import Image9 from "../image/Image";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/ImgCrudServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import FormatModal from "../formatModal/formatModal";
import PhotoModal from "../photoModal/photoModal";

const imageLayout9 = () => {
  const [images, setImages] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      service.getAllWorks((images) => setImages(images), user);
    }
  }, [user, loading]);
  return (
    <div className="container mainDiv">
      <FormatModal />
      <div className="photoContainerFormat2">
        {images.map((image) => (
          <Image9 key={image.id} id={image.id} imageUrl={image.imageUrl} />
        ))}
      </div>
    </div>
  );
};
export default imageLayout9;
