import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addApplication, removeApplication } from '../../slices/jobApplicationsSlice';
import Card from '../Card';

import './styles.css';

Modal.setAppElement('#root');

const List = ({ listName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newJobData, setNewJobData] = useState({
    title: '',
    company: '',
    jobUrl: '',
  });
  const [cardCount, setCardCount] = useState(0);

  const dispatch = useDispatch();
  const jobApplications = useSelector((state) => state.jobApplications);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onRemoveCard = (removedCardId) => {
    setCardCount(cardCount - 1);
    dispatch(removeApplication(removedCardId));
  };

  const addCard = () => {
    if (newJobData.title.trim() !== '' && newJobData.company.trim() !== '' && newJobData.jobUrl.trim() !== '') {
      const applicationDate = new Date().toISOString();
      dispatch(addApplication({ ...newJobData, applicationDate, listName }));
      setNewJobData({ title: '', company: '', jobUrl: '' });
      closeModal();
      setCardCount(cardCount + 1);
    }
  };

  return (
    <div className="list">
      <div className="list-header">
        {listName}
        <div>
          <br/>{cardCount} jobs
        </div>
        <button className="add-button" onClick={openModal}>
          +
        </button>
      </div>
      <div className="cards">
        {jobApplications
          .applications
          .filter((app) => app.listName === listName)
          .map((app, index) => (
            <Card
              key={index}
              application={app}
              onRemove={onRemoveCard}
            />
          ))}
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
          onChange={(e) => setNewJobData({ ...newJobData, title: e.target.value })}
          placeholder="Job Title"
        />
        <input
          type="text"
          name="company"
          value={newJobData.company}
          onChange={(e) => setNewJobData({ ...newJobData, company: e.target.value })}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="jobUrl"
          value={newJobData.jobUrl}
          onChange={(e) => setNewJobData({ ...newJobData, jobUrl: e.target.value })}
          placeholder="Job Listing URL"
        />
        <button onClick={addCard}>Add Card</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default List;