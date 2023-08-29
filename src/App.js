import React from "react";
import "./App.css";
import RestaurantsList from "./features/restaurants/RestaurantsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleRestaurant from "./features/restaurants/SingleRestaurant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/restaurants" element={<RestaurantsList />} />
        <Route
          path="/restaurants/:restaurantId"
          element={<SingleRestaurant />}
        />
      </Routes>
    </Router>
  );
}

export default App;
