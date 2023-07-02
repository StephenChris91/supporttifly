import { useRef, useState } from "react";
import styles from "../../styles/ContactSection/ContactSection.module.css";

//image
import Image from "next/image";
// import { Button, TextInput, Label, Textarea } from "flowbite-react";
import { sendEmail } from "../../../utils/sendMail";
import ContactForm from "./ContactFormSection";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    // e.preventDefault();
    setLoading(true);
    sendEmail(form.current);
    setLoading(false);
  };
  return (
    <section id={styles.volunteer}>
      <div className={styles.volunteerWrapper}>
        <div>
          <Image
            src="/images/contactSectionImage.png"
            alt="contact-section-image"
            width={500}
            height={500}
            className={styles.volunteerImage}
          />
        </div>
        <div className={styles.volunteerForm}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
