import React from 'react';
import { Link } from 'react-router-dom';

const FloatingAdd = () => {
  return (
    <Link to="add">
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large orange">
          <i className="large material-icons">add</i>
        </button>
      </div>
    </Link>
  );
};

export default FloatingAdd;
