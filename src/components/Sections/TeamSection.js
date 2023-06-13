import { sanityClient } from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Container, useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import styles from "../../styles/Team/Team.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

//import team data
import { team } from "../../data/team";

const TeamSection = ({ teamData }) => {
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
            {team &&
              team.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.teams}>
                    <Image
                      width={400}
                      height={400}
                      src={member.image}
                      alt={member.name}
                    />
                    <div className={styles.teamsDetails}>
                      <h2 className={styles.teamsName}>{member.name}</h2>
                      <p>{member.title}</p>
                      <h3>{member.position}</h3>
                      <div className="flex items-start mt-20 space-around text-gray-500">
                        {member.socialMediaIcons &&
                          member.socialMediaIcons.map((icon, iconIndex) => {
                            let socialMediaIcon;
                            if (icon.includes("instagram.com")) {
                              socialMediaIcon = FaInstagram;
                            } else if (icon.includes("facebook.com")) {
                              socialMediaIcon = FaFacebook;
                            } else if (icon.includes("twitter.com")) {
                              socialMediaIcon = FaTwitter;
                            } else {
                              socialMediaIcon = null;
                            }

                            const IconComponent = socialMediaIcon;
                            return (
                              <Box
                                as={IconComponent}
                                key={iconIndex}
                                bg="gray.800"
                                padding={1}
                                color="gray.200"
                                fontSize="36px"
                                marginTop="10px"
                                marginRight="10px"
                                cursor="pointer"
                                _hover={{ color: "blue.100" }}
                                onClick={() => window.open(icon, "_blank")}
                              />
                            );
                          })}
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
        {team &&
          team.map((member, index) => (
            <div key={index} className={styles.teams}>
              <Image
                width={400}
                height={400}
                src={member.image}
                alt={member.name}
              />
              <div className={styles.teamsDetails}>
                <h2 className={styles.teamsName}>{member.name}</h2>
                <p>{member.title}</p>
                <h3>{member.position}</h3>
                <div className="flex items-start mt-20 space-around text-gray-500">
                  {member.socialMediaIcons &&
                    member.socialMediaIcons.map((icon, iconIndex) => {
                      let socialMediaIcon;
                      if (icon.includes("instagram.com")) {
                        socialMediaIcon = FaInstagram;
                      } else if (icon.includes("facebook.com")) {
                        socialMediaIcon = FaFacebook;
                      } else if (icon.includes("twitter.com")) {
                        socialMediaIcon = FaTwitter;
                      } else {
                        socialMediaIcon = null;
                      }

                      const IconComponent = socialMediaIcon;
                      return (
                        <Box
                          as={IconComponent}
                          key={iconIndex}
                          bg="gray.800"
                          padding={1}
                          color="gray.200"
                          fontSize="34px"
                          marginTop="10px"
                          marginRight="10px"
                          cursor="pointer"
                          _hover={{ color: "blue.700" }}
                          onClick={() => window.open(icon, "_blank")}
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
