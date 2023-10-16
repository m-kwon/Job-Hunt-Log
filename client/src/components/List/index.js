import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addApplication } from '../../slices/jobApplicationsSlice';

import './styles.css';

const List = ({ listName }) => {
  const [newJobData, setNewJobData] = useState({
    title: '',
    company: '',
    jobUrl: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJobData({
      ...newJobData,
      [name]: value,
    });
  };

  const addCard = () => {
    if (newJobData.title.trim() !== '' && newJobData.company.trim() !== '' && newJobData.jobUrl.trim() !== '') {
      const applicationDate = new Date().toISOString();
      dispatch(addApplication({ ...newJobData, applicationDate }));
      setNewJobData({ title: '', company: '', jobUrl: '' });
    }
  };

  return (
    <div className="list">
      <div className="list-header">
        {listName}
        <button className="add-button" onClick={addCard}>
          +
        </button>
      </div>
      <input
        type="text"
        name="title"
        value={newJobData.title}
        onChange={handleInputChange}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="company"
        value={newJobData.company}
        onChange={handleInputChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="jobUrl"
        value={newJobData.jobUrl}
        onChange={handleInputChange}
        placeholder="Job Listing URL"
      />
    </div>
  );
};

export default List;
