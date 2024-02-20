'use client';

import { sendEmail } from "@/app/lib/actions";
import { useRef, useState } from "react";

export default function Form () {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form 
      ref={ref}
      action={ async (formData) => {
        const res = await sendEmail(formData);
        if (res.status !== 200) {
          setError(true);
        } else {
          ref.current?.reset();
          setError(false);
          setMessageSent(true);
        }
      }}
    >
      <h2 className="text-xl mb-4"><label htmlFor="message">Contactez-moi par email</label></h2>
      <div className="mb-4">
        <label htmlFor="nom" className="mr-2">Votre nom :</label>
        <input type="text" id="nom" name="nom" className="bg-zinc-300 text-black p-2 rounded-lg" maxLength={50} required></input>
      </div>
      <div className="mb-2">
        <label htmlFor="message">Votre message :</label>
        <textarea id="message" name="message" rows={10} minLength={5} maxLength={1000} required className="w-full bg-zinc-300 text-black p-2 mt-2 rounded-lg"></textarea>
      </div>
      <div className={error ? "block bg-red-500 p-2 mb-2 rounded-lg w-fit transition-all" : "hidden"}>Une erreur est survenue, veuillez réessayer.</div>
      <button className="bg-indigo-500 p-2 rounded-lg transition-colors hover:bg-indigo-600">Envoyer</button>
      <div className={messageSent ? 'inline w-fit p-3 ml-4 rounded-lg bg-emerald-500 transition-all' : 'hidden'}>Votre message a bien été envoyé.</div>
    </form>
  )
}
