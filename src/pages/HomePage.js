import HeaderOne from "@/components/HeaderOne";
import Features from "@/components/Features";
import CauseSection from "@/components/Sections/CauseSection";
import TeamSection from "@/components/Sections/TeamSection";

const HomePage = ({ teams }) => {
  return (
    <>
      <HeaderOne />
      <Features />
      <CauseSection />
      <TeamSection teamData={teams}/>
    </>
  );
};


export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/getTeam");
  const { teams } = await response.json();
  console.log(teams)

  return {
    props: {
      teams: teams || [], // Provide a default empty array if teams data is undefined
    },
  };
}

export default HomePage;