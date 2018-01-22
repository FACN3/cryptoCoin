import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './actionCreators';
// import PropTypes from 'prop-types'

const PublicAddMessage = props => {
  let input;

  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
};

// AddMessage.propTypes = {
//   dispatch: PropTypes.func.isRequired
// }
const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  }
});

export default connect(() => ({}), mapDispatchToProps)(PublicAddMessage);
