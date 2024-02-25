import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerText}>
        <p>Copyright 2024, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
