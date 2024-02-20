import { sendEmail } from "@/app/lib/actions";
import { POST } from "@/app/lib/actions";

export default function Form () {
  return (
    <form action={POST}>
      <h2 className="text-xl"><label htmlFor="message">Contactez-moi par email</label></h2>
      <label htmlFor="nom">Votre nom</label>
      <input type="text" id="nom" name="nom" className="bg-zinc-300 text-black p-2 rounded-lg" maxLength={50} required></input>
      <textarea id="message" name="message" rows={10} minLength={5} maxLength={1000} required className="w-full bg-zinc-300 text-black p-2 rounded-lg"></textarea>
      <button className="bg-indigo-500 p-2 rounded-lg transition-colors hover:bg-indigo-600">Envoyer</button>
    </form>
  )
}
