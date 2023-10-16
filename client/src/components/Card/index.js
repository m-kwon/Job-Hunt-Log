import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateApplication, removeApplication } from '../../slices/jobApplicationsSlice';
import './styles.css';

Modal.setAppElement('#root');

const Card = ({ application, onRemove }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState(application);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const updateCard = () => {
    dispatch(updateApplication(updatedData));
    closeModal();
  };

  const removeCard = () => {
    dispatch(removeApplication(application.id));
    closeModal();
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className="card" onClick={openModal}>
      <div className="card-title">{application.title}</div>
      <div className="card-company">{application.company}</div>
      <button className="remove-button" onClick={removeCard}>x</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Card Details Modal"
      >
        <h2>Job Application Details</h2>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={updatedData.title}
            onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
          />
        </div>
        <div>
          <label>Company: </label>
          <input
            type="text"
            value={updatedData.company}
            onChange={(e) => setUpdatedData({ ...updatedData, company: e.target.value })}
          />
        </div>
        <div>
          <label>Job URL: </label>
          <input
            type="text"
            value={updatedData.jobUrl}
            onChange={(e) => setUpdatedData({ ...updatedData, jobUrl: e.target.value })}
          />
        </div>
        <div>
          <label>Application Date: </label>
          {application.applicationDate}
        </div>
        <button onClick={updateCard}>Update Card</button>
        <button onClick={removeCard}>Remove Card</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Card;
