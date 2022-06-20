import React from "react";
import"./tabs.css"

const Tabs = () => {
  return (
    <div className="block__tabs">
      <div className="tabs__item" >All</div>
      <div className="tabs__item">My favorites</div>
      <div className="tabs__item">Popular</div>
    </div>
  );
};

export default Tabs;
