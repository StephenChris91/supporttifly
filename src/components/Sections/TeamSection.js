import { fetchTeam } from "../../../utils/FetchTeam";
import styles from "../../styles/Team/Team.module.css";


const TeamSection = ({ teamData }) => {
  console.log(teamData);
  return (
    <>
      <h1>Our Team</h1>
      {teamData.map((team) => <div key={team._id}><h1>{team.name}</h1></div>)}
    </>
  );
};



export default TeamSection;
