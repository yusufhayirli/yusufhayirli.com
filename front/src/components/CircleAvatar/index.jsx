import React from "react";
import Photo from "../../static/yhglass.png";
import "./style.css";

export default function CircleAvatar() {
  return (
    <div className="custom-rounded-image">
      <img src={Photo} alt="Yusuf Hayırlı" className="custom-avatar" />
    </div>
  );
}
