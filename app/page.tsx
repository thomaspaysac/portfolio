'use client';

import Image from "next/image";
import Card from "./ui/techs/Card";
import { techs_frontend, techs_backend } from "./lib/data";
import { montserrat } from "./lib/fonts";

export default function Home() {
  return (
    <div className="homepage flex min-h-[calc(100vh-80px-36px)] flex-col p-4 py-10 md:px-24 md:py-12 gap-2 md:gap-10 text-white">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
        <div>
          <h1 className="text-4xl md:text-6xl text-center md:text-start mb-8 ">Thomas Paysac</h1>
          <h2 className="text-3xl md:text-4xl text-center md:text-start font-bold tracking-wide my-4 ">Développeur Web Fullstack</h2>
          <div className="flex items-center justify-center md:justify-start gap-1">
            <Image src="/icons/location_icon.svg" width={24} height={24} alt="" />
            <span className="text-xl md:text-2xl">Genève</span>
          </div>
        </div>
        <div className="shrink-0">
          <Image src="/photo_perso.jpg" alt="" height={200} width={200} className="rounded-full border-4 border-indigo-500"/>
        </div>
      </div>
      <div className="tech_stacks flex flex-col md:flex-row justify-around gap-10 my-10">
        <div className="tech-card backdrop-blur p-4 rounded-lg shadow-lg">
          <h3 className="mb-3"><code>Développement Frontend{'>'}</code></h3>
          <div className="flex flex-wrap gap-4">
            {
              techs_frontend.map((tech) => {
                return <Card key={tech.id} source={tech.source} caption={tech.caption} />
              })
            }
          </div>
        </div>
        <div className="tech-card backdrop-blur p-4 rounded-lg shadow-lg">
          <h3 className="mb-3"><code>Développement Backend | Bases de données{'>'}</code></h3>
          <div className="flex flex-wrap gap-4">
            {
              techs_backend.map((tech) => {
                return <Card key={tech.id} source={tech.source} caption={tech.caption} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
