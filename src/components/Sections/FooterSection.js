import { Footer, Button } from "flowbite-react";

//styles
import styles from "../../styles/Footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

//icons
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const FooterSection = () => {
  return (
    <>
      <Footer>
        <div id={styles.footer} className="w-full px-20">
          <div id={styles.footerWrapper} className="sm:flex-col sm:items-start">
            <div>
              <Footer.LinkGroup col={true} className="col">
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
                  <Footer.Icon
                    href="https://www.facebook.com/profile.php?id=100092393693616&mibextid=LQQJ4d"
                    icon={BsFacebook}
                  />
                  <Footer.Icon
                    href="https://instagram.com/supportifly?igshid=MzRlODBiNWFlZA=="
                    icon={BsInstagram}
                  />
                  <Footer.Icon
                    href="https://twitter.com/supportifly?s=21&t=on0Oz-YcpPohVP6_avs1qQ"
                    icon={BsTwitter}
                  />
                  <Footer.Icon
                    href="https://www.linkedin.com/in/supportifly-ng-0ba89026a"
                    icon={BsLinkedin}
                  />
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
              <Footer.LinkGroup col={true} className="col">
                <p>
                  Ariwola House, Opposite Ansarudeen School, Sango-Eleyele Road,
                  Ibadan, Oyo State, Nigeria
                </p>
                <p>0805 422 4781</p>
                <p>flysuppng@gmail.com</p>
              </Footer.LinkGroup>
            </div>
            <div>
              <Link href="/donation" passHref>
                <Button
                  className={[
                    "bg-red-700 text-lg text-bold",
                    styles.footerBtn, // Add slide-in and slide-out classes based on isMenuOpen state
                  ].join(" ")}
                >
                  Donate
                </Button>{" "}
              </Link>
            </div>
          </div>
          <div
            id={styles.footerIcons}
            className="sm:flex sm:flex-col sm:justify-between"
          >
            <Footer.Copyright href="#" by="Supportifly™" year={2023} />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterSection;
