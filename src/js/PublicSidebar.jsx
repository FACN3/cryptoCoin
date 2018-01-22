import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PublicSidebar = ({ publicusers }) => (
  <aside id="sidebar" className="sidebar">
    <ul>{publicusers.map(user => <li key={user.id}>{user.name}</li>)}</ul>
  </aside>
);

PublicSidebar.propTypes = {
  publicusers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(
  state => ({
    publicusers: state.publicusers
  }),
  {}
)(PublicSidebar);
