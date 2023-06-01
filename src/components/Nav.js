import {
  Box,
  Button,
  Flex,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ image, color }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="transparent"
      color="white"
    >
      <Flex align="center">
        <Link href="/">
          <Image src={image} alt="Logo" width={100} height={100} />
        </Link>
      </Flex>

      {isMobile ? (
        // Mobile Navbar
        <Box display={{ base: "block", md: "none" }}>
          {/* Toggle Button */}
          <Button variant="unstyled" p={2} onClick={onToggle}>
            {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
          </Button>

          {/* Mobile Menu */}
          <Box
            display={isOpen ? "block" : "none"}
            width="full"
            mt={4}
            alignItems="center"
            justifyContent="center"
          >
            <Link href="/" py={2} mr={5} passHref>
              Home
            </Link>
            <Link href="/outreach" py={5} passHref>
              Outreach
            </Link>
            <Link href="/contact" py={5} passHref>
              Contact
            </Link>
          </Box>
        </Box>
      ) : (
        // Desktop Navbar
        <Box display={{ base: "none", md: "flex", align: "space-between" }}>
          <Box>
            <Link href="/" p={2} mr={3}>
              Home
            </Link>
            <Link href="/outreach" p={2} mr={3}>
              Outreach
            </Link>
            <Link href="/contact" p={2} mr={3}>
              Contact
            </Link>
            {/* Donate Button */}
            <Button bg={color} color="white" ml={isMobile ? 0 : 4}>
              Donate
            </Button>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;
