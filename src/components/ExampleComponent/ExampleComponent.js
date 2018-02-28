import React from 'react';
import PropTypes from 'prop-types';
import './ExampleComponent.scss';

const ExampleComponent = ({ name, onButtonClick }) => (
  <div className="example-component">
    <span>{`Hello ${name}`}</span>
    <button className="example-component__button" onClick={onButtonClick}>
      Pruébame
    </button>
  </div>
);

ExampleComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func
};

ExampleComponent.defaultProps = {
  onButtonClick: null
};

export default ExampleComponent;
