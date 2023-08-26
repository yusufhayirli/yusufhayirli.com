import React from "react";
import PropTypes from 'prop-types';
import CircleAvatar from '../CircleAvatar';
import HeaderInfo from '../HeaderInfo';
import Typing from "../Typing";
import './style.css';

const Header = ({ info }) => {
  return (
    <>
      <div className="header">
        <CircleAvatar/>
        <Typing words={info.likeToBuild}/>
        <HeaderInfo info={info}/>
      </div>
    </>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  info: PropTypes.object
}

export default Header;
