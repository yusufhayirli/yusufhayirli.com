import React, { useState } from "react";
import PropTypes from 'prop-types';
import ExperienceCard from '../ExperienceCard';
import './style.css';

const ExperiencesField = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          exp={exp}
          index={index}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          onClose={() => setExpandedIndex(null)}
        />
      ))}
    </>
  );
};

ExperiencesField.displayName = 'ExperiencesField';

ExperiencesField.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      jobTitle: PropTypes.string.isRequired,
      currentCompanyName: PropTypes.string.isRequired,
      currentCompanyUrl: PropTypes.string.isRequired,
      startDate: PropTypes.string,
      leaveDate: PropTypes.string,
      summary: PropTypes.arrayOf(PropTypes.string).isRequired,
      skills: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default ExperiencesField;
