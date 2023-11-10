import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./home.jsx";
import Takequiz from "./takequiz";
import Quiz from "./Quiz.jsx";
import Createquiz from "./Createquiz.jsx";
import Index from "./index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <App /> */}
      <Index />
      {/* <Createquiz /> */}
      {/* <Takequiz/> */}
      {/* <Quiz/> */}
  </React.StrictMode>
);
