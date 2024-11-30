import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ContentBody = () => {

  const [records, setRecords] = useState(null);

  const fetchRecords = async () => {
    const response = await fetch('/api/records')
    const json = await response.json()

    if (response.ok) {
      setRecords(json)
    }
  }

  useEffect(() => {
    fetchRecords();
  }, [records]);

  return (
    <div className='content-body'>
      <div className='content'>
        {records && records.map((record) => (
          <p key={record._id}>{record.title}</p>
        ))}
      </div>
    </div>
  );
}

ContentBody.displayName = 'ContentBody'

ContentBody.propTypes = {
  info: PropTypes.object,
  records: PropTypes.array
}

export default ContentBody;
