import styles from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import Blocks from "./components/Blocks/Blocks.jsx";
import pages from "./assets/img/Pages.png";
import photo from "./assets/img/Camera.png";
import Heading from "./components/Heading/Heading.jsx";
import HeadeingSecond from "./components/HeadingSecond/HeadeingSecond.jsx";
import Map from "./components/Map/Map.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.header_block}>
          <Header />
        </div>
        <Form />

        <div className={styles.blocks}>
          <Blocks tittle="Documents" img={pages} />
          <Blocks tittle="Photo" img={photo} />
        </div>

        <Heading />
        <HeadeingSecond />
        <Map />
        <Footer />
      </div>
    </>
  );
}

export default App;
