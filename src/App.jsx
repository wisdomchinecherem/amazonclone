import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  Navbar,
  Checkout,
  Product,
  SearchResult,
} from "./components";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
