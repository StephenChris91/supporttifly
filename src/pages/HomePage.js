import HeaderOne from "@/components/HeaderOne";
import Features from "@/components/Features";
import CauseSection from "@/components/Sections/CauseSection";
import TeamSection from "@/components/Sections/TeamSection";
import ContactSection from "@/components/Sections/ContactSection";

const Homepage = ({ teamData }) => {
  return (
    <>
      <HeaderOne />
      <Features />
      <CauseSection />
      <TeamSection teamData={teamData}/>
      <ContactSection />
    </>
  );
};




export default Homepage;