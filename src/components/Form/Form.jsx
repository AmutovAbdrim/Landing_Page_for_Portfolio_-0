import styles from "./Form.module.scss";

const Form = (props) => {
  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_input}>
          <input value="Enter your zip code"></input>
        </div>
        <div className={styles.form_images}>
          <img src="/src/assets/img/form_images/0.png" alt="#" />
          <img src="/src/assets/img/form_images/1.png" alt="#" />
          <img src="/src/assets/img/form_images/2.png" alt="#" />
          <img src="/src/assets/img/form_images/3.png" alt="#" />
          <img src="/src/assets/img/form_images/4.png" alt="#" />
          <img src="/src/assets/img/form_images/5.png" alt="#" />
          <img src="/src/assets/img/form_images/6.png" alt="#" />
          <img src="/src/assets/img/form_images/7.png" alt="#" />
          <img src="/src/assets/img/form_images/8.png" alt="#" />
          <img src="/src/assets/img/form_images/9.png" alt="#" />
        </div>

        <div className={styles.form_text}>
          <p>This is Photoshop's version of Lorem Ipsum.</p>
        </div>
        <div className={styles.form_button}>
          <button>Press Me</button>
        </div>
      </div>
    </>
  );
};

export default Form;
