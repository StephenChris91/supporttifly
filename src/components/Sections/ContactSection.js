import styles from '../../styles/ContactSection/ContactSection.module.css';

//image
import Image from 'next/image'
import { Button, TextInput, Label, Textarea} from "flowbite-react";



const ContactSection = () => {
  return (
    <section id={styles.volunteer}>
        <div className={styles.volunteerWrapper}>
        <div>
            <Image
                src="/images/contactSectionImage.png"
                alt="contact-section-image"
                width={450}
                height={450}
                className={styles.volunteerImage}
                />
            </div>
            <div className={styles.volunteerForm}>
                <h2>Be a volunteer</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="small"
                            value="Name"
                        />
                        </div>
                        <TextInput
                        id={styles.small}
                        type="text"
                        sizing="md"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Email"
                        />
                        </div>
                        <TextInput
                        id={styles.base}
                        type="text"
                        sizing="md"
                        helperText={<>We’ll never share your details.</>}
                        />

                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="large"
                            value="Message"
                        />
                        </div>
                        <Textarea
                        id={styles.comment}
                        placeholder="Leave a message..."
                        required={true}
                        rows={4}
                    />
                    </div>
                    </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;
