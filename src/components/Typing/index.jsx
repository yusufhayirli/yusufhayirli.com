import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Typing = ({ text, words }) => {
  let i = 0;

  const typingEffect = () => {
    let word = words[i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        document.getElementById('word').innerHTML += word.shift();
        setTimeout(loopTyping, 200);
      } else {
        deletingEffect();
      };
    };
    loopTyping();
  };
  
  const deletingEffect = () => {
    let word = words[i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        document.getElementById('word').innerHTML = word.join("");
        setTimeout(loopDeleting, 100);
      } else {
        i = (i + 1) % words.length;
        typingEffect();
      };
    };
    loopDeleting();
  };
  
  setTimeout(typingEffect, 500);
  
  return (
      <div className="header-sub-title">
        <p>{text}</p>
        <p id="word"/>
      </div>
    )
  }

Typing.displayName = 'Socials'

Typing.propTypes = {
  text: PropTypes.string,
  words: PropTypes.array
}
  
export default Typing;
