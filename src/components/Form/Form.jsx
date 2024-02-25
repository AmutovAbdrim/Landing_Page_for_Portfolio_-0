import styles from "./Form.module.scss";
import React, { useState } from "react";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("Enter your zip code");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_block}>
          <div className={styles.form_input}>
            <input
              type="text"
              placeholder={inputValue}
              onChange={handleChange}
            />
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
      </div>
    </>
  );
};

export default Form;
