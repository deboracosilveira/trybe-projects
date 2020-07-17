import React from 'react';
import PropTypes from 'prop-types';

const CreateBody = ({ dados }) => (
  <tbody>
    {dados.map((element) => (
      <tr key={element.name}>
        {Object.values(element).map((item) => (
          <td key={`${element.name} ${item}`}>{item}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default CreateBody;

CreateBody.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.object).isRequired,
};
