import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styles from "../styles/Features/Features.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// Icons
import { FaHeart, FaHandshake, FaPrescriptionBottleAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const Features = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)"); // Check if it's a mobile screen

  if (isMobile) {
    return (
      <section className={`${styles.featuresDiv} ${styles.featuresBoxes}`}>
        <Swiper
          slidesPerView={1}
          navigation
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <Box className={`${styles.featuresBox} ${styles.featuresBox1}`}>
              <FaHeart />
              <p>We are the love where affection is needed</p>
            </Box>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Box className={`${styles.featuresBox} ${styles.featuresBox2}`}>
              <FaPrescriptionBottleAlt />
              <p>We are the medicine in an ailing world</p>
            </Box>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <Box className={`${styles.featuresBox} ${styles.featuresBox3}`}>
              <FaHandshake />
              <p>We are the support where assistance is needed</p>
            </Box>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <Box className={`${styles.featuresBox} ${styles.featuresBox4}`}>
              <HiUserGroup />
              <p>
                We are an army of individuals from all walks of life committed
                to seeing a better world.
              </p>
            </Box>
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }

  return (
    <section className={`${styles.featuresDiv} ${styles.featuresBoxes}`}>
      <div className={styles.featuresWrapper}>
        <div className={`${styles.featuresBox} ${styles.featuresBox1}`}>
          <FaHeart />
          <p>We are the love where affection is needed</p>
        </div>
        <div className={`${styles.featuresBox} ${styles.featuresBox2}`}>
          <FaPrescriptionBottleAlt />
          <p>We are the medicine in an ailing world</p>
        </div>
        <div className={`${styles.featuresBox} ${styles.featuresBox3}`}>
          <FaHandshake />
          <p>We are the support where assistance is needed</p>
        </div>
        <div className={`${styles.featuresBox} ${styles.featuresBox4}`}>
          <HiUserGroup />
          <p>
            We are an army of individuals from all walks of life committed to
            seeing a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
