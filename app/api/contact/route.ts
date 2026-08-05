import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types";
import {
  contactNotificationEmail,
  contactConfirmationEmail,
} from "@/emails";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();

    // Send email to admin
    const adminMail = contactNotificationEmail(body);

    await sendMail({
      to: "gurumahesh478@gmail.com",
      subject: adminMail.subject,
      html: adminMail.html,
      text: adminMail.text,
      replyTo: body.email,
    });

    // Send confirmation email to customer
    const customerMail = contactConfirmationEmail(body);

    await sendMail({
      to: body.email,
      subject: customerMail.subject,
      html: customerMail.html,
      text: customerMail.text,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}