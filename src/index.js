import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoryCounter } from "./Store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={StoryCounter}>
    <App />
  </Provider>
);
