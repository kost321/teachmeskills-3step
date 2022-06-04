import React, { FC } from "react";
import "./Hello.css";

interface Iprops {
    propsText :string;
}

 const Title: FC<Iprops> = (props) => {

    return (
            <div className = "text">{props.propsText} </div>
    )
};

export {Title};

export const Tabs = () => {
  return (
    <div className="tabsName">Tabs</div>
  )
}

export const TabsDefault = () => {
  return (
    <><div className="default-block block-tabs">
     
        <div className="block-element">All</div>
        <p><a className="block-element favorite-element" href="as">My favorites</a></p>
        <p><a className="block-element hover-element" href="as">Popular</a></p>
        <div className="end-element">
            <div>DEFAULT</div>
        </div>
    </div>
    <div className="line"></div>
    </>
  )
}

export const TabsHover = () => {
  return (
    <><div className="hover-block block-tabs">
        <div className="block-element">All</div>
        <p><a className="block-element favorite-element" href="as">My favorites</a></p>
        <p><a className="block-element hover-element" href="as">Popular</a></p>
        <div className="end-element">
            <div>HOVER</div>
        </div>
    </div>
    <div className="line"></div>
</>
  )
}

export const TabsDisabled = () => {
    return (
      <><div className="disabled-block block-tabs">
          <div className="block-element">All</div>
          <p><a className="block-element favorite-element" href="as">My favorites</a></p>
          <p><a className="block-element hover-element" href="as">Popular</a></p>
            <div className="end-element">
                <div>DISABLED</div>
            </div>
      </div>
      <div className="line"></div>
  </>
    )
  }











