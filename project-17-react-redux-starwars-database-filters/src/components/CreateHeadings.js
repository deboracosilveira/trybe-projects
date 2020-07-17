import React from 'react';
import PropTypes from 'prop-types';

const CreateHeadings = ({ dados }) => (
  <thead>
    <tr>{dados.map((key) => key !== 'url' && <th key={key}>{key}</th>)}</tr>
  </thead>
);

export default CreateHeadings;

CreateHeadings.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.string).isRequired,
};
