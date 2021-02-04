import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import "antd/dist/antd.css";
import "antd/dist/antd.dark.css";

import { GlobalStyles } from "./global-styles";
import App from "./App";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
