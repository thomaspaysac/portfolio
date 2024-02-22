'use client';

import { useState } from "react";
import Image from "next/image"

type Props = {
  nom: string,
  description: string,
  screenshots: string[],
  url: string,
  odd: boolean
}

function ScreenshotsContainer ({ hover, screenshots } : { hover: boolean, screenshots: string[] }) {
  return (
    <>
      <Image className={`project-screenshot_main absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-contain rounded shadow-lg transition-opacity duration-700 ${hover ? 'opacity-0' : 'opacity-1'}`}
        src={screenshots[0]} width={800} height={800} unoptimized={true} alt=""
      />
      <div className={`absolute flex w-full h-full skew-y-2 justify-center align-center transition-opacity duration-700 ${hover ? 'opacity-1' : 'opacity-0'}`}>
      {
        screenshots.slice(1).reverse().map((el, i) => {
          const offset = screenshots.length;
          return (
            <Image 
              className={`absolute object-cover -translate-y-1/2 -translate-x-1/2 outline outline-1 rounded outline-black`} key={i} src={el} width={150} height={150} unoptimized={true} alt=""
              style={{top: `${50+i*4-offset*1.5}%`, left:`${50+i*12-offset*4.5}%`}}   
            />
          )
        })
      }
      </div>
    </>
  )
}

export default function ProjectCard ({ nom, description, screenshots, url, odd } : Props) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`project-card flex ${odd? 'flex-row' : 'flex-row-reverse'} gap-8 justify-center border-2 h-[600px] rounded-lg`}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div className="project-info w-1/3 self-center">
        <h2 className="text-4xl mb-4">{nom}</h2>
        <div className="text-lg mb-4">{description}</div>
        <div>{url}</div>
      </div>
      <div className="project-screenshots relative w-2/3">
        <ScreenshotsContainer hover={hover} screenshots={screenshots} />
      </div>
    </div>
  )
}