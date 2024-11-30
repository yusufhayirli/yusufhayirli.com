import React from "react";
import RoundedImage from "react-rounded-image";
import Photo from '../../static/yhnew.jpg'
import './style.css';

// this sample uses react-rounded-image
export default function CircleAvatar() {
  return (
    <div className="rounded-image">
      <RoundedImage
        image={Photo}
        roundedColor='var(--body-background)'
        roundedSize="10"
        hoverColor='var(--body-color)'
        hoverShadow
      />
    </div>
  );
}
