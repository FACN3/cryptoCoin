import React from 'react';
import PropTypes from 'prop-types';

const PublicMessage = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

PublicMessage.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default PublicMessage;
