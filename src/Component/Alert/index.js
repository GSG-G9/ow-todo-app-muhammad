import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { ReactComponent as CrossIcon } from '../../images/CrossIcon.svg';

import './style.css';

const Alert = ({message, duration}) => {
  console.log(message);
  const [close, setClose] = useState(false);
  setTimeout(() => setClose(true), duration);
  return (
    <div className={`Alert ${close && 'close-alert'}`}>
      <span>{message}</span>
      <CrossIcon onClick={() => setClose(true)} />
    </div>
  )
}

Alert.defaultProps = {
  message: "Something went wrong!"
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
}

export default Alert;
