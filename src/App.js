import './styles/index.css';
import styles from './styles/App.module.css';
import formStyles from './styles/FormContainer.module.css';
import FormHeader from './components/FormHeader';
import Terms from './components/Terms';
import Button from './components/Button';

function App() {
  return (
    <div className={styles['form-container']}>
      <FormHeader />
      <form className={formStyles['']}>
        <fieldset className={formStyles['form-group']}>
          <input
            name="business"
            className={formStyles['form-input']}
            placeholder='What is the name of your business?'
          />
          <p className={formStyles['required-text']}>
            Business Name Required
          </p>
        </fieldset>
        <Terms />
        <Button />
      </form>
      {/* <Button /> */}
    </div>
  );
}

export default App;
