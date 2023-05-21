import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Navbar, Button } from "flowbite-react";
import headerStyle from "../styles/Nav.module.css"; // Import your custom CSS file

const Nav = ({ image, btnColor }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked the hamburger");
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-div w-full">
      <Navbar className={`${headerStyle.nav} sm:w-full m-auto`}>
        <Link href="/">
          <Image src={image} alt="Logo" width={100} height={100} />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id={headerStyle.links} className="md:flex md:flex-col justify-between items-center m-auto">
          <Link
            href="/"
            active={true}
            className={`text-white cursor-pointer ${
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout
            }`} // Add slide-in and slide-out classes based on isMenuOpen state
          >
            Home
          </Link>
          <Link
            href="/outreach"
            className={`text-white cursor-pointer ${
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout
            }`} // Add slide-in and slide-out classes based on isMenuOpen state
          >
            Outreach
          </Link>
          <Link
            href="/contact"
            className={`text-white cursor-pointer md:mb-10 sm:mb-10 ${
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout
            }`} // Add slide-in and slide-out classes based on isMenuOpen state
          >
            Contact Us
          </Link>
          <Button
            id={headerStyle.navBtn}
            className={[
              btnColor,
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout, // Add slide-in and slide-out classes based on isMenuOpen state
            ].join(" ")}
          >
            Donate
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
