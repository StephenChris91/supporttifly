import Nav from "@/components/Nav"
import CampaignSection from "@/components/Sections/CampaignSection"
import GallerySection from "@/components/Sections/GallerySection"

import styles from '../styles/Outreach.module.css'
import secondStyle from '../styles/Nav.module.css'
import { fetchGallery } from "../../utils/FetchGallery"






const outreach = ( { gallery } ) => {
    return (
        <div className="relative" id={styles.campaignContainer}>
            <div className={styles.overlay}></div>
            <div className="">
                <Nav image='/logo-dark.png' btnColor='bg-gray-900'/>
                <CampaignSection />
                <GallerySection galleryData={gallery} />
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const gallery = await fetchGallery();
  
    return {
      props: {
        gallery: gallery || [], // Provide a default empty array if teams data is undefined
      },
    };
  }

export default outreach