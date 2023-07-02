import Head from "next/head";

import HeaderOne from "@/components/HeaderOne";
import Features from "@/components/Features";
import CauseSection from "@/components/Sections/CauseSection";
import TeamSection from "@/components/Sections/TeamSection";
import ContactSection from "@/components/Sections/ContactSection";
import AboutSection from "@/components/Sections/AboutSection";

const Homepage = ({ teamData }) => {
  return (
    <>
      <Head>
        <title>SUPPORTIFLY | HOME</title>
        <meta
          name="description"
          content="Supportifly Humanitarian Foundation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderOne
        linkColor="white"
        bg="/headerOneBg.png"
        component={<AboutSection />}
      />
      <Features />
      <CauseSection />
      <TeamSection teamData={teamData} />
      <ContactSection />
    </>
  );
};

export default Homepage;
