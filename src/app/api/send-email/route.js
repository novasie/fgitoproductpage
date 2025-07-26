
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bulkEmailTemplateAdmin } from "@/utils/template/bulkOrderEmail";
import { EMAIL_TYPE } from "@/utils/constant";
import { homeChefRegistrationEmailTemplateAdmin } from "@/utils/template/homechefRegistractionEmail";

const resend = new Resend("re_BopaBVtP_58fsZHT1ZE4XPmP6My4Nxk5R");

// Handle CORS preflight request
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Change to your domain for production
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { emailFor, data } = body;

    const response = await resend.emails.send({
      from: "Fgito <onboarding@fgito.in>",
      to: "connect@novasie.com",
      subject: data.subject || "New Order Notification",
      html:
        emailFor === EMAIL_TYPE.BULK_ORDER
          ? bulkEmailTemplateAdmin(data)
          : homeChefRegistrationEmailTemplateAdmin(data),
    });

    return NextResponse.json({ success: true, data: response }, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Change to your domain for production
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Change to your domain for production
      },
    });
  }
}
