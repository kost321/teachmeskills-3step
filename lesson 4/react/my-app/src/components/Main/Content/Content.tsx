import React, { useState } from "react";
import "./content.css";
import FirstImageBig from "./img/imgbig.svg";
import FirstImageSmall from "./img/smaller/first.svg";
import IconLike from "./icons/Like.svg";
import IconDeeslike from "./icons/Deeslike.svg";
import IconSave from "./icons/Savestory.svg";
import IconMore from "./icons/More.svg";

const Content = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container__content">
      <div className="block__main-content">
        <div className="block__text-content">
          <div className="text-content_data">April 20, 2021</div>
          <div className="text-content_header">
            Astronauts prep for new solar arrays on nearly seven-hour spacewalk
            ...
          </div>
          <div className="text-content_basic">
            Astronauts Kayla Barron and Raja Chari floated out of the
            International Space Station airlock for a spacewalk Tuesday,
            installing brackets and struts to support new solar arrays to
            upgrade the research lab’s power system on the same day that
            crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record
            for a single spaceflight.
          </div>
        </div>
        <div className="contaner__img-big">
          <img src={FirstImageBig} alt="pic" />
        </div>
      </div>
      <div className="container__side-content">
        <div className="block__side-content">
          <div className="block__side-content_text">
            <div className="text-content_data">April 20, 2021</div>
            <div className="side-content_header">
              Astronauts prep for new solar arrays on nearly seven-hour
              spacewalk
            </div>
          </div>
          <div className="contaner__img-small">
            <img src={FirstImageSmall} alt="pic" />
          </div>
        </div>
        <div className="container__user-action side">
          <div className="container__user-icon ">
            <img
              className="user-icon"
              src={IconLike}
              alt="pic"
              onClick={() => setCount(count + 1)}
            />
            <p className="input__number">{count}</p>
            <img className="user-icon" src={IconDeeslike} alt="pic" />
          </div>
          <div className="container__user-icon">
            <img className="user-icon" src={IconSave} alt="pic" />
            <img className="user-icon" src={IconMore} alt="pic" />
          </div>
        </div>
        <div className="block__side-content">
          <div className="block__side-content_text">
            <div className="text-content_data">April 20, 2021</div>
            <div className="side-content_header">
              Astronauts prep for new solar arrays on nearly seven-hour
              spacewalk
            </div>
          </div>
          <div className="contaner__img-small">
            <img src={FirstImageSmall} alt="pic" />
          </div>
        </div>
        <div className="container__user-action side">
          <div className="container__user-icon ">
            <img
              className="user-icon"
              src={IconLike}
              alt="pic"
              onClick={() => setCount(count + 1)}
            />
            <p className="input__number">{count}</p>
            <img className="user-icon" src={IconDeeslike} alt="pic" />
          </div>
          <div className="container__user-icon">
            <img className="user-icon" src={IconSave} alt="pic" />
            <img className="user-icon" src={IconMore} alt="pic" />
          </div>
        </div>
      </div>

      <div className="container__user-action">
        <div className="container__user-icon">
          <img
            className="user-icon"
            src={IconLike}
            alt="pic"
            onClick={() => setCount(count + 1)}
          />
          <p className="input__number">{count}</p>
          <img className="user-icon" src={IconDeeslike} alt="pic" />
        </div>
        <div className="container__user-icon">
          <img className="user-icon" src={IconSave} alt="pic" />
          <img className="user-icon" src={IconMore} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Content;
