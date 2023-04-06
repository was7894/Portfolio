import React from "react";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import PortFolio1 from "./PortFolio1";
import PortFolio2 from "./PortFolio2";
function FullPage() {
  return (
    <div>
      <MainPage />
      <AboutPage />
      <PortFolio1 />
      <PortFolio2 />
    </div>
  );
}

export default FullPage;
