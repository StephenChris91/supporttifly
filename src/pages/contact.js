import HeaderOne from "@/components/HeaderOne";

import ContactFormSection from "@/components/Sections/ContactFormSection";
import ContactInfoSection from "@/components/Sections/ContactInfoSection";
import GoogleMapSection from "@/components/Sections/GoogleMapSection";

import styles from "../styles/Contact.module.css";

const contact = () => {
  return (
    <>
      <div>
        <HeaderOne
          linkColor="white"
          image="/logo-dark.png"
          bg="/images/contactBg.png"
          title="Contact Us"
          priority
        />
      </div>

      <GoogleMapSection className={styles.map} />
      <div className={styles.infoWrapper}>
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    </>
  );
};

export default contact;
