import styles from "../styles/Features/Features.module.css";

//icons
import { FaHeart, FaHandshake, FaPrescriptionBottleAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const Features = () => {
  return (
    <section className={`${styles.featuresDiv} ${styles.featuresBoxes}`}>
      <div className={styles.featuresWrapper}>
        <div className={`${styles.featuresBox} ${styles.featuresBox1}`}>
          <FaHeart />
          <p>We are the love where affection is needed</p>
        </div>
        <div className={`${styles.featuresBox} ${styles.featuresBox2}`}>
          <FaPrescriptionBottleAlt />
          <p>We are the medicine in an ailing world</p>
        </div>
        <div className={`${styles.featuresBox} ${styles.featuresBox3}`}>
          <FaHandshake />
          <p>We are the support where assistance is needed</p>
        </div>
        <div className={`${styles.featuresBox} ${styles.featuresBox4}`}>
          <HiUserGroup />
          <p>
            We are an army of individuals from all walks of life committed to
            seeing a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
