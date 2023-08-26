import React from 'react';
import PropTypes from 'prop-types';
import Socials from '../Socials';
import Divider from '../Divider';
import './style.css';

const Footer = ({ info }) => {
  return (
    <div className='footer'>
      <Divider/>
      This list isn&apos;t exhaustive. If you need help or just wanna meet, <a alt="Mail to Me" href={info.content.socialUrls.mail}>let&apos;s connect!</a>

      <Socials 
        socialUrls={info.content.socialUrls}
      />
      <h2><i>Designed by</i> {info.content.name}</h2>
    </div>
  );
}

Footer.displayName = 'Footer'

Footer.propTypes = {
  info: PropTypes.object
}

export default Footer;
