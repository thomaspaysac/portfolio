import Form from "../ui/contacts/form"

export default function Page () {
  return (
    <div className="flex min-h-screen flex-col p-2 md:p-24 gap-10 text-white">
      <h1 className="text-4xl">Contacts</h1>
      <h2 className="text-xl">Réseaux</h2>
      <Form />
    </div>
  )
};