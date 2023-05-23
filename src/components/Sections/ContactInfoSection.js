import styles from '../../styles/ContactInfo/ContactInfoSection.module.css';


//icons
import { BsMailbox2, BsFillPhoneVibrateFill } from 'react-icons/bs'
import { FaMailBulk } from 'react-icons/fa'



const ContactInfoSection = () => {


    return(
        <div className={styles.contactInfo}>
            <h1 className={styles.title}>Contact Us</h1>
            <div className={styles.contactInfoDetailsWrapper}>
                <div className={`${styles.contactInfoBox} bg-red-100`}>
                    <BsMailbox2 className={`${styles.icon} ${styles.icon1} text-red-300`}/>
                    <p>Ariwola House, Opposite
                    Ansarudeen School,
                    Sango-Eleyele Road, Ibadan.
                    </p>
                </div>
                <div className={`${styles.contactInfoBox} bg-green-100`}>
                    <BsFillPhoneVibrateFill className={`${styles.icon} ${styles.icon2} text-green-300`}/>
                </div>
                <div className={`${styles.contactInfoBox} bg-blue-100`}>
                    <FaMailBulk className={`${styles.icon} ${styles.icon3} text-blue-300`}/>
                </div>
            </div>
        </div>
    )
}


export default ContactInfoSection