import React, { useState } from "react";
import Image from "next/image";
import { Navbar, Button } from "flowbite-react";
import headerStyle from "../styles/Nav.module.css"; // Import your custom CSS file

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked the hamburger");
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-div w-full">
      <Navbar className={`${headerStyle.nav} sm:w-full`}>
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id={headerStyle.links} className="md:flex md:flex-col">
          <Navbar.Link
            href="/navbars"
            active={true}
            className={`text-white cursor-pointer ${
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout
            }`} // Add slide-in and slide-out classes based on isMenuOpen state
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            to="/outreach"
            className={`text-white cursor-pointer ${
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout
            }`} // Add slide-in and slide-out classes based on isMenuOpen state
          >
            Outreach
          </Navbar.Link>
          <Navbar.Link
            to="/contact"
            className={`text-white cursor-pointer md:mb-10 sm:mb-10 ${
              isMenuOpen ? headerStyle.slidein : headerStyle.slideout
            }`} // Add slide-in and slide-out classes based on isMenuOpen state
          >
            Contact Us
          </Navbar.Link>
          <Button
            className={[
              "bg-red-700",
              headerStyle.navBtn,
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
