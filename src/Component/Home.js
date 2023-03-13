import React from "react";
import background from "../assets/background.jpg";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={background}
          className="card-img"
          alt="background"
          height="600px"
        />
        <div className="card-img-overlay  d-flex flex-column justify-content-center">
          <div className="container" style={{ color:" rgb(41, 46, 56)" }}>
            <h5 className="card-title display-3">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
export default Home;
