import React from 'react';
import styles from '../styles/FormHeader.module.css';
import {ReactComponent as ChatIcon} from '../assets/chatbubble.svg';

const FormHeader = () => (
  <div className={styles['form-heading']}>
    <ChatIcon className={styles['chat-bubble-svg']} /> 
    <h1 className={styles['form-header']}>
      Tell us about <br /> yourself
    </h1>
  </div>
);

export default FormHeader;