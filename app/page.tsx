'use client';

import Image from "next/image";
import Card from "./ui/techs/Card";
import { techs_frontend, techs_backend } from "./lib/data";

export default function Home() {
  return (
    <div className="homepage flex min-h-screen flex-col p-2 md:p-24 gap-10 text-white">
      <div>
        <h1 className="text-6xl mb-8">Thomas Paysac</h1>
        <h2 className="text-4xl font-bold my-4">Développeur Web Fullstack</h2>
        <div className="flex items-center gap-1">
          <Image src="/icons/location_icon.svg" width={24} height={24} alt="" />
          <span className="text-2xl">Genève</span>
        </div>
      </div>
      <div className="tech_stacks flex flex-col md:flex-row justify-between gap-10 my-10">
        <div>
          <h3 className="mb-3"><code>Développement Frontend></code></h3>
          <div className="flex gap-4">
            {
              techs_frontend.map((tech) => {
                return <Card key={tech.id} source={tech.source} caption={tech.caption} />
              })
            }
          </div>
        </div>
        <div>
          <h3 className="mb-3"><code>Développement Backend | Bases de données></code></h3>
          <div className="flex gap-4">
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
