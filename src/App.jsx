import React from "react";
import { Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/marketplace/MarketPlace";
import Home from "./pages/Home";
import Review from "./pages/marketplace/Review";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import MarketPlaceLayout from "./layouts/MarketPlaceLayout";
import PetDetails from "./pages/marketplace/PetDetails";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="marketplace" element={<MarketPlaceLayout />}>
          <Route index element={<MarketPlace />} />
          <Route path="pet/:petId" element={<PetDetails />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>

      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;
