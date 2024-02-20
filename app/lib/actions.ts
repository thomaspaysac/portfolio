'use server';

import { Resend } from "resend";

export type Message = {
  nom: string,
  message: string
}

export async function sendEmail(formData: FormData) {
  const data = {
    nom: formData.get("nom"),
    message: formData.get("message")
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(formData: FormData) {
  const data = {
    nom: formData.get("nom"),
    message: formData.get("message")
  };
  
  resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'paysac.thomas@gmail.com',
      subject: 'Hello world',
      html: `<p>Message de : ${data.nom}</p> <p>Message : ${data.message}</p>`
    });
}
