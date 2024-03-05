'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string,
  nom: string,
  description: string,
  screenshots: string[],
  url: string,
  odd: boolean
}

function ScreenshotsContainer ({ hover, screenshots } : { hover: boolean, screenshots: string[] }) {
  return (
    <>
      <Image className={`project-screenshot_main md:absolute top-1/2 left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 object-contain shadow-2xl rounded md:rounded-lg md:border-[#E5E5E5] md:border-2 md:border-t-[24px] transition-opacity duration-700 ${hover ? 'md:opacity-0' : 'opacity-1'}`}
        src={screenshots[0]} width={800} height={800} unoptimized={true} alt=""
      />
      <div className={`absolute hidden md:flex w-full h-full skew-y-2 justify-center align-center transition-opacity duration-700 ${hover ? 'md:opacity-1' : 'opacity-0'}`}>
      {
        screenshots.slice(1).reverse().map((el, i) => {
          const offset = screenshots.length;
          if (el.includes("mobile")) {
            return (
              <Image 
                className={`absolute object-cover -translate-y-1/2 -translate-x-1/2 rounded shadow-md md:rounded-lg md:border-[#222222] border-4 md:border-y-[16px]`} key={i} src={el} width={150} height={150} unoptimized={true} alt=""
                style={{top: `${50+i*4-offset*1.5}%`, left:`${50+i*12-offset*4.5}%`}}   
              />
            )  
          } else {
            return (
              <Image 
                className={`absolute object-cover -translate-y-1/2 -translate-x-1/2 rounded shadow-md md:rounded-lg md:border-[#E5E5E5] md:border-2 md:border-t-[16px]`} key={i} src={el} width={300} height={300} unoptimized={true} alt=""
                style={{top: `${50+i*4-offset*2}%`, left:`${50+i*12-offset*4.5}%`}}   
              />
            )  
          }
        })
      }
      </div>
    </>
  )
}

export default function ProjectCard ({ id, nom, description, screenshots, url, odd } : Props) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`project-card flex flex-col-reverse ${odd? 'md:flex-row' : 'md:flex-row-reverse'} gap-2 md:gap-8 justify-center text-lg md:h-[38vw] rounded-lg`}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div className="project-info w-full md:w-1/3 self-center">
        <h2 className="text-2xl md:text-4xl md:mb-4 font-semibold tracking-wide">{nom}</h2>
        <div className="text-lg mb-4">{description}</div>
        <div className="project-links flex justify-between md:justify-start gap-2">
          <Link href={`/portfolio/${id}`}>
            <button className="bg-indigo-500 px-5 py-2 text-white rounded transition-all hover:bg-indigo-600">
              Voir les détails
            </button>
          </Link>
          <a href={url} target="_blank">
              <button className="bg-emerald-500 flex items-center gap-2 px-5 py-2 text-white rounded transition-all hover:bg-emerald-600">
                <Image src="/icons/external-link.png" height={16} width={16} alt="" unoptimized={true} />
                Visiter le site
              </button>
          </a>
        </div>
      </div>
      <div className="project-screenshots md:relative md:w-2/3">
        <ScreenshotsContainer hover={hover} screenshots={screenshots} />
      </div>
    </div>
  )
}