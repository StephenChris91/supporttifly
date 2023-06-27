import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Campaign/Campaign.module.css";
import { Carousel } from "flowbite-react";
import "swiper/css";
import Image from "next/image";

const CampaignSection = () => {
  return (
    <>
      <div className={styles.CampaignSection}>
        <div className={styles.CampaignContainer}>
          <h1>
            Campaign <br />
            Causes
          </h1>
          <div className={styles.sliderContainer}>
            <div id={styles.slider}>
              <Carousel>
                <Image
                  src="/images/feed-poor.png"
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="carousel-img"
                />
                <Image
                  src="/images/educare.png"
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="carousel-img"
                />
                <Image
                  src="/images/health.png"
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="carousel-img"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignSection;

// Import Swiper React components

// Import Swiper styles
