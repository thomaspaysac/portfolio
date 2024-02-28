'use client';

import "../../globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { montserrat } from "@/app/lib/fonts";

const links = [
  { name: 'À propos', href: '/'},
  { name: 'Portfolio', href: '/portfolio'},
  { name: 'Blog', href: '/blog'},
];

export default function Header () {
  const pathname = usePathname();

  return (
    <header className="flex flex-col md:flex-row gap-4 md:gap-6 items-center py-4 px-10 md:px-20 bg-zinc-800 text-gray-50">
      <div className="flex w-full gap-4 justify-center md:w-fit items-center mr-auto">
        <Image src={'/header_icon.png'} width={48} height={48} unoptimized={true} alt='' />
        <h1 className="font-bold md:hidden">Thomas Paysac</h1>
      </div>
      <div className="flex w-full md:w-fit justify-between gap-6">
        {
          links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                className={clsx(
                  'nav-link w-max',
                  {
                  "active underline underline-offset-8 decoration-4 font-bold" : pathname === link.href || pathname.includes("portfolio") && link.href === '/portfolio'
                  })}
              >
                  {link.name}
              </Link>
            )
          })
        }
      </div>
      <Link href="/contacts" className="w-full md:w-fit">
        <button className="bg-indigo-500 w-full px-5 py-2 font-bold text-white rounded transition-all hover:bg-indigo-600 hover:cursor-pointer">
          Contactez-moi
        </button>
      </Link>
    </header>
  )
}