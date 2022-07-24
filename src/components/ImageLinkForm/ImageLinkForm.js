import React, { useState } from "react";
import "./ImageLinkForm.css";
import { setImageUrl, setBox } from "../../appSlice";
import { updateEntries } from "../../userSlice";
import { useDispatch, useSelector } from "react-redux";

const ImageLinkForm = () => {
  const [input, setInput] = useState("");
  const id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    dispatch(setBox(box));
  };

  const detectImage = () => {
    dispatch(setImageUrl(input));

    fetch("https://quiet-lowlands-23112.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://quiet-lowlands-23112.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              dispatch(updateEntries(count));
            })
            .catch((err) => console.log(err));
        }
        displayFaceBox(calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={() => detectImage()}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
