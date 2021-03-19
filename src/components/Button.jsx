import React from 'react';
import styles from '../styles/Button.module.css';

const Button = () => {

  const alertClicked = () => {
    alert('You clicked the sign-up button!');
  }

  return (
    <button
      className={styles['btn']}
      onClick={alertClicked}>
      Sign-up
    </button>
  )
}

export default Button;