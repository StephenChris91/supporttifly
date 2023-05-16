import styles from "../../styles/Team/Team.module.css";

import { fetchTeam } from "../../../utils/FetchTeam";


const TeamSection = ({ teams }) => {

  console.log(teams);
  return ( 
    <>
      <h1>Our Team</h1>
    </>
   );
}
 
export default TeamSection;


//Backend Code
export const getServerSideProps = async () => {

  const teams = await fetchTeam()
  return {
    props: {
      teams,
    }
  }
}

