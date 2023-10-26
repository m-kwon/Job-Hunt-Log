import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import JobTile from './JobTile';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import './styles/List.css';

Modal.setAppElement('#root');

const List = ({ list }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newJobData, setNewJobData] = useState({
    title: '',
    company: '',
    jobUrl: '',
    date: '',
    list: '',
  });
  const [jobCount, setJobCount] = useState(0);

  const dispatch = useDispatch();
  // const applications = useSelector((state) => state.applications);
  const applications = ['1', '2', '3']

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addJob = () => {
    console.log('hello');
    closeModal();
  };

  return (
    <>
      <div className="list">
        <div className="list-header">{list}</div>
        <div className="job-counter">{jobCount} jobs</div>
        <div className="add-job-button" onClick={openModal}>+</div>
        {applications.map((app, index) => (
          <JobTile
            key={index}
            application={app}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Job Application Modal"
      >
        <h3>Add Job</h3>
        <input
          type="text"
          name="title"
          value={newJobData.title}
          onChange={(e) => setNewJobData({ ...newJobData, title: e.target.value })}
          placeholder="Title"
        /><br/>
        <input
          type="text"
          name="company"
          value={newJobData.company}
          onChange={(e) => setNewJobData({ ...newJobData, company: e.target.value })}
          placeholder="Company"
        /><br/>
        <input
          type="text"
          name="jobUrl"
          value={newJobData.jobUrl}
          onChange={(e) => setNewJobData({ ...newJobData, jobUrl: e.target.value })}
          placeholder="URL"
        />
        <div className="add-job-button-modal" onClick={addJob}>Add Job</div>
        <div className="close-button-modal" onClick={closeModal}>Cancel</div>
      </Modal>
    </>
  );
};

export default List;