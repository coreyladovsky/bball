import React from "react";

const ImageShow = (props) => {
    return props.img &&    <img className="headshot" src={props.img} /> ;

};

export default ImageShow;
