import React, { useEffect, useState } from "react";
import axios from "axios";
import "./homepage.scss";
import UploadImage from "../components/UploadImage";

export default function Homepage() {
  const [allImages, setAllImages] = useState([]);
  const [key, setKey] = useState(false);
  const [upload, setUpload] = useState(false);

  useEffect(() => {
    getImages();
  }, [key, upload]);

  const getImages = async () => {
    try {
      const res = await axios.get(`http://localhost:7007/api/images/${key}`);

      setAllImages([...allImages, ...res.data.images]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="search...."
            onChange={(e) => {
              setAllImages([]);
              if (e.target.value === "") return setKey(false);
              setKey(e.target.value);
            }}
          />
        </div>
        <div>
          <UploadImage
            upload={() => {
              setAllImages([]);
              setUpload(!upload);
            }}
          />
        </div>
        <div className="images-container">
          {allImages &&
            allImages.map((item) => {
              return (
                <img
                  key={item.id}
                  src={"http://localhost:7007/" + item.image}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
