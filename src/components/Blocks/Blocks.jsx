import styles from "./Blocks.module.scss";

const Blocks = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.image}>
          <img src={props.img} />
        </div>
        <div className={styles.block_info}>
          <div className={styles.tittle}>
            <h4>{props.tittle}</h4>
          </div>
          <div className={styles.text}>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blocks;
