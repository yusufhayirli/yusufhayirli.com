import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import EducationSection from "../EducationSection";

const HeaderInfo = ({ info }) => {
  return (
    <>
      <h1>Hi, I’m {info.content.name} – {info.content.whatIdo} </h1>
      <EducationSection educationInfo={info.content.education}/>
    </>
  )
}

HeaderInfo.displayName = 'HeaderInfo'

HeaderInfo.propTypes = {
  info: PropTypes.object
}

export default HeaderInfo;
