import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import './styles/JobTile.css';

Modal.setAppElement('#root');

const JobTile = ({ application }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState(application);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="job-tile">
      skldjf
    </div>
  );
};

export default JobTile;