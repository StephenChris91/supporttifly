import { fetchTeam } from "../../../utils/FetchTeam";
import styles from "../../styles/Team/Team.module.css";




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
  try {
    const teams = await fetchTeam();
    console.log(teams); // Verify the value of teams
    return {
      props: {
        teams,
      },
    };
  } catch (error) {
    console.error('Error fetching teams:', error);
    return {
      props: {
        teams: [], // Provide an empty array or appropriate default value in case of error
      },
    };
  }
};


