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
import { motion } from "framer-motion";

const Nav = ({ image, color }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const { isOpen, onToggle } = useDisclosure();

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg={isMobile ? "rgba(229, 62, 62, 0.8)" : "transparent"}
    >
      <Flex align="center">
        <Link href="/">
          <Image src={image} alt="Logo" width={100} height={100} />
        </Link>
      </Flex>

      {isMobile ? (
        // Mobile Navbar
        <Box display={{ base: "block", md: "none" }} position="relative">
          {/* Toggle Button */}
          <Button variant="unstyled" p={2} onClick={onToggle}>
            {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
          </Button>

          {/* Mobile Menu */}
          {isOpen && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              // right={0}
              bg={isOpen ? "rgba(255, 255, 255, 0.95)" : "transparent"}
              width="full"
              zIndex={999}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
              >
                <Flex direction="column" align="center" py={4}>
                  <Link href="/" py={2} passHref>
                    Home
                  </Link>
                  <Link href="/outreach" py={2} passHref>
                    Outreach
                  </Link>
                  <Link href="/contact" py={2} passHref>
                    Contact
                  </Link>
                </Flex>
              </motion.div>
            </Box>
          )}
        </Box>
      ) : (
        // Desktop Navbar
        <Box
          display={{
            base: "none",
            md: "flex",
            align: "space-between",
            color: "white",
          }}
        >
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
            <Button bg={color} color="white" ml={4}>
              Donate
            </Button>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;
