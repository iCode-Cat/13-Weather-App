import React from "react";
import Load from "../loading.svg";

const loaderStyle = {
  position: "absolute",
  alignSelf: "center",
  justifySelf: "center",
};

const LoaderIcon = () => {
  return <img style={loaderStyle} src={Load} alt="loader" />;
};

export default LoaderIcon;
