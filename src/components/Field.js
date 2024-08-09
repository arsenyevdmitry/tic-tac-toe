import PropTypes from 'prop-types';
import React from 'react';
import styles from './Field.module.css';

const Field = ({ field, onClick }) => {
  return (
    <div className={styles.field}>
      {field.map((value, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => onClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Field;
