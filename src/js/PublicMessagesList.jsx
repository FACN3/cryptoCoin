import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PublicMessage from './PublicMessage';

const PublicMessagesList = ({ publicmessages }) => (
  <section id="messages-list">
    <ul>
      {publicmessages.map(message => (
        <PublicMessage key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

// PublicMessagesList.propTypes = {
//   publicmessages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };

export default connect(
  state => ({
    publicmessages: state.publicmessages
  }),
  {}
)(PublicMessagesList);
