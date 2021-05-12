import React from "react";
import { NavLink } from "react-router-dom";
import { pageRoutes } from "../../constance/route";

const Home = () => {
  return (
    <div>
      <nav>
        <NavLink to={pageRoutes.vendor_list}> vendor list </NavLink>
      </nav>
      <hr />
      Home Page
    </div>
  );
};

export default Home;
