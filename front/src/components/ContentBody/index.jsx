import React from 'react';
import PropTypes from 'prop-types';
import ExperiencesField from '../ExperiencesField';
import SkillsAndCerts from '../SkillsAndCerts';
import './style.css';

const ContentBody = ({ info }) => {
  return (
    <div className='content-body'>
      <div className='content container'>
        <div className='experience-section'>
          <h2 className="section-title">Experiences</h2>
          <div className='experience-grid'>
            <ExperiencesField experiences={info.experiences} />
          </div>
        </div>
        <div className='skill-and-certs-grid'>
          <SkillsAndCerts skillsAndCerts={info.skillsAndCerts} />
        </div>
      </div>
    </div>
  );
};

ContentBody.displayName = 'ContentBody';

ContentBody.propTypes = {
  info: PropTypes.shape({
    experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
    skillsAndCerts: PropTypes.shape({
      salesforceExpertise: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          issued: PropTypes.string,
          pdfLink: PropTypes.string,
        })
      ),
      frontEnd: PropTypes.arrayOf(PropTypes.string),
      backEnd: PropTypes.arrayOf(PropTypes.string),
      databases: PropTypes.arrayOf(PropTypes.string),
      devOpsTools: PropTypes.arrayOf(PropTypes.string),
      cloudInfrastructure: PropTypes.arrayOf(PropTypes.string),
      softwarePractices: PropTypes.arrayOf(PropTypes.string),
      languages: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  }).isRequired
};


export default ContentBody;
