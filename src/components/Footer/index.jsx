import React from 'react';
import Socials from '../../components/Socials';
import './style.css';

function Footer({ info }) {
  return (
    <div className='footer-content'>
      This list isn't exhaustive. If you need help or just wanna meet, <a alt="Mail to Me" href={info.content.socialUrls.mail}>let's connect!</a>

      <Socials 
        socialUrls={info.content.socialUrls}
      />
      <h2><i>Designed by</i> {info.content.name}</h2>
    </div>
  );
}

export default Footer;
