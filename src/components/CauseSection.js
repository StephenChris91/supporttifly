import styles from "../styles/Cause/Causes.module.css";
import Image from "next/image";
import { Button } from "flowbite-react";

const CauseSection = () => {
  return (
    <section id={styles.causes}>
      <h1 className={styles.causesHeader}>Our Causes</h1>
      <div className={styles.causesWrapper}>
        <div className={styles.causes}>
          <Image
            src="/images/feed-poor.png"
            alt="causeImg"
            width={500}
            height={600}
          />
          <div className={styles.causesDetails}>
            <h2>Feed The Poor </h2>
            One of our objective is to ensure we reduce hunger among the poor
            people in the rural area & environs.
          </div>
        </div>
        <div className={styles.causes}>
          <Image
            src="/images/health.png"
            alt="causeImg"
            width={500}
            height={600}
          />
          <div className={styles.causesDetails}>
            <h2>Health Care</h2>
            We create campaigns on health challenges, alongside with different
            health tests, and also provide medicines for the people.
          </div>
        </div>
        <div className={styles.causes}>
          <Image
            src="/images/educare.png"
            alt="causeImg"
            width={500}
            height={600}
          />
          <div className={styles.causesDetails}>
            <h2>EduCare</h2>
            We also provide support for school, pupils and students to enable
            them study well at the right time.
          </div>
        </div>
      </div>
      <Button
        className={[
          "bg-red-700 text-lg text-bold",
          styles.causesBtn, // Add slide-in and slide-out classes based on isMenuOpen state
        ].join(" ")}
      >
        Donate
      </Button>{" "}
    </section>
  );
};

export default CauseSection;
