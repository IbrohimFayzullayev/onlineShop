import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import HomeContainer from "../redux/containers/HomeContainer";
import CardContainer from "../redux/containers/CardContainer";
import LoginContainer from "../redux/containers/LoginContainer";
import "./app.scss";
function App() {
  const [soni, setSoni] = useState(0);
  function getCount(son) {
    setSoni(son);
  }
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header sanoq={soni} />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomeContainer getData={getCount} />} />
            <Route
              path="/card"
              element={<CardContainer getData={getCount} />}
            />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
