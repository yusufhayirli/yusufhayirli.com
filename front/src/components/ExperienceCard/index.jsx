import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal'; // ✅ use the new reusable modal
import './style.css';

const ExperienceCard = ({ exp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="experience-card">
        <div className="icon fa fa-layer-group"></div>

        <h2>
          {exp.jobTitle} @
          <a href={exp.currentCompanyUrl} target="_blank" rel="noopener noreferrer">
            {exp.currentCompanyName}
          </a>
        </h2>

        {(exp.startDate && exp.leaveDate) && (
          <p className="date-range">
            {exp.startDate} – {exp.leaveDate}
          </p>
        )}

        {/* Short summary preview */}
        <ul className="summary-short">
          {exp.summary?.slice(0, 2).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <button className="toggle-btn" onClick={handleShowMore}>
          Show more ▼
        </button>

        {/* Skill tags */}
        <div className="tags">
          {exp.skills?.map((skill, i) => (
            <span className="tag" key={i}>{skill}</span>
          ))}
        </div>
      </div>

      {/* ✅ Modal call */}
      {isModalOpen && (
        <Modal
          title={
            <>
              {exp.jobTitle} @
              <a href={exp.currentCompanyUrl} target="_blank" rel="noopener noreferrer">
                {exp.currentCompanyName}
              </a>
            </>
          }
          subtitle={`${exp.startDate} – ${exp.leaveDate}`}
          content={exp.summary}     // MUST be an array of strings
          tags={exp.skills}         // OPTIONAL: must be array of strings
          onClose={handleClose}
        />
      )}
    </>
  );
};

ExperienceCard.propTypes = {
  exp: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ExperienceCard;
