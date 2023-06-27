import DonationForm from "../components/Sections/DonationForm";
import Nav from "@/components/Nav";
import styles from "../styles/Donation/Donation.module.css";

const Donation = () => {
  return (
    <>
      <div className={styles.donationContainer}>
        <div className={styles.overlay}></div>
        {/* <div className={styles.backgroundImage}></div> */}
        <div className={styles.contentContainer}>
          <Nav linkColor="red" image="/logo.png" color="gray.900" />
          <DonationForm />
        </div>
      </div>
    </>
  );
};

export default Donation;
