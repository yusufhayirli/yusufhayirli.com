import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Socials = ({ socialUrls }) => {
  return (
    <div className="social-media-links">
      <a alt="Mail to Me" className="far fa-envelope" href={ socialUrls.mail }/>
      <a alt="My LinkedIn Profile" className="fab fa-linkedin-in" href={ socialUrls.linkedin }/>
      <a alt="My Github Page" className="fab fa-github" href={ socialUrls.github }/>
      <a alt="My Instagram Profile" className='fab fa-instagram' href={ socialUrls.instagram }/>
      <a alt="My Twitter Profile" className="fab fa-twitter" href={ socialUrls.twitter }/>
      <a alt="My Spotify Profile" className="fab fa-spotify" href={ socialUrls.spotify }/>
    </div>
  )
}

Socials.displayName = 'Socials'

Socials.propTypes = {
  socialUrls: PropTypes.object
}

export default Socials;