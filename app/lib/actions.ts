'use server';

import { Resend } from "resend";

export type Message = {
  nom: string,
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const data = {
    nom: formData.get("nom"),
    message: formData.get("message")
  };
  try {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'paysac.thomas@gmail.com',
      subject: 'Portfolio: nouveau message',
      html: `<p>Message de : ${data.nom}</p> <p>Message : ${data.message}</p>`
    });
    return {status: 200, message: "Ok"};
  } catch {
    return {status: 500, message: "Error"};
  }
}
