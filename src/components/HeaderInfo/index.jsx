import React from "react";
import PropTypes from 'prop-types';
import './style.css';

const HeaderInfo = ({ info }) => {
  return (
    <>
      <h1>I'm {info.content.name} </h1>
      <h2>{info.content.title}, graduated from <a alt="" href={info.content.universityUrl}>{info.content.universityName}</a> in {info.content.country}.</h2>
      <h2>{info.content.jobTitle} <a alt="" href={info.content.currentCompanyUrl}>@{info.content.currentCompanyName}</a>.</h2>
    </>
  )
}


HeaderInfo.displayName = 'HeaderInfo'

HeaderInfo.propTypes = {
  info: PropTypes.object
}

export default HeaderInfo;