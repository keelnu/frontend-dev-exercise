import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/FormContents.module.css';

const FormContents = () => {
  const {register, handleSubmit, errors} = useForm();

  return (
    // handleSubmit() will only execute is form data is correct
    <form
      onSubmit={handleSubmit((formData) => {
        // console logging formData to show what would be submitted to the server in an http post request if we were going to save the form input data 
        console.log('formData', formData);
    })}>
      <div className={styles['form-fields']}>
        <input
          className={styles['form-input']}
          type='text'
          name='name'
          id='name'
          placeholder='What is the name of your business?'
          ref={register({ required: 'Business Name Required' })}
        />
        {errors.name ? <div className={styles['required-text']}>{errors.name.message}</div> : null}
      </div>

      <div className={styles['form-fields']}>
        <input
          className={styles['form-input']}
          type='text'
          name='website'
          id='website'
          placeholder='Business website'
          ref={register({ required: 'Business Website Required' })}
        />
        {errors.website ? <div className={styles['required-text']}>{errors.website.message}</div> : null}
      </div>

      {/* Dropdown does not appear in the errors object */}
      <div className={styles['form-fields']}>
        <select
          className={styles['form-input']}
          name='system'
          id='system'
          defaultValue='Select your ticketing system'
          ref={register({ required: 'Ticketing System Required' })}
        >
            <option value="select">Select your ticketing system</option>
            <option value="zendesk">Zendesk</option>
            <option value="intercom">Intercom</option>
            <option value="gorgias">Gorgias</option>
        </select>
        {errors.system ? <div className={styles['required-text']}>{errors.system.message}</div> : null}
      </div>

      <div className={styles['form-fields']}>
        <input
          className={styles['form-input']}
          type='text'
          name='email'
          id='email'
          placeholder='Your email'
          ref={register({ 
            required: 'Email Required',
            validate: (value) => {
              return (
                (value.includes('@') === true) 
                || 'Please include \'@\' in the email address'
              );
            },
          })}
        />
        {errors.email ? <div className={styles['required-text']}>{errors.email.message}</div> : null}
      </div>

      <div className={styles['form-fields']}>
        <input
          className={styles['form-input']}
          type='text'
          name='password'
          id='password'
          placeholder='Password'
          ref={register({ 
            required: 'Password Required',
            minLength: {
              value: 8,
              message: 'At least 8 characters required',
            },
            validate: (value) => {
              return (
                [/[a-z]/, /[0-9]/, /[^a-z0-9]/].every((pattern) => 
                  pattern.test(value)
                ) || 'Must include at least one lowercase, number, and special character'
              );
            },
           })}
        />
        {errors.password ? <div className={styles['required-text']}>{errors.password.message}</div> : null}
      </div>

      <div className={styles['terms']}>
        <input
          type='checkbox'
          name='terms'
          id='terms'
          ref={register({ required: 'You must agree to terms.' })}
        />
        <label htmlFor='terms'>I accept the <a href='terms.html'>Terms of Service</a></label>
        {errors.terms ? <div className={styles['required-text']}>{errors.terms.message}</div> : null}
      </div>

      <div>
        <button
          className={styles['btn']}
          type='submit'>
          Sign-up
        </button>
      </div>
    </form>
  )
}

export default FormContents;