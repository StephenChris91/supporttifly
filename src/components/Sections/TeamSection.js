import { sanityClient } from '../../../sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SimpleGrid, Box, Container, Center } from '@chakra-ui/react'
import Image from 'next/image'



import styles from "../../styles/Team/Team.module.css";

const TeamSection = ({ teamData }) => {
  console.log(teamData);

  const getImageUrl = (imageRef) => {
    const builder = imageUrlBuilder(sanityClient);
    const imageUrl = builder.image(imageRef).url();
    return imageUrl;
  };
  
  return (
    <section id={styles.teams}>
      <h2 className={styles.teamsHeader}>Our Team</h2>
      <div className={styles.teamsWrapper}>
      <SimpleGrid columns={3} spacing={2}>
      {teamData &&
        teamData.map((team) => (
          <div key={team._id} className={styles.teams}>
            <Image width={400} height={400} src={getImageUrl(team.image.asset._ref)} alt={team.name} />
            <div className={styles.teamsDetails}>
                <h2 className={styles.teamsName}>{team.name}</h2>
                <p>{team.title}</p>
                <h3>{team.position}</h3>              
            </div>
          </div>
        ))}
        </SimpleGrid>
      </div>
      
    </section>
  );
};

export default TeamSection;
