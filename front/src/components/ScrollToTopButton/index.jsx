import React, { useEffect, useState } from 'react';
import './style.css';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.pageYOffset > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    e.currentTarget.blur(); // This is crucial to prevent sticky focus style

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setShow(false); // Hide instantly
  };

  return (
    <button
      className={`scroll-up-button ${show ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTopButton;
