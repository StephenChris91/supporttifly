import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  try {
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      data,
      process.env.NEXT_PUBLIC_EMAIL_USER_ID // Replace with your User ID
    );
    alert(data);
    console.log("Email sent successfully!", response);
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Problem submitting email");
  }
};
