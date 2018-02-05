import React from 'react';
import PropTypes from 'prop-types';
import './ExampleComponent.scss';

const ExampleComponent = ({ name }) => (
  <div className="example-component">Hello {name}</div>
);


ExampleComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ExampleComponent;
