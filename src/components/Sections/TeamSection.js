import { sanityClient } from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Container, useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import styles from "../../styles/Team/Team.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

const TeamSection = ({ teamData }) => {
  // console.log(teamData);

  // const { socialMediaIcons } = teamData;
  // console.log(socialMediaIcons)

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const getImageUrl = (imageRef) => {
    const builder = imageUrlBuilder(sanityClient);
    const imageUrl = builder.image(imageRef).url();
    return imageUrl;
  };

  if (isMobile) {
    return (
      <section id={styles.teams}>
        <h2 className={styles.teamsHeader}>Our Team</h2>
        <Container maxW="container.xl">
          <Swiper slidesPerView={1} navigation spaceBetween={20}>
            {teamData &&
              teamData.map((team) => (
                <SwiperSlide key={team._id}>
                  <div className={styles.teams}>
                    <Image
                      width={400}
                      height={400}
                      src={getImageUrl(team.image.asset._ref)}
                      alt={team.name}
                    />
                    <div className={styles.teamsDetails}>
                      <h2 className={styles.teamsName}>{team.name}</h2>
                      <p>{team.title}</p>
                      <h3>{team.position}</h3>
                      <div className="flex items-start mt-20 space-around text-gray-500">
                        {team.socialMediaIcons
                          ? team.socialMediaIcons.map((icon) => {
                              console.log(icon.link);
                              let socialMediaIcon;
                              if (icon.link.includes("instagram.com")) {
                                socialMediaIcon = FaInstagram;
                              } else if (icon.link.includes("facebook.com")) {
                                socialMediaIcon = FaFacebook;
                              } else if (icon.link.includes("twitter.com")) {
                                socialMediaIcon = FaTwitter;
                              } else {
                                // Default icon or handle unrecognized social media types
                                socialMediaIcon = null; // You can set a default icon or handle unrecognized types
                              }

                              // Wrap the icon with an anchor tag to make it clickable
                              const IconComponent = socialMediaIcon;
                              return (
                                <Box
                                  as={IconComponent}
                                  key={icon.link}
                                  bg="gray.800"
                                  padding={1}
                                  color="gray.200" // Set the color using Chakra UI color values
                                  fontSize="34px" // Set the font size using Chakra UI size values
                                  marginTop="10px"
                                  marginRight="10px"
                                  cursor="pointer" // Add cursor pointer to indicate it's clickable
                                  _hover={{ color: "blue.700" }} // Apply hover color using Chakra UI color values
                                  onClick={() =>
                                    window.open(icon.link, "_blank")
                                  }
                                />
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </Container>
      </section>
    );
  }

  return (
    <section id={styles.teams}>
      <h2 className={styles.teamsHeader}>Our Team</h2>
      <SimpleGrid columns={3} spacing={1}>
        {teamData &&
          teamData.map((team) => (
            <div key={team._id} className={styles.teams}>
              <Image
                width={400}
                height={400}
                src={getImageUrl(team.image.asset._ref)}
                alt={team.name}
              />
              <div className={styles.teamsDetails}>
                <h2 className={styles.teamsName}>{team.name}</h2>
                <p>{team.title}</p>
                <h3>{team.position}</h3>
                <div className="flex items-start mt-20 space-around text-gray-500">
                  {team.socialMediaIcons &&
                    team.socialMediaIcons.map((icon) => {
                      console.log(icon.link);
                      let socialMediaIcon;
                      if (icon.link.includes("instagram.com")) {
                        socialMediaIcon = FaInstagram;
                      } else if (icon.link.includes("facebook.com")) {
                        socialMediaIcon = FaFacebook;
                      } else if (icon.link.includes("twitter.com")) {
                        socialMediaIcon = FaTwitter;
                      } else {
                        // Default icon or handle unrecognized social media types
                        socialMediaIcon = null; // You can set a default icon or handle unrecognized types
                      }

                      // Wrap the icon with an anchor tag to make it clickable
                      const IconComponent = socialMediaIcon;
                      return (
                        <Box
                          as={IconComponent}
                          key={icon.link}
                          bg="gray.800"
                          padding={1}
                          color="gray.200" // Set the color using Chakra UI color values
                          fontSize="34px" // Set the font size using Chakra UI size values
                          marginTop="10px"
                          marginRight="10px"
                          cursor="pointer" // Add cursor pointer to indicate it's clickable
                          _hover={{ color: "blue.700" }} // Apply hover color using Chakra UI color values
                          onClick={() => window.open(icon.link, "_blank")}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
      </SimpleGrid>
    </section>
  );
};

export default TeamSection;
