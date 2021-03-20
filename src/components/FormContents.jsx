import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import styles from '../styles/FormContents.module.css';

const selectOptions = [
  { value: 'select', label: '- Select your ticketing system -' },
  { value: 'zendesk', label: 'Zendesk' },
  { value: 'intercom', label: 'Intercom' },
  { value: 'gorgias', label: 'Gorgias' },
];

const FormContents = () => {
  const {register, handleSubmit, errors, control} = useForm({
    mode: 'onChange',
    defaultValue: selectOptions[0],
  });

  const [selectedOption, setSelectedOption] = useState(selectOptions);

  console.log('Errors', errors);

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

      {/* Could not get react-select to work yet */}
      <div className={styles['form-fields']}>
        <Controller
          className={styles['form-input']}
          name='system'
          control={control}
          as={Select}
          defaultValue={selectOptions[0]}
          options={selectOptions}
          rules={{ required: 'Ticketing System Required' }}
          render={(
            { onChange }
          ) => (
            <Select 
              // onChange={(e) => onChange(e.target.options)}
              // selected={selectOptions}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={selectOptions}
              inputRef={register({ required: 'Ticketing System Required' })}
            />
          )}
        />  
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