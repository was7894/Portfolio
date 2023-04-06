import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import FullPage from "./components/FullPage";

const anchors = ["mainpage", "aboutpage", "portfolio1", "Portfolio2"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#f9f9f9", "#00ffff", "#29ab87", "#ffc2c2"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div className="wrap">
          <FullPage />
        </div>
      );
    }}
  />
);

export default App;
