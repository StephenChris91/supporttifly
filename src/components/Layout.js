import HomePage from "@/pages/HomePage";
import FooterSection from "./Sections/FooterSection";

const Layout = ({ children }) => {
    return ( 
        <main>
            {children}
            <FooterSection />
        </main>
     );
}
 
export default Layout;