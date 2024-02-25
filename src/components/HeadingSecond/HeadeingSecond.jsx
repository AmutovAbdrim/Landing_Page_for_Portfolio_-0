import styles from "./HeadeingSecond.module.scss";
import headingSecondImage from "/src/assets/img/headingSecond.png";

const HeadeingSecond = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={headingSecondImage} alt="laptop" />
        </div>

        <div className={styles.info}>
          <h4>This is a Heading</h4>
          <p>
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
            felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed
            ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra,
            erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
            massa nisl quis neque. Suspendisse in orci enim.
          </p>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default HeadeingSecond;
