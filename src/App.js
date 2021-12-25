import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();


  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
      </Routes>
    </div>
  );
}

export default App;
