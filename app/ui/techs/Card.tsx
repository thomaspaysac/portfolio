import Image from "next/image";

type CardProps = {
  source: string;
  caption: string;
}

export default function Card ({ source, caption }: CardProps) {
  return (
    <div className="flex flex-col shrink-0 items-center gap-1.5 w-16">
      <Image src={source} width={48} height={48} unoptimized={true} alt={caption} />
      <div className="text-sm"><code>{caption}</code></div>
    </div>
  )
}