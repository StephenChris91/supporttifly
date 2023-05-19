import HeaderOne from "@/components/HeaderOne";
import Features from "@/components/Features";
import CauseSection from "@/components/Sections/CauseSection";
import TeamSection from "@/components/Sections/TeamSection";

const HomePage = ({ teamData }) => {
  return (
    <>
      <HeaderOne />
      <Features />
      <CauseSection />
      <TeamSection teamData={teamData}/>
    </>
  );
};




export default HomePage;