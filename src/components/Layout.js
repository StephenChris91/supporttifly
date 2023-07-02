import FooterSection from "./Sections/FooterSection";
import { ToastContainer } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <FooterSection />
      <ToastContainer />
    </main>
  );
};

export default Layout;
