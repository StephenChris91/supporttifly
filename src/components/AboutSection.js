import styles from "../styles/Nav.module.css";

const AboutSection = () => {
  return (
    <>
      <div id={styles.headerText} className="w-96">
        <h1
          className="text-4xl text-white z-10 text-center"
          id={styles.headerTextMain}
        >
          Ask, We Care
        </h1>
        <p className="text-white text-center" id={styles.headerSubText}>
          Sopportifly provides compassionate and comprehensive support for
          people in need.
        </p>
      </div>
      <div className={styles.aboutBoxes}>
        <div className={`${styles.aboutBox} ${styles.aboutBox1} text-white`}>
          <h2>About us</h2>
          <p>
            Sopportifly is an army of individuals working creatively, tirelessly
            and passionately to create a world of hope by providing
            compassionate and comprehensive support and empowering people to
            overcome challenges and lead to fulfilling life.
          </p>
        </div>
        <div className={`${styles.aboutBox} ${styles.aboutBox2} text-white`}>
          <h2>Our Mission</h2>
          <p>
            To provide compassionate and comprehensive support to everyone in
            need, empowering them to overcome challenges and lead a fulfilling
            life.
          </p>
        </div>
        <div className={`${styles.aboutBox} ${styles.aboutBox3} text-white`}>
          <h2>Our Vision</h2>
          <p>
            To lead in creating a world of hope where everyone in need is
            provided with resources and opportunities they need to thrive.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
