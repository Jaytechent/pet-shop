import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MarketPlaceLayout = () => {
  return (
    <div>
      <NavLink to="/marketplace">Back to Market Place</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <div>
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default MarketPlaceLayout;
