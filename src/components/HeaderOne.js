import Nav from "./Nav";
import styles from "../styles/Nav.module.css";
import AboutSection from "./AboutSection";

const HeaderOne = () => {
  return (
    <div className="relative" id={styles.headerContainer}>
      <img
        src="/headerOneBg.png"
        alt="HeaderBg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className={styles.overlay}></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <Nav />
        <AboutSection />
      </div>
    </div>
  );
};

export default HeaderOne;
