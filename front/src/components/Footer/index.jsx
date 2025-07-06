import React from 'react';
import PropTypes from 'prop-types';
import Socials from '../Socials';
import Divider from '../Divider';
import SiteSignature from '../SiteSignature';
import './style.css';

const Footer = ({ info }) => {
  return (
    <div className='footer'>
      <Divider/>
      This list isn&apos;t exhaustive. If you need help or just wanna meet, <a alt="Mail to Me" href={info.content.socialUrls.mail}>let&apos;s connect!</a>

      <Socials 
        socialUrls={info.content.socialUrls}
      />
      
      <SiteSignature
        name={info.content.name}
      />
    </div>
  );
}

Footer.displayName = 'Footer'

Footer.propTypes = {
  info: PropTypes.object
}

export default Footer;
