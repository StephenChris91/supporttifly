import { Footer, Button } from 'flowbite-react';

//styles
import styles from '../../styles/Footer/Footer.module.css';
import Image from 'next/image'


//icons
import {BsFacebook, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'



const FooterSection = () => {
    return ( 
        <>
            <Footer>
                <div id={styles.footer} className="w-full px-20">
                    <div id={styles.footerWrapper} className="sm:flex-col">
                    <div>
                        <Footer.LinkGroup col={true}>
                        <Image
                            src="/logo.png"
                            alt="footer-logo"
                            width={150}
                            height={150}
                            className={styles.footerLogo}
                        />
                        <p>Sopportifly provides compassionate and 
                            comprehensive support for people in need.
                        </p>
                        <div className="flex gap-4 mb-10 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                        href="#"
                        icon={BsFacebook}
                        />
                        <Footer.Icon
                        href="#"
                        icon={BsInstagram}
                        />
                        <Footer.Icon
                        href="#"
                        icon={BsTwitter}
                        />
                        <Footer.Icon
                        href="#"
                        icon={BsLinkedin}
                        />
                    </div>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="NAVIGATION" />
                        <Footer.LinkGroup col={true}>
                        <Footer.Link href="#">
                            Home
                        </Footer.Link>
                        <Footer.Link href="#">
                            Outreach
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact Us
                        </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="CONTACT" />
                        <Footer.LinkGroup col={true}>
                        <p>Ariwola House, Opposite
                            Ansarudeen School,
                            Sango-Eleyele Road,
                            Ibadan, Oyo State, 
                            Nigeria
                        </p>
                        <p>0805 422 4781</p>
                            <p>flysuppng@gmail.com</p>
                        </Footer.LinkGroup>
                        
                            
                    </div>
                    <div>
                    <Button
                        className={[
                        "bg-red-700 text-lg text-bold w-full",
                        styles.footerBtn, // Add slide-in and slide-out classes based on isMenuOpen state
                        ].join(" ")}
                    >
                        Donate
                    </Button>{" "}
                    </div>
                    </div>
                    <div id={styles.footerIcons} className="sm:flex sm:flex-col sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Supportifly™. Designed with 💓 by Stephen Chris"
                        year={2023}
                    />
                    
                    </div>
                </div>
            </Footer>
        </>
     );
}
 
export default FooterSection;