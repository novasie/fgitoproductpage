import { Resend } from "resend";
import { EMAIL_TYPE } from "../constant";

const apiKey = "re_BopaBVtP_58fsZHT1ZE4XPmP6My4Nxk5R";
const revEmail = "connect@novaise.com";
export const emailSender = async (emailFor = EMAIL_TYPE.BULK_ORDER, data) => {
  const resend = new Resend(apiKey);
  // Send admin notification email
  const adminResponse = await resend.emails.send({
    from: "Fgito <onboarding@resend.dev>",
    to: data.email,
    subject: data.subject,
    html:
      emailFor === EMAIL_TYPE.BULK_ORDER
        ? bulkEmailTemplate(data)
        : homeChefEmailTemplate(data),
  });

  console.log("Admin email sent:", adminResponse);
};
