import './styles/index.css';
import styles from './styles/App.module.css';
import FormHeader from './components/FormHeader';
import FormContents from './components/FormContents';

function App() {
  return (
    <div className={styles['form-container']}>
      <FormHeader />
      <FormContents />
    </div>
  );
}

export default App;
