import Nav from "@/components/Nav"
import CampaignSection from "@/components/Sections/CampaignSection"

import styles from '../styles/Outreach.module.css'
import secondStyle from '../styles/Nav.module.css'






const outreach = () => {
    return (
        <div className="relative" id={styles.campaignContainer}>
            <div className={styles.overlay}></div>
            <div className="">
                <Nav image='/logo-dark.png' btnColor='bg-gray-900'/>
                <CampaignSection />
            </div>
        </div>
    )
}

export default outreach