import styles from "./Heading.module.scss";
import ipad from "/src/assets/img/ipad.png";

const Heading = () => {
  return (
    <div className={styles.heading_block}>
      <img src={ipad} alt="ipad" />
      <h4>This is a Heading</h4>
      <p>
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
        elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
        amet nibh vulputate cursus a sit amet mauris.
      </p>
      <p>
        Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
        ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
        dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
        imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat
        sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl
        quis neque. Suspendisse in orci enim.
      </p>
    </div>
  );
};

export default Heading;
