import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const EducationSection = ({ educationInfo }) => {
  const {
    institution,
    universityUrl,
    degree,
    location,
    period,
    details,
  } = educationInfo;

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        <div className="education-card">
          <h3 className="degree">{degree}</h3>
          <p className="institution">
            @ <a href={universityUrl} target="_blank" rel="noopener noreferrer">
              {institution}
            </a>
          </p>
          <p className="location-date">
            <span>{location}</span> · <span>{period}</span>
          </p>
          {details && Array.isArray(details) && (
            <ul className="education-details">
              {details.map((item, index) => (
                <li key={index} className="education-detail">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

EducationSection.propTypes = {
  educationInfo: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    universityUrl: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default EducationSection;
