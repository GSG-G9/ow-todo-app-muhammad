import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { errorEmptyInput } from '../../redux/actions/todos';

import { ReactComponent as CrossIcon } from '../../images/CrossIcon.svg';

import './style.css';

const Alert = ({message, duration}) => {
  const [close, setClose] = useState(false);
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(errorEmptyInput(""));
    setClose(true)
  }, duration);
  return (
    <div className={`Alert ${close && 'close-alert'}`}>
      <span>{message}</span>
      <CrossIcon className="cross-icon" onClick={() => setClose(true)} />
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
