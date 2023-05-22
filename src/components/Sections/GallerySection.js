import { sanityClient } from '../../../sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SimpleGrid } from '@chakra-ui/react';

import Image from 'next/image'
import styles from "../../styles/Team/Team.module.css";




const GallerySection = ({ galleryData }) => {
  console.log(galleryData);

  const getImageUrl = (imageRef) => {
    const builder = imageUrlBuilder(sanityClient);
    const imageUrl = builder.image(imageRef).url();
    return imageUrl;
  };
  
  return (
    <section id={styles.teams}>
      <h2 className={styles.teamsHeader}>Our Gallery</h2>
      <div className={styles.teamsWrapper}>
      <SimpleGrid columns={3} spacing={2}>
      {galleryData &&
        galleryData.map((gallery) => (
          <div key={gallery._id} className={styles.teams}>
            <Image width={400} height={400} src={getImageUrl(gallery.image.asset._ref)} alt={gallery.name} />
            <div className={styles.teamsDetails}>
                <p>{gallery.title}</p>
                <h3>{gallery.excerpt}</h3>              
            </div>
          </div>
        ))}
        </SimpleGrid>
      </div>
      
    </section>
  );
};

export default GallerySection;
