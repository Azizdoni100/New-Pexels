import React from "react";
import "./Card.scss";

const Conditions = ({ img, title, subTitle, size , }) => {
  return (
    <div className="parent-three-sections-main-content hover-parent">
      <div style={{ height: size }} className="first-section-main-content">
        <img
          className="img-twitch-of-first-section-main-content"
          src={img}
          alt=""
        />
        <h2 className="h2-of-first-section-main-content">{title}</h2>
        <p className="p-of-first-section-main-content">{subTitle}</p>
      </div>
    </div>
  );
};

export default Conditions;
