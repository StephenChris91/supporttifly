import { sanityClient } from '../../../sanity';
import imageUrlBuilder from '@sanity/image-url';

import styles from "../../styles/Team/Team.module.css";

const TeamSection = ({ teamData }) => {
  console.log(teamData);


  const getImageUrl = (imageRef) => {
    const builder = imageUrlBuilder(sanityClient);
    const imageUrl = builder.image(imageRef).url();
    return imageUrl;
  };
  
  return (
    <div>
      <h2>Our Team</h2>
      {teamData &&
        teamData.map((team) => (
          <div key={team._id}>
            <img src={getImageUrl(team.image.asset._ref)} alt={team.name} />
            <h3>{team.name}</h3>
            <p>{team.position}</p>
          </div>
        ))}
    </div>
  );
};

export default TeamSection;
