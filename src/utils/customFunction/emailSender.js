import { EMAIL_TYPE } from "../constant";

export const emailSender = async (emailFor = EMAIL_TYPE.BULK_ORDER, data) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailFor, data }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    console.log("Email sent:", result);
}
  catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};
