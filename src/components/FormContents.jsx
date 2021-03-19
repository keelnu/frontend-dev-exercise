import React from 'react';
import styles from '../styles/FormContents.module.css';
import Terms from './Terms';
import Button from './Button';

const FormContents = () => {

  // logic for form to go here
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have submitted the form.')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles['form-fields']}>
          <input
            name="name"
            className={styles['form-input']}
            placeholder='What is the name of your business?'
          />
          <p className={styles['required-text']}>
            Business Name Required
          </p>
          <input
            name="website"
            className={styles['form-input']}
            placeholder='Business website'
          />
          <p className={styles['required-text']}>
            Business Website Required
          </p>
          <select
            name="ticketing-system"
            className={styles['form-input']} id="system-name">
              <option value="select">Select your ticketing system</option>
              <option value="zendesk">Zendesk</option>
              <option value="intercom">Intercom</option>
              <option value="gorgias">Gorgias</option>
            </select>
            <p class="required-text">Ticketing System Required</p>
          <input
            name="email"
            className={styles['form-input']}
            placeholder='Your email'
          />
          <p className={styles['required-text']}>
            Email Required
          </p>
          <input
            name="password"
            className={styles['form-input']}
            placeholder='Password'
          />
          <p className={styles['required-text']}>
            Password Required
          </p>
        </fieldset>
        <Terms />
        <Button />
      </form>
    </div>
  )
}

export default FormContents;