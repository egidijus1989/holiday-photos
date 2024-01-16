import Image8 from "../image/Image8";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/ImgCrudServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import FormatModal from "../formatModal/formatModal";

const imageLayout8 = () => {
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
        className="photoContainerFormat7"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <Image8
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            index={(index % 4) + 1 + "picture8Layout"}
          />
        ))}
      </div>
    </div>
  );
};
export default imageLayout8;
