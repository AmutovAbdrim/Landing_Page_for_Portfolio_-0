import styles from "./Header.module.scss";
import bannerImage from "../../assets/img/header_banner.png";

const Header = (props) => {
  return (
    <>
      <div className={styles.headerBanner}>
        <img src={bannerImage} alt="Баннер" />
      </div>
      <div className={styles.headerLogo}></div>
      <div className={styles.headerTitle}>Be sure you put your feet 
in the right place</div>
    </>
  );
};

export default Header;
