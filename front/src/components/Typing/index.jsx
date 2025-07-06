import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Typing = ({ words, typingSpeed = 150, deletingSpeed = 75, delay = 1000 }) => {
  const [index, setIndex] = useState(0);      // Word index
  const [subIndex, setSubIndex] = useState(0); // Character index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <div className="header-sub-title">
      <p>{words[index].substring(0, subIndex)}<span className="cursor">|</span></p>
    </div>
  );
};

Typing.displayName = 'Typing';

Typing.propTypes = {
  words: PropTypes.array.isRequired,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  delay: PropTypes.number,
};

export default Typing;