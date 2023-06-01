import Nav from "./Nav";
import styles from "../styles/Nav.module.css";

const HeaderOne = ({ bg, title, component }) => {
  return (
    <div className="relative" id={styles.headerContainer}>
      <img
        src={bg}
        alt="HeaderBg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className={styles.overlay}></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <Nav image="/logo.png" color="red.500" />
        <h1 className={styles.pageTitle}>{title}</h1>
        {component}
      </div>
    </div>
  );
};

export default HeaderOne;
