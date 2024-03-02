import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Thomas Paysac",
};

export default function Page () {
  return (
    <div className="flex min-h-[calc(100svh-80px)] flex-col p-4 py-10 md:px-24 md:py-12 gap-2 text-white">
      <h1 className="text-4xl tracking-wide font-semibold">Blog</h1>
      <div>Cette page est vide {'('}pour le moment{')'}.</div>
    </div>
  )
};