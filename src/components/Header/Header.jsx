import styles from "./Header.module.scss";
import headerLogo from "../../assets/img/Logo.png";

const Header = (props) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBanner}>
        <div className={styles.headerLogo}>
          <a href="#">
            <img src={headerLogo} alt="Logo" />
          </a>
          <h1 className={styles.headerTitle}>
            {" "}
            Be sure you put your feet <span>in the right place</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
