import Head from "next/head";

import Nav from "@/components/Nav";
import CampaignSection from "@/components/Sections/CampaignSection";
import GallerySection from "@/components/Sections/GallerySection";

import styles from "../styles/Outreach.module.css";
import secondStyle from "../styles/Nav.module.css";
import { fetchGallery } from "../../utils/FetchGallery";

const outreach = ({ gallery }) => {
  return (
    <>
      <Head>
        <title>SUPPORTIFLY | OUTREACH</title>
        <meta
          name="description"
          content="Supportifly Humanitarian Foundation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative" id={styles.campaignContainer}>
        {/* <div className={styles.overlay}></div> */}
        <div className="">
          <Nav linkColor="black" image="/logo-dark.png" color="gray.900" />
          <CampaignSection />
        </div>
      </div>
      <GallerySection galleryData={gallery} />
    </>
  );
};

export async function getStaticProps() {
  const gallery = await fetchGallery();

  return {
    props: {
      gallery: gallery || [], // Provide a default empty array if teams data is undefined
    },
  };
}

export default outreach;
