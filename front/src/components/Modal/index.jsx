// src/components/Modal/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Modal = ({ title, subtitle, content, tags, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {title && <h2>{title}</h2>}
        {subtitle && <p className="date-range">{subtitle}</p>}

        {content && Array.isArray(content) && (
          <div className="summary-block">
            {content.map((item, idx) => (
              <p className="summary-line" key={idx}>• {item}</p>
            ))}
          </div>
        )}

        {tags && Array.isArray(tags) && (
          <div className="tags">
            {tags.map((tag, i) => (
              <span className="tag" key={i}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtitle: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
