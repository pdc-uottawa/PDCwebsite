import React, { Fragment } from "react";
import Routers from "./Router";
import { CookiesProvider } from "react-cookie";
import "semantic-ui-css/semantic.min.css";
import { HashRouter } from "react-router-dom";
import WindowDimensionsProvider from "./common/context/WindowDimensionsProvider";

const App = () => {
  return (
    <WindowDimensionsProvider>
      <Fragment>
        <HashRouter>
          <CookiesProvider>
            <Routers />
          </CookiesProvider>
        </HashRouter>
      </Fragment>
    </WindowDimensionsProvider>
  );
};

export default App;
