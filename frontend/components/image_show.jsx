import React from "react";

const ImageShow = props => {
  return (
    <div className="headshot-container">
      <img className="headshot" src={props.img} />
    </div>
  );
};

export default ImageShow;
