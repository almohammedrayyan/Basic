import React, { Fragment } from "react";
import { Route, Redirect, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" exact element={<Layout />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
