import { useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import { sanityClient } from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.css";

const GallerySection = ({ galleryData }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const getImageUrl = (imageRef) => {
    const builder = imageUrlBuilder(sanityClient);
    const imageUrl = builder.image(imageRef).url();
    return imageUrl;
  };

  return (
    <section id={styles.gallery}>
      <h2 className={styles.galleryHeader}>Our Gallery</h2>
      <div className={styles.galleryWrapper}>
        {isMobile ? (
          galleryData &&
          galleryData.map((gallery) => (
            <div key={gallery._id} className={styles.gallery}>
              <Image
                width={400}
                height={400}
                src={getImageUrl(gallery.image.asset._ref)}
                alt={gallery.name}
                loading="lazy"
              />
              <div className={styles.galleryDetails}>
                <h2 className={styles.galleryTitle}>{gallery.title}</h2>
                <h3>{gallery.excerpt}</h3>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.galleryWrapper}>
            <SimpleGrid columns={3} spacing={2}>
              {galleryData &&
                galleryData.map((gallery) => (
                  <div key={gallery._id} className={styles.gallery}>
                    <Image
                      width={400}
                      height={400}
                      src={getImageUrl(gallery.image.asset._ref)}
                      alt={gallery.name}
                      loading="lazy"
                    />
                    <div className={styles.galleryDetails}>
                      <h2 className={styles.galleryTitle}>{gallery.title}</h2>
                      <h3>{gallery.excerpt}</h3>
                    </div>
                  </div>
                ))}
            </SimpleGrid>
          </div>
        )}
      </div>
      {/* <Button
        className={[
          'bg-red-700 text-lg text-bold m-auto text-center',
          styles.galleryBtn, // Add slide-in and slide-out classes based on isMenuOpen state
        ].join(' ')}
      >
        Donate
      </Button> */}
    </section>
  );
};

export default GallerySection;
