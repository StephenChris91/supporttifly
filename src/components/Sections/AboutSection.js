import { motion } from "framer-motion";
import styles from "../../styles/Nav.module.css";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  return (
    <>
      <motion.div
        id={styles.headerText}
        className="w-96"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl text-white z-10 text-center"
          id={styles.headerTextMain}
        >
          Ask, We Care
        </motion.h1>
        <motion.p className="text-white text-center" id={styles.headerSubText}>
          Supportifly provides compassionate and comprehensive support for
          people in need.
        </motion.p>
      </motion.div>
      <div className={styles.aboutBoxes}>
        <motion.div
          className={`${styles.aboutBox} ${styles.aboutBox1} text-white`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2>About us</h2>
          <p>
            Supportifly is an army of individuals working creatively,
            tirelessly, and passionately to create a world of hope by providing
            compassionate and comprehensive support and empowering people to
            overcome challenges and lead fulfilling lives.
          </p>
        </motion.div>
        <motion.div
          className={`${styles.aboutBox} ${styles.aboutBox2} text-white`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2>Our Mission</h2>
          <p>
            To provide compassionate and comprehensive support to everyone in
            need, empowering them to overcome challenges and lead fulfilling
            lives.
          </p>
        </motion.div>
        <motion.div
          className={`${styles.aboutBox} ${styles.aboutBox3} text-white`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2>Our Vision</h2>
          <p>
            To lead in creating a world of hope where everyone in need is
            provided with resources and opportunities they need to thrive.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
