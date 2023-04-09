import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import FullPage from "./components/FullPage";
import Header from "./components/Header";

const anchors = ["Home", "About", "Portfolio", "Contact"];

function App() {
  return (
    <>
      <Header />
      <ReactFullpage
        anchors={anchors}
        navigation={true}
        navigationTooltips={anchors}
        sectionsColor={["#f9f9f9", "#f9f9f9", "#29ab87", "#ffc2c2"]}
        controlArrows={true}
        slidesNavigation={true}
        slidesNavPosition={"bottom"}
        render={() => (
          <ReactFullpage.Wrapper>
            <FullPage />
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}

export default App;
