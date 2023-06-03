// pages/DonationForm.js
import { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

const DonationForm = () => {
  const [amount, setAmount] = useState('');

  const config = {
    reference: new Date().getTime().toString(),
    email: 'example@example.com', // Set the donor's email
    amount: amount * 100, // Paystack amount is in kobo (multiply by 100 to convert to Naira)
    publicKey: 'YOUR_PUBLIC_KEY', // Replace with your Paystack public key
  };

  const onSuccess = (reference) => {
    // Handle successful payment
    console.log(reference);
  };

  const onClose = () => {
    // Handle payment cancellation
    console.log('Payment closed');
  };

  const { initializePayment } = usePaystackPayment(config);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the amount
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    // Initialize payment when the form is submitted
    initializePayment(onSuccess, onClose);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Donation Amount" />
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
