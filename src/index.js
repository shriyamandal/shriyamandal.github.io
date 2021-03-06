import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import App from "./App";


import "./index.css";

const Index = () => (
  <div class="main">
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" component={App} />
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
