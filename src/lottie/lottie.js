import React from "react";
import lottie from "lottie-web";
import lottieAni from "./Bulb.json";

const Lottie = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ani"),
      animationData: lottieAni,
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return <div id="ani" style={{ width: 70, height: 70 }}></div>;
};
export default Lottie;
