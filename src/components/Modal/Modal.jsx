import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        {children}
        <button className={s.button} type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
Modal.propTypes = {
  children: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
