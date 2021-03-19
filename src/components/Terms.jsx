import React from 'react';
import styles from '../styles/Terms.module.css';

const Terms = () => {

  return (
    <div className={styles['terms']}>
      <input
        type='checkbox'
        id='terms'
        name='terms'
        />
      <label for='terms'>
        I accept the <a href='terms.html'>Terms of Service</a>
      </label>
    </div>
  )
}

export default Terms;