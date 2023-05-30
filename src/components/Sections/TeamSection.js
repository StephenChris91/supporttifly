import { sanityClient } from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Container, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import styles from "../../styles/Team/Team.module.css";

const TeamSection = ({ teamData }) => {
  console.log(teamData);

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
      <div className={styles.teamsWrapper}>
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
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TeamSection;
