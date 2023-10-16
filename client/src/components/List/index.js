import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addApplication } from '../../slices/jobApplicationsSlice';

import './styles.css';

Modal.setAppElement('#root');

const List = ({ listName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addCard = () => {
    if (newJobData.title.trim() !== '' && newJobData.company.trim() !== '' && newJobData.jobUrl.trim() !== '') {
      const applicationDate = new Date().toISOString();
      dispatch(addApplication({ ...newJobData, applicationDate, listName }));
      setNewJobData({ title: '', company: '', jobUrl: '' });
      closeModal();
    }
  };

  return (
    <div className="list">
      <div className="list-header">
        {listName}
        <button className="add-button" onClick={openModal}>
          +
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Job Application Modal"
      >
        <h2>Add Job Application</h2>
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
        <button onClick={addCard}>Add Card</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default List;