import styles from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <div className={styles.header_block}>
        <Header />
      </div>
      <Form />
    </>
  );
}

export default App;
