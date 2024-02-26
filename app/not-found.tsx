import Link from "next/link";

export default function NotFound () {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col p-2 md:px-24 md:py-12 gap-10 text-white">
      <div className="text-2xl">Erreur 404 | Page introuvable</div>
      <Link href="/" className="hover:underline">{'>'} Retourner à l&apos;accueil</Link>
    </div>
  )
}