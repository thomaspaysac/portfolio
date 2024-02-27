import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Thomas Paysac",
};

export default function Page () {
  return (
    <div className="flex min-h-screen flex-col p-2 md:px-24 md:py-12 gap-10 text-white">
      <h1 className="text-4xl tracking-wide font-semibold">Blog</h1>
    </div>
  )
};