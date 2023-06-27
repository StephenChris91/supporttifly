// pages/DonationForm.js
import { useState } from "react";
// import { usePaystackPayment } from "react-paystack";
import { PaystackButton } from "react-paystack";

//styles
import styles from "../../styles/Donation/Donation.module.css";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email: email, // Set the donor's email
    amount: amount * 100, // Paystack amount is in kobo (multiply by 100 to convert to Naira)
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_LIVE_KEY, // Replace with your Paystack public key
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    setAmount("");
    setEmail("");
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    setAmount("");
    setEmail("");
    console.log("closed");
  };

  // const { initializePayment } = usePaystackPayment(config);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the amount
    if (!amount || amount <= 0 || email === "") {
      alert("Please enter a valid amount.");
      return;
    }

    // Initialize payment when the form is submitted
  };

  const componentProps = {
    ...config,
    text: "Donate Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className={styles.donationForm}>
      <h1 className={styles.donationHeader}>Make A Donation</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Donation Amount"
          className={styles.donationInput}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please provide your email"
          className={styles.donationInput}
        />
      </div>

      <PaystackButton {...componentProps} />
    </div>
  );
};

export default DonationForm;
