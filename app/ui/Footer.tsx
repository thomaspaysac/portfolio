import Image from "next/image";
import Link from "next/link";

export default function Footer () {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-1 md:gap-4 py-2 px-10 md:px-20 bg-zinc-800 text-zinc-200 text-sm">
      <div>Développé avec Next.js et Tailwind CSS</div>
      <div className="md:ml-auto">&copy; 2024 Thomas Paysac</div>
      <div className="flex gap-4">
        <Link href="https://github.com/thomaspaysac" target="_blank">
          <Image src={"/icons/github_footer.png"} alt="github" height={20} width={20} className="transition-transform hover:scale-110" />
        </Link>
        <Link href="https://www.linkedin.com/in/thomas-paysac-5a2713254/" target="_blank">
          <Image src={"/icons/linkedin_footer.png"} alt="linkedin" height={20} width={20} className="transition-transform hover:scale-110"/>
        </Link>
      </div>
    </footer>
  )
}