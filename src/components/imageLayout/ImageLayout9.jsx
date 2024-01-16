import Image9 from "../image/Image9";
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
      <div
        className="photoContainerFormat2"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {images.map((image, index) => (
          <Image9
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            index={(index % 3) + 1 + "picture9Layout"}
          />
        ))}
      </div>
    </div>
  );
};
export default imageLayout9;
