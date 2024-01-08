"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contactFormEmail";

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

  try {
    resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "samanthajfisher.cs@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: ContactFormEmail({
        senderMessage: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}
