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
    const req = await resend.emails.send({
      from: 'Portfolio <portfolio@resend.dev>',
      to: 'paysac.thomas@gmail.com',
      subject: 'Nouveau message',
      html: `<p>Message de : ${data.nom}</p> <p>Message : ${data.message}</p>`
    });
    return {status: 200, message: "Ok"};
  } catch {
    return {status: 500, message: "Error"};
  }
}
