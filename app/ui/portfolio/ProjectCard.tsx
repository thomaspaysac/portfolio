'use client';

import { useState } from "react";
import Image from "next/image"

type Props = {
  nom: string,
  description: string,
  screenshots: string[],
  url: string
}

function ScreenshotsContainer ({ hover, screenshots } : { hover: boolean, screenshots: string[] }) {
  if (!hover) {
    return (
      <div className="h-[32rem]">
        <Image className="project-screenshot_main relative" src={screenshots[0]} width={200} height={200} unoptimized={true} alt="" />
      </div>
    )
  } else {
    return (
      <div className={`project-screenshots relative h-[32rem]`}>
        {
          screenshots.slice(1).map((el, i) => {
            return (
              <div key={i} 
                className={`screenshot absolute skew-y-6 outline outline-zinc-900`}
                style={{zIndex : i, top: `${i*24}px`, left: `${i*64}px`}}  
              >
                <Image src={el} width={150} height={150} unoptimized={true} alt="" />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default function ProjectCard ({ nom, description, screenshots, url } : Props) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="project-card border-2 rounded-lg"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div>
        <div>{nom}</div>
        <div>{description}</div>
        <div>{url}</div>
      </div>
      <div>
        <ScreenshotsContainer hover={hover} screenshots={screenshots} />
      </div>
    </div>
  )
}