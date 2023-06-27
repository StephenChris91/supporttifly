import DonationForm from "../components/Sections/DonationForm";
import Nav from "@/components/Nav";

const donation = () => {
  return (
    <>
      <Nav linkColor="black" image="/logo-dark.png" color="gray.900" />
      <DonationForm />
    </>
  );
};

export default donation;
