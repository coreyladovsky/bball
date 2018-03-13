import React from "react";

const ImageShow = (props) => {
  if(props.img) {
    return(
      <div className="headshot-container">
        <img className="headshot" src={props.img} />
      </div>
      );
  } else {
    return null;
  }
};

export default ImageShow;
