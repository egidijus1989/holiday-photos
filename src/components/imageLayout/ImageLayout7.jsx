import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/ImgCrudServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import FormatModal from "../formatModal/formatModal";
import Image7 from "../image/Image7";

const imageLayout7 = () => {
  const [images, setImages] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      service.getAllWorks((images) => setImages(images), user);
    }
  }, [user, loading]);
  return (
    <div className="container mainDiv2">
      <FormatModal />
      <div
        className="photoContainerFormat2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((image) => (
          <Image7 key={image.id} id={image.id} imageUrl={image.imageUrl} />
        ))}
      </div>
    </div>
  );
};
export default imageLayout7;
