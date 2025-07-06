import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SkillGroup = ({ title, items }) => (
  <div className="skill-group">
    <h3 className="group-title">{title}</h3>
    <ul className="tag-list">
      {items.map((item, index) => (
        <li className="tag" key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

SkillGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const SkillsAndCerts = ({ skillsAndCerts }) => {
  const {
    salesforceExpertise,
    frontEnd,
    backEnd,
    databases,
    devOpsTools,
    cloudInfrastructure,
    softwarePractices,
    languages,
  } = skillsAndCerts;

  return (
    <section className="skills-and-certs">
      <h2 className="section-title">Certifications, Skills & Languages</h2>

      <div className="cert-section">
        <h3 className="group-title">Salesforce Expertise</h3>
        <div className="cert-list">
          {salesforceExpertise.map((cert, index) => (
            <div className="cert-card" key={index}>
              <img
                src={cert.image}
                alt={cert.alt}
                className="cert-badge"
              />
              <div className="cert-content">
                <p className="cert-title">{cert.title}</p>
                <p className="cert-issued">{cert.issued}</p>
                <a
                  className="cert-link"
                  href={cert.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        <SkillGroup title="Front-End Development" items={frontEnd} />
        <SkillGroup title="Back-End & Server-Side" items={backEnd} />
        <SkillGroup title="Databases & Storage" items={databases} />
        <SkillGroup title="Tools & DevOps" items={devOpsTools} />
        <SkillGroup title="Cloud & Infrastructure" items={cloudInfrastructure} />
        <SkillGroup title="Software Practices" items={softwarePractices} />
      </div>

      <div className="languages-section">
        <SkillGroup title="Languages" items={languages} />
      </div>
    </section>
  );
};

SkillsAndCerts.propTypes = {
  skillsAndCerts: PropTypes.shape({
    salesforceExpertise: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        issued: PropTypes.string.isRequired,
        pdfLink: PropTypes.string.isRequired
      })
    ).isRequired,
    frontEnd: PropTypes.arrayOf(PropTypes.string).isRequired,
    backEnd: PropTypes.arrayOf(PropTypes.string).isRequired,
    databases: PropTypes.arrayOf(PropTypes.string).isRequired,
    devOpsTools: PropTypes.arrayOf(PropTypes.string).isRequired,
    cloudInfrastructure: PropTypes.arrayOf(PropTypes.string).isRequired,
    softwarePractices: PropTypes.arrayOf(PropTypes.string).isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SkillsAndCerts;
