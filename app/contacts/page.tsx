import Form from "../ui/contacts/form"
import CardSocial from "../ui/contacts/socialCard";
import { social_links } from "../lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts | Thomas Paysac",
};

export default function Page () {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col p-4 py-10 md:px-24 md:py-12 gap-10 text-white">
      <h1 className="text-4xl tracking-wide font-semibold">Contacts</h1>
      <div>
        <h2 className="text-2xl mb-4">Réseaux</h2>
        <div className="flex justify-around md:gap-8 md:justify-start">
          {
            social_links.map((el) => {
              return (
                <CardSocial key={el.id} nom={el.nom} url={el.url} source={el.image} />
              )
            })
          }
        </div>
      </div>
      <div>
        <h2 className="text-2xl mb-4"><label htmlFor="message">Contactez-moi par email</label></h2>
        <Form />
      </div>
    </div>
  )
};