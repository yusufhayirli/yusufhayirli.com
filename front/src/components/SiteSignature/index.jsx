import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SiteSignature = ({ name }) => {
  return (
    <div className='site-signature-wrapper'>
      <h3><i>Designed by</i> {name}</h3>
    </div>
  );
}

SiteSignature.displayName = 'SiteSignature'

SiteSignature.propTypes = {
  name: PropTypes.string
}

export default SiteSignature;