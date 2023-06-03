import { Footer, Button } from "flowbite-react";

//styles
import styles from "../../styles/Footer/Footer.module.css";
import Image from "next/image";

//icons
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

//paystack
import { usePaystackPayment } from 'react-paystack';


const FooterSection = () => {

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "stephenchriscodes@gmail.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_a0705565ee2275b926b58433939e4c657c600cbe',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

      const initializePayment = usePaystackPayment(config);

  return (
    <>
      <Footer>
        <div id={styles.footer} className="w-full px-20">
          <div id={styles.footerWrapper} className="sm:flex-col sm:items-start">
            <div>
              <Footer.LinkGroup col={true} className='col'>
                <Image
                  src="/logo.png"
                  alt="footer-logo"
                  width={150}
                  height={150}
                  className={styles.footerLogo}
                />
                <p>
                  Sopportifly provides compassionate and comprehensive support
                  for people in need.
                </p>
                <div className="flex gap-4 mb-10 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="#" icon={BsLinkedin} />
                </div>
              </Footer.LinkGroup>
            </div>
            <div className="col flex flex-col sm:items-start">
              <Footer.Title title="NAVIGATION" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/outreach">Outreach</Footer.Link>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="CONTACT" />
              <Footer.LinkGroup col={true} className='col'>
                <p>
                  Ariwola House, Opposite Ansarudeen School, Sango-Eleyele Road,
                  Ibadan, Oyo State, Nigeria
                </p>
                <p>0805 422 4781</p>
                <p>flysuppng@gmail.com</p>
              </Footer.LinkGroup>
            </div>
            <div>
              <Button
              onClick={() => {
                initializePayment(onSuccess, onClose)}}
                className={[
                  "bg-red-700 text-lg text-bold w-full",
                  styles.footerBtn, // Add slide-in and slide-out classes based on isMenuOpen state
                ].join(" ")}
              >
                Donate
              </Button>{" "}
            </div>
          </div>
          <div
            id={styles.footerIcons}
            className="sm:flex sm:flex-col sm:justify-between"
          >
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
};

export default FooterSection;
