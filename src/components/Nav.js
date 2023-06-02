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

const Nav = ({ image, color, linkColor }) => {
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
      // bg={isMobile ? "rgba(229, 62, 62, 0.8)" : "transparent"}
      // zIndex={9999}
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
          <Button
            color={linkColor}
            variant="unstyled"
            p={2}
            onClick={onToggle}
            zIndex={9999}
          >
            {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
          </Button>

          {/* Mobile Menu */}
          {isOpen && (
            <Box
              position="fixed"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(229, 62, 62, 0.8)"
              zIndex={999}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              fontWeight="700"
              fontSize="3rem"
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
                  <Button
                    bg={isOpen ? color : "black"}
                    color="white"
                    width="100%"
                    ml={4}
                  >
                    Donate
                  </Button>
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
            align: "center",
            color: "white",
          }}
        >
          <Box>
            <Flex
              align="center"
              color={linkColor}
              justifyContent="space-between"
            >
              <Link href="/" p={8}>
                Home
              </Link>
              <Link href="/outreach" p={2} mr={3}>
                Outreach
              </Link>
              <Link href="/contact" p={2} mr={3}>
                Contact
              </Link>
              {/* Donate Button */}
              <Button bg={color} borderRadius={0} color="white" ml={4}>
                Donate
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;
