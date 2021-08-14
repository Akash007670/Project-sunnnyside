import React from "react";
import "./BrandItems.css";
import eggImage from "../assets/images/desktop/image-transform.jpg";
import standImage from "../assets/images/desktop/image-stand-out.jpg";

const BrandItems = () => {
  return (
    <div className="brands">
      <div className="box1">
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compellings visuals that do
          most of the marketing for you.
        </p>
        <h3>LEARN MORE</h3>
      </div>
      <div className="box2">
        <img className="egg-image" src={eggImage} alt="egg" />
      </div>
      <div className="box3">
        <img className="stand-image" src={standImage} alt="stand" />
      </div>
      <div className="box4">
        <h1>Stand out to the right audience</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compellings visuals that do
          most of the marketing for you.
        </p>
        <h3>LEARN MORE</h3>
      </div>
    </div>
  );
};

export default BrandItems;
