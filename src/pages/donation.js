import Head from "next/head";

import DonationForm from "../components/Sections/DonationForm";
import Nav from "@/components/Nav";
import styles from "../styles/Donation/Donation.module.css";

const Donation = () => {
  return (
    <>
      <Head>
        <title>SUPPORTIFLY | DONATION</title>
        <meta
          name="description"
          content="Supportifly Humanitarian Foundation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
