import HeaderOne from "@/components/HeaderOne"

import ContactFormSection from "@/components/Sections/ContactFormSection"
import ContactInfoSection from "@/components/Sections/ContactInfoSection"

//styles
import styles from '../styles/ContactInfo/ContactInfoSection.module.css'



const contact = () => {
    return (
        <>
            <HeaderOne bg='/images/contactBg.png' title='Contact Us'/>
            <div className={styles.infoWrapper}>
                <ContactInfoSection />
                <ContactFormSection />
            </div>
        </>
    )
}

export default contact