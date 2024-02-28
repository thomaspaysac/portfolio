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
    <header className="flex gap-6 items-center py-4 px-20 bg-zinc-800 text-gray-50">
      <Image src={'/header_icon.png'} width={48} height={48} unoptimized={true} alt='' className="mr-auto" />
      {
        links.map((link, i) => {
          return (
            <Link 
              key={i} 
              href={link.href}
              className={clsx(
                'nav-link',
                {
                "active underline underline-offset-8 decoration-4 font-bold" : pathname === link.href || pathname.includes("portfolio") && link.href === '/portfolio'
              })}
            >
                {link.name}
            </Link>
          )
        })
      }
      <Link href="/contacts">
        <button className="bg-indigo-500 px-5 py-2 font-bold text-white rounded transition-all hover:bg-indigo-600 hover:cursor-pointer">
          Contactez-moi
        </button>
      </Link>
    </header>
  )
}