import Image6 from "../image/Image6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/ImgCrudServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import FormatModal from "../formatModal/formatModal";

const imageLayout6 = () => {
  const [images, setImages] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      service.getAllWorks((images) => setImages(images), user);
    }
  }, [user, loading]);
  console.log(images);
  return (
    <div className="container mainDiv">
      <FormatModal />
      <div
        className="photoContainerFormat2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <Image6
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            index={(index % 3) + 1 + "picture"}
          />
        ))}
      </div>
    </div>
  );
};
export default imageLayout6;
