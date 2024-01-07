"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  // baby's first server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "samanthajfisher.cs@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail as string,
    text: senderMessage as string,
  });
}