import React from "react";
import "./byrgermenu.css";
import Light from "./img/Light.svg";
import Dark from "./img/Dark.svg";
import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
  const navigate = useNavigate();
  const IsNavigate = () => {
    navigate("/");
  };
  return (
    <div className="container__menu">
      <div className="block__menu">
        <div className="menu__item" onClick={IsNavigate}>
          Home
        </div>
        <div className="menu__item">Add post</div>
      </div>
      <div className="block__menu-down">
        <div className="effects">
          <div>
            <img src={Light} alt="" />
          </div>
          <div className="item"></div>
          <div>
            <img src={Dark} alt="" />
          </div>
        </div>
        <div className="menu__item exit">Log Out</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
