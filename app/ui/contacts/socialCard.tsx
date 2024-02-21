import Image from "next/image"

type CardProps = {
  nom: string;
  url: string;
  source: string,
}

export default function CardSocial ({ nom, url, source }: CardProps) {
  return (
    <a href={url} target="_blank">
      <div className="flex flex-col w-40 gap-2 items-center bg-zinc-700 p-3 rounded-lg shadow-lg transition-all hover:bg-zinc-600">
        <Image src={source} width={48} height={48} unoptimized={true} alt={nom} />
        <div className="text-sm">{nom}</div>
      </div>
    </a>
  )
}