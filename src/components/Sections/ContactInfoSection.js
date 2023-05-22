import styles from '../../styles/ContactInfo/ContactInfoSection.module.css'



const ContactInfoSection = () => {


    return(
        <>
            <h1>Contact Us</h1>
            <div className={styles.contactInfoDetailsWrapper}>
                <div>
                    <h2>Address</h2>
                </div>
                <div>
                    <h2>Phone</h2>
                </div>
                <div>
                    <h2>Email</h2>
                </div>
            </div>
        </>
    )
}


export default ContactInfoSection