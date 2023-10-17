import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateApplication, removeApplication } from '../../slices/jobApplicationsSlice';
import { Draggable } from 'react-beautiful-dnd';

import './styles.css';

Modal.setAppElement('#root');

const Card = ({ application, onRemove, index }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState(application);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const updateCard = (e) => {
    e.stopPropagation();
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

  const closeCardModal = (e) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <Draggable draggableId={application.id} index={index}>
      {(provided) => (
        <div
          className="card"
          onClick={openModal}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-title">{updatedData.title}</div>
          <div className="card-company">{updatedData.company}</div>
          <button className="remove-button" onClick={removeCard}>x</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeCardModal}
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
              <label>URL: </label>
              <input
                type="text"
                value={updatedData.jobUrl}
                onChange={(e) => setUpdatedData({ ...updatedData, jobUrl: e.target.value })}
              />
            </div>
            <div>
              <label>Applied on: </label>
              {updatedData.applicationDate}
            </div>
            <button onClick={updateCard}>Update</button>
            <button onClick={removeCard}>Remove</button>
            <button onClick={closeCardModal}>Close</button>
          </Modal>
        </div>
      )}
    </Draggable>
  );
};

export default Card;