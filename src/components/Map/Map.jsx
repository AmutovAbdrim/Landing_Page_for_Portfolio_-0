import styles from "./Map.module.scss";
import mapBtn from "/src/assets/img/mapBtn.png";

const Map = () => {
  return (
    <div className={styles.wrapperss}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70393.32966771949!2d-74.1437803281919!3d40.752972746140934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skz!4v1708863743930!5m2!1sru!2skz"
          style={{ border: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={styles.mapInfo}>
        <div>
          <input placeholder="Name" />
        </div>

        <div>
          <input placeholder="email address" />
        </div>

        <div>
          <input placeholder="Message" />
        </div>
        <div>
          <button>
            <img src={mapBtn} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
