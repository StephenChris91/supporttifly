import { Label, TextInput, Checkbox, Button, Textarea } from "flowbite-react";
import styles from "../../styles/ContactForm/ContactForm.module.css";

const ContactFormSection = () => {
  return (
    <>
      <section id={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formInputs}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Name" />
              </div>
              <TextInput id={styles.small} type="text" sizing="lg" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Email" />
              </div>
              <TextInput id={styles.small} type="text" sizing="lg" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Subject" />
              </div>
              <TextInput id={styles.small} type="text" sizing="lg" />
            </div>
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id={styles.comment}
              placeholder="Leave a comment..."
              required
              rows={7}
            />
          </div>
          <Button
            className={[
              "bg-red-700 text-lg text-bold",
              styles.contactPageBtn, // Add slide-in and slide-out classes based on isMenuOpen state
            ].join(" ")}
          >
            Submit
          </Button>{" "}
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
