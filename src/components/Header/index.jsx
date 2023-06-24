import React from "react";
import PropTypes from 'prop-types';
import CircleAvatar from '../CircleAvatar';
import HeaderInfo from '../HeaderInfo';
import Typing from "../Typing";
import './style.css';

const Header = ({ info }) => {
  return (
    <>
      <CircleAvatar/>
      <HeaderInfo info={info}/>
      <Typing 
        text="I like to build"
        words={info.likeToBuild}
      />
    </>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  info: PropTypes.object
}

export default Header;
